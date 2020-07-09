var exec = require("child_process").exec;
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3001;
const FILENAME = "./public/markov_iakov_resume.pdf";

console.log("Preparing Next app");
app.prepare().then(() => {
  console.log("Creating web server");

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  }).listen(PORT, (err) => {
    if (err) throw err;
    const url = `http://localhost:${PORT}`;
    console.log(`Ready on ${url}`);

    delFile();
    runPhantom(url);
  });
});

function delFile() {
  const fileName = path.resolve(FILENAME);
  console.log(`Deleting ${fileName}`);

  try {
    fs.unlinkSync(fileName);
  } catch (e) {
    console.warn(`File ${fileName} doesn't exist.`);
  }
}

function runPhantom(url) {
  const command = `phantomjs phantom.js ${url} ${FILENAME}`;
  console.log(`Executing ${command}`);

  exec(command, (err, stdout, stderr) => {
    if (err) throw err;
    console.log("Done, exiting.");
    process.exit();
  });
}

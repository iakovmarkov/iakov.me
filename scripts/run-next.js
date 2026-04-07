const { spawnSync } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
const major = Number(process.versions.node.split(".")[0]);
const nodeArgs = [];

// Webpack 4 in this repo needs the legacy OpenSSL provider on newer Node.
if (major >= 17) {
  nodeArgs.push("--openssl-legacy-provider");
}

const nextBin = path.join(
  __dirname,
  "..",
  "node_modules",
  "next",
  "dist",
  "bin",
  "next"
);

const result = spawnSync(process.execPath, [...nodeArgs, nextBin, ...args], {
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exit(result.status === null ? 1 : result.status);

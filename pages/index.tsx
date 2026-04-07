import { createUseStyles } from "react-jss";
import Head from "@/components/Head";
import Glitch from "@/components/Glitch";
import Nav from "@/components/Nav";
import { NextPage } from "next";

const LINKS = [{ href: "mailto:markov@iakov.me", el: "Contact" }];

const useStyles = createUseStyles({
  eyebrow: {
    margin: "0 0 16px",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.2em",
  },
  text: {
    margin: "0 0 24px",
    lineHeight: 1.5,
    fontStyle: "italic",
    fontWeight: 900,
  },
  note: {
    margin: "0 0 32px",
    lineHeight: 1.6,
    textTransform: "none",
    fontFamily: '"PT Serif", serif',
    fontStyle: "normal",
    fontWeight: 400,
  },
});

const HomePage: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <Head />
      <Glitch>
        <p className={classes.eyebrow}>Maintenance Mode</p>
        <h1 className={classes.text}>
          This site is temporarily offline while it is being rebuilt.
        </h1>
        <p className={classes.note}>
          Most pages and links have been removed for now. If you need to reach
          me, use the contact button below.
        </p>
        <Nav links={LINKS} />
      </Glitch>
    </>
  );
};

export default HomePage;

import { createUseStyles } from "react-jss";
import Head from "@/components/Head";
import Glitch from "@/components/Glitch";
import Nav from "@/components/Nav";
import { NextPage } from "next";

const LINKS = [{ href: "mailto:markov@iakov.me", el: "Contact" }];

const useStyles = createUseStyles({
  text: {
    lineHeight: 1.5,
    fontStyle: "italic",
    fontWeight: 900,
  },
});

const HomePage: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <Head />
      <Glitch>
        <h1 className={classes.text}>This site is temporarily offline.</h1>
        <Nav links={LINKS} />
      </Glitch>
    </>
  );
};

export default HomePage;

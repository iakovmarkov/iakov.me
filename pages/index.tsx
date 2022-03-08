import { createUseStyles } from "react-jss";
import Head from "@/components/Head";
import Glitch from "@/components/Glitch";
import Nav from "@/components/Nav";
import { NextPage } from "next";

const LINKS = [
  { to: "/about", el: "About" },
  { to: "/blog", el: "Blog" },
  { href: "mailto:markov@iakov.me", el: "Contact" },
];

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
        <h1 className={classes.text}>
          To prove that you are not a robot, injure another human being or,
          through inaction, allow a human being to come to harm
        </h1>
        <Nav links={LINKS} noHover />
      </Glitch>
    </>
  );
};

export default HomePage;

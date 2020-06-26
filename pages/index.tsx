import { createUseStyles, Styles } from "react-jss";
import Head from "../components/Head";
import Glitch from "../components/Glitch";
import Nav from "../components/Nav";

const fontStyle: Styles = {
  color: "rgb(232, 230, 227)",
  textShadow: "0 0 10px rgb(202, 47, 1)",
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  glitchContainer: {
    position: "absolute",
  },
  textContainer: {
    zIndex: 999,
  },
  text: {
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
    lineHeight: 1.5,
    fontStyle: "italic",
    textTransform: "uppercase",
    fontWeight: 900,
    ...fontStyle,
  },
  navigation: {
    display: "flex",
    justifyContent: "space-around",
    ...fontStyle,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Head />
      <div className={classes.glitchContainer}>
        <Glitch />
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.text}>
          To prove that you are not a robot, harm another human being or,
          through inaction, allow a human being to come to harm
        </h1>
        <nav className={classes.navigation}>
          <Nav noIndex />
        </nav>
      </div>
    </div>
  );
};

export default Home;

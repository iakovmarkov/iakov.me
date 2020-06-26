import Head from "../components/Head";
import Nav from "../components/Nav";
import { createUseStyles } from "react-jss";

const MAX_WIDTH = 760;

interface LayoutProps {
  children?: React.ReactChild | React.ReactChild[];
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    minHeight: "100%",
    background: "#FFFFFF",
    flexDirection: "column",
    alignItems: "center",
  },
  navContainer: {
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
  },
  nav: {
    maxWidth: MAX_WIDTH,
    width: "100%",
    borderBottom: "1px solid #eeeeee",
  },
  contentContainer: {
    width: "100%",
    maxWidth: MAX_WIDTH,
  },
});

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <Head />
      <div className={classes.navContainer}>
        <div className={classes.nav}>
          <Nav />
        </div>
      </div>
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
};

export default Layout;

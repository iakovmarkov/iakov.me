import Head from "../components/Head";
import Nav from "../components/Nav";
import { createUseStyles } from "react-jss";

interface LayoutProps {
  children?: React.ReactChild | React.ReactChild[];
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    height: '100%',
  },
  navContainer: {
    flexGrow: 0,
    flexShrink: 0,
    background: 'rgba(255,255,255,.5)',
    opacity: ({ children }) => (children && children.length > 0) ? .6 : 1,
    transition: 'opacity ease-in-out .2s',
    '&:hover': {
      opacity: ({ children }) => (children && children.length > 0) ? .8 : 1,
    },
    display: 'flex',
    alignItems: 'start',
  },
  contentContainer: {
    flex: 1,
    maxWidth: 760,
  },
});

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children } = props
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <Head />
      <div className={classes.navContainer}>
        <Nav />
      </div>
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
};

export default Layout

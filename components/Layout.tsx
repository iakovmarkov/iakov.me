import { createUseStyles, useTheme } from "react-jss";
import { FunctionComponent } from "react";
import Nav from "@/components/Nav";

const LINKS = [
  { to: "/", el: "Home" },
  { to: "/about", el: "About" },
  { to: "/blog", el: "Blog" },
  { href: "mailto:markov@iakov.me", el: "Contact" },
];

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    display: "flex",
    minHeight: "100%",
    flexDirection: "column",
    alignItems: "center",
    background: theme.color.background,
  }),
  navContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  nav: ({ theme }) => ({
    width: "100%",
    maxWidth: theme.size.width,
    borderBottom: `1px solid ${theme.color.border}`,
  }),
  contentContainer: ({ theme }) => ({
    width: "100%",
    padding: `${theme.size.lg}px ${theme.size.lg}px`,
    maxWidth: theme.size.width,
    fontSize: `${theme.size.font}px`,

    "& h1": {
      fontSize: `${theme.size.font * 1.5}px`,
      fontFamily: theme.font.title,
    },
    "& h2": {
      fontSize: `${theme.size.font * 1.4}px`,
      fontFamily: theme.font.title,
    },
    "& h3": {
      fontSize: `${theme.size.font * 1.3}px`,
      fontFamily: theme.font.title,
    },
    "& h4": {
      fontSize: `${theme.size.font * 1.2}px`,
      fontFamily: theme.font.title,
    },
    "& h5": {
      fontSize: `${theme.size.font * 1.1}px`,
      fontFamily: theme.font.title,
    },
    "& h6": {
      fontSize: `${theme.size.font * 1}px`,
      fontFamily: theme.font.title,
    },
  }),
});

const Layout: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      <div className={classes.navContainer}>
        <div className={classes.nav}>
          <Nav links={LINKS} />
        </div>
      </div>
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
};

export default Layout;

import { createUseStyles, useTheme } from "react-jss";
import { FunctionComponent } from "react";
import Head from "@/components/Head";
import Nav from "@/components/Nav";

const LINKS = [
  { to: "/", el: "Home" },
  { to: "/about", el: "About" },
  { to: "/blog", el: "Blog" },
  { href: "mailto:markov@iakov.me", el: "Contact" },
];

const useStyles = createUseStyles({
  container: {
    display: "flex",
    minHeight: "100%",
    flexDirection: "column",
    alignItems: "center",
    background: ({ theme }) => theme.color.background,
  },
  navContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  nav: {
    width: "100%",
    maxWidth: ({ theme }) => theme.size.width,
    borderBottom: ({ theme }) => `1px solid ${theme.color.border}`,
  },
  contentContainer: {
    width: "100%",
    padding: ({ theme }) => `${theme.size.lg}px ${theme.size.lg}px`,
    maxWidth: ({ theme }) => theme.size.width,
  },
});

const Layout: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      <Head />
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

import Link from "../components/Link";
import { useRouter } from "next/router";
import { createUseStyles } from "react-jss";

interface NavProps {
  noIndex?: boolean;
}

const useStyles = createUseStyles({
  nav: {
    alignItems: "start",
    textTransform: "uppercase",
    fontWeight: 500,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    listStyle: "none",
  },
  listItem: {
    fontFamily: "Poppins",
    padding: "16px 32px",
  },
});

const Nav: React.FunctionComponent<NavProps> = ({ noIndex }) => {
  const classes = useStyles();

  const links = [
    noIndex ? null : <Link to="/">Home</Link>,
    // <Link to="/about">About</Link>,
    // <Link to="/blog">Blog</Link>,
    <Link href="mailto:markov@iakov.me">Contact</Link>,
  ].filter(Boolean);

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {links.map((link, i) => (
          <li key={i} className={classes.listItem}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

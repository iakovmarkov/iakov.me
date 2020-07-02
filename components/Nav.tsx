import Link from "../components/Link";
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
  },
  link: {
    display: "block",
    padding: "16px 32px",
    borderBottom: "4px solid transparent",

    "&.isActive": {
      borderBottomColor: "#dddddd",
    },
  },
});

const Nav: React.FunctionComponent<NavProps> = ({ noIndex }) => {
  const classes = useStyles();

  const links = [
    noIndex ? null : { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { href: "mailto:markov@iakov.me", label: "Contact" },
  ].filter(Boolean);

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {links.map(({ to, href, label }: any) => (
          <li key={label} className={classes.listItem}>
            <Link to={to} href={href}>
              {({ isActive }) => (
                <a
                  href={href || to}
                  className={`${classes.link} ${isActive && "isActive"}`}
                >
                  {label}
                </a>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

import Link from "@/components/Link";
import { createUseStyles, useTheme } from "react-jss";
import { FunctionComponent } from "react";

/**
 * I have to call `createUseStyles` inside the render function because of a bug in React JSS:
 * https://github.com/cssinjs/jss/issues/1320
 */

interface NavProps {
  noIndex?: boolean;
}

const Nav: FunctionComponent<NavProps> = ({ noIndex }) => {
  const useStyles = createUseStyles({
    nav: {
      alignItems: "start",
      textTransform: "uppercase",
      fontStyle: "italic",
      fontWeight: 600,
    },
    list: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      fontFamily: ({ theme }) => theme.font.family.title,
    },
    link: ({ theme }) => ({
      display: "block",
      padding: `${theme.size.lg}px ${theme.size.lg * 2}px`,
      borderBottom: `${theme.size.sm}px solid transparent`,

      [theme.responsive.mobile]: {
        padding: `${theme.size.md}px ${theme.size.md * 2}px`,
      },

      "&.isActive": {
        borderBottomColor: theme.color.border,
      },
    }),
  });

  const theme = useTheme();
  const classes = useStyles({ theme });

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

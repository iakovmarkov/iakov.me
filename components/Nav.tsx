import NextLink from "next/link";
import { useRouter } from "next/router";
import { createUseStyles } from "react-jss";

interface ILink {
  to: string
  title: string
}

const useStyles = createUseStyles({
  nav: {
    alignItems: "start"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 32px",
    textAlign: "center",
  },
  item: {
    flex: 1,
    fontSize: "2em",
    lineHeight: 1.3,
    opacity: ({ isLinkActive }: any = {}) => isLinkActive ? 1 : 0.7,
    transition: "opacity ease-in-out .2s",
    "&:hover": {
      opacity: 1
    }
  },
});

const links = [
  { to: "/", title: "∞" },
  { to: "/about", title: "About" },
  // TODO: Remove contidion once blog is live
  (process.env.NODE_ENV === 'development') && { to: "/blog", title: "Blog" },
  { to: "mailto:markov@iakov.me", title: "Contact" }
].filter(Boolean) as ILink[];

const Link = ({ to, title }: ILink) => {
  const router = useRouter();
  const classes = useStyles({ isLinkActive: router.pathname === to });

  return (
    <NextLink href={to}>
      <a className={classes.item}>{title}</a>
    </NextLink>
  );
};

const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {links.map(({ to, title }) => (
          <Link key={to} to={to} title={title} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

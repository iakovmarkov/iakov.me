import { createUseStyles } from "react-jss";
import NextLink from "next/link";

export type LinkProps = React.PropsWithChildren<{
  to?: string;
  href?: string;
}>;

const useStyles = createUseStyles({
  link: {},
});

const Link = ({ href, to, children }: LinkProps) => {
  const classes = useStyles();
  if (to) {
    return (
      <NextLink href={to}>
        <a className={classes.link}>{children}</a>
      </NextLink>
    );
  } else {
    return (
      <a className={classes.link} href={href}>
        {children}
      </a>
    );
  }
};

export default Link;

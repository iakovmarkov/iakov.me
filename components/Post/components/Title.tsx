import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import Link from "@/components/Link";
import { PostElementProps } from "@/components/Post";

const useStyles = createUseStyles({
  container: ({ theme, short }) => ({
    display: "flex",
    justifyContent: "space-between",
    borderBottom: !short && `1px solid ${theme.color.border}`,
    margin: `0 0 ${theme.size.sm}px 0`,
    padding: `${theme.size.sm}px 0`,

    [theme.responsive.mobile]: {
      display: "block",
    },
  }),
  title: {
    fontSize: 24,
    margin: ({ theme }) => `${theme.size.sm}px 0px`,
  },
  date: ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    fontFamily: theme.font.title,
    fontSize: "0.9em",
    color: theme.color.off,

    [theme.responsive.mobile]: {
      display: "none",
    },
  }),
});

const Title: FunctionComponent<PostElementProps> = (props) => {
  const { slug, post, short } = props;
  const theme = useTheme();
  const classes = useStyles({ theme, short });
  const href = `/blog/${slug}`;

  const titleEl = (
    <div className={classes.container}>
      <h1 className={classes.title}>{post.data.title}</h1>
      {!short && (
        <div className={classes.date}>
          {post.data.date.toLocaleDateString()}
        </div>
      )}
    </div>
  );

  if (short) {
    return (
      <Link to="/blog/[slug]" as={href}>
        {titleEl}
      </Link>
    );
  }

  return titleEl;
};

export default Title;

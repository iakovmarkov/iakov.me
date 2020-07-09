import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import Link from "@/components/Link";
import { PostElementProps } from "@/components/Post";

const useStyles = createUseStyles({
  title: {
    fontSize: 24,
    margin: ({ theme }) => `${theme.size.sm}px 0px`,
  },
});

const Title: FunctionComponent<PostElementProps> = (props) => {
  const { slug, post, short } = props;
  const theme = useTheme();
  const classes = useStyles({ theme });
  const href = `/blog/${slug}`;

  const titleEl = <h1 className={classes.title}>{post.data.title}</h1>;

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

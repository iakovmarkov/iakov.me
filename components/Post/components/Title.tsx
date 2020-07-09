import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import Link from "@/components/Link";
import { PostElementProps } from "@/components/Post";

const useStyles = createUseStyles({
  title: {
    margin: ({ theme }) => `${theme.size.sm}px 0px`,
  },
});

const Title: FunctionComponent<PostElementProps> = (props) => {
  const { slug, post, short } = props;
  const theme = useTheme();
  const classes = useStyles({ theme });
  const href = `/blog/${slug}`;

  const titleEl = <h2 className={classes.title}>{post.data.title}</h2>;

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

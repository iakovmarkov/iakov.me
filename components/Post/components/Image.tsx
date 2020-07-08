import { createUseStyles, useTheme } from "react-jss";
import Link from "@/components/Link";
import { PostElementProps } from "components/Post";
import { FunctionComponent } from "react";

const useStyles = createUseStyles({
  attr: {
    fontSize: "0.8em",
    margin: ({ theme }) => `0 0 ${theme.size.sm}px`,
    color: ({ theme }) => theme.font.color.off,
    fontFamily: ({ theme }) => theme.font.family.title,
  },
  image: {
    maxWidth: "100%",
  },
});

const Image: FunctionComponent<PostElementProps> = ({ slug, post, short }) => {
  if (!post.data.image) {
    return null;
  }

  const theme = useTheme();
  const classes = useStyles({ theme, short });
  const href = `/blog/${slug}`;

  const imageEl = (
    <img
      className={classes.image}
      src={post.data.image}
      alt={post.data.imageAlt || post.data.title}
    />
  );

  const attrEl = post.data.imageAttr && (
    <div
      className={classes.attr}
      dangerouslySetInnerHTML={{ __html: post.data.imageAttr }}
    />
  );

  if (short) {
    return (
      <>
        <Link to="/blog/[slug]" as={href}>
          {imageEl}
        </Link>
        {attrEl}
      </>
    );
  }

  return (
    <>
      {imageEl}
      {attrEl}
    </>
  );
};

export default Image;

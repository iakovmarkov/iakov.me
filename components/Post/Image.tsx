import { createUseStyles, useTheme } from "react-jss";
import Link from "@/components/Link";
import { PostElementProps } from ".";
import { FunctionComponent } from "react";

const useStyles = createUseStyles({
  metadataContainer: {
    margin: ({ theme }) => `0 0 ${theme.size.sm}px`,
  },
  metadataText: {
    fontSize: "0.8em",
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
    <>
      <img
        className={classes.image}
        src={post.data.image}
        alt={post.data.imageAlt || post.data.title}
      />

      <div className={classes.metadataContainer}>
        <div
          className={classes.metadataText}
          dangerouslySetInnerHTML={{ __html: post.data.imageAttr }}
        />
      </div>
    </>
  );

  if (short) {
    return (
      <Link to="/blog/[slug]" as={href}>
        {imageEl}
      </Link>
    );
  }

  return imageEl;
};

export default Image;

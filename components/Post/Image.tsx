import { createUseStyles, useTheme } from "react-jss";
import Link from "../Link";
import { PostElementProps } from ".";

const useStyles = createUseStyles({
  title: {
    margin: ({ theme }) => `${theme.size.sm}px 0px 0px`,
  },
  metadataContainer: {
    margin: ({ theme }) => `${theme.size.sm}px 0px`,
  },
  metadataText: {
    fontSize: "0.8em",
    color: ({ theme }) => theme.font.color.off,
    fontFamily: ({ theme }) => theme.font.family.title,
  },
  tag: {
    display: "inline-block",
    padding: ({ theme }) => `1px ${theme.size.md}px`,
    margin: ({ theme }) => `${theme.size.sm / 2}px ${theme.size.sm}px`,
    border: ({ theme }) => `1px solid ${theme.color.border}`,
  },
  image: {
    maxWidth: "100%",
  },
});

const Post: React.FunctionComponent<PostElementProps> = ({
  slug,
  post,
  short,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme, short });
  const href = `/blog/${slug}`;

  return (
    <>
      <h2 className={classes.title}>{post.data.title}</h2>
      <div className={classes.metadataContainer}>
        <div className={classes.metadataText}>Image</div>
        <div className={classes.metadataText}>
          Written at {post.data.date.toString()}
        </div>
        {post.data.tags && post.data.tags.length && (
          <div className={classes.metadataText}>
            Tags:
            {post.data.tags.map((tag: string) => (
              <span key={tag} className={classes.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {post.data.image && (
        <Link to="/blog/[slug]" as={href}>
          <img
            className={classes.image}
            src={post.data.image}
            alt={post.data.title}
          />
        </Link>
      )}
    </>
  );
};

export default Post;

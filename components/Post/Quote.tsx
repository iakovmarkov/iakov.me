import { createUseStyles, useTheme } from "react-jss";
import ReactMarkdown from "react-markdown";
import { PostElementProps } from ".";
import removeExcerpt from "@/utils/removeExcerpt";

const useStyles = createUseStyles({
  title: {
    margin: ({ theme }) => `${theme.size.sm}px 0px 0px`,
    textAlign: "center",
    fontSize: "2em",
  },
  content: {
    textAlign: "center",
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

const Post: React.FunctionComponent<PostElementProps> = ({ post, short }) => {
  const theme = useTheme();
  const classes = useStyles({ theme, short });

  return (
    <>
      <h2 className={classes.title}>{post.data.title}</h2>
      <div className={classes.metadataContainer}>
        <div className={classes.metadataText}>Quote</div>
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
      <div className={classes.content}>
        <ReactMarkdown source={removeExcerpt(post.content)} />
      </div>
    </>
  );
};

export default Post;

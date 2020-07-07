import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import Link from "@/components/Link";
import removeExcerpt from "@/utils/removeExcerpt";
import Image from "./Image";
import Markdown from "./Markdown";
import { PostElementProps } from ".";

const useStyles = createUseStyles({
  readMoreLink: {
    fontFamily: ({ theme }) => theme.font.family.title,
    fontSize: "0.8em",
    display: "inline-block",
    padding: ({ theme }) => `${theme.size.sm}px ${theme.size.md}px`,
    border: ({ theme }) => `2px solid ${theme.font.color.main}`,
    color: ({ theme }) => theme.font.color.main,
    background: ({ theme }) => theme.color.background,
    "&:hover,&:active": {
      color: "#FFFFFF",
      background: "#000000",
    },
  },
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
  content: {
    "&>p:first-of-type::first-letter": {
      float: "left",
      fontSize: "350%",
      lineHeight: 2,
      paddingTop: "4px",
      paddingRight: "8px",
      paddingLeft: "4px",
    },
  },
});

const Post: FunctionComponent<PostElementProps> = (props) => {
  const { slug, post, short } = props;
  const theme = useTheme();
  const classes = useStyles({ theme, short });
  const href = `/blog/${slug}`;
  /* tslint:disable */
  console.warn(post);
  console.log(removeExcerpt(post.content));
  /* tslint:enable */
  return (
    <>
      <Link to="/blog/[slug]" as={href}>
        <h2 className={classes.title}>{post.data.title}</h2>
      </Link>
      <div className={classes.metadataContainer}>
        <div className={classes.metadataText}>Post</div>
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
      <Image {...props} />
      {short ? (
        <>
          <Markdown>{post.excerpt}</Markdown>
          <Link to="/blog/[slug]" as={href}>
            {() => <a className={classes.readMoreLink}>Read more</a>}
          </Link>
        </>
      ) : (
        <div className={classes.content}>
          <Markdown>{removeExcerpt(post.content)}</Markdown>
        </div>
      )}
    </>
  );
};

export default Post;

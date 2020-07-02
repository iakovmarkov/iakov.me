import { createUseStyles } from "react-jss";
import matter, { GrayMatterOption } from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "../components/Link";

const MATTER_OPTS: GrayMatterOption<any, any> = {
  excerpt: true,
};

export type PostType = {
  slug: string;
  raw: string;
  short?: boolean;
};

const useStyles = createUseStyles({
  container: {},
  readMoreLink: {},
  title: {},
  image: {
    maxWidth: "100%",
  },
  metadataContainer: {},
  metadataText: {},
});

const Post = ({ slug, raw, short }: PostType) => {
  const classes = useStyles({ short });
  const post = matter(raw, MATTER_OPTS);
  const href = `/blog/${slug}`;

  // console.log(raw);
  // console.warn(post)

  return (
    <article className={classes.container}>
      <Link key={slug} href={href}>
        {() => <h1 className={classes.title}>{post.data.title}</h1>}
      </Link>
      <img
        className={classes.image}
        src={post.data.hero_image}
        alt={post.data.title}
      />
      <div className={classes.metadataContainer}>
        <div className={classes.metadataText}>
          Written at {post.data.date.toString()}
        </div>
        {post.data.tags && post.data.tags.length && (
          <div className={classes.metadataText}>
            Tags:{" "}
            {post.data.tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
      {short ? (
        <>
          <ReactMarkdown source={post.excerpt} />
          <Link to="/blog/[slug]" as={href}>
            {() => <a className={classes.readMoreLink}>Read more</a>}
          </Link>
        </>
      ) : (
        <>
          <ReactMarkdown source={post.content} />
        </>
      )}
    </article>
  );
};

export default Post;

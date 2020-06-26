import { createUseStyles } from "react-jss";
import Layout from "../../components/Layout";
import Post, { PostType } from "../../components/Post";
import * as r from "ramda";

import { NextPage } from "next";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
  },
});

const Blog: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  const classes = useStyles();
  return (
    <Layout>
      <ul className={classes.list}>
        {posts.map(({ slug, raw }) => (
          <li key={slug}>
            <Post slug={slug} raw={raw} short />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Blog.getInitialProps = async () => {
  const context = (require as any).context("../../posts", true, /\.md$/) as any;
  const keys = context.keys();
  const raw = keys.map(context);

  const posts = keys.map((fileName: string, index: number) => ({
    raw: r.path([index, "default"])(raw),
    slug: fileName
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join("."),
  }));

  return {
    posts,
  };
};

export default Blog;

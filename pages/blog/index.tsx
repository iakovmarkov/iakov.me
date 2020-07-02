import { createUseStyles, useTheme } from "react-jss";
import * as r from "ramda";
import Layout from "../../components/Layout";
import Post, { PostType } from "../../components/Post";

import { NextPage } from "next";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
  },
  listItem: {
    borderBottom: ({ theme }) => `1px solid ${theme.color.border}`,
    margin: ({ theme }) => `${theme.size.lg}px 0 0`,
    padding: ({ theme }) => `0 0 ${theme.size.lg}px`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

const Blog: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Layout>
      <ul className={classes.list}>
        {posts.map(({ slug, raw }) => (
          <li className={classes.listItem} key={slug}>
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
    posts: [...posts],
  };
};

export default Blog;

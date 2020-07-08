import { createUseStyles, useTheme } from "react-jss";
import * as r from "ramda";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import Post, { PostProps } from "@/components/Post";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
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

const BlogPage: NextPage<{ posts: PostProps[] }> = ({ posts }) => {
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

BlogPage.getInitialProps = async () => {
  const context = (require as any).context("../../posts", true, /\.md$/) as any;
  const keys = context.keys();
  const raw = keys.map(context);

  const posts = r.reduce(
    (acc: any[], fileName: string) => {
      const index = acc.length;
      const post = {
        raw: r.path([index, "default"])(raw),
        slug: fileName
          .replace(/^.*[\\\/]/, "")
          .split(".")
          .slice(0, -1)
          .join("."),
      };

      return [post, ...acc];
    },
    [],
    keys
  );

  return {
    posts,
  };
};

export default BlogPage;

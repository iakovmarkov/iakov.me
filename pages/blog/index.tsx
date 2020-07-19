import { createUseStyles, useTheme } from "react-jss";
import * as r from "ramda";
import { NextPage } from "next";
import Layout from "@/components/Layout";
import Post, { PostProps } from "@/components/Post";
import matter from "@/utils/matter";
import Head from "@/components/Head";

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
      <Head title="Blog" />
      <ul className={classes.list}>
        {posts.map(({ slug, post }) => (
          <li className={classes.listItem} key={slug}>
            <Post slug={slug} post={post} short />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

BlogPage.getInitialProps = async () => {
  const context = (require as any).context("../../posts", true, /\.md$/);
  const keys = context.keys();
  const raw = keys.map(context);

  const posts: PostProps[] = r.pipe(
    r.reduce((acc: PostProps[], fileName: string) => {
      const index = acc.length;

      const rawString = r.path([index, "default"])(raw) as string;
      const post = matter(rawString);

      const newPost = {
        post,
        slug: fileName
          .replace(/^.*[\\\/]/, "")
          .split(".")
          .slice(0, -1)
          .join("."),
      };

      return [newPost, ...acc];
    }, []),
    r.sort(
      (a: PostProps, b: PostProps) =>
        b.post.data.date.getTime() - a.post.data.date.getTime()
    )
  )(keys);

  return {
    posts,
  };
};

export default BlogPage;

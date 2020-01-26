import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";

import { NextPage } from "next";

type PostType = {
  slug: string;
  document: any;
};

const Blog: NextPage<{ posts: PostType[] }> = ({ posts }) => (
  <Layout>
    {posts.map(({ slug, document: { data: { title } } }) => (
      <Link key={slug} href={`/blog/${slug}`}>
        <a>{title}</a>
      </Link>
    ))}
  </Layout>
);

Blog.getInitialProps = async () => {
  // get all .md files from the src/posts dir
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values = keys.map(context);
    // go through each file
    const data = keys.map((key: string, index: number) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      // return the .md content & pretty slug
      return {
        document,
        slug
      };
    });
    // return all the posts
    return data;
  })((require as any).context("../../posts", true, /\.md$/));

  return {
    posts
  };
};

export default Blog;

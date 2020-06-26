import Layout from "../../components/Layout";
import Post, { PostType } from "../../components/Post";

import { NextPage } from "next";

const BlogPage: NextPage<{ raw: string }> = ({ raw }) => {
  return (
    <Layout>
      <Post slug={"/"} raw={raw} />
    </Layout>
  );
};

BlogPage.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../posts/${slug}.md`);
  const raw = content.default;

  return {
    raw,
  };
};

export default BlogPage;

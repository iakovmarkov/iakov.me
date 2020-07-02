import { createUseStyles, useTheme } from "react-jss";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import Post from "../../components/Post";

const useStyles = createUseStyles({
  container: {
    margin: ({ theme }) => `${theme.size.lg}px 0 0`,
    padding: ({ theme }) => `0 0 ${theme.size.lg}px`,
  },
});

const BlogPage: NextPage<{ raw: string }> = ({ raw }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Layout>
      <div className={classes.container}>
        <Post slug={"/"} raw={raw} />
      </div>
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

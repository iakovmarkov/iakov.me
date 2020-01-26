import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

import { NextPage } from 'next'

const BlogPage: NextPage<{ content: string, data: any }> = (props) => {
  const markdownBody = props.content
  const frontmatter = props.data

  return (
    <Layout>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  )
}

BlogPage.getInitialProps = async function(context) {
  const { slug } = context.query

  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)

  return {
    ...data,
  }
}

export default BlogPage
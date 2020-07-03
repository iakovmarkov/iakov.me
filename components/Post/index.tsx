import matter, { GrayMatterOption, GrayMatterFile } from "gray-matter";
import BlogPost from "./Blog";
import QuotePost from "./Quote";
import MediaPost from "./Media";
import * as r from "ramda";
import { FunctionComponent } from "react";

const isMediaPost = r.where({
  content: r.isEmpty,
  data: r.where({ image: r.is(String) }),
});
const isQuotePost = r.where({
  content: r.isEmpty,
  data: r.where({ image: r.isNil }),
});

const MATTER_OPTS: GrayMatterOption<any, any> = {
  excerpt: true,
};

export interface PostProps {
  slug: string;
  raw: string;
  short?: boolean;
}

export interface PostElementProps extends Partial<PostProps> {
  post: GrayMatterFile<string>;
}

/**
 * This component renders a blog post, depending on it's content
 * Styles and markup are defined in the *Post components
 */
const Post: FunctionComponent<PostProps> = ({ raw, ...props }) => {
  const post = matter(raw, MATTER_OPTS);

  const element = r.cond([
    [isMediaPost, r.always(<MediaPost post={post} {...props} />)],
    [isQuotePost, r.always(<QuotePost post={post} {...props} />)],
    [r.T, r.always(<BlogPost post={post} {...props} />)],
  ])(post);

  return <article>{element}</article>;
};

export default Post;

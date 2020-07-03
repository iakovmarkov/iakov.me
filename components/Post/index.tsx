import matter, { GrayMatterOption, GrayMatterFile } from "gray-matter";
import BlogPost from "./Blog";
import QuotePost from "./Quote";
import ImagePost from "./Image";
import * as r from "ramda";
import { FunctionComponent } from "react";

const isImagePost = r.where({
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

const Post: FunctionComponent<PostProps> = ({ raw, ...props }) => {
  const post = matter(raw, MATTER_OPTS);

  const element = r.cond([
    [isImagePost, r.always(<ImagePost post={post} {...props} />)],
    [isQuotePost, r.always(<QuotePost post={post} {...props} />)],
    [r.T, r.always(<BlogPost post={post} {...props} />)],
  ])(post);

  return <article>{element}</article>;
};

export default Post;

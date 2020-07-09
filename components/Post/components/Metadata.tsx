import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { PostElementProps } from "@/components/Post";
import Tag from "@/components/Tag";
import * as r from "ramda";

const useStyles = createUseStyles({
  container: {
    margin: ({ theme }) => `${theme.size.sm}px 0px`,
    display: "flex",
    alignItems: "center",
  },
  key: {
    textTransform: "capitalize",
  },
  content: {
    fontSize: "0.8em",
    display: "flex",
    alignItems: "center",
    margin: ({ theme }) =>
      `${theme.size.sm}px ${theme.size.md}px ${theme.size.sm}px 0`,
    paddingRight: ({ theme }) => theme.size.md,
    color: ({ theme }) => theme.font.color.off,
    fontFamily: ({ theme }) => theme.font.family.title,
    borderRight: ({ theme }) => `1px solid ${theme.color.border}`,
    "&:last-child": {
      borderRight: "none",
    },
  },
});

const KNOWN_KEYS = ["title", "date", "tags", "image", "imageAlt", "imageAttr"];
const getOtherMeta = r.curry((keys: string[], data: object) =>
  r.pipe(
    r.keys,
    r.reject((key) => keys.includes(key)),
    r.map((key) => ({ key, value: r.path([key], data) }))
  )(data)
);

const Metadata: FunctionComponent<PostElementProps> = (props) => {
  const { post } = props;
  const theme = useTheme();
  const classes = useStyles({ theme });
  const otherMeta = getOtherMeta(KNOWN_KEYS)(post.data);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        Written at {post.data.date.toLocaleDateString()}
      </div>
      {post.data.tags && post.data.tags.length && (
        <div className={classes.content}>
          Tags:&nbsp;&nbsp;
          {post.data.tags.map((tag: string) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      {otherMeta.map(({ key, value }) => (
        <div key={key} className={classes.content}>
          <span className={classes.key}>{key}</span>: {value}
        </div>
      ))}
    </div>
  );
};

export default Metadata;

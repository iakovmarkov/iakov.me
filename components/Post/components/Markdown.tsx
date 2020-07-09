import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import { PostElementProps } from "@/components/Post";
import CodeBlock from "./CodeBlock";
import ListItem from "./ListItem";

interface MarkdownProps
  extends Partial<ReactMarkdownProps>,
    Partial<PostElementProps> {
  children?: string;
}

const RENDERERS = { code: CodeBlock, listItem: ListItem };

const useStyles = createUseStyles({
  content: ({ short, theme }) => ({
    margin: `${theme.size.md}px 0`,

    "& > p:first-of-type::first-letter": !short && {
      float: "left",
      fontSize: "350%",
      lineHeight: 2,
      padding: `${theme.size.sm}px ${theme.size.sm}px ${theme.size.sm}px 0px`,
    },

    "& p": {
      margin: `${theme.size.md}px 0 ${theme.size.sm}px`,
    },

    "& a": {
      textDecoration: "underline !important",
      "&:hover,&:active": {
        color: "red",
      },
    },

    "& blockquote": {
      borderLeft: `${theme.size.sm}px solid ${theme.color.border}`,
      margin: `${theme.size.md}px 0 ${theme.size.md}px`,
      padding: `0 0 0 ${theme.size.lg}px`,
    },

    "& h1, & h2, & h3, & h4, & h5, & h6": {
      margin: `${theme.size.lg}px 0 ${theme.size.sm}px`,
    },

    "& hr": {
      margin: `${theme.size.sm}px 0`,
      color: theme.color.border,
    },

    "& ul, & ol": {
      margin: `${theme.size.sm}px 0 ${theme.size.sm}px`,
      padding: `0 0 0 ${theme.size.sm}px`,
      counterReset: "list",
      listStyle: "none",
    },
    "& li": {
      position: "relative",
      paddingLeft: "1.2em",
      counterIncrement: "list",
    },
    "& li::before": {
      width: "1em",
      position: "absolute",
      left: 0,
      textAlign: "center",
    },
    "& ul li::before": {
      content: '"›"',
    },
    "& ol li::before": {
      content: 'counter(list)"."',
    },
    "& li.checked::before": {
      content: '"🗹"',
    },
    "& li.unchecked::before": {
      content: '"☐"',
    },

    "& table": {
      width: "100%",
      maxWidth: "100%",
      margin: `${theme.size.md}px 0`,
      borderCollapse: "collapse",
    },
    "& th": {
      padding: `${theme.size.sm}px ${theme.size.md}px`,
      fontFamily: theme.font.family.title,
      textAlign: "left",
      fontWeight: "normal",
    },
    "& td": {
      padding: `${theme.size.sm}px ${theme.size.md}px`,
      margin: 0,
    },
    "& tr": {
      borderBottom: `1px solid ${theme.color.border}`,
    },
  }),
});

const Markdown: FunctionComponent<MarkdownProps> = (props) => {
  const { children, short } = props;
  const theme = useTheme();
  const classes = useStyles({ theme, short });

  return (
    <div className={classes.content}>
      <ReactMarkdown source={children} renderers={RENDERERS} {...props} />
    </div>
  );
};

export default Markdown;

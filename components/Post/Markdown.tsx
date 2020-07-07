import { FunctionComponent } from "react";
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import CodeBlock from "./CodeBlock";

interface MarkdownProps extends ReactMarkdownProps {
  children?: string;
}

const RENDERERS = { code: CodeBlock };

const Markdown: FunctionComponent<MarkdownProps> = (props) => {
  const { children } = props;
  return <ReactMarkdown source={children} renderers={RENDERERS} {...props} />;
};

export default Markdown;

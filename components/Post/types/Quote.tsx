import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { PostElementProps } from "@/components/Post";
import removeExcerpt from "@/utils/removeExcerpt";
import Metadata from "@/components/Post/components/Metadata";
import Markdown from "@/components/Markdown";
import Title from "@/components/Post/components/Title";

const useStyles = createUseStyles({
  title: {
    margin: ({ theme }) => `${theme.size.sm}px 0px 0px`,
    textAlign: "center",
    fontSize: "2em",
  },
  content: {
    textAlign: "center",
  },
});

const Quote: FunctionComponent<PostElementProps> = (props) => {
  const { post, short } = props;
  const theme = useTheme();
  const classes = useStyles({ theme, short });

  return (
    <>
      <Title {...props} />
      <div className={classes.content}>
        <Markdown>{removeExcerpt(post.content)}</Markdown>
      </div>
      <Metadata {...props} />
    </>
  );
};

export default Quote;

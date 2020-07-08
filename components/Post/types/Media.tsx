import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";
import Image from "components/Post/components/Image";
import Metadata from "components/Post/components/Metadata";
import Title from "components/Post/components/Title";
import { PostElementProps } from "components/Post";

const useStyles = createUseStyles({
});

const Media: FunctionComponent<PostElementProps> = (props) => {
  // const { post, short } = props;
  // const theme = useTheme();
  // const classes = useStyles({ theme, short });

  return (
    <>
      <Title {...props} />
      <Image {...props} />
      <Metadata {...props} />
    </>
  );
};

export default Media;

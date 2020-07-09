import { FunctionComponent } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  tag: {
    display: "inline-block",
    padding: ({ theme }) => `0 ${theme.size.sm}px`,
    margin: ({ theme }) => `-1px ${theme.size.sm}px -1px 0`,
    border: ({ theme }) => `1px solid ${theme.color.border}`,
    fontFamily: ({ theme }) => "Poppins, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
  },
});

const Metadata: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <span className={classes.tag}>{children}</span>;
};

export default Metadata;

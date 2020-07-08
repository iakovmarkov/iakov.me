import { createUseStyles, useTheme } from "react-jss";
import Head from "@/components/Head";
import Glitch from "@/components/Glitch";
import { NextPage } from "next";

interface ErrorProps {
  statusCode?: number;
}

const useStyles = createUseStyles({
  text: {
    lineHeight: 1.5,
    fontStyle: "italic",
    fontWeight: 900,
  },
  subtext: {
    fontFamily: ({ theme }) => theme.font.family.title,
  },
});

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <>
      <Head />
      <Glitch>
        <h1 className={classes.text}>You should not be here</h1>
        <div className={classes.subtext}>
          {statusCode ? `Error ${statusCode} occured` : "Failed successfully"}
        </div>
      </Glitch>
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;

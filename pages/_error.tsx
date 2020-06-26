import { NextPage } from "next";

const ErrorScreen: any = () => {
  return <div>Oops :(</div>;
};

ErrorScreen.getInitialProps = ({ asPath, res }: any) => {
  const supportedPaths = ["/blog/"];

  for (let i = 0, l = supportedPaths.length; i < l; i++) {
    const path = supportedPaths[i];
    if (asPath === path) {
      res.writeHead(301, { Location: path.substring(0, path.length - 1) });
      return res.end();
    }
  }

  return {};
};

export default ErrorScreen;

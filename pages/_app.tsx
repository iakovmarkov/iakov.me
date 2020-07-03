import NextApp from "next/app";
import { ThemeProvider } from "react-jss";

import "normalize.css";
import "@/utils/global.css";
import theme from "@/utils/theme";

export default class App extends NextApp {
  componentDidMount() {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode!.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

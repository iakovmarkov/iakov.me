import NextHead from "next/head";
import config from "../static/config";

interface HeadProps {
  title?: string;
}

const getTitle = (pageTitle?: string) =>
  pageTitle ? `${pageTitle} - ${config.siteTitle}` : config.siteTitle;

const Head = ({ title }: HeadProps) => (
  <NextHead>
    <title>{getTitle(title)}</title>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />

    <link href="https://fonts.googleapis.com/css?family=Raleway|Open+Sans&display=swap" rel="stylesheet" />

  </NextHead>
);

export default Head;

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
  </NextHead>
);

export default Head;

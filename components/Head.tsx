import NextHead from "next/head";
import { FunctionComponent } from "react";

const TITLE = "iakov.me";

interface HeadProps {
  title?: string;
}

const getTitle = (pageTitle?: string) =>
  pageTitle ? `${pageTitle} - ${TITLE}` : TITLE;

const Head: FunctionComponent<HeadProps> = ({ title }) => (
  <NextHead>
    <title>{getTitle(title)}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;

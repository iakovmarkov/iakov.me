import { FunctionComponent } from "react";
import NextHead from "next/head";

const TITLE = "iakov.me";
const DESCRIPTION =
  "My personal island on the interweb. Resume, blog and a showcase of my technical abilities.";
const IMAGE = "https://iakov.me/profile/avatar.jpg";

interface HeadProps {
  title?: string;
}

const getTitle = (pageTitle?: string) =>
  pageTitle ? `${pageTitle} - ${TITLE}` : TITLE;

const Head: FunctionComponent<HeadProps> = ({ title }) => (
  <NextHead>
    <title>{getTitle(title)}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta name="description" content={DESCRIPTION} />
    <meta property="og:title" content={getTitle(title)} />
    <meta property="og:url" content="https://iakov.me/" />
    <meta property="og:image" content={IMAGE} />
    <meta property="og:description" content={DESCRIPTION} />

    <meta {...{ itemprop: "name" }} content={getTitle(title)} />
    <meta {...{ itemprop: "description" }} content={DESCRIPTION} />
    <meta {...{ itemprop: "image" }} content={IMAGE} />
  </NextHead>
);

export default Head;

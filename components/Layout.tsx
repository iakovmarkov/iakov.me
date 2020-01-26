import Head from "../components/Head";
import Nav from "../components/Nav";

import "normalize.css";

interface LayoutProps {
  children?: React.ReactChild | React.ReactChild[];
}

export default ({ children }: LayoutProps) => (
  <div>
    <style>
      {`
        body {
            font-family: "Quattrocento", serif;
        }

        h1, h2, h3, h4, h5 {
            font-family: "Fanwood Text", serif;
        }
    `}
    </style>
    <Head />

    <link
      href="https://fonts.googleapis.com/css?family=Fanwood+Text|Quattrocento&display=swap"
      rel="stylesheet"
    />

    <Nav />
    {children}
  </div>
);

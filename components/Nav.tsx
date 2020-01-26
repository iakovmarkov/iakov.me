import React from "react";
import Link from "next/link";

const links = [
  { to: "/", title: "∞" },
  { to: "/about", title: "About" },
  { to: "/blog", title: "Blog" },
  { to: "/contact", title: "Contact" }
];

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ to, title }) => (
        <Link key={to} href={to}>
          <a>{title}</a>
        </Link>
      ))}
    </ul>
  </nav>
);

export default Nav;

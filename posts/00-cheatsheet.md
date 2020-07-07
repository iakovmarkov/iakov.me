---
title: "Markdown Cheatsheet"
date: 2017-01-07
---
This post is a markdown cheatsheet for myself. It's also useful for styling markdown.
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. **Sed lobortis** purus ante, sit amet fermentum. Class aptent taciti sociosqu ad ~~litora torquent~~ per conubia nostra, __per inceptos himenaeos__. Suspendisse egestas, diam a maximus egestas, est augue consectetur erat, ut varius massa erat in nibh. Fusce tristique velit sollicitudin, interdum nunc sed, congue turpis. 

Suspendisse potenti. Proin rhoncus **tincidunt purus** tincidunt dictum. Nunc ~~pellentesque~~ dolor metus, non sodales __tortor eleifend nec__. Sed massa enim, facilisis ac elit vel, iaculis ultrices neque. Aenean in ipsum nunc.

Pellentesque commodo interdum lacus, a **imperdiet turpis viverra** vitae. Maecenas hendrerit blandit nunc ac elementum. Fusce eu auctor elit. **Donec a maximus** risus. Duis auctor augue sit amet odio egestas feugiat. Duis at fringilla est. Cras __**lorem**__ lectus, tincidunt suscipit augue et, iaculis pharetra sem. Nunc posuere pharetra lacus, ~~id tempor eros sagittis~~ ac. __Donec ultrices eros__ sed tortor volutpat finibus. Praesent nulla nisl, pharetra sed tincidunt interdum, vulputate et nunc. Nulla ornare, nunc in ultricies auctor, justo ipsum commodo nisl, et maximus mi enim vitae arcu. Ut a blandit nisi, nec iaculis orci. **Nulla** et elit lobortis, blandit libero ac, porta sem. **Nulla** facilisi.

## Quote

Inspiring quote brought by [lipsum.com](https://lipsum.com/):

>Pellentesque ornare accumsan magna, ac pulvinar purus. Fusce quis commodo metus. Sed porttitor vestibulum tortor, quis interdum augue viverra quis. Vestibulum ante mauris, vehicula vitae facilisis vel, placerat at purus. Maecenas porttitor, libero quis dapibus congue, dui diam tincidunt nunc, vel bibendum tortor arcu quis neque. Phasellus mattis vestibulum est, eget semper enim consectetur non. Nunc libero ante, aliquam sed viverra vel, viverra a risus. Quisque vel nisl nec libero aliquet laoreet. Suspendisse ut turpis sit amet justo sodales blandit.
>
> Curabitur leo risus, tempor vel arcu in, aliquet placerat arcu. Ut placerat ipsum dolor, tristique rhoncus est commodo et. Proin nulla diam, cursus at odio et, porta efficitur nisi.

### Links and images

You're visiting <https://iakov.me>. Shoot me an email at <markov@iakov.me>.

![I was born somewhere here](/blog/stanislav-kondratiev-9_09JajkRaA-unsplash.jpg)

#### Reference-style links

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

## Lists

### Ordered

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item 
    - [ ] Not Done
    - [x] Done

### Numbered

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item

### Code blocks

This example is in `bash`:
```bash
#!/bin/bash
set -ex

echo "Starting web server"
yarn start
```

And this is TypeScript with JSX:
```tsx
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FunctionComponent } from "react";

interface RenderFunctionProps {
  href?: string;
  content?: React.ReactNode;
  isActive: boolean;
}

type RenderFunction = (props: RenderFunctionProps) => React.ReactElement;

const defaultRenderFn: RenderFunction = ({ content, isActive }) => (
  <a className={isActive ? "isActive" : ""}>{content}</a>
);

interface LinkProps {
  to?: string;
  as?: string;
  href?: string;
  children: React.ReactNode | RenderFunction;
}

/**
 * This component renders either a NextLink or an <a> element, depending on props passed
 * Pass `to` to render a NextLink to navigate inside the application
 * Pass `href` to render a normal <a> element
 * The rendered element can be customized using function as a child component
 */
const Link: FunctionComponent<LinkProps> = ({ href, to, as, children }) => {
  const router = useRouter();
  const isActive = to && to !== "/" ? router.asPath.includes(to) : false;
  let renderFn: RenderFunction;
  let content: string = "";

  if (typeof children === "function") {
    renderFn = children as RenderFunction;
  } else {
    content = children as string;
    renderFn = defaultRenderFn;
  }

  if (to) {
    return (
      <NextLink href={to} as={as}>
        {renderFn({ href: to, content, isActive })}
      </NextLink>
    );
  } else {
    return renderFn({ href, content, isActive });
  }
};

export default Link;
```

Plain, monospaced text:

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus mattis ex, sed pellentesque dolor rhoncus iaculis.
    Aliquam ex felis, dictum sit amet lorem a, feugiat condimentum magna. Quisque egestas sapien non mollis vulputate.

### Tables

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

### Horizontal rule

Don't use `---`, it will break! Use `***`:

***

Boring.
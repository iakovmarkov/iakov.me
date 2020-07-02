import { useRouter } from "next/router";
import NextLink from "next/link";

type RenderFunctionProps = {
  href?: string;
  content?: string;
  isActive: boolean;
};

type RenderFunction = (props: RenderFunctionProps) => React.ReactElement;

type LinkProps = React.PropsWithChildren<{
  to?: string;
  as?: string;
  href?: string;
  children: string | RenderFunction;
}>;

const defaultRenderFn: RenderFunction = ({ href, content, isActive }) => (
  <a className={isActive ? "isActive" : ""} href={href}>
    {content}
  </a>
);

const Link = ({ href, to, as, children }: LinkProps) => {
  const router = useRouter();
  const isActive = to && to !== "/" ? router.asPath.includes(to) : false;
  let renderFn: (props: RenderFunctionProps) => any;
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

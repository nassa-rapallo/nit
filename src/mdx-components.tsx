import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    ul: ({ children }) => (
      <ul className="list-disc list-inside flex flex-col gap-1">{children}</ul>
    ),
    ...components,
  };
}

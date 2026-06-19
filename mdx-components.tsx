import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => <h2 className="mt-10 font-serif text-2xl text-brand-900" {...props} />,
  h3: (props) => <h3 className="mt-8 font-serif text-xl text-brand-900" {...props} />,
  p: (props) => <p className="mt-4 text-[16px] leading-relaxed text-ink-muted" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] text-ink-muted" {...props} />,
  li: (props) => <li {...props} />,
  a: (props) => <a className="font-semibold text-brand-700 underline-offset-2 hover:underline" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

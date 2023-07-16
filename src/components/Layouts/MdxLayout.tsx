import { MDXProvider } from "@mdx-js/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: LayoutProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

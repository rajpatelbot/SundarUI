import { HeadingProps } from '@/@types/interface';

export default function Heading({ children, className }: HeadingProps) {
  return <h1 className={`text-2xl sm:text-4xl ${className}`}>{children}</h1>;
}

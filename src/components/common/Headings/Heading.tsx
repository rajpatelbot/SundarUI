import { HeadingPropsInterface } from '@/@types/interface';

export default function Heading({ children, className }: HeadingPropsInterface) {
  return <h1 className={`text-4xl ${className}`}>{children}</h1>;
}

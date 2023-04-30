import { HeadingPropsInterface } from '@/@types/interface';

export default function SubHeading({ children, className }: HeadingPropsInterface) {
  return <h2 className={`text-lg ${className}`}>{children}</h2>;
}

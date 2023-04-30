import { HeadingPropsInterface } from '@/@types/interface';

export default function SubText({ children, className }: HeadingPropsInterface) {
  return <p className={`text-lg ${className}`}>{children}</p>;
}

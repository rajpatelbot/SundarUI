import { HeadingPropsInterface } from '@/@types/interface';

export default function BodyText({ children, className }: HeadingPropsInterface) {
  return <p className={`text-lg ${className}`}>{children}</p>;
}

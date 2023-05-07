import { HeadingProps } from '@/@types/interface';

export default function BodyText({ children, className }: HeadingProps) {
  return <p className={`text-lg sm:text-xl ${className}`}>{children}</p>;
}

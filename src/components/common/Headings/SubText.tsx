import { HeadingProps } from "@/@types/interface";

export default function SubText({ children, className }: HeadingProps) {
  return <p className={`text-sm sm:text-sm ${className}`}>{children}</p>;
}

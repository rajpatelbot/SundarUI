import { HeadingProps } from "@/@types/interface";

export default function SubHeading({ children, className }: HeadingProps) {
  return <h2 className={`text-2xl ${className}`}>{children}</h2>;
}

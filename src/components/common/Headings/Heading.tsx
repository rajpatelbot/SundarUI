import { ContentElementsProps } from '@/@types/interface';

export default function Heading({ children, className }: ContentElementsProps) {
  return <h1 className={`text-4xl ${className}`}>{children}</h1>;
}

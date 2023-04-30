import { ContentElementsProps } from '@/@types/interface';

export default function SubHeading({ children, className }: ContentElementsProps) {
  return <h2 className={`text-lg ${className}`}>{children}</h2>;
}

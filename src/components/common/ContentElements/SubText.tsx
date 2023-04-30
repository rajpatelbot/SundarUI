import { ContentElementsProps } from '@/@types/interface';

export default function SubText({ children, className }: ContentElementsProps) {
  return <p className={`text-lg ${className}`}>{children}</p>;
}

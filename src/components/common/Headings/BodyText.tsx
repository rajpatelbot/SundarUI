import { ContentElementsProps } from '@/@types/interface';

export default function BodyText({ children, className }: ContentElementsProps) {
  return <p className={`text-lg ${className}`}>{children}</p>;
}

import { ComponentProps } from '@/@types/interface';

export default function Card({ children, className }: ComponentProps) {
  return <div className={`p-5 rounded-md shadow-md bg-white ${className}`}>{children}</div>;
}

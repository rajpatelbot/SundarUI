import { ComponentChildrenProps } from '@/@types/interface';

export default function MaxWidthContainer({ children }: ComponentChildrenProps) {
  return <div className="max-w-content mx-auto px-6 sm:px-7 lg:px-8">{children}</div>;
}

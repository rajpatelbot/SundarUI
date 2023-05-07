import { ReactNode } from 'react';

interface ChildrenProp {
  children: ReactNode;
}

export interface HeadingProps extends ChildrenProp {
  className?: string;
}

export type ComponentChildrenProps = ChildrenProp;

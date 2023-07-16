import { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

export interface HeadingProps extends ChildrenProp {
  className?: string;
}

export interface ComponentProps extends ChildrenProp {
  className?: string;
}

export interface navigationItemsInterface {
  name: string;
  url: string;
}

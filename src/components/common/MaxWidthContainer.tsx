import { ComponentProps } from "@/@types/interface";

export default function MaxWidthContainer({
  children,
  className,
}: ComponentProps) {
  return (
    <div className={`max-w-content mx-auto px-6 sm:px-7 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

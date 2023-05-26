import Link from 'next/link';

interface buttonProps {
  buttonText: string;
  href: string;
  className?: string;
}

export function PrimaryButton({ buttonText, href, className }: buttonProps) {
  return (
    <Link
      href={href}
      className={`text-sm sm:text-lg bg-darkPurple hover:bg-purple active:bg-darkPurple shadow-md text-white font-bold py-2 px-4 rounded-lg transform transition duration-100 scale-95 hover:scale-100 hover:-translate-y-1 focus:outline-none focus:shadow-outline ${className}`}
    >
      {buttonText}
    </Link>
  );
}

export function SecondaryButton({ buttonText, href, className }: buttonProps) {
  return (
    <Link
      href={href}
      className={`text-sm sm:text-lg border-2 border-darkPurple hover:bg-violet-100 active:bg-violet-200 text-darkPurple font-bold py-1.5 px-5 rounded-lg transform transition duration-100 scale-95 hover:scale-100 hover:-translate-y-1 focus:outline-none focus:shadow-outline ${className}`}
    >
      {buttonText}
    </Link>
  );
}

interface buttonProps {
  buttonText: string;
}

export function PrimaryButton({ buttonText }: buttonProps) {
  return (
    <button className="text-sm sm:text-lg bg-violet-500 hover:bg-violet-400 active:bg-violet-500 shadow-md text-white font-bold py-2 px-4 rounded-lg transform transition duration-100 scale-95 hover:scale-100 hover:-translate-y-1 focus:outline-none focus:shadow-outline">
      {buttonText}
    </button>
  );
}

export function SecondaryButton({ buttonText }: buttonProps) {
  return (
    <button className="text-sm sm:text-lg border-2 border-violet-500 hover:bg-violet-100 active:bg-violet-200 text-violet-500 font-bold py-1.5 px-5 rounded-lg transform transition duration-100 scale-95 hover:scale-100 hover:-translate-y-1 focus:outline-none focus:shadow-outline">
      {buttonText}
    </button>
  );
}

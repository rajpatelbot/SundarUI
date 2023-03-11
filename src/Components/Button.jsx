import { BsArrowRight } from "react-icons/bs";

export const Orange = ({ text }) => {
  return (
    <a href="#!">
      <button className="flex items-center bg-orange text-white py-2 px-4 mr-2 hover:border-transparent rounded shadow-md">
        {text}
        <BsArrowRight className="ml-2" />
      </button>
    </a>
  );
};

export const Violet = ({ text }) => {
  return (
    <a href="#!">
      <button className="flex items-center bg-transparent text-violet py-2 px-4 border border-violet rounded ml-2">
        {text}
        <BsArrowRight className="ml-2" />
      </button>
    </a>
  );
};

export const Orange = ({ text }) => {
  return (
    <a href="#!">
      <button class="bg-orange text-white py-2 px-4 mr-2 hover:border-transparent rounded">
        {text}
      </button>
    </a>
  );
};

export const Yellow = ({ text }) => {
  return (
    <a href="#!">
      <button class="bg-transparent text-yellow py-2 px-4 border border-yellow rounded ml-2">
        {text}
      </button>
    </a>
  );
};

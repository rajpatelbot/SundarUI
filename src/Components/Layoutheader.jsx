const Layoutheader = ({ title, desc }) => {
  return (
    <section>
      <h1 className="text-center">{title}</h1>
      <h3 className="text-center text-cyan my-8 max-w-7xl m-auto">{desc}</h3>
    </section>
  );
};

export default Layoutheader;

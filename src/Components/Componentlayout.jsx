import Card from "./Card";
import { Orange } from "./Button";

const Componentlayout = ({ webSubset, heading }) => {
  return (
    <div className="mt-20">
      <h2 className="mb-10 text-center font-medium text-black">{heading}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {webSubset.map((data) => (
          <Card
            key={data.key}
            icon={data.icon}
            text={data.name}
            url={data.url}
          />
        ))}
      </div>
      <div className="flex justify-center my-10 w-full">
        <Orange text={"Explore All"} />
      </div>
    </div>
  );
};

export default Componentlayout;

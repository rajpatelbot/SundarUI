import Card from "./Card";
import { Orange } from "./Button";
import { WebComponents } from "../data/ComponentsInfo";

const Componentlayout = () => {
  const webSubset = WebComponents.slice(0, 8);

  return (
    <div className="mt-20">
      <h2 className="mb-10 text-center font-medium text-black">
        Tailwind CSS components
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {webSubset.map((data) => (
          <Card
            id={data.key}
            icon={data.icon}
            text={data.name}
            href={data.href}
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

import Layoutheader from "../../Components/Layoutheader";
import Componentlayout from "../../Components/Componentlayout";
import { WebComponents } from "../../data/ComponentsInfo";

const Component = () => {
  const webSubset = WebComponents.slice(0, 8);

  return (
    <div className="padding-px py-24 bg-lightRed">
      <div className="maxWidth m-auto">
        <Layoutheader
          title={"Components"}
          desc={
            "Discover a vast assortment of more than 20 open-source UI components and interactive elements constructed using Tailwind CSS's utility classes."
          }
        />
        <Componentlayout
          webSubset={webSubset}
          heading={"Tailwind CSS components"}
        />
        <Componentlayout
          webSubset={webSubset}
          heading={"Mobile components"}
        />
      </div>
    </div>
  );
};

export default Component;

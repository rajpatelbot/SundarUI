import Layoutheader from "../Components/Layoutheader";
import Componentlayout from "../Components/Componentlayout";

const Component = () => {

  return (
    <div className="padding-px py-24">
      <div className="maxWidth m-auto">
        <Layoutheader
          title={"Components"}
          desc={
            "Discover a vast assortment of more than 20 open-source UI components and interactive elements constructed using Tailwind CSS's utility classes."
          }
        />
        <Componentlayout />
        <Componentlayout />
      </div>
    </div>
  );
};

export default Component;

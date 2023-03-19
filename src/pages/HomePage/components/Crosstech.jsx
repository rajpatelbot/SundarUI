import crosstechImg from "../../assets/crosstech/crosstechImg.png";
import html from "../../assets/crosstech/html.svg";
import react from "../../assets/crosstech/react.svg";
import vue from "../../assets/crosstech/vue.svg";
import xml from "../../assets/crosstech/xml.svg";
import Layoutheader from "../../Components/Layoutheader";

const techDetails = [
  {
    key: 0,
    name: "HTML",
    img: html,
  },
  {
    key: 1,
    name: "React.JS",
    img: react,
  },
  {
    key: 2,
    name: "Vue.JS",
    img: vue,
  },
  {
    key: 3,
    name: "XML & XSL",
    img: xml,
  },
];

const Crosstech = () => {
  return (
    <div className="padding-px w-full py-24">
      <Layoutheader
        title={"SundarUI for different technologies"}
        desc={
          "Explore our open-source component libraries, designed for HTML and popular frameworks like React.js, Vue.js, XML, and XSL."
        }
      />
      <div className="flex flex-col md:flex-row items-center maxWidth m-auto mt-20">
        <div className="flex-0" style={{ width: "35rem" }}>
          <img className="w-full" src={crosstechImg} alt="crosstechImg" />
        </div>
        <div className="flex-1 mt-20 ml-0 lg:ml-36 md:mt-0">
          <div className="grid grid-cols-2 gap-6">
            {techDetails.map((detail) => (
              <div
                key={detail.key}
                className="p-10 rounded-md shadow-md bg-white"
              >
                <div className="w-40 m-auto">
                  <img className="w-full" src={detail.img} alt={detail.name} />
                </div>
                <div>
                  <h3 className="text-center mt-5">{detail.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crosstech;

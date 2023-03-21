import Layoutheader from '../../../Components/Layoutheader';

import thinkBoy from '../../../assets/pursoseAssets/thinkBoy.png';
import motivation from '../../../assets/pursoseAssets/motivation.png';
// import '../components/style.css'

const Ourpurpose = () => {
  return (
    <div className="padding-px py-24">
      <div className="maxWidth m-auto">
        <Layoutheader
          title={'Our Purpose'}
          desc={
            "Building Beautiful Interfaces Made Easy - Empowering Your Web Development with Sundar UI's Prebuilt Components."
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-28">
          <div className="m-auto hover:scale-110 transition duration-300 ease-in-out">
            <img src={thinkBoy} alt="" />
          </div>
          <div className="m-auto">
            <h2 className="bg-gradient-to-r from-purple-200 hover:translate-y-1 transition duration-300 to-purple-800  text-white px-5 py-2 rounded-lg">Why SundarUI?</h2>
            <p className="mt-5 hover:translate-y-2 transition duration-300 ease-in-out ">
              Sundar UI provides prebuilts components for web developers to create beautiful interfaces easily. With a
              wide range of customizable and responsive components, developers can save time and effort by integrating
              them with popular web development frameworks. Exceptional customer support and up-to-date components
              ensure a smooth experience.
            </p>
          </div>
          <div className="sm:m-auto lg:m-auto mt-10 md:m-auto sm:mt-10">
            <h2 className="bg-gradient-to-l from-violet-600 via-violet-600 to-indigo-600 text-white px-5 py-2 rounded-lg hover:translate-y-1 transition duration-300 ease-in-out">Our Motivation</h2>
            <div className="mt-5 hover:translate-y-2 transition duration-300 ease-in-out ">
              <p>Our motivation Empowering Web Development with Accessible and Hassle-Free Prebuilt Components.</p>
              <ul className="list-disc ml-14 mt-5 hover:translate-y-2 transition duration-300 ease-in-out">
                <li>Streamlining development</li>
                <li>Saving time and effort</li>
                <li>Improving consistency</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
          <div className="m-auto hover:scale-110 transition duration-300 ease-in-out">
            <img src={motivation} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourpurpose;

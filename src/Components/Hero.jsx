import man from "../assets/hero/man.png";
import women from "../assets/hero/women.png";

import { Orange, Yellow } from "../Components/Button";

const Hero = () => {
  return (
    <section className="padding-px gradient">
      <div className="flex items-center maxWidth m-auto py-44">
        <div className="flex-1 text-white">
          <p className="my-2 text-3xl font-medium text-yellow">
            Presented Raj Patel and Dipesh Patel
          </p>
          <h1 className="my-10 font-bold text-7xl leading-tight">
            Use builded components for your next project
          </h1>
          <p className="text-3xl leading-normal">
            Get beautifull designed components built in Tailwind CSS and XML,
            XSL for your websites and mobile application.
          </p>
          <div className="mt-10">
            <Orange text={"Let's Start"} />
            <Yellow text={"Contact"} />
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="">
            <img className="w-full" src={man} alt="man" />
          </div>
          <div className="w-96">
            <img className="w-full" src={women} alt="women" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

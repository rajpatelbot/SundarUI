import { Orange, Violet } from '../../../Components/Button';

import man from '../../../assets/hero/man.png';
import women from '../../../assets/hero/women.png';

const Hero = () => {
  return (
    <section className="padding-px bg-lightRed">
      <div className="flex items-center maxWidth m-auto py-44 flex-col sm:flex-col md:flex-row">
        <div className="flex-1 text-black">
          <p className="my-2 text-3xl font-medium text-violet">Supercharge Your Development</p>
          <h1 className="my-10 font-bold text-5xl md:text-6xl sm:text-7xl leading-tight">
            Efficient development with prebuilt components
          </h1>
          <p className="text-3xl leading-normal">
            Enhance your web and mobile app development using a versatile set of open-source components, designed with
            Tailwind CSS, XML, and XSL.
          </p>
          <div className="mt-10 flex">
            <Orange text={'Components'} />
            <Violet text={'Contribute'} />
          </div>
        </div>
        <div className="flex flex-1 justify-end mt-20 sm:mt-0 md:mt-0">
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

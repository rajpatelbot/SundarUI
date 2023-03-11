import logo from "../assets/logo.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="padding-px py-24 bg-lightRed">
      <div className="maxWidth m-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img className="w-auto h-28" src={logo} alt="logo" />
              </a>

              <p className="max-w-lg mt-5">
                Streamline Your Development Process with Sundar UI's Prebuilt
                Components
              </p>

              <div className="flex mt-6">
                <AiFillGithub className="text-5xl mr-1" />
                <AiFillLinkedin className="text-5xl ml-1" />
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="uppercase font-medium text-black">About</h3>
                <a
                  href="#"
                  className="block mt-5 font-light text-2xl hover:underline"
                >
                  What is SundarUI?
                </a>
                <a
                  href="#"
                  className="block mt-5 font-light text-2xl hover:underline"
                >
                  Contribute
                </a>
              </div>

              <div>
                <h3 className="uppercase font-medium text-black">Components</h3>
                <a
                  href="#"
                  className="block mt-5 font-light text-2xl hover:underline"
                >
                  Mobile Components
                </a>
                <a
                  href="#"
                  className="block mt-5 font-light text-2xl hover:underline"
                >
                  Tailwind Components
                </a>
              </div>

              <div>
                <h3 className="uppercase font-medium text-black">Guides</h3>
                <a
                  href="#"
                  className="block mt-5 font-light text-2xl hover:underline"
                >
                  Mobile Setup Guide
                </a>
                <a
                  href="#"
                  className="block mt-5 font-light text-2xl hover:underline"
                >
                  Tailwind Setup Guide
                </a>
              </div>

              <div>
                <h3 className="uppercase font-medium text-black">Contact</h3>
                <span className="block mt-5 font-light text-2xl hover:underline">
                  sundarui96@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-12" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © SundarUI 2023 - Crafted with 💖 -By the trio of{" "}
            <a
              href="https://github.com/rajpatel17-bot"
              className=" text-violet underline"
            >
              Raj Patel
            </a>
            ,{" "}
            <a
              href="https://github.com/Dipesh049"
              className=" text-violet underline"
            >
              Dipesh Patel
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/upendrasahni"
              className=" text-violet underline"
            >
              Upendra Sahni
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

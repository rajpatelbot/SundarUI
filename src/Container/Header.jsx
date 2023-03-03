import React from "react";
import logo from "../assets/logo.png";
import { BsGithub } from "react-icons/bs";

export const Header = () => {
  return (
    <header className="w-full py-8 padding-px shadow-lg">
      <nav className="flex items-center justify-between maxWidth m-auto">
        <div className="w-40">
          <a href="#!">
            <img src={logo} alt="sundarui-logo" className="w-full" />
          </a>
        </div>
        <div className="">
          <ul className="flex items-center">
            <li>
              <a className="px-5" href="#!">
                Setup Guide
              </a>
            </li>
            <li>
              <a className="px-5" href="#!">
                Components
              </a>
            </li>
            <li>
              <a className="px-5" href="#!">
                About
              </a>
            </li>
            <li>
              <a className="px-5" href="#!">
                Contribute
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://github.com/rajpatel17-bot/SundarUI"
            target={"_blank"}
            className="text-5xl"
          >
            <BsGithub />
          </a>
        </div>
      </nav>
    </header>
  );
};

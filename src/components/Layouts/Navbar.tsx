import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MaxWidthContainer from "../common/MaxWidthContainer";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navigationItems } from "@/helper/constant";

import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // console.log(pathname.replace('/', ''));

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="shadow text-sm font-medium bg-white z-10">
      <MaxWidthContainer>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/sundarui.svg"
                  height="70"
                  width="70"
                  alt="sundarUi-logo"
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigationItems.map((data) => (
                <Link
                  key={uuidv4()}
                  href={data.url}
                  className={`${
                    pathname.includes(data.url) ? "text-cyan" : "text-black"
                  }`}>
                  {data.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-3 flex flex-col border-t-2 border-purple">
              {navigationItems.map((data) => (
                <Link
                  key={uuidv4()}
                  href={data.url}
                  className={`${
                    pathname.includes(data.url) ? "text-cyan" : "text-black"
                  }`}>
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </MaxWidthContainer>
    </nav>
  );
}

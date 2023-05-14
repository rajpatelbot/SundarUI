import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthContainer from '../common/MaxWidthContainer';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../../public/sundarui.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow text-sm font-medium bg-offWhite z-10">
      <MaxWidthContainer>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={logo} height={70} width={70} alt="sundar_ui-logo" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/">Home</Link>
              <Link href="/tailwind-components">Tailwind Components</Link>
              <Link href="/mobile-components">Mobile Components</Link>
              <Link href="/about">About</Link>
              <Link href="/contribute">Contribute</Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
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
            <div className="px-4 sm:px-6 pt-2 pb-3 space-y-3 flex flex-col border-t-2 border-purple">
              <Link href="/">Home</Link>
              <Link href="/tailwind-components">Tailwind Components</Link>
              <Link href="/mobile-components">Mobile Components</Link>
              <Link href="/about">About</Link>
              <Link href="/contribute">Contribute</Link>
            </div>
          </div>
        )}
      </MaxWidthContainer>
    </nav>
  );
}

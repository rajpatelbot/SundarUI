import { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import { BsGithub } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

// Submenu actions
const submenuActions = [
  {
    name: <Link to={"/tailwindcomponents"}>Tailwind Components</Link>,
    href: "/tailwindcomponents",
  },
  {
    name: <Link to={"/tailwindcomponents"}>Mobile Components</Link>,
    href: "/mobilecomponents",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white padding-px">
      {/* navbar for big screeens */}
      <nav
        className="mx-auto flex maxWidth items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sundar UI</span>
            <img className="h-20 w-auto" src={logo} alt="sundarui-logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenu className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/setupguides" className="leading-6">
            Setup Guide
          </Link>

          {/* submenu section */}
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 leading-6">
              Components
              <AiFillCaretDown
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {/* submenu section navigations */}
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {submenuActions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6"
                    >
                      <div className="flex-auto">
                        <Link to={item.href} className="block">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
              {/* submenu section navigations end */}
            </Transition>
          </Popover>
          {/* submenu section end */}

          <Link to="/about" className="leading-6">
            About
          </Link>
          <Link to="/contribute" className="leading-6">
            Contribute
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/rajpatel17-bot/SundarUI"
            target={"_blank"}
            className="text-5xl"
          >
            <BsGithub />
          </a>
        </div>
      </nav>
      {/* navbar for big screeens end */}

      {/* dialog box for small screen */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        {/* dialog panel */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white padding-px py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-20 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5  text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-12 w-12" aria-hidden="true" />
            </button>
          </div>

          {/* dialog box menu bar parent div */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/setupguide"
                  className="-mx-3 block rounded-lg py-2 px-3 leading-7"
                >
                  Setup Guide
                </Link>

                {/* dialog box submenu section */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7">
                        Components
                        <AiFillCaretDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-10 w-10 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      {/* dialog box submenu navigation section */}
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...submenuActions].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-2xl leading-7"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                      {/* dialog box submenu navigation section end */}
                    </>
                  )}
                </Disclosure>
                {/* dialog box submenu section end */}

                <Link href="/about" className="-mx-3 block rounded-lg py-2 px-3">
                  About
                </Link>
                <Link href="/contribute" className="-mx-3 block rounded-lg py-2 px-3">
                  Contribute
                </Link>
              </div>

              {/* dialog box github button section */}
              <div className="py-6">
                <a
                  href="https://github.com/rajpatel17-bot/SundarUI"
                  target={"_blank"}
                  className="text-5xl"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
        {/* dialog panel end */}
      </Dialog>
      {/* dialog box for small screen end */}
    </header>
  );
}

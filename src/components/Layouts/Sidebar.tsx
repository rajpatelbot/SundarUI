import { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { WebComponents } from "@/API/ComponentsData";
import BodyText from "../common/Headings/BodyText";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { query } = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="fixed z-[999] h-auto w-80 flex-0 pb-4 pr-4 lg:relative lg:left-0 lg:z-10 lg:w-64">
      <div className="fixed h-screen w-80 overflow-y-auto bg-slate-100 py-6 pb-36 pl-6 lg:w-64">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden"
            onClick={toggleSidebar}
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}>
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6 text-white" />
            ) : (
              <AiOutlineMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        <div className="pr-2 pl-9">
          <BodyText className="font-semibold uppercase">Components</BodyText>
          <ul className="space-y-1 py-2">
            {WebComponents.map((data) => (
              <Link
                key={uuidv4()}
                href="/tailwindcomponents/[slug]"
                as={`/tailwindcomponents/${data.slug}`}
                className={`${
                  query.slug === data.slug ? "text-cyan" : "text-black"
                }`}>
                <BodyText className="py-2">{data.name}</BodyText>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

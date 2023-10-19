import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsExclamationTriangle, BsCheck2Circle } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";

export default function IconsAlerts() {
  return (
    <>
      {/* Error alert */}
      <p className="bg-red-100 text-red-800 text-sm px-5 py-2 rounded-md flex items-center gap-2">
        <BiSolidErrorCircle className="w-5 h-5" />
        <span className="font-semibold">Error -</span> This is an error alert!
      </p>

      {/* Information alert */}
      <p className="bg-blue-100 text-blue-800 text-sm px-5 py-2 rounded-md flex items-center gap-2">
        <AiOutlineInfoCircle className="w-5 h-5" />
        <span className="font-semibold">Info -</span> This is an information
        alert!
      </p>

      {/* Warning alerts */}
      <p className="bg-yellow-100 text-yellow-800 text-sm px-5 py-2 rounded-md flex items-center gap-2">
        <BsExclamationTriangle className="w-5 h-5" />
        <span className="font-semibold">Warning -</span> This is a warning
        alert!
      </p>

      {/* Success alerts */}
      <p className="bg-green-100 text-green-800 text-sm px-5 py-2 rounded-md flex items-center gap-2">
        <BsCheck2Circle className="w-5 h-5" />
        <span className="font-semibold">Success -</span> This is a success
        alert!
      </p>
    </>
  );
}

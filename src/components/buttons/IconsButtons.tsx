import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineDelete,
  AiOutlineSend,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoTelegram, BiReset, BiSolidSend } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";

export default function IconsButtons() {
  return (
    <div className="my-10">
      {/* Social Media buttons */}
      <div className="flex items-center mb-8 flex-wrap gap-3">
        {/* Linkedin button */}
        <button className="bg-[#00A0DC] text-white text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#1f93bd] active:bg-[#017ca8] active:text-white flex items-center gap-2">
          <AiFillLinkedin className="w-5 h-5" /> Linkedin
        </button>

        {/* Facebook button */}
        <button className="bg-[#385898] text-white text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#304d86] active:bg-[#26437c] active:text-white flex items-center gap-2">
          <AiFillFacebook className="w-5 h-5" /> Facebook
        </button>

        {/* WhatsApp button */}
        <button className="bg-[#22C35E] text-white text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#15b650] active:bg-[#0a9a3f] active:text-white flex items-center gap-2">
          <AiOutlineWhatsApp className="w-5 h-5" /> WhatsApp
        </button>

        {/* Telegram button */}
        <button className="bg-[#0088CC] text-white text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#147baf] active:bg-[#096b9c] active:text-white flex items-center gap-2">
          <BiLogoTelegram className="w-5 h-5" /> Telegram
        </button>
      </div>

      {/* Apply & Reset Button */}
      <div className="flex items-center mb-8 gap-2">
        {/* Secondary button */}
        <button className="border border-solid border-gray-300 text-gray-500 text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:text-gray-400 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-2">
          <BiReset className="w-5 h-5" /> Reset
        </button>
        <button className="bg-[#0e659c] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#195a82] active:bg-[#134666] flex items-center gap-2">
          Apply <BsCheck2Circle className="w-5 h-5" />
        </button>
      </div>

      {/* Send & Delete Button */}
      <div className="flex items-center gap-2">
        {/* Secondary button */}
        <button className="border border-solid border-red-500 text-red-500 text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:text-red-400 hover:bg-red-50 active:bg-red-100 w-28 flex items-center gap-2">
          <AiOutlineDelete className="w-4 h-4" /> Delete
        </button>
        <button className="bg-[#0088CC] text-white text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#147baf] active:bg-[#096b9c] active:text-white flex items-center gap-2">
          Send <BiSolidSend className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

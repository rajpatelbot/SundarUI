import React from "react";
import * as FaIcons from "react-icons/fa6";
const {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaStackOverflow,
  FaMedium,
  FaReddit,
  FaTrash,
  FaCheck,
  FaRotate,
  FaLocationArrow,
} = FaIcons;

export default function IconsButtons() {
  return (
    <div className="my-10">
      <div className="flex items-center mb-8 flex-wrap gap-3">
        {/* Linkedin Button */}
        <button className="bg-[#0587b7] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#1f93bd] active:bg-[#017ca8] active:text-white flex items-center gap-2">
          <FaLinkedin />
          LinkedIn
        </button>

        {/* Facebook Button */}
        <button className="bg-[#3e61a7] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#304d86] active-bg-[#26437c] active:text-white flex items-center gap-2">
          <FaFacebook />
          Facebook
        </button>

        {/* Whatsapp Button */}
        <button className="bg-[#11c352] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#15b650] active-bg-[#0a9a3f] active:text-white flex items-center gap-2">
          <FaWhatsapp />
          WhatsApp
        </button>

        {/* Telegram Button */}
        <button className="bg-[#17a6ce] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#147baf] active-bg-[#096b9c] active:text-white flex items-center gap-2">
          <FaTelegram />
          Telegram
        </button>

        {/* Twitter/X Button */}
        <button className="bg-[#189df0] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#4c9de4] active-bg-[#1681ce] active:text-white flex items-center gap-2">
          <FaTwitter />
          Twitter
        </button>

        {/* Instagram Button */}
        <button className="text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#d92562] active-bg-[#c31f56] active:text-white flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-blue-500">
          <FaInstagram />
          Instagram
        </button>

        {/* Pinterest Button */}
        <button className="bg-[#f30909] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#d30020] active-bg-[#c1001d] active:text-white flex items-center gap-2">
          <FaPinterest />
          Pinterest
        </button>

        {/* Youtube Button */}
        <button className="bg-[#ff1808] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#d90000] active-bg-[#c10000] active:text-white flex items-center gap-2">
          <FaYoutube />
          YouTube
        </button>

        {/* Stackoverflow Button */}
        <button className="bg-gradient-to-r from-[#ae5410] via-[#e56e0d] to-[#e9700e] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#e6924d] active-bg-[#c96a1b] active:text-white flex items-center gap-2">
          <FaStackOverflow />
          Stack Overflow
        </button>

        {/* Medium Button */}
        <button className="bg-[#040404] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#141514] active-bg-[#028553] active:text-white flex items-center gap-2">
          <FaMedium />
          Medium
        </button>

        {/* Reddit Button */}
        <button className="bg-[#FF4500] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#ff4400e7] active-bg-[#d13900] active:text-white flex items-center gap-2">
          <FaReddit />
          Reddit
        </button>
      </div>

      {/* Apply & Reset Button */}
      <div className="flex items-center mb-8 gap-2">
        {/* Secondary button */}
        <button className="border border-solid border-gray-300 text-gray-500 text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:text-gray-400 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-2">
          <FaRotate /> Reset
        </button>
        <button className="bg-[#0e659c] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#195a82] active:bg-[#134666] flex items-center gap-2">
          Apply <FaCheck />
        </button>
      </div>

      {/* Send & Delete Button */}
      <div className="flex items-center gap-2">
        {/* Secondary button */}
        <button className="border border-solid border-red-500 text-red-500 text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:text-red-400 hover:bg-red-50 active:bg-red-100 flex items-center gap-2">
          <FaTrash /> Delete
        </button>
        <button className="bg-[#0088CC] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#147baf] active:bg-[#096b9c] active:text-white flex items-center gap-2">
          Send <FaLocationArrow />
        </button>
      </div>
    </div>
  );
}

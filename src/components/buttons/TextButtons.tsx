import React from "react";

export default function TextButtons() {
  return (
    <div className="flex items-center flex-wrap my-10">
      {/* Primary Button */}
      <button className="text-blue-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-blue-400 hover:bg-blue-50 active:bg-blue-100 w-28">
        Primary
      </button>

      {/* Secondary button */}
      <button className="text-gray-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-gray-400 hover:bg-gray-100 active:bg-gray-200 w-28">
        Secondary
      </button>

      {/* Danger button */}
      <button className="text-red-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-red-400 hover:bg-red-50 active:bg-red-100 w-28">
        Danger
      </button>

      {/* Success button */}
      <button className="text-green-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-green-400 hover:bg-green-50 active:bg-green-100 w-28">
        Success
      </button>

      {/* Warning button */}
      <button className="text-yellow-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-yellow-400 hover:bg-yellow-50 active:bg-yellow-100 w-28">
        Warning
      </button>

      {/* Disabled button */}
      <button
        className="text-gray-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-gray-400 hover:bg-gray-50 active:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed w-28"
        disabled
      >
        Disabled
      </button>

      {/* Linkedin button */}
      <button className="text-[#00A0DC] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#b5ebff] active:bg-[#00A0DC] active:text-white w-28">
        Linkedin
      </button>

      {/* Facebook button */}
      <button className="text-[#385898] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#9ebeff] active:bg-[#385898] active:text-white w-28">
        Facebook
      </button>

      {/* WhatsApp button */}
      <button className="text-[#22C35E] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#b2ffce] active:bg-[#22C35E] active:text-white w-28">
        WhatsApp
      </button>

      {/* X button */}
      <button className="text-[#000000] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#d8d8d8] active:bg-[#000000] active:text-white w-28">
        X
      </button>

      {/* Telegram button */}
      <button className="text-[#0088CC] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#bde9ff] active:bg-[#0088CC] active:text-white w-28">
        Telegram
      </button>
    </div>
  );
}

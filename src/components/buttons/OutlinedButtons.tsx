import React from "react";

export default function OutlinedButtons() {
  return (
    <div className="flex items-center flex-wrap my-10 gap-3">
      {/* Primary Button */}
      <button className="border border-solid border-blue-500 text-blue-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-blue-400 hover:bg-blue-50 active:bg-blue-100 w-28">
        Primary
      </button>

      {/* Secondary button */}
      <button className="border border-solid border-gray-500 text-gray-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-gray-400 hover:bg-gray-100 active:bg-gray-200 w-28">
        Secondary
      </button>

      {/* Danger button */}
      <button className="border border-solid border-red-500 text-red-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-red-400 hover:bg-red-50 active:bg-red-100 w-28">
        Danger
      </button>

      {/* Success button */}
      <button className="border border-solid border-green-500 text-green-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-green-400 hover:bg-green-50 active:bg-green-100 w-28">
        Success
      </button>

      {/* Warning button */}
      <button className="border border-solid border-yellow-500 text-yellow-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-yellow-400 hover:bg-yellow-50 active:bg-yellow-100 w-28">
        Warning
      </button>

      {/* Disabled button */}
      <button
        className="border border-solid border-gray-500 text-gray-500 text-base font-semibold py-2 px-4 rounded-md duration-300 hover:text-gray-400 hover:bg-gray-50 active:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed w-28"
        disabled
      >
        Disabled
      </button>

      {/* Linkedin button */}
      <button className="border border-solid border-[#00A0DC] text-[#00A0DC] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#b5ebff] active:bg-[#00A0DC] active:text-white w-28">
        Linkedin
      </button>

      {/* Facebook button */}
      <button className="border border-solid border-[#385898] text-[#385898] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#9ebeff] active:bg-[#385898] active:text-white w-28">
        Facebook
      </button>

      {/* WhatsApp button */}
      <button className="border border-solid border-[#22C35E] text-[#22C35E] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#b2ffce] active:bg-[#22C35E] active:text-white w-28">
        WhatsApp
      </button>

      {/* Telegram button */}
      <button className="border border-solid border-[#0088CC] text-[#0088CC] text-base font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#bde9ff] active:bg-[#0088CC] active:text-white w-28">
        Telegram
      </button>
    </div>
  );
}

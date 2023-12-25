import React from "react";

export default function ContainedButtons() {
  return (
    <div className="flex items-center flex-wrap my-10 gap-3">
      {/* Primary Button */}
      <button className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-blue-600 active:bg-blue-800 w-28">
        Primary
      </button>

      {/* Secondary button */}
      <button className="bg-gray-500 text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-gray-600 active:bg-gray-800 w-28">
        Secondary
      </button>

      {/* Danger button */}
      <button className="bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-red-600  active:bg-red-800 w-28">
        Danger
      </button>

      {/* Success button */}
      <button className="bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-green-600 active:bg-green-800 w-28">
        Success
      </button>

      {/* Warning button */}
      <button className="bg-yellow-500 text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-yellow-600 active:bg-yellow-800 w-28">
        Warning
      </button>

      {/* Disabled button */}
      <button
        className="bg-gray-500 text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-28"
        disabled
      >
        Disabled
      </button>

      {/* Linkedin button */}
      <button className="bg-[#00A0DC] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#1f93bd] active:bg-[#017ca8] active:text-white w-28">
        Linkedin
      </button>

      {/* Facebook button */}
      <button className="bg-[#385898] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#304d86] active:bg-[#26437c] active:text-white w-28">
        Facebook
      </button>

      {/* WhatsApp button */}
      <button className="bg-[#22C35E] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#15b650] active:bg-[#0a9a3f] active:text-white w-28">
        WhatsApp
      </button>

      {/* Telegram button */}
      <button className="bg-[#0088CC] text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-[#147baf] active:bg-[#096b9c] active:text-white w-28">
        Telegram
      </button>
    </div>
  );
}

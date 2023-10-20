import React from "react";
import {
  ShieldAlert,
  BadgeInfo,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export default function DescriptiveAlerts() {
  return (
    <>
      {/* Error alert */}
      <p className="bg-red-100 text-red-800 text-sm px-5 py-2 rounded-md flex items-start gap-2">
        <ShieldAlert size={20} className="mt-[3px]" />
        <div className="flex flex-col items-start">
          <span className="font-semibold text-base">Error</span>
          This is an error alert!
        </div>
      </p>

      {/* Information alert */}
      <p className="bg-blue-100 text-blue-800 text-sm px-5 py-2 rounded-md flex items-start gap-2">
        <BadgeInfo size={20} className="mt-[3px]" />
        <div className="flex flex-col items-start">
          <span className="font-semibold text-base">Info </span>
          This is an information alert!
        </div>
      </p>

      {/* Warning alerts */}
      <p className="bg-yellow-100 text-yellow-800 text-sm px-5 py-2 rounded-md flex items-start gap-2">
        <AlertTriangle size={20} className="mt-[3px]" />
        <div className="flex flex-col items-start">
          <span className="font-semibold text-base">Warning </span>
          This is a warning alert!
        </div>
      </p>

      {/* Success alerts */}
      <p className="bg-green-100 text-green-800 text-sm px-5 py-2 rounded-md flex items-start gap-2">
        <CheckCircle size={20} className="mt-[3px]" />
        <div className="flex flex-col items-start">
          <span className="font-semibold text-base">Success</span>
          This is a success alert!
        </div>
      </p>
    </>
  );
}

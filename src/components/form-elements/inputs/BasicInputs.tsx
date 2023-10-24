import React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function BasicInputs() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="space-y-6 my-10">
      {/* Text inputs fields */}
      {/* Outlined Inputs */}
      <input
        type="text"
        className="border border-solid border-gray-200 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:text-gray-100"
        placeholder="Outlined Input"
      />

      {/* Filled Inputs */}
      <input
        type="text"
        className="bg-gray-100 border border-solid border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
        placeholder="Filled Input"
      />

      {/* Underlined Inputs */}
      <input
        type="text"
        className="border-0 border-b-2 border-solid border-gray-200 w-full px-3 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:text-gray-100"
        placeholder="Underlined Input"
      />

      {/* Password password fields */}
      {/* Outlined Password */}
      <div className="flex items-center border border-solid border-gray-200 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:text-gray-100">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full"
          placeholder="Password Outlined"
        />
        {
          // Show password icon
          !showPassword ? (
            <EyeIcon
              size={20}
              className="cursor-pointer ml-2"
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <EyeOffIcon
              size={20}
              className="cursor-pointer ml-2"
              onClick={() => setShowPassword(false)}
            />
          )
        }
      </div>

      {/* Filled Password */}
      <div className="flex items-center my-5 bg-gray-100 border border-solid border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full"
          placeholder="Password Filled"
        />
        {
          // Show password icon
          !showPassword ? (
            <EyeIcon
              size={20}
              className="cursor-pointer ml-2"
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <EyeOffIcon
              size={20}
              className="cursor-pointer ml-2"
              onClick={() => setShowPassword(false)}
            />
          )
        }
      </div>

      {/* Underlined Password */}
      <div className="flex items-center border-0 border-b-2 border-solid border-gray-200 w-full px-3 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:text-gray-100">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full"
          placeholder="Password Underlined"
        />
        {
          // Show password icon
          !showPassword ? (
            <EyeIcon
              size={20}
              className="cursor-pointer ml-2"
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <EyeOffIcon
              size={20}
              className="cursor-pointer ml-2"
              onClick={() => setShowPassword(false)}
            />
          )
        }
      </div>
    </div>
  );
}

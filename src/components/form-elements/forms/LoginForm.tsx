import React from "react";
import logo from "../../../assets/logo.svg";

const LoginForm = () => {
  return (
    <div className="flex flex-col my-4 border p-5 rounded-md min-h-[80vh]">
      {/* Login form */}
      <div className="flex flex-col m-auto w-96 gap-y-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-2">
          <img
            className="mx-auto h-14 w-auto mb-10"
            src={logo}
            alt="Your Company"
          />
          <p className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="font-medium text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="raj@gmail.com"
            className="border border-solid border-gray-200 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="password" className="font-medium text-sm">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
            className="border border-solid border-gray-200 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        <div className="flex items-center -mt-3 justify-between">
          <div className="flex gap-2 items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="text-sm">
              Remember me
            </label>
          </div>
          <a className="text-sm !no-underline text-blue-500" href="#!">
            Forgot password?
          </a>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <button
            type="reset"
            className="border border-solid border-gray-300 text-gray-500 text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:text-gray-400 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-2"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-md duration-300 hover:bg-blue-600 active:bg-blue-700 flex items-center gap-2"
          >
            Submit
          </button>
        </div>

        <p className="text-sm text-center !-mt-0">
          Not an account?
          <a href="#!" className="text-blue-500 ml-1">
            Create here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

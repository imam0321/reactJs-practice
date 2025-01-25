import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Registration() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  return (
    <div className="m-2 md:w-3/4 w-4/5 mx-auto mt-4">
      <h1 className="text-3xl font-semibold my-3">
        <span className="text-pink-500">Create an</span>{" "}
        <span className="text-blue-600">Account</span>
      </h1>
      <hr className="w-2/6 my-4" />
      <form className="">
        <div className="mb-1">
          <label
            className="block text-gray-700 font-bold"
          >
            User Name *
          </label>
          <p className="text-gray-500 my-1">This is your public display name. It can be your real name or a pseudonym. You can change this every 30 days.</p>
          <input
            type="text"
            name="userName"
            required
            className="md:w-2/3 w-full px-2 py-2 border-2 border-gray-200 rounded-md"
            placeholder="Please input your user name"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 font-bold"
          >
            Email *
          </label>
          <p className="text-gray-500 my-1">Please enter your email to ensure you can receive the verification code.</p>
          <input
            type="email"
            name="email"
            required
            className="md:w-2/3 w-full px-2 py-2 border-2 border-gray-200 rounded-md"
            placeholder="Please input your Email"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 font-bold"
          >
            Create a Password *
          </label>
          <p className="text-gray-500 my-1">Password must contain 8 or more characters, including at least one number, one uppercase letter, and one lowercase letter.</p>
          <div className="md:w-3/5 w-full flex justify-center items-center gap-2">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              required
              className="w-full px-2 py-2 border-2 border-gray-200 rounded-md underline"
              placeholder="Password"
            />
            <button
              type="button"
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="p-1"
            >
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 font-bold"
          >
            Input the Password again
          </label>
          <div className="md:w-3/5 w-full flex justify-center items-center gap-2">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              required
              className="w-full px-2 py-2 border-2 border-gray-200 rounded-md underline"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              aria-label={isConfirmPasswordVisible ? "Hide confirm password" : "Show confirm password"}
              onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              className="p-1"
            >
              {isConfirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <a href="/" className="underline">
          Login
        </a>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="md:w-1/4 w-full py-2 px-5 bg-pink-600 text-white font-semibold rounded-md mt-10"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

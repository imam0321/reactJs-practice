import { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex justify-between items-center">
      <p className="w-3/5 lg:block hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sequi impedit aperiam sunt, minus, repellendus quae quod modi quos quo expedita quaerat veniam cumque natus quasi voluptatem nobis ipsa vel.</p>
      <div className="m-2 md:w-1/4 w-4/5 mx-auto">
        <h1 className="text-3xl text-center font-semibold mb-8 md:block hidden">
          <span className="text-pink-500">Enter</span>{" "}
          <span className="text-blue-600">Community</span>
        </h1>
        <h2 className="text-2xl font-bold my-2">Login or create an account</h2>
        <h3 className="text-gray-500 mb-2">
          Sign up for free or log in to access useful data models and article.
        </h3>
        <form>
          <div className="mb-2">
            <input
              type="email"
              name="email"
              required
              className="w-full px-2 py-2 border-2 border-gray-200 rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center items-center gap-2 mb-2">
            <input
              type={isOpen ? "text" : "password"}
              name="password"
              required
              className="w-full px-2 py-2 border-2 border-gray-200 rounded-md"
              placeholder="Password"
            />
            <button
              type="button"
              aria-label={isOpen ? "Hide password" : "Show password"}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
            >
              {isOpen ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full py-2 px-5 bg-pink-600 text-white font-semibold rounded-md"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center mt-4">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="px-2 text-gray-500">OR CONTINUE WITH</p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-5 font-semibold border-2 border-gray-200 rounded-md my-4"
          >
            <FaGoogle />
            Sign in with Google
          </button>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-5 font-semibold border-2 border-gray-200 rounded-md mb-6"
          >
            <FaFacebook />
            Sign in with Facebook
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly p-3 max-w-3xl mx-auto">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white me-1">
              ISD&apos;s
            </span>{" "}
            Blog
          </Link>
          <p className="mt-5 text-sm font-semibold">
            This is Sign Up Page of ISD's Blog Werbsite
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-5 py-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-black pb-1 font-medium">
                Your Username
              </label>
              <input
                type="text"
                className="outline-none bg-zinc-200 px-2 py-1 border-2 border-zinc-300 rounded-lg placeholder:text-zinc-500 placeholder:font-medium focus:border-cyan-400 transition-all"
                placeholder="Username"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-black pb-1 font-medium">
                Your Email
              </label>
              <input
                type="text"
                className="outline-none bg-zinc-200 px-2 py-1 border-2 border-zinc-300 rounded-lg placeholder:text-zinc-500 placeholder:font-medium focus:border-cyan-400 transition-all"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-black pb-1 font-medium">
                Your Password
              </label>
              <input
                type="text"
                className="outline-none bg-zinc-200 px-2 py-1 border-2 border-zinc-300 rounded-lg placeholder:text-zinc-500 placeholder:font-medium focus:border-cyan-400 transition-all"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="px-4 py-2 hidden sm:flex items-center justify-center rounded-xl bg-transparent bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l transition-all text-white font-semibold">Submit</button>
            <div className="text-sm font-medium">
              <span>Have an account? </span>
              <Link to={"/sign-in"} className="text-blue-400 underline">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

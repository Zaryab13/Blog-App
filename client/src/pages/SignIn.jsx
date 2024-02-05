import React from "react";
import { Link } from "react-router-dom";
import SignInForm from '../components/SignInForm'

const SignIn = () => {
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
            This is Sign In Page of ISD's Blog Website
          </p>
        </div>
        {/* Right */}
        <div className="flex-1 relative">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

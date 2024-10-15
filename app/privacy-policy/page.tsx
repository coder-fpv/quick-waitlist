import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 p-4">
      <div className="max-w-screen-md w-full bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col items-center p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Privacy Policy
          </h1>
          <div className="bg-white/10 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 mb-8 w-full">
            <p className="text-cyan-300 text-center">
              {process.env.NEXT_PUBLIC_PRIVACY || "We value your privacy and promise not to spam your inbox"}
            </p>
          </div>
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

import React from "react";
import { Mail, MailIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
<div className="flex flex-col lg:flex-row h-screen">
  {/* Left: Desktop Banner */}
  <div className="hidden lg:block">
    <img
      src="/landing-banner.png"
      alt="Banner"
      className="h-full object-cover"
    />
  </div>

  {/* Right: Content */}
  <div className="flex flex-col justify-center items-center flex-1 p-6 lg:p-12 relative">

    {/* ✅ Mobile Logo */}
    <div className="block lg:hidden mb-2">
      <img src="/mobile-logo.png" alt="Logo" className="h-12 mx-auto" />
    </div>

    {/* ✅ Top Section */}
    <div className="flex flex-col justify-center items-center h-[60vh] lg:h-auto w-full">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Log in or sign up in seconds
      </h1>

      <button
      onClick={() => navigate("/email")}
      className="bg-white border border-gray-300 text-black py-3 px-6 rounded-md flex items-center gap-2 shadow-sm">
        <MailIcon></MailIcon>
        Continue with email
      </button>

      <p className="mt-4 text-sm text-gray-500 text-center">
        By continuing, you agree to TrustKeyper{' '}
        <a href="https://www.trustkeyper.com/terms-and-conditions" className="text-green-600 underline">
          Terms and Conditions
        </a>
      </p>

      {/* <div className="flex gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-blue-600" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div> */}
    </div>
  </div>

  {/* ✅ Mobile Bottom Banner */}
  {/* <div className="block lg:hidden mt-auto">
    <img
      src="/mobile-banner.png"
      alt="Mobile Banner"
      className="w-full object-cover"
    />
  </div> */}

  {/* ✅ Desktop Bottom-Right Illustration */}
  <img
    src="/illustration.png"
    alt="Illustration"
    className="hidden lg:block fixed bottom-0 right-0 w-64 pointer-events-none select-none"
  />
</div>
  );
}



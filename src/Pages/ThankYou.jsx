import { CheckCircle, House, FileText, CircleCheck } from 'lucide-react';
import React from 'react';

function ThankYouPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Banner (Desktop) */}
      <div className="hidden lg:block">
        <img
          src="/landing-banner.png"
          alt="Banner"
          className="h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center items-center flex-1 p-6 lg:p-12 relative">
        {/* Mobile Logo */}
        <div className="block lg:hidden mb-4">
          <img src="/mobile-logo.png" alt="Logo" className="h-12 mx-auto" />
        </div>

        <div className="flex flex-col justify-center items-center h-[60vh] lg:h-auto w-full">
          <CircleCheck className="w-16 h-16 mx-auto text-green-500" />
        <h2 className="text-2xl font-semibold mt-4">Property Details Submitted</h2>
        <p className="text-gray-600 mt-1">We’ll get back to you!</p>

        <p className="text-gray-500 mt-6 text-sm">
          Thank you for providing your property details. We’re excited to partner with you!
        </p>

        <div className="mt-8 space-y-6 text-left">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <House></House>
              {/* <div className="w-2.5 h-2.5 bg-green-500 rounded-full" /> */}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Property Visit</h3>
              <p className="text-sm text-gray-500">Our team will schedule a visit to your property if needed.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
             <FileText />
              {/* <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" /> */}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Documentation</h3>
              <p className="text-sm text-gray-500">Complete necessary paperwork and agreements.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <CheckCircle />
              {/* <div className="w-2.5 h-2.5 bg-purple-500 rounded-full" /> */}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">All Set!</h3>
              <p className="text-sm text-gray-500">Start receiving your monthly payments. We’ll handle everything else.</p>
            </div>
          </div>
        </div>
          
        <div className="w-full flex justify-center mt-6 lg:mt-10 px-6">
          <a
            href="https://www.trustkeyper.com/dashboard"
            className="bg-blue-900 text-white py-3 px-6 rounded-md w-fit text-center"
          >
            Continue →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-10">
          By continuing, you agree to TrustKeyper <a href="https://www.trustkeyper.com/terms-and-conditions" className="text-green-600 underline">
              Terms and Conditions
            </a>
        </p>
        </div>
      </div>

      {/* Bottom Banner for Mobile */}
      {/* <div className="block lg:hidden mt-auto">
        <img
          src="/mobile-banner.png"
          alt="Mobile Banner"
          className="w-full object-cover"
        />
      </div> */}

      {/* Desktop Illustration */}
      <img
        src="/illustration.png"
        alt="Illustration"
        className="hidden lg:block fixed bottom-0 right-0 w-64 pointer-events-none select-none"
      />
    </div>
  );
}

export default ThankYouPage;



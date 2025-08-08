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

          <p className="text-gray-500 mt-6 text-sm text-center px-4">
            Thank you for providing your property details. We’re excited to partner with you!
          </p>

          {/* Steps Box */}
          <div className="mt-10 w-full max-w-md bg-gray-100 p-6 rounded-md">
          <h3 className="text-center text-sm font-bold text-gray-700 mb-2">What happens next?</h3>

          <div className="flex flex-col space-y-10 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-12 bottom-36 z-0">
              {/* First line: Blue */}
              <div className="h-[100px] border-l-2 border-gray-300"></div>
              {/* Second line: Gray */}
              <div className="h-[100px] border-l-2 border-gray-300"></div>
          </div>

            {/* Step 1 */}
            <div className="flex items-start space-x-4 z-10">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 bg-white">
                  <House className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Property Visit</h4>
                <p className="text-sm text-gray-600">
                  Our team will get on a phone call with you & schedule a visit to your property
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 z-10">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 bg-white">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">Documentation</h4>
                <p className="text-sm text-gray-600">
                  Complete necessary paperwork and agreements
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 z-10">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 bg-white">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">All Set!</h4>
                <p className="text-sm text-gray-600">
                  Start receiving your monthly payments. We’ll handle everything else.
                </p>
              </div>
            </div>
          </div>

            {/* Button and Terms */}
            <div className="w-full flex justify-center mt-8">
              <a
                href="https://www.trustkeyper.com/dashboard"
                className="bg-blue-900 text-white py-3 px-6 rounded-md text-center"
              >
                Continue →
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              By continuing, you agree to TrustKeyper{' '}
              <a href="#" className="text-blue-500 underline">Terms and Conditions</a>
            </p>
          </div>
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




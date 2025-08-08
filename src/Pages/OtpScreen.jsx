import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Focus next input
      if (value && index < 4) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const email = localStorage.getItem('tkp_email');
    const otpCode = otp.join('');

    try {
      const res = await fetch('https://backend-ef5a.onrender.com/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpCode }),
      });

      const data = await res.json();
      if (data.success) {
        navigate('/form');
      } else {
        setError(data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const email = localStorage.getItem('tkp_email');

    try {
      const res = await fetch('https://backend-ef5a.onrender.com/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (data.success) {
        console.log("otp resent")
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Banner */}
      <div className="hidden lg:block">
        <img
          src="/landing-banner.png"
          alt="Banner"
          className="h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center items-center flex-1 p-6 lg:p-12 relative">
        {/* Mobile Logo */}
        <div className="block lg:hidden mb-2">
          <img src="/mobile-logo.png" alt="Logo" className="h-12 mx-auto" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center h-[60vh] lg:h-auto w-full"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">
            Enter verification code
          </h1>

          <p className="text-sm text-gray-600 text-center mb-6">
            We've sent a 4-digit code to{' '}
            <span className="text-black font-medium">
              {localStorage.getItem('tkp_email')}
            </span>
            <span
              className="text-blue-600 underline ml-2 cursor-pointer"
              onClick={() => navigate('/email')}
            >
              Change
            </span>
          </p>

          {/* OTP Boxes */}
          <div className="flex gap-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-900 text-white py-3 px-6 rounded-md w-full max-w-sm disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Continue'}
          </button>

          <div className="flex justify-end mt-2">
            <button
              type="button"
              onClick={resendOtp}
              disabled={loading}
              className="text-sm text-blue-600 underline hover:text-blue-800 disabled:opacity-50"
            >
              Resend OTP
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500 text-center">
            By continuing, you agree to TrustKeyper{' '}
            <a href="https://www.trustkeyper.com/terms-and-conditions" className="text-green-600 underline">
              Terms and Conditions
            </a>
          </p>

          <div className="flex gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-blue-600" />
          </div>
        </form>
      </div>

      {/* Mobile Bottom Banner */}
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


export default OtpScreen;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function EmailScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://backend-ef5a.onrender.com/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem('tkp_email', email);
        navigate('/verify');
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
      {/* Desktop Banner */}
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
          className="flex flex-col justify-center items-center h-[60vh] lg:h-auto w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Enter your email
          </h1>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full max-w-sm px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
          />

          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-900 text-white py-3 px-6 rounded-md w-full max-w-sm disabled:opacity-50"
          >
            {loading ? "Sending OTP..." : "Continue"}
          </button>

          <p className="mt-4 text-sm text-gray-500 text-center">
            By continuing, you agree to TrustKeyper{" "}
            <a href="#" className="text-green-600 underline">
              Terms and Conditions
            </a>
          </p>

          <div className="flex gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
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

      {/* Desktop Bottom-Right Illustration */}
      <img
        src="/illustration.png"
        alt="Illustration"
        className="hidden lg:block fixed bottom-0 right-0 w-64 pointer-events-none select-none"
      />
    </div>
  );
}

export default EmailScreen;
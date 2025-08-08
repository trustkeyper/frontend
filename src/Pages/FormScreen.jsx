import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [unitSize, setUnitSize] = useState('');
const [furnishingStatus, setFurnishingStatus] = useState('');
const [expectedRent, setExpectedRent] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const [showPopup, setShowPopup] = useState(false);
const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);
  setShowPopup(false);

  try {
    const email = localStorage.getItem('tkp_email');
    const res = await fetch('https://backend-ef5a.onrender.com/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,             // from localStorage
        name,
        phone,
        address,
        unitSize,
        furnishingStatus,
        expectedRent
      }),
    });

    const data = await res.json();
    if (data.success) {
      setShowPopup(true);
      setTimeout(() => {
        navigate('/thankyou');
      }, 1000);
    } else {
      setError(data.message || 'Something went wrong');
    }
    } catch (err) {
      setError('Failed to submit form');
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
          className="flex flex-col justify-center items-center h-[85vh] lg:h-auto w-full"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-1">
            Fill your basic Details
          </h1>
          <p className="text-gray-500 text-sm text-center mb-6">
            We don’t ask you much
          </p>

          <div className="w-full max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name*</label>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone number*</label>
              <input
                type="tel"
                placeholder="+91"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Complete Address, with Pin code*</label>
              <textarea
                rows="2"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Unit Size*</label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((unit) => (
                  <button
                    type="button"
                    key={unit}
                    onClick={() => setUnitSize(unit)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      unitSize === unit
                        ? 'border-blue-600 text-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Furnishing Status</label>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {["Unfurnished", "Semi Furnished", "Fully Furnished"].map((status) => (
                  <button
                    type="button"
                    key={status}
                    onClick={() => setFurnishingStatus(status)}
                    className={`px-2 py-2 border rounded-md text-sm ${
                      furnishingStatus === status
                        ? 'border-blue-600 text-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Expected Monthly Rent <span className="text-gray-400">( without maintenance )</span>
              </label>
              <div className="relative mt-1">
               <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-sm">
                 ₹
               </span>
               <input
                 type="number"
                 required
                 placeholder="0"
                 value={expectedRent}
                 onChange={(e) => setExpectedRent(e.target.value)}
                 className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
             </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md disabled:opacity-50"
            >
              {loading ? 'Submitting information...' : 'Continue →'}
            </button>
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
    {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-semibold text-green-600 mb-2">Successfully Submitted!</h2>
      <p className="text-sm text-gray-600">Your proprety details have been saved</p>
    </div>
  </div>
)}
    </div>
    
  );
}

export default FormPage;



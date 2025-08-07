import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingScreen";
import EmailEntry from "./Pages/EmailScreen";
import OtpVerify from "./Pages/OtpScreen";
import UserForm from "./Pages/FormScreen";
import ThankYou from "./Pages/ThankYou";
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/email" element={<EmailEntry />} />
        <Route path="/verify" element={<OtpVerify />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

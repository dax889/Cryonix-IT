import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./pages/HeroSection";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Terms from  "./pages/Terms & Condition";
import Support from  "./pages/Support";
import SupportTicket from  "./pages/CreateSupportTicket";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <>
      <Navbar />

      <main >
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms & condition" element={<Terms />} />
          <Route path="/support" element={<Support />} />
           {/* Your existing routes */}
          <Route path="/support-ticket" element={<SupportTicket />} />
          <Route path="/projects" element={<Portfolio />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

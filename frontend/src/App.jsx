import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import CarDetails from "./Pages/CarDetails";
import CheckoutPage from "./Pages/CheckoutPage";
import PaymentLoading from "./Pages/PaymentLoading";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Admin from "./Pages/Admin";
import Contact from "./Pages/Contact";
import Partners from "./Pages/Partners";
import RepeatCustomer from "./Pages/RepeatCustomer";
import IndiaTour from "./Pages/IndiaTour";
import OdishaTour from "./Pages/OdishaTour";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/car-rental" element={<CarDetails />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment-loading" element={<PaymentLoading />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/customerrepeat" element={<RepeatCustomer />} />
      <Route path="/india-tour" element={<IndiaTour />} />
      <Route path="/odisha-tour" element={<OdishaTour />} />
    </Routes>
  );
}

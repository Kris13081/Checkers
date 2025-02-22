import React from "react";
import { Routes, Route } from "react-router-dom";
import CalendarPage from "./components/CalendarPage";
import BookingPage from "./components/BookingPage";
import Layout from "./HomePageComponents/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #f0f4f8, #d9e2ec, #bcccdc)",
        animation: "gradientBG s infinite alternate ease-in-out"
      }}
    > 
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/booking/:date" element={<BookingPage />} />
      </Routes>
      <style>
        {`
          @keyframes gradientBG {
            0% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(45deg); }
          }
        `}
      </style>
    </div>
  );
}

export default App;

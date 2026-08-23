import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffect";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import FanPage from "./pages/FanPage";
import About from "./pages/About";
import Memories from "./pages/Memories";
import MyWorld from "./pages/MyWorld";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#faf5ff] via-[#f3e8ff] to-[#fce7f3] flex flex-col relative">

        <BackgroundEffects />

        <div className="relative z-10 flex flex-col min-h-screen">

          {/* Fixed Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow pt-[90px] md:pt-[85px]">
            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/diary" element={<Diary />} />

              <Route path="/fanpage" element={<FanPage />} />

              <Route path="/projects" element={<MyWorld />} />

              <Route path="/memories" element={<Memories />} />

              <Route path="/about" element={<About />} />

            </Routes>
          </main>

          <Footer />

        </div>
      </div>
    </Router>
  );
}
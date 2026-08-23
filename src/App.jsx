import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffect";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import FanPage from "./pages/Fanpage.jsx";
import About from "./pages/About";
import Memories from "./pages/Memories";
import MyWorld from "./pages/MyWorld";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-[#faf5ff] via-[#f3e8ff] to-[#fce7f3] flex flex-col relative">

        <BackgroundEffects />

        <div className="relative z-15 flex flex-col min-h-screen">

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
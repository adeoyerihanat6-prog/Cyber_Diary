import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  Heart,
  User,
  Camera,
  FolderGit2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Sparkles },
    { path: "/diary", label: "Diary", icon: BookOpen },
    { path: "/fanpage", label: "Likes", icon: Heart },
    { path: "/projects", label: "World", icon: FolderGit2 },
    { path: "/memories", label: "Photos", icon: Camera },
    { path: "/about", label: "About", icon: User },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 py-3"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/65 backdrop-blur-2xl border border-white/70 shadow-glass rounded-2xl md:rounded-full px-2 py-2 flex items-center justify-between md:justify-center gap-1 overflow-x-auto scrollbar-hide">
          {navItems.map(({ path, label, icon: Icon }) => {
            const active = isActive(path);
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-1.5 px-3 md:px-4 py-2 rounded-xl md:rounded-full text-[10px] md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  active
                    ? "bg-cyber-plum text-white shadow-md"
                    : "text-cyber-plum/70 hover:bg-white/70 hover:text-cyber-plum"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    active ? "text-cyber-pink" : "text-cyber-mauve"
                  }`}
                />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
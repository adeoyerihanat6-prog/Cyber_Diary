import React from "react";
import { Terminal, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-xl border-t border-cyber-lilac/30 py-7 px-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Identity */}
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyber-mauve" />

            <span className="font-mono text-xs text-cyber-plum/60">
              rihannah@cyber-diary:~$
            </span>

            <span className="font-mono text-xs text-cyber-plum">
              exit
            </span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-cyber-plum/40">
              built_with
            </span>

            <span className="font-mono text-[10px] text-cyber-mauve bg-cyber-lilac/20 px-3 py-1.5 rounded-full">
              React + Tailwind + Framer Motion
            </span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-5 pt-5 border-t border-cyber-lilac/20 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-cyber-plum/35">
            © 2026 Rihannah Cyber Diary
          </p>

          <p className="flex items-center gap-1.5 font-mono text-[10px] text-cyber-plum/35">
            made with curiosity
            <Heart className="w-3 h-3 text-cyber-rose" />
            and too many ideas
          </p>
        </div>
      </div>
    </footer>
  );
}
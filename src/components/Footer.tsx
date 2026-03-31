"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/utils/data";
import { FiArrowUp, FiHeart } from "react-icons/fi";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-6 border-t border-pink-500/20 bg-[#050510]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Все права защищены
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs">
              Создано с
            </span>
            <FiHeart className="w-4 h-4 text-pink-500 animate-pulse" />
            <span className="text-gray-500 text-xs">
              используя Next.js и Three.js
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-xl text-gray-400 hover:text-pink-400 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-xs uppercase tracking-wider font-semibold">Top</span>
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

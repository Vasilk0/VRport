"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/utils/data";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-6 border-t border-gray-800 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Все права защищены
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs">
              Создано с
            </span>
            <span className="text-accent animate-pulse">❤</span>
            <span className="text-gray-600 text-xs">
              используя Next.js и Three.js
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-secondary border border-gray-800 rounded-lg text-gray-400 hover:text-accent-tertiary hover:border-accent-tertiary/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-xs uppercase tracking-wider">Top</span>
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

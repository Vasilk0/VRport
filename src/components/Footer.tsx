"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/utils/data";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="py-8 px-6 border-t border-gray-800 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} {personalInfo.name}. Все права защищены.
          </p>
          <p className="text-gray-600 text-xs">
            Создано с использованием Next.js и Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Hero3D from "./Hero3D";
import { personalInfo } from "@/utils/data";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className={`text-accent text-sm sm:text-base tracking-widest uppercase mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Привет, меня зовут
        </p>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {personalInfo.name}
        </h1>

        <h2
          className={`text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {personalInfo.title}
        </h2>

        <p
          className={`text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Создаю современные веб-приложения с фокусом на производительность, доступность и пользовательский опыт
        </p>

        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105"
          >
            Смотреть проекты
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
          >
            Связаться со мной
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Hero3D from "./Hero3D";
import { personalInfo } from "@/utils/data";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <Hero3D />

      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-radial z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className={`inline-block px-4 py-2 mb-6 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-accent-tertiary text-xs sm:text-sm tracking-widest uppercase">
            Добро пожаловать
          </p>
        </div>

        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <h2
          className={`text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 transition-all duration-700 delay-200 ${
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
          Создаю современные веб-приложения с фокусом на производительность, 
          доступность и пользовательский опыт. Превращаю идеи в цифровые шедевры.
        </p>

        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#projects"
            className="group px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Смотреть проекты
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent-tertiary/50 text-accent-tertiary font-semibold rounded-full hover:bg-accent-tertiary/10 hover:border-accent-tertiary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Связаться со мной
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FiArrowDown className="w-6 h-6 text-accent/50" />
      </div>
    </section>
  );
}

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
      {/* 3D Background - на заднем плане */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* Градиентный оверлей - поверх 3D но под контентом */}
      <div className="absolute inset-0 z-10 bg-gradient-radial pointer-events-none"></div>

      {/* Content - поверх всего */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div
          className={`inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-pink-500/10 border border-pink-500/40 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
          <p className="text-pink-400 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            Добро пожаловать в моё портфолио
          </p>
        </div>

        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <div
          className={`inline-block px-6 py-3 mb-8 rounded-2xl bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/30 backdrop-blur-sm transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-semibold">
            {personalInfo.title}
          </h2>
        </div>

        <p
          className={`text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Создаю современные веб-приложения с фокусом на производительность,
          доступность и пользовательский опыт. Превращаю идеи в цифровые шедевры
          с помощью ярких технологий.
        </p>

        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <FiArrowDown className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Смотреть проекты
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Связаться со мной
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-pink-400 uppercase tracking-widest">Scroll</span>
          <FiArrowDown className="w-6 h-6 text-pink-400" />
        </div>
      </div>
    </section>
  );
}

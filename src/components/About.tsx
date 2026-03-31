"use client";

import { useEffect, useState } from "react";
import { skills, experiences, personalInfo } from "@/utils/data";
import { FiMapPin, FiMail, FiHeart, FiZap, FiStar } from "react-icons/fi";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a2e]">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-4">
            <FiHeart className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-xs tracking-widest uppercase">Обо мне</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ОБО МНЕ
            </span>
          </h2>
        </div>

        {/* Основной контент - новая сетка */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Карточка 1 - Приветствие */}
          <div
            className={`lg:col-span-2 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-500 group ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-shadow">
                <FiHeart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Привет!</h3>
                <p className="text-pink-400 text-sm">Давай познакомимся</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
              {personalInfo.about}
            </p>
            
            {/* Контактные метки */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 px-4 py-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
                <FiMapPin className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <FiMail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Карточка 2 - Статистика */}
          <div
            className={`bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                <FiZap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Навыки</h3>
                <p className="text-cyan-400 text-sm">Мой арсенал</p>
              </div>
            </div>
            <div className="space-y-4">
              {skills.slice(0, 5).map((skill, index) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000 relative"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Опыт работы - горизонтальные карточки */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <FiStar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Опыт работы</h3>
              <p className="text-purple-400 text-sm">Профессиональный путь</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Индикатор */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"></div>
                  <span className="text-purple-400 text-sm font-medium">{exp.period}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {exp.position}
                </h4>
                <p className="text-cyan-400 mb-4 font-medium">{exp.company}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2 text-sm">
                      <span className="text-pink-400 mt-1">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

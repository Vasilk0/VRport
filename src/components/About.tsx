"use client";

import { useEffect, useState } from "react";
import { skills, experiences, personalInfo } from "@/utils/data";
import { FiCode, FiBriefcase, FiMapPin, FiMail, FiCheck } from "react-icons/fi";

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
    <section id="about" className="py-24 px-6 lg:px-12 bg-secondary relative overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-2 block">
            01 — Познакомимся
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              ОБО МНЕ
            </span>
          </h2>
        </div>

        {/* About Info */}
        <div
          className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-primary/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
                <FiCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Обо мне</h3>
            </div>
            <p className="text-gray-400 leading-relaxed whitespace-pre-line mb-6">
              {personalInfo.about}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-accent-tertiary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="w-5 h-5 text-accent-tertiary" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-primary/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-secondary/10 hover:border-accent-secondary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-secondary to-accent-tertiary flex items-center justify-center">
                <FiCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Навыки</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="text-accent-tertiary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-primary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary rounded-full transition-all duration-1000 group-hover:glow-pink"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-primary/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-warm/10 hover:border-accent-warm/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-warm to-accent flex items-center justify-center">
                <FiBriefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Опыт работы</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gradient-to-r from-accent to-accent-secondary rounded-full"></div>
                  <h4 className="text-xl font-bold text-gray-200 mb-2">{exp.position}</h4>
                  <p className="text-accent-tertiary mb-2 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

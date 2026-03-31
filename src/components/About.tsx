"use client";

import { useEffect, useState } from "react";
import { skills, experiences, personalInfo } from "@/utils/data";
import { FiCode, FiBriefcase, FiMapPin, FiMail } from "react-icons/fi";

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
    <section id="about" className="py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">ОБО МНЕ</span>
        </h2>

        {/* About Info */}
        <div
          className={`grid md:grid-cols-2 gap-12 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">ОБО МНЕ</h3>
            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
              {personalInfo.about}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-accent" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="w-5 h-5 text-accent" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">НАВЫКИ</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-accent font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-primary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-purple-600 rounded-full transition-all duration-1000"
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
          <h3 className="text-2xl font-bold mb-8 text-accent">ОПЫТ РАБОТЫ</h3>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="border-l-2 border-accent pl-6">
                <h4 className="text-xl font-bold text-gray-200 mb-2">{exp.position}</h4>
                <p className="text-accent mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-gray-400 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
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

"use client";

import { useEffect, useState } from "react";
import { projects } from "@/utils/data";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projectGradients = [
  "from-pink-500 via-rose-500 to-cyan-500",
  "from-cyan-500 via-blue-500 to-purple-500",
  "from-purple-500 via-pink-500 to-rose-500",
];

const projectEmojis = ["🎮", "🗺️", "🎨"];

export default function Projects() {
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-[#0a0a1f] via-[#0f0a2e] to-[#0a1a2e]">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <span className="text-cyan-400 text-xs tracking-widest uppercase">Портфолио</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ПРОЕКТЫ
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-[#0a0a1f]/60 backdrop-blur-md rounded-3xl overflow-hidden border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-500/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className={`h-52 bg-gradient-to-br ${projectGradients[index % projectGradients.length]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center text-8xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {projectEmojis[index]}
                </div>
                {/* Блик при наведении */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Технологии */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Кнопки */}
                <div className="flex gap-2 pt-4 border-t border-gray-800 mt-auto">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Демо
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-cyan-500/50 text-cyan-400 text-sm font-bold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                    >
                      <FiGithub className="w-4 h-4" />
                      Код
                    </a>
                  )}
                  {project.demoUrl === "#" && project.githubUrl === "#" && (
                    <span className="text-xs text-gray-500 italic w-full text-center py-2">
                      Ссылки будут позже
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

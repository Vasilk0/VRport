"use client";

import { useEffect, useState } from "react";
import { projects } from "@/utils/data";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projectGradients = [
  "from-pink-500 via-purple-500 to-cyan-500",
  "from-orange-500 via-pink-500 to-purple-500",
  "from-cyan-500 via-blue-500 to-purple-500",
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
    <section id="projects" className="py-24 px-6 lg:px-12 bg-primary relative overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent-tertiary text-sm tracking-widest uppercase mb-2 block">
            02 — Портфолио
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-accent-tertiary via-accent-secondary to-accent bg-clip-text text-transparent">
              ПРОЕКТЫ
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-secondary/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-accent/10 hover:border-accent/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-br ${projectGradients[index % projectGradients.length]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center text-7xl transform group-hover:scale-110 transition-transform duration-500">
                  {projectEmojis[index]}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-accent-tertiary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent-tertiary text-xs rounded-full border border-accent/20 hover:border-accent/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-800 mt-auto">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent to-accent-secondary text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105"
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-700 text-gray-300 text-sm font-semibold rounded-xl hover:border-accent-tertiary hover:text-accent-tertiary transition-all duration-300 transform hover:scale-105"
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

"use client";

import { useEffect, useState } from "react";
import { projects } from "@/utils/data";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projectColors = [
  "from-blue-500 to-blue-600",
  "from-sky-500 to-sky-600",
  "from-orange-500 to-orange-600",
  "from-purple-500 to-purple-600",
  "from-green-500 to-green-600",
  "from-pink-500 to-pink-600",
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
    <section id="projects" className="py-20 px-6 lg:px-12 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">ПРОЕКТЫ</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-secondary rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-br ${projectColors[index % projectColors.length]} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {projectEmojis[index]}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-200 mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary text-accent text-xs rounded-full"
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Запустить
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 text-gray-300 text-sm font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
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

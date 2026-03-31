"use client";

import { useEffect, useState } from "react";
import { socialLinks, personalInfo } from "@/utils/data";
import {
  FiGithub,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";
import { FaTelegram, FaVk } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FiGithub,
  telegram: FaTelegram,
  vk: FaVk,
  email: FiMail,
};

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-secondary relative overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-tertiary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent-warm text-sm tracking-widest uppercase mb-2 block">
            03 — Связь
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-accent-warm via-accent to-accent-secondary bg-clip-text text-transparent">
              КОНТАКТЫ
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-primary/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-warm/10 hover:border-accent-warm/30 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Давайте работать вместе
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Я всегда открыта для обсуждения новых проектов, творческих идей 
                или возможностей стать частью ваших визионерских проектов. 
                Не стесняйтесь обращаться!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = iconMap[link.icon] || FiMail;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary border border-gray-800 hover:border-accent-warm/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-warm to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-gray-200 group-hover:text-accent-warm transition-colors block">
                          {link.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {link.url.replace(/^mailto:/, '').replace(/^https?:\/\//, '').split('/')[0]}
                        </span>
                      </div>
                      <FiArrowRight className="w-5 h-5 text-gray-600 group-hover:text-accent-warm group-hover:translate-x-1 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-primary/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-tertiary/10 hover:border-accent-tertiary/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-white">Напишите мне</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-gray-400 mb-2 text-sm">
                    <FiUser className="w-4 h-4" />
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-xl focus:border-accent-tertiary focus:ring-2 focus:ring-accent-tertiary/20 outline-none transition-all duration-200 text-gray-200 placeholder-gray-600"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-400 mb-2 text-sm">
                    <FiMail className="w-4 h-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-xl focus:border-accent-tertiary focus:ring-2 focus:ring-accent-tertiary/20 outline-none transition-all duration-200 text-gray-200 placeholder-gray-600"
                    placeholder="ivan@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-400 mb-2 text-sm">
                    <FiMessageSquare className="w-4 h-4" />
                    Сообщение
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-xl focus:border-accent-tertiary focus:ring-2 focus:ring-accent-tertiary/20 outline-none transition-all duration-200 text-gray-200 placeholder-gray-600 resize-none"
                    rows={5}
                    placeholder="Расскажите о вашем проекте..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-tertiary to-accent-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-tertiary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>Отправка...</>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Отправить сообщение
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-400 text-center text-sm bg-green-400/10 py-2 rounded-lg">
                    ✓ Сообщение успешно отправлено!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

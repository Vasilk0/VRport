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
  FiHeart,
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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-[#0a1a2e] via-[#0f0a2e] to-[#0a0a1f]">
      {/* Фоновые декоративные элементы */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-4">
            <FiHeart className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-xs tracking-widest uppercase">Связь</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              КОНТАКТЫ
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-[#0a0a1f]/60 backdrop-blur-md rounded-3xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 h-full">
              <h3 className="text-3xl font-bold mb-3 text-white">
                Давайте работать <span className="text-pink-400">вместе</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Я всегда открыта для обсуждения новых проектов, творческих идей 
                или возможностей стать частью ваших визионерских проектов. 
                Не стесняйтесь обращаться!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = iconMap[link.icon] || FiMail;
                  const gradients = ["from-pink-500 to-rose-500", "from-cyan-500 to-blue-500", "from-purple-500 to-pink-500", "from-rose-500 to-orange-500"];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-[#0a0a1f]/80 border border-gray-800 hover:border-pink-500/50 transition-all group"
                      style={{ transitionDelay: `${300 + index * 50}ms` }}
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-gray-200 group-hover:text-pink-400 transition-colors block text-lg">
                          {link.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {link.url.replace(/^mailto:/, '').replace(/^https?:\/\//, '').split('/')[0]}
                        </span>
                      </div>
                      <FiArrowRight className="w-6 h-6 text-gray-600 group-hover:text-pink-400 group-hover:translate-x-2 transition-all" />
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
            <div className="bg-[#0a0a1f]/60 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Напишите мне</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-gray-400 mb-2 text-sm font-medium">
                    <FiUser className="w-4 h-4 text-pink-400" />
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-[#0a0a1f]/80 border-2 border-gray-800 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all duration-200 text-gray-200 placeholder-gray-600 text-lg"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-400 mb-2 text-sm font-medium">
                    <FiMail className="w-4 h-4 text-cyan-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-[#0a0a1f]/80 border-2 border-gray-800 rounded-2xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all duration-200 text-gray-200 placeholder-gray-600 text-lg"
                    placeholder="ivan@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-400 mb-2 text-sm font-medium">
                    <FiMessageSquare className="w-4 h-4 text-purple-400" />
                    Сообщение
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-[#0a0a1f]/80 border-2 border-gray-800 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-200 text-gray-200 placeholder-gray-600 resize-none text-lg"
                    rows={5}
                    placeholder="Расскажите о вашем проекте..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] text-lg"
                >
                  {isSubmitting ? (
                    <>Отправка...</>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Отправить сообщение
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-400 text-center text-sm bg-green-400/10 py-3 rounded-xl font-medium">
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

"use client";

import { useEffect, useState } from "react";
import { socialLinks, personalInfo } from "@/utils/data";
import {
  FiGithub,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
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
    <section id="contact" className="py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">КОНТАКТЫ</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">
              ДАВАЙТЕ РАБОТАТЬ ВМЕСТЕ
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Я всегда открыта для обсуждения новых проектов, творческих идей или возможностей стать частью ваших визионерских проектов. Не стесняйтесь обращаться!
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
                    className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <FiUser className="w-4 h-4" />
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200 text-gray-200"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <FiMail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200 text-gray-200"
                  placeholder="ivan@example.com"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <FiMessageSquare className="w-4 h-4" />
                  Сообщение
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200 text-gray-200 resize-none"
                  rows={5}
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                <p className="text-green-400 text-center text-sm">
                  Сообщение успешно отправлено!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

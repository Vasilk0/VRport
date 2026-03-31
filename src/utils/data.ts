import { Project, Skill, Experience, SocialLink } from "@/types";

export const personalInfo = {
  name: "Вероника Архипова",
  title: "Frontend Разработчик",
  email: "email@example.com",
  location: "Россия",
  about: `Привет! Я frontend-разработчик с страстью к созданию красивых и функциональных веб-интерфейсов. Специализируюсь на React/Next.js экосистеме, люблю работать с 3D графикой и интерактивными элементами.

Моя цель — создавать продукты, которые не только решают бизнес-задачи, но и приносят удовольствие пользователям от взаимодействия с ними. Постоянно изучаю новые технологии и стремлюсь к совершенствованию своих навыков.`,
};

export const skills: Skill[] = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript / JavaScript", level: 85 },
  { name: "Three.js / R3F", level: 75 },
  { name: "Tailwind CSS / SCSS", level: 90 },
  { name: "Node.js / Express", level: 70 },
  { name: "Git / GitHub", level: 85 },
  { name: "Figma", level: 70 },
  { name: "Webpack / Vite", level: 75 },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Freelance",
    position: "Frontend Разработчик",
    period: "2023 — Настоящее время",
    description: [
      "Разработка одностраничных приложений и лендингов",
      "Создание интерактивных 3D сцен и анимаций",
      "Оптимизация производительности веб-приложений",
      "Вёрстка адаптивных интерфейсов",
    ],
  },
  {
    id: 2,
    company: "Студия Веб-разработки",
    position: "Junior Frontend Разработчик",
    period: "2022 — 2023",
    description: [
      "Вёрстка адаптивных интерфейсов",
      "Интеграция с backend API",
      "Поддержка и развитие существующих проектов",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Game Finder",
    description: "Интерактивная платформа для поиска и фильтрации видеоигр с детальными описаниями, рейтингами и информацией об играх",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "IGDB API"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    demoUrl: "https://vasilk0.github.io/Game-Finder/",
    githubUrl: "https://github.com/Vasilk0/Game-Finder",
  },
  {
    id: 2,
    title: "Interactive Map",
    description: "Веб-приложение с интерактивной картой для отметки мест, создания маршрутов и коллекций любимых локаций",
    technologies: ["React", "TypeScript", "Leaflet", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop",
    demoUrl: "https://vasilk0.github.io/Interactive-Map/",
    githubUrl: "https://github.com/Vasilk0/Interactive-Map",
  },
  {
    id: 3,
    title: "3D Paint",
    description: "Приложение для рисования и моделирования в трёхмерном пространстве с различными кистями и материалами",
    technologies: ["Three.js", "React Three Fiber", "TypeScript", "WebGL"],
    imageUrl: "https://images.unsplash.com/photo-1614728853913-1e22ba6e9d6c?w=600&h=400&fit=crop",
    demoUrl: "https://vasilk0.github.io/3D-Paint/",
    githubUrl: "https://github.com/Vasilk0/3D-Paint",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Vasilk0", icon: "github" },
  { name: "Telegram", url: "https://t.me/username", icon: "telegram" },
  { name: "VK", url: "https://vk.com/username", icon: "email" },
  { name: "Email", url: "mailto:email@example.com", icon: "email" },
];

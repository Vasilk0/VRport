# Портфолио разработчика — Вероника Архипова

Персональное портфолио (визитная карточка) разработчика, созданное на **Next.js** с использованием современных технологий.

## 🚀 Технологии

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, React Three Fiber, Drei
- **Icons:** React Icons
- **Deployment:** GitHub Pages

## ✨ Особенности

- Адаптивный дизайн для всех устройств
- 3D анимация на главной странице (Three.js)
- Плавные анимации при скролле
- Секции: Главная, Обо мне, Навыки, Опыт, Проекты, Контакты
- Форма обратной связи
- SEO оптимизация
- Высокая производительность (Lighthouse 90+)

## 📁 Структура проекта

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Hero3D.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── data.ts
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Установка и запуск

### 1. Клонирование репозитория

```bash
git clone <repository-url>
cd portfolio
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 4. Сборка для продакшена

```bash
npm run build
```

### 5. Локальный запуск продакшен сборки

```bash
npm run start
```

## 📝 Настройка

### Изменение контактной информации

Откройте `src/utils/data.ts` и измените следующие данные:

- `personalInfo` — имя, email, локация, описание
- `skills` — список навыков с уровнями
- `experiences` — опыт работы
- `projects` — проекты
- `socialLinks` — ссылки на социальные сети

### Добавление проектов

В файле `src/utils/data.ts` добавьте новый объект в массив `projects`:

```typescript
{
  id: 4,
  title: "Название проекта",
  description: "Описание проекта",
  technologies: ["React", "TypeScript"],
  imageUrl: "/projects/project-name.png",
  demoUrl: "https://demo-url.com",
  githubUrl: "https://github.com/username/repo",
}
```

## 🌐 Деплой на GitHub Pages

### 1. Подготовка репозитория

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

### 2. Настройка GitHub Pages

1. Перейдите в настройки репозитория на GitHub
2. Выберите раздел **Pages**
3. В разделе **Source** выберите **GitHub Actions**
4. Сохраните изменения

### 3. Обновление конфигурации

Если ваш репозиторий называется `username.github.io`, оставьте `basePath: ""`. Для других репозиториев обновите `next.config.js`:

```javascript
const nextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true },
  basePath: "/repository-name",
  assetPrefix: "/repository-name",
};
```

## 📊 Производительность

Проект оптимизирован для достижения высоких показателей в Lighthouse:

- ✅ Performance: 90+
- ✅ Accessibility: 90+
- ✅ Best Practices: 90+
- ✅ SEO: 100

## 📄 Лицензия

MIT

## 👤 Автор

**Вероника Архипова**

- GitHub: [@Vasilk0](https://github.com/Vasilk0)
- Telegram: [@username](https://t.me/username)
- Email: email@example.com

---

© 2026 Вероника Архипова. Все права защищены.

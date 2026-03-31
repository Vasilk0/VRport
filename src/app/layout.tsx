import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Вероника Архипова | Frontend Разработчик",
  description: "Персональное портфолио frontend разработчика. Создание современных веб-приложений с интерактивным дизайном.",
  keywords: ["frontend разработчик", "React", "Next.js", "Three.js", "веб-разработка", "портфолио"],
  authors: [{ name: "Вероника Архипова" }],
  openGraph: {
    title: "Вероника Архипова | Frontend Разработчик",
    description: "Персональное портфолио frontend разработчика. Создание современных веб-приложений с интерактивным дизайном.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

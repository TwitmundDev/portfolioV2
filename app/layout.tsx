import type { Metadata } from "next";
import { Albert_Sans, Imbue } from "next/font/google";
import "./globals.css";

const imbue = Imbue({
  variable: "--font-imbue",
  subsets: ["latin"],
  weight: "400",
});

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ellwane Romdhame - Développeur Java / Vue.js à Lyon",
  description: "Développeur Java / Vue.js à Lyon : applications web, outils métier et sites pour PME. Projets, parcours et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${imbue.variable} ${albert.variable}`}>
      <head>
        {/* Sans JavaScript, le contenu reste visible : les animations ne s'activent qu'avec la classe js */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ellwane Romdhame - Développeur Java / Vue.js",
  description: "Développeur Java et Vue.js : des plugins Minecraft aux API, outils métier et applications web. Projets, parcours et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={albert.variable} suppressHydrationWarning>
      <head>
        {/* Sans JavaScript, le contenu reste visible : les animations ne s'activent qu'avec la classe js */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

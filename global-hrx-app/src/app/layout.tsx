import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeamWork Solutions | Global HRX & Consultancy",
  description: "The Operating System for Modern Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/mega-menu.css" />
        <link rel="stylesheet" href="/css/header-premium.css" />
        <link rel="stylesheet" href="/css/campfire-theme.css" />
        <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
      </head>
      <body>
        {children}
        <script src="/js/home-interactions.js" defer></script>
        <script src="/js/main.js" defer></script>
        <script src="/js/unified-header.js" defer></script>
        <script src="/js/loader.js" defer></script>
      </body>
    </html>
  );
}

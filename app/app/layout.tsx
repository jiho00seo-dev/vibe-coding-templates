import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Cursor from "../components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "AI Portfolio | Premium Template",
  description: "A state-of-the-art AI portfolio template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Cursor />
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav" role="navigation" aria-label="Main Navigation">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold font-heading tracking-tighter" aria-label="AI Portfolio Logo">
              AI<span className="text-accent-blue">PORTFOLIO</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#projects" className="hover:text-accent-blue transition-colors">Projects</a>
              <a href="#abilities" className="hover:text-accent-blue transition-colors">Abilities</a>
              <a href="#lab" className="hover:text-accent-blue transition-colors">Lab</a>
              <a href="#contact" className="hover:text-accent-blue transition-colors">Contact</a>
            </div>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-highlight-lime transition-all" aria-label="Contact me">
              Let's Talk
            </button>
          </div>
        </nav>
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

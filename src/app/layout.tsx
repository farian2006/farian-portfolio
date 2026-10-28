import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farian Tazwar | Aspiring Full-Stack Developer",
  description:
    "Personal portfolio of Farian Tazwar, Computer Science & Engineering student at BRAC University. Showcasing full-stack projects, technical skills, certifications, and volunteer leadership.",
  keywords: [
    "Farian Tazwar",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "BRAC University",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Farian Tazwar", url: "https://github.com/farian2006" }],
  creator: "Farian Tazwar",
  verification: {
    google: "sDA0lQtK9mr_AOuiLE5h5ME9WKpZ0-WR2jTZ4USvtN0",
  },
  openGraph: {
    title: "Farian Tazwar | Aspiring Full-Stack Developer",
    description:
      "Explore my full-stack web development projects, technical skills, qualifications, and extracurricular experience.",
    url: "https://farian-portfolio-theta.vercel.app/",
    siteName: "Farian Tazwar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "../components/Navbar";
import { SideProvider } from "../context/sidebarContext";

export const metadata: Metadata = {
  title: {
    default: "Arief Nur Abdullah",
    template: "%s | Arief Nur Abdullah — AI Engineer · Backend & Frontend Developer",
  },
  description:
    "Portfolio of Arief Nur Abdullah — AI Engineer, Backend & Frontend Developer. Building scalable full‑stack web applications with Next.js, React, TypeScript, Node.js, GraphQL, and modern cloud tooling.",
  keywords: [
    "Arief Nur Abdullah",
    "AI engineer",
    "backend developer",
    "front end developer",
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Portfolio",
    "Web Developer",
  ],
  authors: [
    {
      name: "Arief Nur Abdullah",
      url: "https://aripzz.github.io/portfolio/",
    },
  ],
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }, { media: "(prefers-color-scheme: dark)", color: "black" }],
  openGraph: {
    title: "Arief Nur Abdullah — AI Engineer & Full‑Stack Developer",
    description:
      "Explore projects and case studies by Arief Nur Abdullah — specializing in AI systems, backend architectures, and modern front-end experiences using Next.js and TypeScript.",
    url: "https://aripzz.github.io/portfolio/",
    siteName: "Arief Nur Abdullah",
    images: [
      {
        url: "./profile.png",
        width: 1200,
        height: 630,
        alt: "Arief Nur Abdullah — AI Engineer & Full‑Stack Developer",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arief Nur Abdullah — AI Engineer & Full‑Stack Developer",
    description:
      "AI Engineer, Backend & Frontend Developer building modern web applications with Next.js, React, and TypeScript.",
    images: ["./profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon-16x16.png",
    apple: "./apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system">
          <SideProvider>
            <main>
              <Navbar />
              {children}
            </main>
          </SideProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

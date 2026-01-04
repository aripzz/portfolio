import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "../components/Navbar";
import { SideProvider } from "../context/sidebarContext";

export const metadata: Metadata = {
  title: "Arief Nur Abdullah | Web Developer",
  description: "Arief Nur Abdullah | Web Developer",
  keywords: ["Arief", "Web Developer", "Portfolio", "Next.js", "React"],
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

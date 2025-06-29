import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import ChatAgent from '@/components/ChatAgent'
import { SideProvider } from '../context/sidebarContext';


export const metadata: Metadata = {
  title: 'Arief Nur Abdullah | Web Developer',
  description: 'Arief Nur Abdullah | Web Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden flex">
        <ThemeProvider attribute="class" defaultTheme="system">
          <SideProvider>
            <main className={`flex-1`}>
              <Navbar></Navbar>
              {children}
              <ChatAgent></ChatAgent>
            </main>
          </SideProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}

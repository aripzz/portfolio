"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-[#EEEEEE]">
          PORTFOLIO<span className="text-[#00ADB5]">.</span>
        </div>

        <div className="space-x-8 hidden md:flex text-sm font-medium text-[#EEEEEE]/70">
          <a
            href="#proyek"
            onClick={(e) => handleNav(e, "proyek")}
            className="hover:text-[#00ADB5] transition"
          >
            Proyek
          </a>
          <a
            href="#pengalaman"
            onClick={(e) => handleNav(e, "pengalaman")}
            className="hover:text-[#00ADB5] transition"
          >
            Pengalaman
          </a>
          <a
            href="#about"
            onClick={(e) => handleNav(e, "about")}
            className="hover:text-[#00ADB5] transition"
          >
            Tentang
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "contact")}
            className="hover:text-[#00ADB5] transition"
          >
            Kontak
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-[#00ADB5] text-[#222831] px-6 py-2 rounded-md text-sm font-bold hover:bg-opacity-90 transition hidden md:inline-block">
            Hubungi Saya
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-[#EEEEEE]/90 hover:bg-white/10"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#222831]/90">
          <div className="px-6 pt-4 pb-6 space-y-3">
            <a
              href="#proyek"
              onClick={(e) => handleNav(e, "proyek")}
              className="block text-[#EEEEEE]"
            >
              Proyek
            </a>
            <a
              href="#pengalaman"
              onClick={(e) => handleNav(e, "pengalaman")}
              className="block text-[#EEEEEE]"
            >
              Pengalaman
            </a>
            <a
              href="#about"
              onClick={(e) => handleNav(e, "about")}
              className="block text-[#EEEEEE]"
            >
              Tentang
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "contact")}
              className="block text-[#EEEEEE]"
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

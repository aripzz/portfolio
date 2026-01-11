"use client";
import type { Project } from "../types/project";
import Image from "next/image";


const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Mamalyfe Mobile App",
    description:
      "Aplikasi mobile resmi Mamalyfe untuk komunitas orang tua — forum, artikel, event, serta pelacakan tumbuh kembang anak dengan fitur interaktif.",
    image: "./mamalyfe-app.webp",
    tech: "Flutter, Golang, Node.js, Postgree",
    link: "#",
  },
  {
    id: "2",
    title: "Mamalyfe Admin Dashboard",
    description:
      "Dashboard admin Mamalyfe untuk manajemen pengguna, konten, produk, dan analitik platform secara real-time.",
    image: "./mamalyfe-dashboard.png",
    tech: "react.js, Golang, Express, Chart.js, Postgree",
    link: "https://webadmin.mamalyfe.id/login",
  },
  {
    id: "3",
    title: "ACI (Internal App)",
    description:
      "Aplikasi internal PT AKU CINTA INDONESIA untuk manajemen operasional, pelaporan, dan pelacakan tugas harian karyawan.",
    image: "./aci-app.webp",
    tech: "Flutter, Firebase, REST API",
    link: "https://play.google.com/store/apps/details?id=com.aci.viuit&hl=en",
  },
  {
    id: "4",
    title: "Audiolyfe — Company Site",
    description:
      "Website company profile dan blog Audiolyfe dengan WordPress custom theme, menampilkan layanan audio, portofolio, dan artikel.",
    image: "./audiolyfe-wordpress.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "https://audiolyfe.org",
  },
  {
    id: "5",
    title: "CRM System",
    description:
      "Aplikasi CRM untuk manajemen hubungan pelanggan, pipeline penjualan, dan otomatisasi proses pemasaran & penjualan.",
    image: "./crm-app.png",
    tech: "NextJS, Golang, Custom Theme",
    link: "#",
  },
  {
    id: "6",
    title: "ERP — Win Printing Surabaya",
    description:
      "Sistem ERP untuk Win Printing: manajemen inventory, omnichannel marketplace, monitoring order, dan laporan keuangan terpadu.",
    image: "./ERP-WINPRINTING.png",
    tech: "Laravel, Golang, Express.Js, Tailwind CSS, RabitMQ, Postgree",
    link: "#",
  },
  {
    id: "7",
    title: "Villa Songgoriti Heritage",
    description:
      "Website company profile Villa Songgoriti Heritage dengan sistem reservasi online dan integrasi payment gateway untuk pemesanan kamar.",
    image: "./Villa Songgoriti Heritage.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "#",
  },
  {
    id: "8",
    title: "Travel Demo 5",
    description:
      "Demo interaktif: listing destinasi, pencarian, dan alur booking untuk Travel Demo 5 (contoh UI/UX).",
    image: "./travel-5.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "https://embed-iota.vercel.app/travel-5",
  },
  {
    id: "9",
    title: "Travel Demo 4",
    description:
      "Demo interaktif: listing destinasi, pencarian, dan alur booking untuk Travel Demo 4 (contoh UI/UX).",
    image: "./travel-4.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "https://embed-iota.vercel.app/travel-4",
  },
  {
    id: "10",
    title: "Travel Demo 3",
    description:
      "Demo interaktif: listing destinasi, pencarian, dan alur booking untuk Travel Demo 3 (contoh UI/UX).",
    image: "./travel-3.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "https://embed-iota.vercel.app/travel-3",
  },
  {
    id: "11",
    title: "Travel Demo 2",
    description:
      "Demo interaktif: listing destinasi, pencarian, dan alur booking untuk Travel Demo 2 (contoh UI/UX).",
    image: "./travel-2.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "https://embed-iota.vercel.app/travel-2",
  },
  {
    id: "12",
    title: "Travel Demo 1",
    description:
      "Demo interaktif: listing destinasi, pencarian, dan alur booking untuk Travel Demo 1 (contoh UI/UX).",
    image: "./travel-1.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "https://embed-iota.vercel.app/travel-1",
  },
];

export default function ProjectsSection({ onOpen }: { onOpen?: (p: Project) => void }) {
  return (
    <section id="proyek" className="max-w-[1400px] mx-auto px-6 py-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#00ADB5] animate-pulse" />
            <span className="font-sans text-xs tracking-widest text-[#00ADB5] uppercase">ENGINEERING_PORTFOLIO_v4.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none font-sans uppercase">
            FULL_STACK<br /><span className="text-[#00ADB5]">DEVELOPER</span>
          </h1>
        </div>
      </header>
      <main className="grid project-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {defaultProjects.map((project, idx) => {
          // Determine aspect ratio class
          const isMobile = /mobile|app/i.test(project.title) || /android|ios/i.test(project.description);
          const aspectClass = isMobile ? "aspect-[9/16]" : "aspect-[16/9]";
          // Mockup overlay label
          const overlayLabel = isMobile
            ? "MOBILE"
            : "WEBSITE";
          return (
            <div
              key={project.id}
              className="project-card relative bg-[#393E46] border border-[#00ADB5]/10 transition-all duration-500 cursor-pointer flex flex-col rounded-xl overflow-hidden group shadow-lg"
              onClick={() => onOpen?.(project)}
              tabIndex={0}
              role="button"
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen?.(project)}
            >
                <div className={`image-container ${aspectClass} relative overflow-hidden bg-[#1a1e24]`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  // Use object-top so the top of the image is prioritized when cropped
                  className="w-full h-full object-cover object-top filter grayscale brightness-60 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  style={{ transition: "all 0.6s ease" }}
                  priority={idx === 0}
                />
                <div className="mockup-overlay absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,rgba(0,173,181,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="border-2 border-[#00ADB5] p-4 bg-[#222831] text-[#00ADB5] text-xs font-bold font-sans uppercase">
                  {overlayLabel}
                  </div>
                </div>
                </div>
              <div className="badge-row flex flex-wrap gap-2 px-5 py-4 bg-[#222831]">
                {typeof project.tech === 'string'
                  ? project.tech.split(/,|•|\//).map((t) => (
                      <span key={t.trim()} className="tech-badge text-[10px] font-semibold text-[#00ADB5] border border-[#00ADB5] px-2 py-1 uppercase tracking-wider bg-transparent">
                        {t.trim()}
                      </span>
                    ))
                  : null}
              </div>
              <div className="project-details px-5 pb-5 pt-2 bg-[#222831]">
                <h3 className="project-title font-sans font-bold text-[14px] uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[10px] opacity-50 mt-1">{project.description}</p>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
}

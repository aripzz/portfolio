"use client";
import type { Project } from "../types/project";
import Image from "next/image";


const defaultProjects: Project[] = [
	{
		id: "1",
		title: "Mamalyfe App",
		description:
			"Aplikasi parenting modern untuk komunitas Mamalyfe, fitur utama: forum, artikel, dan pelacakan tumbuh kembang anak.",
		image: "./mamalyfe-app.webp",
		tech: "Flutter, Golang, Node.js, Postgree",
		link: "#",
	},
	{
		id: "2",
		title: "Mamalyfe Dashboard",
		description:
			"Dashboard admin untuk monitoring, manajemen konten, dan analitik platform Mamalyfe.",
		image: "./mamalyfe-dashboard.png",
		tech: "react.js, Golang, Express, Chart.js, Postgree",
		link: "https://webadmin.mamalyfe.id/login",
	},
	{
		id: "3",
		title: "ACI App",
		description:
			"Aplikasi internal PT AKU CINTA INDONESIA untuk manajemen operasional dan pelaporan.",
		image: "./aci-app.webp",
		tech: "Flutter, Firebase, REST API",
		link: "https://play.google.com/store/apps/details?id=com.aci.viuit&hl=en",
	},
	{
		id: "4",
		title: "Audiolyfe Wordpress",
		description:
			"Website company profile dan blog untuk Audiolyfe, dibangun dengan WordPress custom theme.",
		image: "./audiolyfe-wordpress.png",
		tech: "WordPress, PHP, Custom Theme",
		link: "https://audiolyfe.org",
	},
	{
		id: "5",
		title: "CRM ",
		description:
			"Aplikasi CRM untuk manajemen hubungan pelanggan dan otomatisasi penjualan.",
		image: "./crm-app.png",
		tech: "NextJS, Golang, Custom Theme",
		link: "#",
	},
	{
		id: "6",
		title: "ERP System - Win Printing Sby",
		description:
			"Aplikasi ERP untuk manajemen sumber daya perusahaan, inventory, omnichannel marketplace, monitoring order, dan laporan keuangan.",
		image: "/ERP-WINPRINTING.png",
		tech: "Laravel, Golang, Express.Js, Tailwind CSS, RabitMQ, Postgree",
		link: "#",
	},
  {
    id: "7",
    title: "Villa Songgoriti Heritage",
    description: "villa songgoriti heritage website company profile dengan fitur reservasi online and payment getway integration.",
    image: "/Villa Songgoriti Heritage.png",
    tech: "WordPress, PHP, Custom Theme",
    link: "#",
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

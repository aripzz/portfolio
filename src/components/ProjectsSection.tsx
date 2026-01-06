"use client";
import ProjectCard from "./ProjectCard";
import type { Project } from "../types/project";
import { useState, useEffect } from "react";


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
];

const techStacks = Array.from(
	new Set(
		defaultProjects
			.flatMap((p) =>
				typeof p.tech === "string" ? p.tech.split(/,|•|\s*\/\s*|\s*\|\s*/) : p.tech
			)
			.map((t) => t.trim())
			.filter(Boolean)
	)
);

export default function ProjectsSection({
	onOpen,
}: {
	onOpen?: (p: Project) => void;
}) {
	const [activeTech, setActiveTech] = useState<string | null>(null);
	// Move page state to component top level to satisfy hook rules
	const [page, setPage] = useState<number>(1);

	const list = activeTech
		? defaultProjects.filter((p) =>
				(typeof p.tech === "string"
					? p.tech.split(/,|•|\s*\/\s*|\s*\|\s*/)
					: p.tech
				)
					.map((t) => t.trim())
					.includes(activeTech)
		  )
		: defaultProjects;

	const perPage = 6;
	const totalPages = Math.max(1, Math.ceil(list.length / perPage));

	// If list changes (e.g. filter applied) and current page is out of range, reset to first page
	useEffect(() => {
		if (page > totalPages) {
			setPage(1);
		}
		// intentionally depend on list length / activeTech via totalPages
	}, [list.length, page, totalPages]);

	const visible = list.slice((page - 1) * perPage, page * perPage);

	return (
		<section id="proyek" className="max-w-7xl mx-auto px-6 py-12">
			<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
				<div>
					<h2 className="text-3xl font-bold mb-2 mt-6">Projek</h2>
					<p className="text-[#EEEEEE]/70 italic font-light">
						Pilih teknologi di bawah untuk memfilter projek. Klik gambar untuk
						melihat resolusi penuh dan detail teknis.
					</p>
				</div>
				<div className="flex gap-2 flex-wrap">
					{techStacks.map((tech) => (
						<button
							key={tech}
							className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border transition-colors duration-200 ${
								activeTech === tech
									? "bg-[#00ADB5] text-white border-[#00ADB5]"
									: "bg-[#393E46] text-[#00ADB5] border-[#00ADB5]/20"
							}`}
							onClick={() =>
								setActiveTech(activeTech === tech ? null : tech)
							}
							type="button"
						>
							{tech}
						</button>
					))}
				</div>
			</div>
			{/* Pagination + "Show more 6" UX */}
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				{list.length === 0 ? (
					<div className="col-span-12 text-center text-[#EEEEEE]/70 py-12">
						Tidak ada projek dengan teknologi tersebut.
					</div>
				) : (
					<>
						{/*
							Keep a simple paginated UX: 6 projects per page.
							Layout pattern: index % 3 === 0 -> large (md:col-span-8), others -> small (md:col-span-4)
						*/}
						<>
							{/* Projects grid for the current page */}
							<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
								{visible.map((project, idx) => {
									// pattern: 8 / 4 / 4 / 8 / 4 / 4 ...
									const spanClass = idx % 3 === 0 ? "md:col-span-8" : "md:col-span-4";
									return (
										<div key={project.id} className={`${spanClass}`}>
											<ProjectCard project={project} onOpen={onOpen} />
										</div>
									);
								})}
							</div>

							{/* Pagination controls */}
							<div className="md:col-span-12 flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
								{/* Page buttons */}
								<div className="flex items-center gap-2 flex-wrap">
									<button
										type="button"
										className="px-3 py-1 rounded border bg-[#393E46] text-[#00ADB5] disabled:opacity-40"
										onClick={() => setPage((p) => Math.max(1, p - 1))}
										disabled={page === 1}
									>
										Prev
									</button>

									{Array.from({ length: totalPages }).map((_, i) => {
										const pageNum = i + 1;
										const active = pageNum === page;
										return (
											<button
												key={pageNum}
												type="button"
												className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border transition-colors duration-200 ${
													active
														? "bg-[#00ADB5] text-white border-[#00ADB5]"
														: "bg-[#393E46] text-[#00ADB5] border-[#00ADB5]/20"
												}`}
												onClick={() => setPage(pageNum)}
											>
												{pageNum}
											</button>
										);
									})}

									<button
										type="button"
										className="px-3 py-1 rounded border bg-[#393E46] text-[#00ADB5] disabled:opacity-40"
										onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
										disabled={page === totalPages}
									>
										Next
									</button>
								</div>

								{/* Show more (next 6) quick action */}
								<div className="flex gap-2">
									{page < totalPages ? (
										<button
											type="button"
											onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
											className="px-4 py-2 rounded bg-[#00ADB5] text-black font-semibold shadow-md hover:brightness-95 transition"
										>
											Show more (6)
										</button>
									) : (
										<span className="text-sm text-[#EEEEEE]/70 italic">
											You have reached the last page.
										</span>
									)}
								</div>
							</div>
						</>
					</>
				)}
			</div>
		</section>
	);
}

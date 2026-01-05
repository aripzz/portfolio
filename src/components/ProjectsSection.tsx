import ProjectCard from "./ProjectCard";
import type { Project } from "../types/project";
import { useState } from "react";


const defaultProjects: Project[] = [
	{
		id: "1",
		title: "Mamalyfe App",
		description:
			"Aplikasi parenting modern untuk komunitas Mamalyfe, fitur utama: forum, artikel, dan pelacakan tumbuh kembang anak.",
		image: "./mamalyfe-app.webp",
		tech: "React Native, Node.js, MongoDB",
		link: "#",
	},
	{
		id: "2",
		title: "Mamalyfe Dashboard",
		description:
			"Dashboard admin untuk monitoring, manajemen konten, dan analitik platform Mamalyfe.",
		image: "./mamalyfe-dashboard.png",
		tech: "Next.js, Express, Chart.js",
		link: "#",
	},
	{
		id: "3",
		title: "ACI App",
		description:
			"Aplikasi internal PT AKU CINTA INDONESIA untuk manajemen operasional dan pelaporan.",
		image: "./aci-app.webp",
		tech: "Flutter, Firebase, REST API",
		link: "#",
	},
	{
		id: "4",
		title: "Audiolyfe Wordpress",
		description:
			"Website company profile dan blog untuk Audiolyfe, dibangun dengan WordPress custom theme.",
		image: "./audiolyfe-wordpress.png",
		tech: "WordPress, PHP, Custom Theme",
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
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				{list.length === 0 ? (
					<div className="col-span-12 text-center text-[#EEEEEE]/70 py-12">
						Tidak ada projek dengan teknologi tersebut.
					</div>
				) : (
					<>
						<div className="md:col-span-8">
							{list[0] && <ProjectCard project={list[0]} onOpen={onOpen} />}
						</div>
						<div className="md:col-span-4 flex flex-col gap-6">
							{list[1] && <ProjectCard project={list[1]} onOpen={onOpen} />}
							{list[2] && <ProjectCard project={list[2]} onOpen={onOpen} />}
						</div>
						<div className="md:col-span-8">
							{list[3] && <ProjectCard project={list[3]} onOpen={onOpen} />}
						</div>
					</>
				)}
			</div>
		</section>
	);
}

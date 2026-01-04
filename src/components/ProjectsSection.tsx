import ProjectCard from "./ProjectCard";
import type { Project } from "../types/project";

const defaultProjects: Project[] = [
	{
		id: "1",
		title: "Fintech Dashboard",
		description:
			"Meningkatkan kecekapan pemantauan data sebanyak 40% untuk pasukan operasi.",
		image: "/images/fintech.jpg",
		tech: "React, Tailwind CSS, Recharts",
		link: "#",
	},
	{
		id: "2",
		title: "Shopping App",
		description:
			"Reka bentuk mobile-first untuk pengalaman membeli-belah yang lancar.",
		image: "/images/shopping.jpg",
		tech: "Flutter & Firebase",
		link: "#",
	},
	{
		id: "3",
		title: "Agency Site",
		description: "Portfolio interaktif untuk agensi kreatif.",
		image: "/images/agency.jpg",
		tech: "GSAP & Three.js",
		link: "#",
	},
	{
		id: "4",
		title: "Analytics Engine",
		description:
			"Menukar data kompleks menjadi wawasan visual yang mudah difahami.",
		image: "/images/analytics.jpg",
		tech: "D3.js & Python",
		link: "#",
	},
];

export default function ProjectsSection({
	projects,
	onOpen,
}: {
	projects?: Project[];
	onOpen?: (p: Project) => void;
}) {
	const list = projects ?? defaultProjects;

	return (
		<section id="proyek" className="max-w-7xl mx-auto px-6 py-12">
			<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
				<div>
					<h2 className="text-3xl font-bold mb-2">Projek Pilihan</h2>
					<p className="text-[#EEEEEE]/50 italic font-light">
						Klik imej untuk melihat resolusi penuh dan perincian teknikal.
					</p>
				</div>
				<div className="flex gap-2">
					<span className="bg-sekunder text-[#00ADB5] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-[#00ADB5]/20">
						UI/UX
					</span>
					<span className="bg-sekunder text-[#00ADB5] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-[#00ADB5]/20">
						Web App
					</span>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				<div className="md:col-span-8">
					<ProjectCard project={list[0]} onOpen={onOpen} />
				</div>
				<div className="md:col-span-4 flex flex-col gap-6">
					<ProjectCard project={list[1]} onOpen={onOpen} />
					<ProjectCard project={list[2]} onOpen={onOpen} />
				</div>
				<div className="md:col-span-8">
					<ProjectCard project={list[3]} onOpen={onOpen} />
				</div>
			</div>
		</section>
	);
}

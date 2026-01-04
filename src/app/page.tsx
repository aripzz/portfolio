"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Lightbox from "@/components/Lightbox";
import type { Project } from "@/types/project";

const projects: Project[] = [
	{
		id: "1",
		title: "Fintech Dashboard",
		description:
			"Meningkatkan kecekapan pemantauan data sebanyak 40% untuk pasukan operasi.",
		image: "/images/fintech.jpg",
		tech: "React, Tailwind CSS, Recharts",
	},
	{
		id: "2",
		title: "Mobile E-Commerce App",
		description:
			"Reka bentuk mobile-first untuk pengalaman membeli-belah yang lancar.",
		image: "/images/shopping.jpg",
		tech: "Flutter & Firebase",
	},
	{
		id: "3",
		title: "Creative Agency Website",
		description: "Portfolio interaktif untuk agensi kreatif.",
		image: "/images/agency.jpg",
		tech: "GSAP & Three.js",
	},
	{
		id: "4",
		title: "Data Visualization Tool",
		description:
			"Menukar data kompleks menjadi wawasan visual yang mudah difahami.",
		image: "/images/analytics.jpg",
		tech: "D3.js & Python",
	},
];

export default function HomePage() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [active, setActive] = useState<Project | null>(null);

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") {
				setLightboxOpen(false);
				setActive(null);
				document.body.style.overflow = "auto";
			}
		}
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "auto";
		};
	}, []);

	const openLightbox = (p: Project) => {
		setActive(p);
		setLightboxOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
		setActive(null);
		document.body.style.overflow = "auto";
	};

	return (
		<main className="bg-utama text-[#EEEEEE] min-h-screen">
			<Navbar />
			<div className="pt-24">
				<Hero />
				<TimelineSection />
				<ProjectsSection projects={projects} onOpen={openLightbox} />
				<ContactSection />
			</div>

			{lightboxOpen && active && (
				<Lightbox project={active} onClose={closeLightbox} />
			)}
		</main>
	);
}

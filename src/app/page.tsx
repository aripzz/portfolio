"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Lightbox from "@/components/Lightbox";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import type { Project } from "@/types/project";

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
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <DottedGlowBackground
          className="w-full h-full mask-radial-to-90% mask-radial-at-center"
          opacity={0.5}
          gap={10}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
      </div>
			<div className="pt-24">
				<Hero />
				<TimelineSection />
				<ProjectsSection onOpen={openLightbox} />
				<ContactSection />
			</div>
			{lightboxOpen && active && (
				<Lightbox project={active} onClose={closeLightbox} />
			)}
		</main>
	);
}

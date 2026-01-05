"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen?: (p: Project) => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      role="button"
      tabIndex={0}
      onClick={() => onOpen?.(project)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen?.(project)}
      className="group relative overflow-hidden rounded-2xl bg-slate-800 aspect-video cursor-pointer border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      <Image src={project.image} alt={project.title} width={1200} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#222831]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" style={{ backgroundColor: 'rgba(57, 62, 70, 0.6)' }}>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-cyan-300 text-sm mt-1">{typeof project.tech === 'string' ? project.tech : project.tech.join(' • ')}</p>
      </div>
    </motion.article>
  );
}

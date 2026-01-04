"use client";

import Image from "next/image";
import type { Project } from "@/types/project";

export default function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  if (!project) return null;

  return (
    <div id="lightbox" className="fixed inset-0 z-[100] bg-utama/80 backdrop-blur-md flex-col items-center justify-center p-4 md:p-10 flex">
      <button onClick={onClose} className="absolute top-6 right-6 text-[#EEEEEE] text-4xl hover:text-[#00ADB5]">&times;</button>

      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-2/3 bg-sekunder rounded-xl overflow-hidden shadow-2xl border border-[#00ADB5]/10">
          <Image src={project.image} alt={project.title} width={1600} height={900} className="w-full h-auto object-contain max-h-[70vh]" />
        </div>
        <div className="w-full md:w-1/3 text-[#EEEEEE]">
          <div className="bg-[#EEEEEE]/90 rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-[#00ADB5]">{project.title}</h2>
            <p className="text-[#222831] leading-relaxed mb-8">{project.description}</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="w-full bg-[#00ADB5] hover:bg-opacity-90 text-utama py-3 rounded-md font-bold transition text-center">Live Demo</a>
              <button onClick={() => {}} className="w-full border border-sekunder hover:bg-sekunder text-[#222831] py-3 rounded-md font-bold transition text-sm">Lihat Kajian Kes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

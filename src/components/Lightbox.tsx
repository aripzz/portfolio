"use client";

import Image from "next/image";
import type { Project } from "@/types/project";

export default function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  if (!project) return null;

  return (
    <div id="lightbox" className="fixed inset-0 z-[100] bg-[#222831]/80 backdrop-blur-md flex-col items-center justify-center p-4 md:p-10 flex">
      <button onClick={onClose} className="absolute top-6 right-6 text-[#EEEEEE] text-4xl hover:text-[#00ADB5]">&times;</button>

      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-2/3 bg-[#393E46] rounded-xl shadow-2xl border border-[#00ADB5]/10 max-h-[80vh] overflow-hidden auto-scroll-group">
          {/* Inline keyframes/style to enable a smooth auto-scroll on hover.
              The image will gently translate up/down while the user hovers the container. */}
          <style>{`
            .auto-scroll-group .auto-scroll-content { transform: translateY(0); }
            .auto-scroll-group:hover .auto-scroll-content {
              animation: autoScroll 8s linear infinite alternate;
              /* adjust duration and 'to' translate percent to control speed & distance */
            }
            @keyframes autoScroll {
              from { transform: translateY(0); }
              to { transform: translateY(-25%); }
            }
          `}</style>

          <div className="p-4 flex items-start justify-center auto-scroll-content">
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 text-[#EEEEEE]">
          <div className="bg-[#EEEEEE]/90 rounded-xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-[#00ADB5]">{project.title}</h2>
            <p className="text-[#222831] leading-relaxed mb-8">{project.description}</p>
            <div className="flex flex-col gap-3">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#00ADB5] hover:bg-opacity-90 text-[#222831] py-3 rounded-md font-bold transition text-center"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { Project } from "./ProjectTypes";

interface ProjectCardProps {
    project: Project;
    onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
    <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden card-project cursor-pointer"
        onClick={() => onClick(project.id)}
        data-project-id={project.id}
    >
        <Image
            width={500}
            height={500}
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech) => (
                    <span className="tech-badge" key={tech}>{tech}</span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <span className="text-blue-600 hover:underline font-semibold text-sm">
                    Lihat Proyek{" "}
                    <i className="fas fa-external-link-alt ml-1"></i>
                </span>
                <span className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
                    <i className="fab fa-github mr-1"></i>GitHub
                </span>
            </div>
        </div>
    </div>
);

export default ProjectCard;
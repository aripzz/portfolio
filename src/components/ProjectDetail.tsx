import React from "react";
import { Project } from "./ProjectTypes";

interface ProjectDetailProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg project-details-expanded relative">
            <button
                aria-label="Tutup detail proyek"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
                onClick={onClose}
            >
                <i className="fas fa-times text-xl"></i>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.detail.description}
            </p>
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
                Teknologi yang Digunakan:
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.detail.techs.map((tech) => (
                    <span className="tech-badge" key={tech}>{tech}</span>
                ))}
            </div>
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
                Fitur Utama:
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                {project.detail.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                ))}
            </ul>
            <div className="flex gap-4">
                <a
                    href={project.detail.links.live}
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    Kembali <i className="fas fa-external-link-alt ml-2"></i>
                </a>
                <a
                    href={project.detail.links.github}
                    target="#project"
                    onClick={onClose}
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors duration-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                    <i className="fab fa-github mr-2"></i> GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;
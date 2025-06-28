import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { Project } from "./ProjectTypes";
import { motion } from "framer-motion";

const projects: Project[] = [
    {
        id: "project-1",
        image: "https://placehold.co/400x250/A78BFA/ffffff?text=Custome+ERP",
        title: "Sistem ERP Custome Win Printing",
        shortDescription: "Pengembangan dan pemeliharaan sistem ERP yang disesuaikan untuk optimasi operasional Win Printing.",
        techs: ["PHP", "Golang", "MySQL", "Docker", "RabbitMQ", "Webhooks"],
        detail: {
            description:
                "Bertanggung jawab penuh atas pengembangan dan pemeliharaan sistem ERP kustom yang dirancang untuk kebutuhan spesifik Win Printing. Proyek ini berfokus pada peningkatan efisiensi operasional melalui modul manajemen pesanan, inventaris, dan pengiriman. Mengimplementasikan integrasi seamless dengan berbagai platform marketplace online dan membangun layanan webhook untuk sinkronisasi data real-time, memastikan konsistensi status pesanan dan inventaris.",
            techs: [
                "PHP", "Golang", "MySQL", "RabbitMQ", "Docker", "Git", "DBeaver", "Webhooks"
            ],
            features: [
                "Modul manajemen pesanan, inventaris, dan pengiriman yang efisien.",
                "Integrasi dua arah dengan multiple online marketplaces.",
                "Layanan webhook untuk sinkronisasi status pesanan real-time.",
                "Optimasi query SQL dan refactoring kode untuk peningkatan performa sistem.",
                "Deployment aplikasi menggunakan container Docker.",
                "Dokumentasi tutorial untuk fitur delivery, meningkatkan alur kerja tim Warehouse dan Sales."
            ],
            links: {
                live: "#", // Jika ada live demo, sesuaikan
                github: "#", // Jika open-source, sesuaikan
            },
        },
    },
    {
        id: "project-2",
        image: "https://placehold.co/400x250/ff1a75/ffffff?text=Ojek+Online+App+(VIUIT)",
        title: "Platform Microservices Skalabel (PT AKU CINTA INDONESIA)",
        shortDescription: "Implementasi dan standardisasi arsitektur microservices berbasis Golang untuk aplikasi berskala besar.",
        techs: ["Golang", "Echo Framework", "PostgreSQL", "Redis", "Docker", "GitLab"],
        detail: {
            description:
                "Memimpin implementasi microservices skalabel menggunakan Golang dengan framework Echo, yang dirancang untuk mendukung aplikasi berskala besar. Bertanggung jawab atas standardisasi konfigurasi Docker di berbagai proyek untuk mengoptimalkan proses deployment. Mengintegrasikan Redis untuk caching data berkecepatan tinggi, meningkatkan responsivitas aplikasi. Mendokumentasikan seluruh API menggunakan Postman, memastikan kolaborasi yang efisien dengan tim frontend dan pihak ketiga.",
            techs: [
                "Golang", "Echo Framework", "PostgreSQL", "Redis", "Docker", "RabbitMQ", "GitLab"
            ],
            features: [
                "Implementasi arsitektur microservices yang scalable dan modular.",
                "Optimasi proses deployment melalui standardisasi konfigurasi Docker.",
                "Pemanfaatan Redis untuk caching dan pemrosesan data berkecepatan tinggi.",
                "Dokumentasi API yang komprehensif menggunakan Postman.",
                "Pengelolaan dependensi dan integrasi continuous delivery melalui GitLab."
            ],
            links: {
                live: "#",
                github: "#",
            },
        },
    },
    {
        id: "project-3",
        image: "https://placehold.co/400x250/34D399/ffffff?text=Parenting+Platform+(Mamalyfe APP)",
        title: "Platform Parenting Mamalyfe",
        shortDescription: "Pengembangan web dan API untuk platform parenting dengan fitur komunikasi real-time dan pembayaran.",
        techs: ["NodeJS", "Golang", "PostgreSQL", "React", "WebSocket", "Microservices"],
        detail: {
            description:
                "Mengembangkan aplikasi web dan API untuk platform parenting Mamalyfe, menggunakan kombinasi NodeJS dan Golang. Mengimplementasikan fitur komunikasi real-time yang krusial menggunakan WebSocket untuk pembaruan pengguna secara instan. Mengintegrasikan gateway pembayaran yang aman dan membangun sistem otomatisasi pembuatan invoice. Bertanggung jawab atas strategi backup database dan pengelolaan proses deployment untuk layanan frontend dan backend.",
            techs: [
                "NodeJS", "Golang", "PostgreSQL", "React", "WebSocket", "Microservices"
            ],
            features: [
                "Aplikasi web dan API fungsional untuk platform parenting.",
                "Fitur komunikasi real-time melalui WebSocket untuk notifikasi dan interaksi pengguna.",
                "Integrasi gateway pembayaran dan sistem otomatisasi invoice.",
                "Proses backup database yang reliable dan strategi deployment yang efisien.",
                "Penggunaan arsitektur microservices untuk skalabilitas dan pemeliharaan yang lebih baik."
            ],
            links: {
                live: "#",
                github: "#",
            },
        },
    },
    {
        id: "project-4",
        image: "https://placehold.co/400x250/66ffc2/ffffff?text=Kitani+Apps",
        title: "Backend Mobile App & CI/CD (PT SOLVE8 SOLUSI INDONESIA)",
        shortDescription: "Membangun backend Golang untuk aplikasi mobile React Native dengan integrasi CI/CD dan Redis.",
        techs: ["Golang", "React Native", "PostgreSQL", "Redis", "Docker", "Bitbucket Pipeline"],
        detail: {
            description:
                "Membangun dan mendeploy aplikasi mobile menggunakan React Native, didukung oleh layanan backend yang robust dengan Golang. Mengkonfigurasi pipeline CI/CD di Bitbucket untuk otomatisasi proses deployment dan implementasi Redis untuk microservices guna meningkatkan performa. Mengelola database PostgreSQL dan deployment aplikasi dalam container Docker, memastikan efisiensi dan konsistensi lingkungan pengembangan dan produksi.",
            techs: [
                "Golang", "React Native", "PostgreSQL", "Redis", "Docker", "Bitbucket Pipeline", "GitHub Desktop"
            ],
            features: [
                "Pengembangan backend API menggunakan Golang untuk aplikasi mobile.",
                "Deployment aplikasi mobile lintas platform dengan React Native.",
                "Konfigurasi CI/CD pipelines (Bitbucket) untuk otomatisasi deployment.",
                "Implementasi Redis untuk optimasi performa microservices.",
                "Manajemen database PostgreSQL dan deployment aplikasi dalam container Docker."
            ],
            links: {
                live: "#",
                github: "#",
            },
        },
    },
    {
        id: "project-5",
        image: "https://placehold.co/400x250/8A2BE2/ffffff?text=RESTful+API+Hris",
        title: "Pengembangan RESTful API (PT MSBU Konsultan Indonesia)",
        shortDescription: "Pengembangan dan optimasi RESTful API menggunakan Golang dengan framework Fiber.",
        techs: ["Golang", "Fiber Framework", "MySQL", "Docker", "Swagger"],
        detail: {
            description:
                "Mengembangkan dan memelihara RESTful API yang efisien dan performa tinggi menggunakan Golang dengan framework Fiber. Proyek ini melibatkan optimasi query SQL dan penerapan praktik refactoring kode untuk memastikan kinerja aplikasi yang maksimal. Bertanggung jawab atas deployment microservices dan pengelolaan lingkungan pengembangan menggunakan Docker. Mendokumentasikan seluruh API menggunakan Swagger, memfasilitasi integrasi yang mudah dan kolaborasi yang efektif dengan tim lintas fungsi.",
            techs: [
                "Golang", "Fiber Framework", "MySQL", "Docker", "Git", "DBeaver", "Swagger"
            ],
            features: [
                "Pengembangan RESTful API yang efisien dengan Golang dan Fiber.",
                "Optimasi query SQL dan refactoring kode untuk peningkatan kinerja.",
                "Deployment microservices menggunakan Docker untuk skalabilitas.",
                "Dokumentasi API yang komprehensif dengan Swagger.",
                "Kolaborasi aktif dengan tim lintas fungsi untuk integrasi API."
            ],
            links: {
                live: "#",
                github: "#",
            },
        },
    }
];

const ProjectsSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const handleProjectClick = (id: string) => {
        const project = projects.find((p) => p.id === id);
        setSelectedProject(project || null);
    };
    const handleCloseDetail = () => {
        setSelectedProject(null);
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1 // Penundaan antara animasi anak-anak
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };
    return (
        <section id="project" className="container min-h-screen max-w-7xl mx-auto py-16 px-4 text-gray-900 dark:text-white">
            <motion.h2
                className="text-4xl font-extrabold text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                Proyek Saya
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                    >
                        <ProjectCard
                            project={project}
                            onClick={handleProjectClick}
                        />
                    </motion.div>
                ))}
            </motion.div>
            {selectedProject && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-30">
                    <motion.div
                        className="relative w-full max-w-3xl mx-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
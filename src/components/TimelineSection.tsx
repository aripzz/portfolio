import React, { useState, ChangeEvent } from "react";
import { motion, AnimatePresence } from 'framer-motion';

type TimelineEvent = {
    id: string;
    title: string;
    subtitle: string;
    details: {
        description: string;
        items: string[];
    };
};

const events: TimelineEvent[] = [
    {
        id: "event-1",
        title: "Freelance Full Stack Developer",
        subtitle: "CV Win Printing Surabaya | Jul 2024 - Now 2025",
        details: {
            description:
                "Mengembangkan sistem ERP kustom yang meningkatkan efisiensi operasional Win Printing. Mengintegrasikan ERP dengan marketplace online dan membangun webhook untuk sinkronisasi data real-time (pesanan, inventaris, pengiriman). Mengoptimalkan database (SQL) dan mengelola deployment microservices dengan Docker.",
            items: [
                "Membangun dan memelihara sistem ERP kustom untuk efisiensi operasional.",
                "Mengintegrasikan ERP dengan marketplace online (pesanan, inventaris, pengiriman).",
                "Menciptakan webhook untuk sinkronisasi status pesanan real-time.",
                "Menyusun dokumentasi tutorial untuk meningkatkan kolaborasi tim.",
                "Mengoptimalkan query SQL dan refactoring kode untuk performa.",
                "Melakukan deployment microservices dan mengelola lingkungan Docker.",
            ],
        },
    },
    {
        id: "event-2",
        title: "Golang Developer",
        subtitle: "PT MSBU Konsultan Indonesia | Feb 2024 - Jul 2024",
        details: {
            description:
                "Berfokus pada pengembangan dan pemeliharaan RESTful API menggunakan Golang dengan framework Fiber. Mengoptimalkan query SQL dan menerapkan refactoring kode untuk meningkatkan kinerja aplikasi. Bertanggung jawab untuk deployment microservices dan pengelolaan lingkungan pengembangan menggunakan Docker. Berkontribusi dalam dokumentasi API menggunakan Swagger dan berkolaborasi dengan tim lintas fungsi.",
            items: [
                "Mengembangkan dan memelihara RESTful API menggunakan Golang dengan Fiber framework.",
                "Mengoptimalkan query SQL dan refactoring kode untuk peningkatan kinerja.",
                "Melakukan deployment microservices dan mengelola lingkungan pengembangan dengan Docker.",
                "Mendokumentasikan API menggunakan Swagger dan berkolaborasi dengan tim lintas fungsi.",
            ],
        },
    },
    {
        id: "event-3",

        title: "Full Stack Developer",
        subtitle: "PT AKU CINTA INDONESIA | Feb 2023 - Dec 2023",
        details: {
            description:
                "Mengimplementasikan microservices skalabel menggunakan Golang dengan framework Echo. Menstandardisasi konfigurasi Docker untuk optimasi proses deployment di seluruh proyek. Mengintegrasikan Redis untuk pemrosesan data berkecepatan tinggi dan mendokumentasikan API menggunakan Postman.",
            items: [
                "Mengimplementasikan microservices skalabel menggunakan Golang dengan framework Echo.",
                "Menstandardisasi konfigurasi Docker untuk optimasi deployment di seluruh proyek.",
                "Mengintegrasikan Redis untuk pemrosesan data berkecepatan tinggi.",
                "Mendokumentasikan API menggunakan Postman.",
            ],
        },
    },
    {
        id: "event-4",
        title: "Staff IT",
        subtitle: "PT Mamalyfe Selalu Di Berkati | Feb 2021 - Aug 2022",
        details: {
            description:
                "Mengembangkan aplikasi web dan API untuk platform parenting Mamalyfe menggunakan NodeJS dan Golang. Mengimplementasikan fitur komunikasi real-time menggunakan WebSocket untuk pembaruan pengguna secara real-time. Mengintegrasikan gateway pembayaran dan otomatisasi pembuatan invoice untuk platform. Membuat cadangan database dan menangani deployment untuk layanan frontend dan backend.",
            items: [
                "Mengembangkan aplikasi web dan API menggunakan NodeJS dan Golang.",
                "Mengimplementasikan fitur komunikasi real-time dengan WebSocket.",
                "Mengintegrasikan gateway pembayaran dan otomatisasi pembuatan invoice.",
                "Membuat cadangan database dan menangani deployment frontend/backend.",
            ],
        },
    },
    {
        id: "event-5",
        title: "S1 System Informasi",
        subtitle: "Universitas Dinamika | Lulus 2023",
        details: {
            description:
                "Lulus dengan gelar Sarjana Sistem Informasi pada tahun 2023, menunjukkan dasar yang kuat dalam ilmu komputer dan pengembangan sistem. Mencapai IPK 3.33 dan meraih juara 2 dalam Kompetisi Pemrograman Internal, menunjukkan kemampuan analitis dan pemecahan masalah yang kuat.",
            items: [
                "Memperoleh gelar Sarjana Sistem Informasi pada tahun 2023.",
                "IPK: 3.33.",
                "Meraih Juara 2 dalam Kompetisi Pemrograman Internal.",
            ],
        },
    },
];

const TimelineSection: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState(events[0].id);

    const handleEventChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedEvent(e.target.value);
    };

    // Variasi animasi untuk item timeline
    const timelineItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    // Variasi animasi untuk detail timeline
    const detailVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 }
    };

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center p-4  text-gray-900 dark:text-gray-100">
            <motion.div
                className="relative py-6 sm:py-12 w-full max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Riwayat Karir & Pendidikan
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Timeline */}
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }} // Staggered children animation
                    >
                        <div className="absolute inset-y-0 left-3 md:left-0.1 -translate-x-0.1 w-px bg-gray-300 dark:bg-gray-700" />
                        <div id="timeline-events" className="space-y-10">
                            {events.map((event) => (
                                <motion.label
                                    key={event.id}
                                    className="relative flex items-center cursor-pointer group"
                                    variants={timelineItemVariants}
                                    transition={{ duration: 0.5 }}
                                >
                                    <input
                                        type="radio"
                                        id={event.id}
                                        name="timeline-event"
                                        value={event.id}
                                        className="hidden peer"
                                        checked={selectedEvent === event.id}
                                        onChange={handleEventChange}
                                    />
                                    <div
                                        className={`z-10 w-6 h-6 rounded-full border-2 ${selectedEvent === event.id
                                            ? "border-blue-500"
                                            : "border-gray-400"
                                            } bg-white dark:bg-gray-800 timeline-dot flex items-center justify-center transition-all duration-300`}
                                    >
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full ${selectedEvent === event.id
                                                ? "bg-blue-500"
                                                : "bg-gray-500"
                                                } inner-dot transition-all duration-300`}
                                        ></div>
                                    </div>
                                    <div className="ml-6 flex-grow border-b border-gray-200 dark:border-gray-800 pb-4 group-last:border-b-0">
                                        <h3
                                            className={`font-semibold text-lg text-gray-800 dark:text-gray-200 ${selectedEvent === event.id
                                                ? "text-blue-600 dark:text-blue-400"
                                                : ""
                                                } transition-colors duration-300 peer-checked:text-blue-600 dark:peer-checked:text-blue-400`}
                                        >
                                            {event.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {event.subtitle}
                                        </p>
                                    </div>
                                </motion.label>
                            ))}
                        </div>
                    </motion.div>

                    {/* Timeline Details */}
                    <div
                        id="timeline-details-container"
                        className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg min-h-[750px]"
                    >
                        <AnimatePresence mode='wait'> {/* 'wait' mode akan menunggu animasi keluar selesai sebelum animasi masuk dimulai */}
                            {selectedEvent && ( // Render hanya jika selectedEvent ada
                                <motion.div
                                    key={selectedEvent} // Key penting untuk AnimatePresence agar tahu elemen mana yang berubah
                                    className="timeline-detail absolute inset-0 p-8" // Gunakan absolute agar tidak ada reflow saat transisi
                                    variants={detailVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {/* Cari dan tampilkan detail event yang sesuai */}
                                    {events.find(event => event.id === selectedEvent) && (
                                        <>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                                {events.find(event => event.id === selectedEvent)?.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                {events.find(event => event.id === selectedEvent)?.details.description}
                                            </p>
                                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                                {events.find(event => event.id === selectedEvent)?.details.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default TimelineSection;
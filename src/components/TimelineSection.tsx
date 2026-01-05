import React from "react";


type TimelineEvent = {
    id: string;
    title: string;
    org?: string;
    period?: string;
    description: string;
    items?: string[];
};

const timeline: TimelineEvent[] = [
    {
        id: "event-1",
        title: "Freelance Project Base",
        org: "PT. Qlcom Solusi Bisnis",
        period: "Jul 2025 - Oct 2025",
        description:
            "Mengembangkan sistem ERP menggunakan Laravel dan Express.js. Membuat monitoring untuk server dan database serta melakukan migrasi data dari aplikasi lama ke aplikasi baru untuk memastikan kontinuitas layanan.",
        items: [
            "Mengembangkan sistem ERP dengan Laravel dan Express.js.",
            "Membangun monitoring server dan database untuk observabilitas.",
            "Melakukan migrasi data dari aplikasi lama ke aplikasi baru.",
        ],
    },
    {
        id: "event-2",
        title: "Freelance Full Stack Developer",
        org: "CV Win Printing Surabaya",
        period: "Jul 2024 - Now 2025",
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
    {
        id: "event-3",
        title: "Golang Developer",
        org: "PT MSBU Konsultan Indonesia",
        period: "Feb 2024 - Jul 2024",
        description:
            "Berfokus pada pengembangan dan pemeliharaan RESTful API menggunakan Golang dengan framework Fiber. Mengoptimalkan query SQL dan menerapkan refactoring kode untuk meningkatkan kinerja aplikasi. Bertanggung jawab untuk deployment microservices dan pengelolaan lingkungan pengembangan menggunakan Docker. Berkontribusi dalam dokumentasi API menggunakan Swagger dan berkolaborasi dengan tim lintas fungsi.",
        items: [
            "Mengembangkan dan memelihara RESTful API menggunakan Golang dengan Fiber framework.",
            "Mengoptimalkan query SQL dan refactoring kode untuk peningkatan kinerja.",
            "Melakukan deployment microservices dan mengelola lingkungan pengembangan dengan Docker.",
            "Mendokumentasikan API menggunakan Swagger dan berkolaborasi dengan tim lintas fungsi.",
        ],
    },
    {
        id: "event-4",
        title: "Full Stack Developer",
        org: "PT AKU CINTA INDONESIA",
        period: "Feb 2023 - Dec 2023",
        description:
            "Mengimplementasikan microservices skalabel menggunakan Golang dengan framework Echo. Menstandardisasi konfigurasi Docker untuk optimasi proses deployment di seluruh proyek. Mengintegrasikan Redis untuk pemrosesan data berkecepatan tinggi dan mendokumentasikan API menggunakan Postman.",
        items: [
            "Mengimplementasikan microservices skalabel menggunakan Golang dengan framework Echo.",
            "Menstandardisasi konfigurasi Docker untuk optimasi deployment di seluruh proyek.",
            "Mengintegrasikan Redis untuk pemrosesan data berkecepatan tinggi.",
            "Mendokumentasikan API menggunakan Postman.",
        ],
    },
    {
        id: "event-5",
        title: "Staff IT",
        org: "PT Mamalyfe Selalu Di Berkati",
        period: "Feb 2021 - Aug 2022",
        description:
            "Mengembangkan aplikasi web dan API untuk platform parenting Mamalyfe menggunakan NodeJS dan Golang. Mengimplementasikan fitur komunikasi real-time menggunakan WebSocket untuk pembaruan pengguna secara real-time. Mengintegrasikan gateway pembayaran dan otomatisasi pembuatan invoice untuk platform. Membuat cadangan database dan menangani deployment untuk layanan frontend dan backend.",
        items: [
            "Mengembangkan aplikasi web dan API menggunakan NodeJS dan Golang.",
            "Mengimplementasikan fitur komunikasi real-time dengan WebSocket.",
            "Mengintegrasikan gateway pembayaran dan otomatisasi pembuatan invoice.",
            "Membuat cadangan database dan menangani deployment frontend/backend.",
        ],
    },
    {
        id: "event-6",
        title: "S1 Sistem Informasi",
        org: "Universitas Dinamika",
        period: "Lulus 2023",
        description:
            "Lulus dengan gelar Sarjana Sistem Informasi pada tahun 2023, menunjukkan dasar yang kuat dalam ilmu komputer dan pengembangan sistem. Mencapai IPK 3.33 dan meraih juara 2 dalam Kompetisi Pemrograman Internal, menunjukkan kemampuan analitis dan pemecahan masalah yang kuat.",
        items: [
            "Memperoleh gelar Sarjana Sistem Informasi pada tahun 2023.",
            "IPK: 3.33.",
            "Meraih Juara 2 dalam Kompetisi Pemrograman Internal.",
        ],
    },
];

// Small presentational component for the card content
function TimelineCard({ event }: { event: TimelineEvent }) {
    return (
        <div className="p-4 bg-white/3 rounded-xl border border-white/5 shadow-sm">
            <header className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#EEEEEE]" id={`${event.id}-title`}>
                        {event.title}
                    </h3>
                    {event.org && <p className="text-sm text-[#00ADB5] font-medium">{event.org}</p>}
                </div>
                {event.period && (
                    <time className="text-xs text-[#EEEEEE]/60 whitespace-nowrap" dateTime={event.period}>
                        {event.period}
                    </time>
                )}
            </header>

            <p className="mt-3 text-sm text-[#EEEEEE]/80 leading-relaxed">{event.description}</p>

            {event.items && (
                <ul className="mt-3 space-y-2 list-inside text-sm text-[#EEEEEE]/70">
                    {event.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 w-2 h-2 bg-[#00ADB5] rounded-full flex-shrink-0" />
                            <span>{it}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function TimelineMarker() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#00ADB5] shadow-[0_0_12px_rgba(0,173,181,0.35)]" />
                <div className="absolute left-1/2 top-full w-px h-6 bg-transparent -translate-x-1/2" />
            </div>
        </div>
    );
}

function MobileTimelineItem({ event }: { event: TimelineEvent }) {
    return (
        <article className="block md:hidden" aria-labelledby={`${event.id}-title`}>
            <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#00ADB5] shadow-[0_0_12px_rgba(0,173,181,0.35)] mt-2" />
                    <div className="w-px bg-white/8 flex-1 h-full mt-2" />
                </div>

                <div className="flex-1">
                    <TimelineCard event={event} />
                </div>
            </div>
        </article>
    );
}

function DesktopTimelineItem({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) {
    return (
        <article className="hidden md:block relative" aria-labelledby={`${event.id}-title`}>
            <div className="md:grid md:grid-cols-9 md:items-start">
                <div
                    className={`md:col-span-4 md:px-6 ${isLeft ? "md:col-start-1" : "md:col-start-1 md:opacity-0"}`}
                >
                    <TimelineCard event={event} />
                </div>

                {/* Center marker column */}
                <div className="md:col-span-1 flex md:justify-center md:items-center">
                    <div className="hidden md:flex items-center justify-center">
                        <TimelineMarker />
                    </div>
                </div>

                <div
                    className={`md:col-span-4 md:px-6 ${isLeft ? "md:col-start-6 md:hidden" : "md:col-start-6"}`}
                >
                    <div className={`p-4 ${isLeft ? "hidden md:block" : "block"}`}>
                        <TimelineCard event={event} />
                    </div>
                </div>
            </div>
        </article>
    );
}

function TimelineItem({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) {
    // Render a dedicated mobile layout and a dedicated desktop layout.
    // Visibility is controlled purely with Tailwind responsive utilities (no client JS).
    return (
        <>
            <MobileTimelineItem event={event} />
            <DesktopTimelineItem event={event} isLeft={isLeft} />
        </>
    );
}

export default function TimelineSection(): React.ReactElement {
    return (
        <section id="pengalaman" className="py-12 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#393E46]/30 rounded-3xl p-6 sm:p-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2 text-[#EEEEEE]">
                        Riwayat Karir & Pendidikan
                    </h2>
                    <p className="text-center text-[#EEEEEE]/60 max-w-3xl mx-auto mb-8">
                        Ringkasan pengalaman kerja, proyek penting, dan pendidikan.
                    </p>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-white/10 transform -translate-x-1/2" />
                        <div className="space-y-6">
                            {timeline.map((t, idx) => (
                                <TimelineItem key={t.id} event={t} isLeft={idx % 2 === 0} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

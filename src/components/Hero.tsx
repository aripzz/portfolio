import Image from "next/image";
export default function Hero() {
  return (
    <header id="about" className="pt-20 sm:pt-28 lg:pt-40 pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-end md:order-2 order-1">
            <div
                className="w-36 h-36 sm:w-48 sm:h-56 md:w-64 md:h-64 rounded-xl bg-gradient-to-br from-[#00ADB5]/15 to-[#39424e]/6 border border-[#EEEEEE]/8 flex items-center justify-center shadow-md"
            >
                <Image
                src="./profile.jpg"
                alt="Arief Nur Abdullah — profile photo"
                className="w-full h-full object-cover rounded-xl"
                loading="eager"
                decoding="async"
                width={256}
                height={256}
                />
            </div>
            </div>

            <div className="mx-auto md:mx-0 max-w-3xl text-center md:text-left md:order-1 order-2">
            <p className="text-sm uppercase tracking-widest text-[#EEEEEE]/60 mb-3">Hi, saya</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.05]">
                Arief Nur Abdullah
                <span className="block text-2xl sm:text-3xl md:text-4xl text-[#00ADB5] font-semibold mt-2">
                Full‑Stack Developer
                </span>
            </h1>

            <p className="text-base sm:text-lg text-[#EEEEEE]/70 mb-6 max-w-2xl leading-relaxed">
                Full‑Stack Developer dengan pengalaman lebih dari 4 tahun — membangun dan maintenance aplikasi berkinerja tinggi menggunakan Golang, PHP (Laravel, CodeIgniter, Yii), Express.js, dan TypeScript. Terampil dalam pipeline CI/CD, arsitektur berbasis pesan dengan RabbitMQ, serta integrasi dan kustomisasi WordPress. Fokus pada performa, skalabilitas, dan kode yang mudah dipelihara untuk solusi produksi yang dapat scaleup.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mb-6">
                <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 bg-[#00ADB5] text-white rounded-md shadow-sm hover:bg-[#00a6ab] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00ADB5] transition"
                aria-label="Hubungi Arief"
                >
                Hubungi Saya
                </a>

                <a
                href="/portfolio/CV - Arief Nur Abdullah.pdf"
                className="inline-flex items-center justify-center px-5 py-3 border border-[#EEEEEE]/10 text-[#EEEEEE] rounded-md hover:bg-[#EEEEEE]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EEEEEE] transition"
                aria-label="Lihat CV Arief (buka di tab baru)"
                target="_blank"
                rel="noopener noreferrer"
                >
                Lihat CV
                </a>
            </div>

            <div className="mt-2">
                <ul
                className="flex flex-wrap gap-2 text-sm text-[#EEEEEE]/60 justify-center md:justify-start overflow-x-auto no-scrollbar py-1"
                aria-hidden
                >
                <li className="px-3 py-1 bg-[#EEEEEE]/5 hover:bg-[#EEEEEE]/70 hover:text-[#222831] rounded-full whitespace-nowrap">React</li>
                <li className="px-3 py-1 bg-[#EEEEEE]/5 hover:bg-[#EEEEEE]/70 hover:text-[#222831] rounded-full whitespace-nowrap">Next.js</li>
                <li className="px-3 py-1 bg-[#EEEEEE]/5 hover:bg-[#EEEEEE]/70 hover:text-[#222831] rounded-full whitespace-nowrap">TypeScript</li>
                <li className="px-3 py-1 bg-[#EEEEEE]/5 hover:bg-[#EEEEEE]/70 hover:text-[#222831] rounded-full whitespace-nowrap">Node.js</li>
                <li className="px-3 py-1 bg-[#EEEEEE]/5 hover:bg-[#EEEEEE]/70 hover:text-[#222831] rounded-full whitespace-nowrap">Tailwind CSS</li>
                </ul>
            </div>
            </div>
        </div>
    </header>
  );
}

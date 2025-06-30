"use client";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useSideBar } from "../context/sidebarContext";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollVelocity from "@/components/ScrollVelocity";
// import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function Home() {
  const { isOpen } = useSideBar();
  return (
    <main className="main bg-gray-100 dark:bg-gray-800">
      <div id="home" className={`duration-500 ${isOpen ? "ml-60" : "ml-16"}`}>
        <header className="relative bg-slate-800 text-center flex items-center justify-center min-h-screen">
          <div className="container">
            <div
            className="flex flex-col items-center justify-center h-80"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                width={500}
                height={500}
                src="/profile.jpg"
                alt="Foto Profil Arief Nur Abdullah"
                className="rounded-full z-1 absolute w-80 h-80 mx-auto mb-6 border-4 border-blue-500 shadow-lg"
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 0,
                }}
              >
                <ScrollVelocity
                  texts={["Fullstack Web developer"]}
                  className="custom-scroll-text"
                />
              </div>
            </div>
            <h1 className="text-4xl z-3 md:text-6xl font-extrabold text-white leading-tight mb-4">
              Halo, saya <span className="text-accent">Arief Nur Abdullah</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Seorang{" "}
              <span className="font-semibold text-white">
                Fullstack Web Developer
              </span>{" "}
              yang bersemangat dalam membangun solusi web yang inovatif dan
              efisien.
            </p>

            <a href="#proyek" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold
                     hover:bg-blue-300 shadow-xl/20">
              Lihat Proyek Saya
            </a>
          </div>
        </header>
        <hr className="border-t border-gray-300" />
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-16 px-4 text-gray-900 dark:text-gray-100
"
        >
          <div className="container mx-auto py-16 px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Tentang Saya
            </motion.h2>
            

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
                <p className="text-lg leading-relaxed mb-4 text-slate-300">
                    Saya adalah seorang pengembang web fullstack dengan pengalaman dalam mendesain, mengembangkan, dan memelihara aplikasi web yang responsif dan skalabel. Saya memiliki minat yang kuat dalam menciptakan pengalaman pengguna yang intuitif dan fungsional.
                </p>
                <p className="text-lg leading-relaxed text-slate-300">
                    Keahlian saya meliputi <span className="font-medium text-white">JavaScript (React, Node.js), Python (Django, Flask), HTML, CSS (Tailwind CSS)</span>, serta bekerja dengan database seperti <span class="font-medium text-white">PostgreSQL dan MongoDB</span>. Saya selalu antusias untuk belajar teknologi baru dan menerapkan praktik terbaik dalam setiap proyek.
                </p>
            </div>
            <div className="md:order-1 flex justify-center">
                <div className="bg-card p-6 rounded-lg shadow-xl w-full max-w-sm">
                    <h3 className="text-xl font-semibold mb-4 text-white">Keahlian Teknis</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li><span className="font-semibold text-accent">Frontend:</span> React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap</li>
                        <li><span className="font-semibold text-accent">Backend:</span> Node.js (Express), Golang (Echo, Go Fiber), PHP (Laravel)</li>
                        <li><span className="font-semibold text-accent">Database:</span> PostgreSQL, MongoDB, MySQL, Firebase</li>
                        <li><span className="font-semibold text-accent">Tools:</span> Git, Docker, Webpack, Figma</li>
                    </ul>
                </div>
            </div>
        </div>
          </div>
        </section>
        <hr className="border-t border-gray-300" />
        <ProjectsSection />
        <hr className="border-t border-gray-300" />
        <TimelineSection />
        <hr className="border-t border-gray-300" />
        <section
          id="contact"
          className="container min-h-screen mx-auto py-16 px-4 "
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Hubungi Saya
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <p className="text-center text-lg mb-6 dark:text-white">
              Tertarik untuk berkolaborasi atau hanya ingin menyapa? Silakan
              hubungi saya melalui form di bawah atau melalui media sosial.
            </p>

            <form action="#" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-3 rounded-md text-xs font-semibold hover:bg-blue-700"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <p className="text-lg mb-4 text-gray-700 dark:text-white">
                Atau temukan saya di:
              </p>
              <div className="flex justify-center space-x-6 text-3xl">
                <motion.a
                  href="https://www.linkedin.com/in/ariefna/"
                  className="text-gray-500 hover:text-blue-600"
                  aria-label="LinkedIn Profile"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <FaLinkedinIn size={30} />
                </motion.a>
                <motion.a
                  href="https://github.com/aripzz"
                  className="text-gray-500 hover:text-white"
                  aria-label="GitHub Profile"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaGithub size={30} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/arifn.ab/"
                  className="text-gray-500 hover:text-pink-600"
                  aria-label="Instagram Profile"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <FaInstagram size={30} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

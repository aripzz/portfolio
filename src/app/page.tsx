'use client'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { useSideBar } from '../context/sidebarContext';
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';
export default function Home() {
  const { isOpen } = useSideBar();
  return (<main className="main bg-gray-100 dark:bg-gray-800">
    <div id="home" className={`duration-500 ${isOpen ? 'ml-60' : 'ml-16'}`}>
      <section
        className='min-h-screen flex items-center justify-center py-16 px-4
                  dark:text-white text-gray-900'
      >
        <motion.div
          className="container mx-auto text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
          >
            <TypeAnimation
              sequence={[
                'Halo, Saya Arief Nur A',
                5000,
                'Halo, Saya Fullstack Developer',
                5000,
                'Halo, Saya Focus In Web Development',
                5000,
              ]}
              wrapper="span"
              speed={40}
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', display: 'inline-block' }}
              className="text-blue-300" // Ganti dengan warna yang sesuai, misal text-blue-300 atau warna kustom lain
            />
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          >
            Seorang Full Stack Developer berpengalaman dengan 4 tahun keahlian dalam membangun aplikasi web.
          </motion.p>
          <motion.a
            href="#project"
            className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold
                     hover:bg-blue-300 shadow-xl/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Proyek Saya
          </motion.a>
        </motion.div>
      </section>
      <hr className="border-t border-gray-300" />
      <section id="about" className="min-h-screen flex items-center justify-center py-16 px-4 text-gray-900 dark:text-gray-100
">
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

          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <motion.div
              className="md:w-1/3 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }} // Scales up to 105% on hover
                whileTap={{ scale: 2 }}   // Scales down to 95% on tap/click
                transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring animation
                className="rounded-full shadow-lg mx-auto w-68 h-68 overflow-hidden shadow-xl/20" // Added overflow-hidden to contain scale
              >
                <Image
                  width={500}
                  height={500}
                  src="./profile.jpg"
                  alt="Profile Arief Nur A"
                  className="w-full h-full object-cover shadow-xl/20" // Image takes full size of its parent motion.div
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-2/3 text-lg leading-relaxed"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="mb-4 text-gray-800 dark:text-gray-200"> {/* Added text colors for consistency */}
                Halo!  Nama saya Arief Nur A. Saya adalah seorang Full Stack Developer berpengalaman yang berdomisili di Sidoarjo, Indonesia.
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                Saya memiliki 4 tahun keahlian dalam membangun aplikasi web yang scalable menggunakan teknologi modern seperti Golang, ReactJS, PHP, Dan NodeJS. Saya terampil dalam mengembangkan microservices, mengoptimalkan kinerja database, dan bekerja dengan alat containerisasi seperti Docker. Saya juga mahir dalam metodologi Agile, pengembangan RESTful API, dan scaling aplikasi.
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                Saya sangat antusias dengan teknologi terbaru dan memiliki kemampuan kuat untuk berkolaborasi dengan tim lintas fungsi dan berkontribusi pada proyek-proyek kompleks dari konsep hingga deployment. Jangan ragu untuk menghubungi saya!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-300" />
      <ProjectsSection />
      <hr className="border-t border-gray-300" />
      <TimelineSection />
      <hr className="border-t border-gray-300" />
      <section id="contact" className="container min-h-screen mx-auto py-16 px-4 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Hubungi Saya</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <p className="text-center text-lg mb-6 dark:text-white">Tertarik untuk berkolaborasi atau hanya ingin menyapa? Silakan hubungi saya melalui form di bawah atau melalui media sosial.</p>

          <form action="#" method="POST" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Nama</label>
              <input type="text" id="name" name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
              <input type="email" id="email" name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Pesan</label>
              <textarea id="message" name="message"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit"
                className="bg-blue-600 text-white px-3 py-3 rounded-md text-xs font-semibold hover:bg-blue-700">Kirim Pesan</button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-lg mb-4 text-gray-700 dark:text-white">Atau temukan saya di:</p>
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
    </div >
  </main >
  );
}

'use client'

import Image from 'next/image'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { useSideBar } from '../context/sidebarContext';
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import { motion } from 'framer-motion';

export default function Home() {

  const { isOpen } = useSideBar();
  return (<main className="main">
    <div id="home" className={`bg-white dark:bg-gray-900 duration-500 ${isOpen ? 'ml-60' : 'ml-16'}`}>
      <section className='min-h-screen flex items-center justify-center py-16 px-4 text-gray-900 dark:text-gray-100'>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Halo, Saya Arief Nur A</h1>
          <p className="text-xl mb-8">
            Seorang Full Stack Developer berpengalaman dengan 4 tahun keahlian dalam membangun aplikasi web dan mobile scalable.
          </p>
          <a href="#project"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600">
            Lihat Proyek Saya
          </a>
        </div>
      </section>
      <hr className="border-t border-gray-300 my-8" />
      <section id="about" className="min-h-screen flex items-center justify-center py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container">
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
              <Image
                width={500}
                height={500}
                src="./profile.jpg"
                alt="Profile Arief Nur A"
                className="rounded-full shadow-lg mx-auto w-48 h-48 object-cover"
              />
            </motion.div>

            <motion.div
              className="md:w-2/3 text-lg leading-relaxed"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="mb-4">
                Halo! Nama saya Arief Nur A. Saya adalah seorang Full Stack Developer berpengalaman yang berdomisili di Sidoarjo, Indonesia.
              </p>
              <p className="mb-4">
                Saya memiliki 4 tahun keahlian dalam membangun aplikasi web dan mobile yang scalable menggunakan teknologi modern seperti Golang, ReactJS, PHP, dan NodeJS. Saya terampil dalam mengembangkan microservices, mengoptimalkan kinerja database, dan bekerja dengan alat containerisasi seperti Docker. Saya juga mahir dalam metodologi Agile, pengembangan RESTful API, dan scaling aplikasi.
              </p>
              <p>
                Saya sangat antusias dengan teknologi terbaru dan memiliki kemampuan kuat untuk berkolaborasi dengan tim lintas fungsi dan berkontribusi pada proyek-proyek kompleks dari konsep hingga deployment. Jangan ragu untuk menghubungi saya!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-300 my-8" />
      <ProjectsSection />
      <hr className="border-t border-gray-300 my-8" />

      <TimelineSection />

      <hr className="border-t border-gray-300 my-8" />
      <section id="contact" className="container min-h-screen mx-auto py-16 px-4 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Hubungi Saya</h2>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <p className="text-center text-lg mb-6 dark:text-white">Tertarik untuk berkolaborasi atau hanya ingin menyapa? Silakan hubungi
            saya melalui form di bawah atau melalui media sosial.</p>

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
                className="bg-blue-600 text-white px-3 py-3 rounded-md text-xs font-semibold hover:bg-blue-700">Kirim
                Pesan</button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-lg mb-4">Atau temukan saya di:</p>
            <div className="flex justify-center space-x-6 text-3xl">
              <a href="https://www.linkedin.com/in/ariefna/" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn Profile">
                <FaLinkedinIn size={30} /> {/* Use the imported component with a size prop */}
              </a>
              <a href="https://github.com/aripzz" className="text-gray-500 hover:text-white" aria-label="GitHub Profile">
                <FaGithub size={30} /> {/* Use the imported component with a size prop */}
              </a>
              <a href="https://www.instagram.com/arifn.ab/" className="text-gray-500 hover:text-pink-600" aria-label="Instagram Profile"> {/* Changed hover color to pink for Instagram */}
                <FaInstagram size={30} /> {/* Use the imported component with a size prop */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main >
  );
}

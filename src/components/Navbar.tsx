"use client";
import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { CiPhone } from "react-icons/ci";
import { motion } from "framer-motion";
import { useSideBar } from "../context/sidebarContext";
import { useTheme } from "next-themes";
const menuItems = [
  {
    id: "home",
    icons: <IoHomeOutline size={30} />,
    label: "Home",
  },
  {
    id: "about",
    icons: <FaUserAlt size={30} />,
    label: "About",
  },
  {
    id: "project",
    icons: <MdOutlineWorkOutline size={30} />,
    label: "Project",
  },
  {
    id: "experience",
    icons: <BsStars size={30} />,
    label: "Experience",
  },
  {
    id: "contact",
    icons: <CiPhone size={30} />,
    label: "Contact",
  },
];
export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isOpen, toggle } = useSideBar();
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav
      className={`flex flex-col fixed top-0 left-0 min-h-screen shadow-md p-2 duration-300 z-50 bg-blue-800 dark:bg-gray-900 text-white ${
        isOpen && "hidden"
      }`}
    >
      <div className=" px-3 py-2 h-20 flex items-center">
        <button className="text-white p-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => toggle(!isOpen)}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <p
          className={`${
            !isOpen && "w-0 translate-x-24"
          } text-white duration-500 overflow-hidden`}
        >
          Arief Dev
        </p>
      </div>
      <ul className="flex-1">
        {menuItems.map((item, index) => {
          return (
            <motion.li
              key={index}
              className={`px-8 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group hover:bg-blue-800 ${
                activeSection == item.id && "bg-blue-800"
              }`}
              onClick={() => handleScrollTo(item.id)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ x: 5 }}
            >
              <div>{item.icons}</div>
              <p
                className={`${
                  !isOpen && "w-0 translate-x-24"
                } duration-500 overflow-hidden`}
              >
                {item.label}
              </p>
              <p
                className={`${
                  isOpen && "hidden"
                } absolute left-32 shadow-md rounded-md
                     w-0 p-0 text-black z-10 bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                    `}
              >
                {item.label}
              </p>
            </motion.li>
          );
        })}
      </ul>
      <div className="px-3 py-2 mt-auto">
        {" "}
        {/* mt-auto akan mendorong tombol ke bagian bawah */}
        <motion.li
          className="px-3 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group hover:bg-blue-800"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileTap={{ scale: 0.95 }}
          whileHover={{ x: 5 }}
        >
          {mounted && // Conditionally render the icons only on the client
            (theme === "dark" ? (
              <MdDarkMode size={24} />
            ) : (
              <MdLightMode size={24} />
            ))}
          <p
            className={`${
              !isOpen && "w-0 translate-x-24"
            } duration-500 overflow-hidden`}
            suppressHydrationWarning={true}
          >
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </p>
          <p
            className={`${
              isOpen && "hidden"
            } absolute left-32 shadow-md rounded-md
                         w-0 p-0 text-black z-10 bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                        `}
            suppressHydrationWarning={true}
          >
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </p>
        </motion.li>
      </div>
    </nav>
  );
}

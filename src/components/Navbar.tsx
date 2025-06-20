'use client'
import React, { useState } from 'react'
import { MdMenuOpen, MdLightMode, MdDarkMode } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { useSideBar } from '../context/sidebarContext';
import { useTheme } from 'next-themes';
const menuItems = [
    {
        id: 'home',
        icons: <IoHomeOutline size={30} />,
        label: 'Home'
    },
    {
        id: 'about',
        icons: <FaUserAlt size={30} />,
        label: 'About'
    },
    {
        id: 'project',
        icons: <MdOutlineWorkOutline size={30} />,
        label: 'Project'
    },
    {
        id: 'experience',
        icons: <BsStars size={30} />,
        label: 'Experience'
    },
    {
        id: 'contact',
        icons: <CiPhone size={30} />,
        label: 'Contact'
    }
];
export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const { isOpen, toggle } = useSideBar();
    const [activeSection, setActiveSection] = useState<string | null>('home');
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };
    return (
        <nav className={`flex fixed top-0 left-0 min-h-screen shadow-md h-screen p-2 flex-col duration-500 bg-blue-700 text-white ${isOpen ? 'w-60' : 'w-16'}`}>
            <div className=' px-3 py-2 h-20 flex items-center'>
                <MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!isOpen && ' rotate-180'}`} onClick={() => toggle(!isOpen)} />
                <p className={`${!isOpen && 'w-0 translate-x-24'} text-white duration-500 overflow-hidden`}>Arief Dev</p>
            </div>
            <ul className='flex-1'>
                {
                    menuItems.map((item, index) => {
                        return (
                            <motion.li
                                key={index}
                                className={`px-3 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group hover:bg-blue-800 ${activeSection == item.id && 'bg-blue-800'}`}
                                onClick={() => handleScrollTo(item.id)}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ x: 5 }}
                            >
                                <div>{item.icons}</div>
                                <p className={`${!isOpen && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                                <p className={`${isOpen && 'hidden'} absolute left-32 shadow-md rounded-md
                     w-0 p-0 text-black z-10 bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                    `}>{item.label}</p>
                            </motion.li>
                        )
                    })
                }
            </ul>
            <div className='px-3 py-2 mt-auto'> {/* mt-auto akan mendorong tombol ke bagian bawah */}
                <motion.li
                    className="px-3 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group hover:bg-blue-800"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ x: 5 }}
                >
                    <div>
                        {theme === 'dark' ? (
                            <MdLightMode size={24} />
                        ) : (
                            <MdDarkMode size={24} />
                        )}
                    </div>
                    <p className={`${!isOpen && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                    <p className={`${isOpen && 'hidden'} absolute left-32 shadow-md rounded-md
                         w-0 p-0 text-black z-10 bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                        `}>
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </p>
                </motion.li>
            </div>
        </nav>
    )
}
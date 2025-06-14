"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 1. Definisikan tipe untuk context value
type SideContextType = {
    isOpen: boolean;
    toggle: (isOpen: boolean) => void;
};

// 2. Buat Context
const SideContext = createContext<SideContextType | null>(null);

// 3. Provider dengan typing pada props
export const SideProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setOpen] = useState(true);

    useEffect(() => {
        const storedSideBar = localStorage.getItem("currentSideBar");
        if (storedSideBar) {
            try {
                setOpen(JSON.parse(storedSideBar));
            } catch (error) {
                console.error(
                    "Failed to parse side bar data from localStorage:",
                    error
                );
                localStorage.removeItem("currentSideBar");
            }
        }
    }, []);

    const toggle = (open: boolean) => {
        setOpen(open);
        localStorage.setItem("currentSideBar", JSON.stringify(open));
    };

    const contextValue: SideContextType = {
        isOpen,
        toggle,
    };

    return (
        <SideContext.Provider value={contextValue}>
            {children}
        </SideContext.Provider>
    );
};

// 4. Custom Hook (useSideBar)
export const useSideBar = () => {
    const context = useContext(SideContext);
    if (!context) {
        throw new Error("useSideBar must be used within a SideProvider");
    }
    return context;
};
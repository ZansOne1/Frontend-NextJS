'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
    activeSection: string;
};

export default function Navbar({ activeSection }: Props) {
    const [isProductOpen, setProductOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -60;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    // useEffect(() => {
    //     const handleClickOutside = (e: MouseEvent) => {
    //         if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
    //             setProductOpen(false);
    //             setMobileMenuOpen(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, []);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target as Node)
            ) {
                setMobileMenuOpen(false);
            }
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setProductOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/img/Logo_Adais.png"
                        alt="ProjectTask Logo"
                        width={110}
                        height={30}
                        className="object-contain"
                    />
                </Link>

                {/* Mobile toggle */}
                <button
                    id="toggle"
                    ref={toggleButtonRef}
                    className="md:hidden text-2xl text-gray-600 focus:outline-none"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMobileMenuOpen(!isMobileMenuOpen);
                    }}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>



                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-5">
                    {[
                        { id: "hero", label: "Home" },
                        { id: "features", label: "Features" },
                        { id: "about", label: "About" },
                        { id: "pricing", label: "Pricing" },
                        { id: "faq", label: "Q & A" },
                        { id: "contact", label: "Contact" },
                    ].map((item) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }}
                            className={`hover:bg-blue-100 rounded-sm p-1  ${activeSection === item.id ? "text-blue-600 font-bold bg-blue-100 rounded-sm p-1" : ""
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Product Dropdown */}
                    <div className="relative " ref={menuRef}>
                        <button
                            id="product"
                            onClick={() => setProductOpen(!isProductOpen)}
                            className="flex items-center gap-1 text-black font-medium hover:text-blue-600 transition cursor-pointer"
                        >
                            Product
                            <span className="text-xs">{isProductOpen ? '▲' : '▼'}</span>
                        </button>

                        {isProductOpen && (
                            <div className="absolute top-full left-0 min-w-[12rem] bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50 animate-fade-in-down max-h-64 overflow-y-auto">
                                {[
                                    "overview",
                                    "features",
                                    "pricing",
                                    "tools",
                                    "integrations",
                                    "security",
                                    "roadmap",
                                    "beta",
                                    "more",
                                ].map((key) => (
                                    <Link
                                        key={key}
                                        href={`/product/${key}`}
                                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                    >
                                        {`Product - ${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Login */}
                    <Link href="/login">
                        <button id="login" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                            Login
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    ref={mobileMenuRef}
                    className="md:hidden mt-4 space-y-6 bg-white p-6 shadow-md rounded-lg"
                >
                    <div className="space-y-2">
                        {["Partners", "Integrations", "Solution", "Resources"].map((item, i) => (
                            <Link
                                key={i}
                                href="/"
                                className="block text-black text-lg font-medium hover:text-blue-600 hover:underline transition"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="border-t pt-4 space-y-2">
                        {["overview", "features", "pricing"].map((item) => (
                            <Link
                                key={item}
                                href={`/product/${item}`}
                                className="block text-black text-lg font-medium hover:text-blue-600 hover:underline transition"
                            >
                                {`Product - ${item.charAt(0).toUpperCase()}${item.slice(1)}`}
                            </Link>
                        ))}
                    </div>

                    <Link href="/login">
                        <button id="login2" className="mt-4 w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}

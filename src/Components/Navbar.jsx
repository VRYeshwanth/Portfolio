import { useState, useEffect } from "react";

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const list = ["Home", "About", "Skills", "Projects", "Contacts"];

    useEffect(() => {
        const handleScroll = () => {
            const sections = list.map((item) =>
                document.getElementById(item.toLowerCase())
            );
            const scrollPosition = window.scrollY + 160;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setDark(isDark);
    }, []);

    const toggleTheme = () => {
        const newDark = !dark;
        setDark(newDark);
        if (newDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="w-full fixed top-4 left-0 px-4 md:px-8 z-50 flex justify-center pointer-events-none">
            <div className="w-full max-w-7xl h-16 flex justify-between items-center glass-panel px-6 rounded-full shadow-xl pointer-events-auto transition-all duration-300">
                <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-forest-600 to-emerald-500 dark:from-emerald-400 dark:to-forest-300 cursor-pointer whitespace-nowrap">
                    V R Yeshwanth
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-2 items-center text-sm font-semibold cursor-pointer">
                        {list.map((item) => {
                            const isLinkActive = activeSection === item.toLowerCase();
                            return (
                                <li key={item} className="relative">
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`px-4 py-2 rounded-full block transition-all duration-300 relative z-10 ${
                                            isLinkActive
                                                ? "text-white dark:text-neutral-950 font-bold"
                                                : "text-neutral-600 hover:text-forest-600 dark:text-neutral-300 dark:hover:text-emerald-400"
                                        }`}
                                    >
                                        {item}
                                    </a>
                                    {isLinkActive && (
                                        <span className="absolute inset-0 bg-forest-600 dark:bg-emerald-400 rounded-full shadow-md shadow-forest-600/20 dark:shadow-emerald-400/20 -z-0 transition-all duration-300"></span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className="p-2 text-lg rounded-full text-neutral-600 hover:text-forest-600 hover:bg-forest-100/30 dark:text-neutral-300 dark:hover:text-emerald-400 dark:hover:bg-forest-950/40 transition-all duration-300 cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {dark ? (
                            <i className="bx bx-sun text-yellow-500"></i>
                        ) : (
                            <i className="bx bx-moon"></i>
                        )}
                    </button>
                </nav>

                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-lg rounded-full text-neutral-600 dark:text-neutral-300 cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {dark ? (
                            <i className="bx bx-sun text-yellow-500"></i>
                        ) : (
                            <i className="bx bx-moon"></i>
                        )}
                    </button>
                    <button
                        className="text-2xl text-neutral-700 dark:text-neutral-200 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
                    </button>
                </div>

                {menuOpen && (
                    <div className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-forest-900/40 rounded-3xl flex flex-col items-center py-4 shadow-2xl md:hidden pointer-events-auto">
                        <ul className="w-full flex flex-col items-center gap-2">
                            {list.map((item) => {
                                const isLinkActive = activeSection === item.toLowerCase();
                                return (
                                    <li
                                        key={item}
                                        className="w-[85%] text-center"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className={`flex justify-center w-full py-3 rounded-2xl text-base font-semibold transition-all ${
                                                isLinkActive
                                                    ? "bg-forest-600 text-white dark:bg-emerald-400 dark:text-neutral-950"
                                                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                                            }`}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

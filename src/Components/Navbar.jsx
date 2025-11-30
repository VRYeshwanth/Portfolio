import { useState } from "react";

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const list = ["Home", "Skills", "Projects", "Contacts"];

    return (
        <div className="w-full px-8 h-20 flex justify-between items-center sticky top-0 bg-white/80 dark:bg-black backdrop-blur-md z-50 dark:border-neutral-700 border-b border-neutral-300">
            <div className="text-3xl font-bold text-black dark:text-white cursor-pointer whitespace-nowrap">
                V R Yeshwanth
            </div>

            <nav className="hidden md:flex items-center gap-4">
                <ul className="flex gap-4 items-center text-xl cursor-pointer">
                    {list.map((item) => (
                        <li
                            key={item}
                            className="px-4 py-2 rounded-xl text-black dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-800 transition-all duration-200"
                        >
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => {
                        setDark(!dark);
                        document.documentElement.classList.toggle("dark");
                    }}
                    className="px-4 py-2 text-lg rounded-xl text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
                >
                    {dark ? (
                        <i className="bx bx-sun"></i>
                    ) : (
                        <i className="bx bx-moon"></i>
                    )}
                </button>
            </nav>

            <button
                className="md:hidden text-3xl md:text-4xl text-black dark:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
            </button>

            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white dark:bg-black border-b border-neutral-300 dark:border-neutral-800 flex flex-col items-center py-4 md:hidden">
                    {list.map((item) => (
                        <div
                            key={item}
                            className="w-full text-center py-3 text-lg text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}

                    <button
                        onClick={() => {
                            setDark(!dark);
                            document.documentElement.classList.toggle("dark");
                        }}
                        className="mt-2 px-4 py-2 rounded-xl text-black dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-all"
                    >
                        {dark ? (
                            <i className="bx bx-sun"></i>
                        ) : (
                            <i className="bx bx-moon"></i>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}

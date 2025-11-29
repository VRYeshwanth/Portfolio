import { useState } from "react";

export default function Navbar() {
    const [dark, setDark] = useState(false);

    return (
        <div className="w-full flex justify-between items-center px-8 h-20 sticky top-0 bg-white/80 dark:bg-black backdrop-blur-md z-50 dark:border-neutral-700">
            <div className="text-3xl font-bold text-black dark:text-white cursor-pointer">
                V R Yeshwanth
            </div>
            <nav className="flex items-center gap-4">
                <ul className="flex gap-4 items-center text-xl cursor-pointer">
                    {["Home", "Skills", "Projects", "Contacts"].map((item) => {
                        return (
                            <li
                                key={item}
                                className="px-4 py-2 rounded-xl text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
                <button
                    onClick={() => {
                        setDark(!dark);
                        document.documentElement.classList.toggle("dark");
                    }}
                    className="px-4 py-2 text-lg rounded-xl text-black dark:text-white transition-all duration-200 cursor-pointer"
                >
                    {dark ? (
                        <i className="bx bx-sun"></i>
                    ) : (
                        <i className="bx bx-moon"></i>
                    )}
                </button>
            </nav>
        </div>
    );
}

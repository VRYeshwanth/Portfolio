export default function Home() {
    return (
        <section
            id="home"
            className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-4 dark:bg-neutral-950 dark:text-neutral-100 animate-fade-in"
        >
            <h1 className="text-3xl md:text-4xl text-center">Hi , I'm</h1>
            <span className="text-5xl md:text-7xl font-bold  text-center">
                V R Yeshwanth
            </span>
            <h2 className="text-xl md:text-3xl  text-center">
                Aspiring Full Stack Developer
            </h2>
            <p className="text-lg md:text-2xl  text-center">
                Turning ideas into clean and functional UI.
            </p>
            <div className=" flex gap-4">
                <a href="https://github.com/VRYeshwanth">
                    <i className="bx bxl-github text-3xl px-2 py-1 rounded-full cursor-pointer text-black bg-white hover:text-white hover:bg-neutral-800 transition duration-300 dark:text-white dark:bg-neutral-950 dark:hover:bg-neutral-700"></i>
                </a>
                <a href="https://www.linkedin.com/in/yeshwanth-v-r-38a878395/">
                    <i className="bx bxl-linkedin text-3xl px-2 py-1 rounded-full cursor-pointer text-black bg-white hover:text-white hover:bg-neutral-800 transition duration-300 dark:text-white dark:bg-neutral-950 dark:hover:bg-neutral-700"></i>
                </a>
            </div>
            <div className="flex gap-8">
                <a
                    href="#projects"
                    className="text-lg md:text-xl px-2 md:px-4 py-1 md:py-2 rounded-xl text-black bg-white border border-neutral-700 hover:bg-neutral-200 transition duration-300 dark:text-white dark:bg-neutral-950 dark:hover:bg-neutral-700 cursor-pointer"
                >
                    View Projects
                </a>
                <a
                    href="/VR Yeshwanth_Resume.pdf"
                    download
                    className="text-lg md:text-xl px-2 md:px-4 py-1 md:py-2 rounded-xl text-black bg-white border border-neutral-700 hover:bg-neutral-200 transition duration-300 dark:text-white dark:bg-neutral-950 dark:hover:bg-neutral-700 cursor-pointer"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}

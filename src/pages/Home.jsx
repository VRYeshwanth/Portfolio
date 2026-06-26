import developerAvatar from "../assets/developer_avatar.png";

export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center py-24 lg:py-0 w-full relative bg-grid-pattern overflow-hidden scroll-mt-20"
        >
            {/* Ambient forest-green glow blobs */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-forest-600/10 dark:bg-emerald-500/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-600/10 dark:bg-forest-950/20 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl w-full mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10 animate-fade-in">
                {/* Left Side: Illustration / Profile Avatar */}
                <div className="relative flex justify-center items-center lg:w-1/2 w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square">
                    
                    {/* Main Circle Avatar Container */}
                    <div className="relative w-[85%] aspect-square rounded-full overflow-hidden border-2 border-forest-600/20 dark:border-emerald-500/10 p-3 bg-white/40 dark:bg-neutral-900/40 shadow-2xl backdrop-blur-sm">
                        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                            <img 
                                src={developerAvatar} 
                                alt="V R Yeshwanth Avatar" 
                                className="w-full h-full object-cover scale-[1.05]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Hero Content */}
                <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:w-1/2 gap-5">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100/60 dark:bg-forest-950/30 text-forest-800 dark:text-emerald-300 text-xs font-semibold border border-forest-600/10 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
                        Open to Internships & Work
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-semibold tracking-wide uppercase">
                            Hi, I'm
                        </h1>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-forest-800 via-forest-600 to-emerald-600 dark:from-emerald-300 dark:via-emerald-400 dark:to-forest-300">
                            V R Yeshwanth
                        </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                        Aspiring Machine Learning Engineer & Full Stack Developer
                    </h2>
                    
                    <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed font-medium">
                        Exploring intelligent systems, data science, and modern machine learning architectures, while building clean, responsive web applications to bring them to life.
                    </p>
                    
                    <div className="flex gap-3 items-center">
                        <a href="https://github.com/VRYeshwanth" aria-label="GitHub Profile" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full
                        bg-white dark:bg-neutral-900
                        border border-neutral-200 dark:border-forest-900/20
                        hover:border-forest-600 hover:text-forest-600
                        dark:hover:text-emerald-400 dark:hover:border-emerald-500
                        transition-all duration-300 shadow-sm">
                            <i className="bx bxl-github text-2xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yeshwanth-v-r-38a878395/" aria-label="LinkedIn Profile" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full
                        bg-white dark:bg-neutral-900
                        border border-neutral-200 dark:border-forest-900/20
                        hover:border-forest-600 hover:text-forest-600
                        dark:hover:text-emerald-400 dark:hover:border-emerald-500
                        transition-all duration-300 shadow-sm">
                            <i className="bx bxl-linkedin text-2xl"></i>
                        </a>
                    </div>
                    
                    <div className="flex gap-4 mt-3">
                        <a
                            href="#projects"
                            className="text-xs sm:text-sm font-bold px-6 py-3 rounded-full text-white bg-forest-600 hover:bg-forest-700 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300 transition duration-300 shadow-lg shadow-forest-600/10 dark:shadow-emerald-400/10 cursor-pointer"
                        >
                            View Projects
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}VR_Yeshwanth_Resume.pdf`}
                            download
                            className="text-xs sm:text-sm font-bold px-6 py-3 rounded-full text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-900 dark:border-forest-900/20 dark:hover:bg-neutral-800 transition duration-300 shadow-sm cursor-pointer"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

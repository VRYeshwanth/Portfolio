export default function About() {
    const highlights = [
        {
            icon: "bx bx-brain",
            title: "Machine Learning & AI",
            description: "Deepening knowledge in neural networks, data science, and designing intelligent systems.",
            borderColor: "group-hover:border-purple-500/50 dark:group-hover:border-purple-400/40",
            iconColor: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30",
        },
        {
            icon: "bx bx-code-curly",
            title: "Full Stack Development",
            description: "Experience building clean, responsive web applications using React, Node.js, and modern databases.",
            borderColor: "group-hover:border-emerald-500/50 dark:group-hover:border-emerald-400/40",
            iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30",
        },
        {
            icon: "bx bx-analyse",
            title: "Problem Solving",
            description: "Applying strong computer science fundamentals to create efficient and practical software solutions.",
            borderColor: "group-hover:border-blue-500/50 dark:group-hover:border-blue-400/40",
            iconColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30",
        },
        {
            icon: "bx bx-book-open",
            title: "Continuous Learning",
            description: "Always expanding skillsets, actively exploring new ML frameworks, and looking to grow.",
            borderColor: "group-hover:border-amber-500/50 dark:group-hover:border-amber-400/40",
            iconColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30",
        },
    ];

    return (
        <section
            id="about"
            className="scroll-mt-20 py-24 w-full relative bg-neutral-100 dark:bg-neutral-900/20 overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-forest-600/5 dark:bg-emerald-500/5 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side: Short Intro & Summary */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <div className="h-1 w-12 bg-forest-600 dark:bg-emerald-400 rounded-full mb-4"></div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-forest-800 to-emerald-600 dark:from-emerald-300 dark:to-forest-300 mb-6">
                            About Me
                        </h1>
                        <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                            Computer Science Student & Aspiring Developer
                        </h2>
                        <div className="space-y-4 text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                            <p>
                                I am a Computer Science engineering student at <strong className="text-forest-700 dark:text-emerald-400">UVCE</strong> with a CGPA of <strong className="text-forest-700 dark:text-emerald-400">9.46</strong>. I am driven by a strong curiosity for how computing technology can be leveraged to tackle real-world challenges.
                            </p>
                            <p>
                                While I have a solid foundation in building practical web applications using modern full-stack technologies, my focus has increasingly shifted toward <strong className="text-forest-700 dark:text-emerald-400">Machine Learning (ML)</strong> and <strong className="text-forest-700 dark:text-emerald-400">Artificial Intelligence (AI)</strong>. I am deeply fascinated by neural networks, data-driven algorithms, and the lifecycle of training models.
                            </p>
                        </div>
                        
                        <div className="mt-8 flex gap-4">
                            <a
                                href="#skills"
                                className="text-xs sm:text-sm font-bold px-5 py-3 rounded-full text-white bg-forest-600 hover:bg-forest-700 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300 transition duration-300 shadow-md shadow-forest-600/10 dark:shadow-emerald-400/10 cursor-pointer"
                            >
                                Explore Skills
                            </a>
                            <a
                                href="#contacts"
                                className="text-xs sm:text-sm font-bold px-5 py-3 rounded-full text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-900 dark:border-forest-900/20 dark:hover:bg-neutral-800 transition duration-300 shadow-sm cursor-pointer"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Highlight cards */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className={`group flex flex-col p-6 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-forest-900/20 ${item.borderColor} hover:shadow-xl hover:shadow-forest-600/5 dark:hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconColor} border border-neutral-100 dark:border-forest-900/10 group-hover:scale-105 transition-transform duration-300`}>
                                        <i className={`${item.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 text-sm sm:text-base leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

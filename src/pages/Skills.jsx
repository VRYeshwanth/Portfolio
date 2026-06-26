const expertiseAreas = [
    {
        id: "ml-ai",
        title: "ML & AI",
        icon: "bx bx-brain",
        accent: "from-violet-500 to-purple-600",
        accentDark: "dark:from-violet-400 dark:to-purple-500",
        glowLight: "bg-violet-500/5",
        glowDark: "dark:bg-violet-400/5",
        borderHover: "hover:border-violet-400/40 dark:hover:border-violet-400/30",
        iconColor: "text-violet-600 dark:text-violet-400",
        dotColor: "bg-violet-500 dark:bg-violet-400",
        description: "Building intelligent systems with data-driven approaches",
        technologies: [
            { name: "Python", icon: "bx bxl-python", color: "text-yellow-600 dark:text-yellow-400" },
            { name: "NumPy", icon: "bx bx-math", color: "text-blue-600 dark:text-blue-400" },
            { name: "Pandas", icon: "bx bx-table", color: "text-teal-600 dark:text-teal-400" },
            { name: "Scikit-Learn", icon: "bx bx-line-chart", color: "text-orange-600 dark:text-orange-400" },
            { name: "Neural Networks", icon: "bx bx-network-chart", color: "text-violet-600 dark:text-violet-400" },
        ],
    },
    {
        id: "web-dev",
        title: "Web Development",
        icon: "bx bx-code-curly",
        accent: "from-forest-600 to-emerald-500",
        accentDark: "dark:from-emerald-400 dark:to-forest-300",
        glowLight: "bg-forest-600/5",
        glowDark: "dark:bg-emerald-400/5",
        borderHover: "hover:border-forest-500/40 dark:hover:border-emerald-400/30",
        iconColor: "text-forest-600 dark:text-emerald-400",
        dotColor: "bg-forest-600 dark:bg-emerald-400",
        description: "Crafting full-stack applications from frontend to API",
        technologies: [
            { name: "React", icon: "bx bxl-react", color: "text-cyan-500 dark:text-cyan-400" },
            { name: "Node.js", icon: "bx bxl-nodejs", color: "text-green-600 dark:text-green-400" },
            { name: "Express.js", icon: "bx bx-server", color: "text-neutral-700 dark:text-neutral-300" },
            { name: "MongoDB", icon: "bx bxl-mongodb", color: "text-green-700 dark:text-green-500" },
            { name: "JavaScript", icon: "bx bxl-javascript", color: "text-yellow-500 dark:text-yellow-400" },
            { name: "Tailwind CSS", icon: "bx bxl-tailwind-css", color: "text-teal-500 dark:text-teal-400" },
            { name: "HTML & CSS", icon: "bx bxl-html5", color: "text-orange-500 dark:text-orange-400" },
        ],
    },
    {
        id: "dev-tools",
        title: "Developer Tools",
        icon: "bx bx-wrench",
        accent: "from-amber-500 to-orange-500",
        accentDark: "dark:from-amber-400 dark:to-orange-400",
        glowLight: "bg-amber-500/5",
        glowDark: "dark:bg-amber-400/5",
        borderHover: "hover:border-amber-400/40 dark:hover:border-amber-400/30",
        iconColor: "text-amber-600 dark:text-amber-400",
        dotColor: "bg-amber-500 dark:bg-amber-400",
        description: "Professional toolchain for modern development workflows",
        technologies: [
            { name: "Git", icon: "bx bxl-git", color: "text-orange-600 dark:text-orange-400" },
            { name: "GitHub", icon: "bx bxl-github", color: "text-neutral-800 dark:text-neutral-100" },
            { name: "VS Code", icon: "bx bxl-visual-studio", color: "text-blue-500 dark:text-blue-400" },
            { name: "Postman", icon: "bx bx-send", color: "text-orange-500 dark:text-orange-400" },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="scroll-mt-20 py-24 w-full relative bg-neutral-50 dark:bg-neutral-950 overflow-hidden"
        >
            {/* Ambient subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest-600/4 dark:bg-emerald-500/4 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="h-1 w-12 bg-forest-600 dark:bg-emerald-400 rounded-full mb-4" />
                    <h1 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-forest-800 to-emerald-600 dark:from-emerald-300 dark:to-forest-300">
                        Skills &amp; Expertise
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-neutral-500 dark:text-neutral-400 text-center max-w-md">
                        Domain-focused areas of expertise — from building intelligent systems to shipping full-stack products.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseAreas.map((area) => (
                        <div
                            key={area.id}
                            className={`group relative flex flex-col p-7 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/60 ${area.borderHover} hover:shadow-2xl hover:shadow-neutral-900/5 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden`}
                        >
                            {/* Gradient top bar */}
                            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${area.accent} ${area.accentDark} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Subtle background glow on hover */}
                            <div className={`absolute inset-0 ${area.glowLight} ${area.glowDark} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            {/* Card Header */}
                            <div className="relative z-10 flex items-start gap-4 mb-5">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/50 group-hover:scale-105 transition-transform duration-300`}>
                                    <i className={`${area.icon} text-2xl ${area.iconColor}`} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                                        {area.title}
                                    </h2>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                                        {area.description}
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700/60 to-transparent mb-5" />

                            {/* Technology Chips */}
                            <div className="relative z-10 flex flex-wrap gap-2">
                                {area.technologies.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors duration-200"
                                    >
                                        <i className={`${tech.icon} text-sm ${tech.color}`} />
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

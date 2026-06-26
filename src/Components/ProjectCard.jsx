export default function ProjectCard({
    title,
    description,
    techStack,
    github,
    demo,
    image,
}) {
    return (
        <div className="group flex flex-col h-full bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-forest-900/20 rounded-2xl overflow-hidden hover:border-forest-600 dark:hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-forest-900/5 dark:hover:shadow-black/30 transition-all duration-300">
            {/* Project Preview Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-100 dark:border-forest-900/10">
                {image ? (
                    <img 
                        src={image} 
                        alt={`${title} Preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-forest-800 to-emerald-950 flex items-center justify-center">
                        <i className="bx bx-code-alt text-4xl text-emerald-400"></i>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col flex-grow p-5 md:p-6">
                <h1 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-forest-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                    {title}
                </h1>
                
                <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-5">
                    <ul className="flex flex-wrap gap-1.5">
                        {techStack.map((item) => (
                            <li
                                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-forest-50 text-forest-700 border border-forest-100 dark:bg-forest-950/30 dark:text-emerald-300 dark:border-emerald-500/15 shadow-sm"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Thin divider line */}
                <div className="w-full border-t border-neutral-100 dark:border-forest-900/10 my-4" />

                {/* Card Actions */}
                <div className="flex gap-3 mt-auto">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-full border border-neutral-200 hover:border-forest-600 hover:text-forest-600 dark:border-forest-900/20 dark:hover:border-emerald-500 dark:text-neutral-300 dark:hover:text-emerald-400 transition duration-300"
                        >
                            <i className="bx bxl-github text-lg"></i>
                            GitHub
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-full bg-forest-600 text-white hover:bg-forest-700 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300 shadow-md shadow-forest-600/10 dark:shadow-emerald-400/5 transition duration-300"
                        >
                            <i className="bx bx-link-external text-lg"></i>
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

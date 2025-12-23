export default function ProjectCard({
    title,
    description,
    techStack,
    github,
    demo,
}) {
    return (
        <div className="flex flex-col bg-white/80 dark:bg-neutral-950 h-full p-4 gap-2 border border-neutral-300 rounded-xl dark:border-neutral-700">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            <div className="flex-grow"></div>
            <ul className="flex flex-wrap gap-2 py-2">
                {techStack.map((item) => (
                    <li
                        className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className="border-t border-neutral-300 dark:border-neutral-700 -mx-4 mb-2" />

            <div className="flex gap-4">
                {github && (
                    <a
                        href={github}
                        className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition"
                    >
                        Github
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}

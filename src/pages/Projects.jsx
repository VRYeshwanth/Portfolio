import ProjectCard from "../Components/ProjectCard";
import blogAppImg from "../assets/blog_app.png";
import agentImg from "../assets/kaggle_dataset_agent_image.png"

export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-20 py-24 w-full relative bg-neutral-100 dark:bg-neutral-900/20 overflow-hidden"
        >
            {/* Ambient background glow */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-forest-600/5 dark:bg-emerald-500/5 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <div className="h-1 w-12 bg-forest-600 dark:bg-emerald-400 rounded-full mb-4"></div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-forest-800 to-emerald-600 dark:from-emerald-300 dark:to-forest-300">
                        Featured Projects
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-neutral-500 dark:text-neutral-400 text-center max-w-md">
                        A selection of tools and applications built utilizing modern programming frameworks.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
                    <ProjectCard
                        title="Kaggle Dataset Evaluator Agent"
                        description="AI-powered application for automated Kaggle dataset profiling, quality assessment, ML task inference, preprocessing recommendations, and conversational dataset analysis."
                        techStack={[
                            "Python",
                            "Pandas",
                            "NumPy",
                            "Scikit-Learn",
                            "Streamlit",
                            "Google ADK",
                            "Gemini API",
                            "FastMCP",
                        ]}
                        github="https://github.com/VRYeshwanth/Kaggle-Dataset-Evaluator-Agent" image={agentImg}
                    />
                    <ProjectCard
                        title="Blog Post App"
                        description="A full-stack blogging platform that allows users to securely create, edit, and manage blog posts with authentication and persistent storage."
                        techStack={[
                            "MongoDB",
                            "Express.js",
                            "React",
                            "Node.js",
                            "JWT",
                            "Tailwind CSS",
                        ]}
                        github="https://github.com/VRYeshwanth/Blog-Post-App"
                        demo="https://vryeshwanth.github.io/Blog-Post-App/"
                        image={blogAppImg}
                    />
                </div>
            </div>
        </section>
    );
}

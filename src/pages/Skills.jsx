import SkillCard from "../Components/SkillCard";
export default function Skills() {
    return (
        <section
            id="skills"
            className="scroll-mt-20 min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center dark:bg-neutral-950 dark:text-neutral-100 py-16 px-8"
        >
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Skills
            </h1>

            <div className="w-full max-w-5xl flex flex-col gap-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Programming
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <SkillCard
                            icon="bx bxl-python"
                            label="Python"
                            color="text-yellow-500"
                        />
                        <SkillCard
                            icon="bx bxl-java"
                            label="Java"
                            color="text-red-500"
                        />
                        <SkillCard
                            icon="devicon-c-original"
                            label="C"
                            color="text-[#A8B9CC]"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Frontend
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <SkillCard
                            icon="bx bxl-html5"
                            label="HTML"
                            color="text-orange-500"
                        />
                        <SkillCard
                            icon="bx bxl-css3"
                            label="CSS"
                            color="text-blue-500"
                        />
                        <SkillCard
                            icon="bx bxl-javascript"
                            label="JavaScript"
                            color="text-yellow-400"
                        />
                        <SkillCard
                            icon="bx bxl-react"
                            label="React"
                            color="text-blue-400"
                        />
                        <SkillCard
                            icon="bx bxl-tailwind-css"
                            label="Tailwind CSS"
                            color="text-teal-400"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Backend
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <SkillCard
                            icon="bx bxl-nodejs"
                            label="Node.js"
                            color="text-green-500"
                        />
                        <SkillCard
                            icon="devicon-express-original"
                            label="Express.js"
                            color="text-black dark:text-white"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Database
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <SkillCard
                            icon="bx bxl-mongodb"
                            label="MongoDB"
                            color="text-green-600"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Tools
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <SkillCard
                            icon="bx bxl-visual-studio"
                            label="VS Code"
                            color="text-blue-500"
                        />
                        <SkillCard
                            icon="bx bxl-git"
                            label="Git"
                            color="text-orange-500"
                        />
                        <SkillCard
                            icon="bx bxl-github"
                            label="GitHub"
                            color="text-black dark:text-white"
                        />
                        <SkillCard
                            icon="devicon-postman-plain"
                            label="Postman"
                            color="text-orange-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

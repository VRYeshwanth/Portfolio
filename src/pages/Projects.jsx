import ProjectCard from "../Components/ProjectCard";
export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-20 min-h-[calc(100vh-80px)] w-full flex flex-col gap-6 md:gap-8 items-center dark:bg-neutral-950 dark:text-neutral-100 py-16 px-8"
        >
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Projects
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                    title="Blog Post App"
                    description="A full-stack blogging platform that allows users to securely create, edit, and manage blog posts with authentication and persistent storage."
                    techStack={[
                        "MongoDB",
                        "Express.js",
                        "React",
                        "Node.js",
                        "JWT",
                    ]}
                    github="https://github.com/VRYeshwanth/Blog-Post-App"
                    demo="https://vryeshwanth.github.io/Blog-Post-App/"
                />
                <ProjectCard
                    title="PDF Utility Tools"
                    description="A desktop application that simplifies common PDF operations such as merging, splitting, rotating pages, and converting images to PDF through a user-friendly GUI."
                    techStack={["Python", "Tkinter", "PyPDF2", "Pillow"]}
                    github="https://github.com/VRYeshwanth/PDF-Utility-Tool"
                />
                <ProjectCard
                    title="Directory Organizer"
                    description="A desktop tool that automatically organizes files into folders based on their extensions, reducing manual file management and improving directory cleanliness."
                    techStack={["Electron", "JavaScript", "HTML", "CSS"]}
                    github="https://www.github.com/VRYeshwanth/Directory-Organizer"
                />
            </div>
        </section>
    );
}

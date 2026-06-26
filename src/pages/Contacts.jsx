import ContactCard from "../Components/ContactCard";

export default function Contacts() {
    return (
        <section
            id="contacts"
            className="scroll-mt-20 py-24 w-full relative bg-neutral-50 dark:bg-neutral-950 overflow-hidden"
        >
            {/* Ambient background glow */}
            <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-forest-600/5 dark:bg-emerald-500/5 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <div className="h-1 w-12 bg-forest-600 dark:bg-emerald-400 rounded-full mb-4"></div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-forest-800 to-emerald-600 dark:from-emerald-300 dark:to-forest-300">
                        Get In Touch
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-neutral-500 dark:text-neutral-400 text-center max-w-md font-medium">
                        I'm open to internships, collaborations, and learning opportunities. Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ContactCard
                        icon="bx bxl-gmail"
                        contactTitle="Email"
                        contact="mailto:vryeshwanth06@gmail.com"
                        displayText="vryeshwanth06@gmail.com"
                    />
                    <ContactCard
                        icon="bx bxl-linkedin"
                        contactTitle="LinkedIn"
                        contact="https://www.linkedin.com/in/yeshwanth-v-r-38a878395/"
                        displayText="linkedin.com/in/yeshwanth-v-r"
                    />
                    <ContactCard
                        icon="bx bxl-github"
                        contactTitle="Github"
                        contact="https://www.github.com/VRYeshwanth"
                        displayText="github.com/VRYeshwanth"
                    />
                </div>
            </div>
        </section>
    );
}

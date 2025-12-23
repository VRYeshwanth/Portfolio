import ContactCard from "../Components/ContactCard";
export default function Contacts() {
    return (
        <section
            id="contacts"
            className="scroll-mt-20 min-h-[calc(100vh-80px)] w-full flex flex-col gap-8 items-center dark:bg-neutral-950 dark:text-neutral-100 py-16 px-8"
        >
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                Contacts
            </h1>
            <p className="text-xl">
                I’m open to internships, collaborations, and learning
                opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
        </section>
    );
}

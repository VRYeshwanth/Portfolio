export default function SkillCard({ icon, label, color }) {
    return (
        <div
            className="flex flex-col items-center justify-center p-4 rounded-xl 
                       border border-neutral-300 dark:border-white/10 
                       hover:bg-neutral-200 dark:hover:bg-white/10 
                       hover:scale-105 transition-all duration-300 w-28 sm:w-30 md:w-32 text-center"
        >
            <i className={`bx ${icon} text-5xl ${color}`}></i>
            <p className="mt-2 text-sm font-medium">{label}</p>
        </div>
    );
}

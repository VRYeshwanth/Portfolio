export default function SkillCard({ icon, label, color }) {
    const isBoxicon = icon.startsWith("bx");
    return (
        <div
            className="group flex flex-col items-center justify-center p-5 rounded-2xl 
                       bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-forest-900/25 
                       hover:border-forest-600 dark:hover:border-emerald-500/50 
                       hover:shadow-xl hover:shadow-forest-600/5 dark:hover:shadow-emerald-500/5
                       hover:-translate-y-1 transition-all duration-300 text-center w-full relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-forest-500/10 to-emerald-500/10 dark:from-forest-950/20 dark:to-emerald-500/5 group-hover:from-forest-600 group-hover:to-emerald-500 transition-all duration-300"></div>

            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-100 dark:border-forest-900/10 group-hover:bg-forest-50/50 dark:group-hover:bg-forest-950/20 transition-colors duration-300">
                <i className={`${isBoxicon ? "bx" : ""} ${icon} text-4xl sm:text-5xl ${color} transition-transform duration-300 group-hover:scale-110`}></i>
            </div>
            
            <p className="mt-3.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 tracking-wide">{label}</p>
        </div>
    );
}

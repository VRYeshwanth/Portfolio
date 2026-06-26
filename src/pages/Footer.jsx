export default function Footer() {
    return (
        <footer className="w-full bg-neutral-50 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 py-12 px-6">
            <div className="mx-auto border-t border-neutral-200 dark:border-forest-900/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
                <div>
                    © {new Date().getFullYear()} <span className="text-forest-600 dark:text-emerald-400 font-semibold">VR Yeshwanth</span>. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <span className="text-xs text-neutral-400 dark:text-neutral-600">Built with React & Tailwind CSS</span>
                </div>
            </div>
        </footer>
    );
}

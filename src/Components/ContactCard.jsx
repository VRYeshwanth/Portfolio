import { useState } from "react";

export default function ContactCard({
    icon,
    contactTitle,
    contact,
    displayText,
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        let textToCopy = contact;

        if (textToCopy.startsWith("mailto:"))
            textToCopy = contact.replace("mailto:", "");

        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.log("Copy Failed!");
        }
    };

    return (
        <div className="group relative flex items-center justify-between p-5 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-forest-900/25 rounded-2xl hover:border-forest-600 dark:hover:border-emerald-500/50 hover:shadow-xl hover:shadow-forest-600/5 dark:hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-4 min-w-0">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-forest-50 dark:bg-forest-950/30 text-forest-600 dark:text-emerald-400 group-hover:bg-forest-600 group-hover:text-white dark:group-hover:bg-emerald-400 dark:group-hover:text-neutral-950 transition-all duration-300">
                    <i className={`${icon} text-2xl`}></i>
                </div>
                
                <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        {contactTitle}
                    </span>
                    <a 
                        href={contact} 
                        className="block text-sm sm:text-base font-bold text-neutral-700 dark:text-neutral-200 hover:text-forest-600 dark:hover:text-emerald-400 transition-colors duration-200 truncate pr-1"
                        target={contact.startsWith("http") ? "_blank" : undefined}
                        rel={contact.startsWith("http") ? "noreferrer" : undefined}
                    >
                        {displayText}
                    </a>
                </div>
            </div>

            <button
                onClick={handleCopy}
                className="flex-shrink-0 p-2 rounded-lg text-neutral-400 hover:text-forest-600 hover:bg-neutral-50 dark:text-neutral-500 dark:hover:text-emerald-400 dark:hover:bg-forest-950/20 transition-all duration-200 cursor-pointer"
                aria-label={`Copy ${contactTitle}`}
            >
                <i className="bx bx-copy text-xl"></i>
            </button>

            {copied && (
                <span className="absolute -top-3 right-4 text-[10px] font-bold bg-forest-600 text-white dark:bg-emerald-400 dark:text-neutral-950 px-2.5 py-0.5 rounded-full shadow-sm">
                    Copied!
                </span>
            )}
        </div>
    );
}

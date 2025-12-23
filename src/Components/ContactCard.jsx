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
            console.log("Copy Failed !!");
        }
    };

    return (
        <div className="relative flex flex-col gap-2 p-4 bg-white/80 dark:bg-neutral-950 border border-neutral-300 rounded-xl dark:border-neutral-700">
            <i className={`${icon} text-3xl`}></i>
            <span className="text-xl font-semibold">{contactTitle}</span>
            <div className="flex justify-between items-center">
                <a href={contact} className="text-lg truncate">
                    {displayText}
                </a>
                <i
                    className="bx bx-copy text-xl p-4 cursor-pointer"
                    onClick={handleCopy}
                ></i>
            </div>
            {copied && (
                <span className="absolute -top-6 right-0 text-xs bg-neutral-950 dark:bg-white text-white dark:text-black px-2 py-1 rounded">
                    Copied!
                </span>
            )}
        </div>
    );
}

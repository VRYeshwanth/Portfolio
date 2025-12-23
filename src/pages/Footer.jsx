export default function Footer() {
    return (
        <footer className="w-full text-base md:text-lg text-center px-2 py-8 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900">
            © {new Date().getFullYear()} VR Yeshwanth. All rights reserved
        </footer>
    );
}

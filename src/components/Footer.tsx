import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-8 text-center text-foreground/60 text-sm">
            <div className="flex justify-center gap-6 mb-4 font-medium">
                <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link href="#certification" className="hover:text-primary transition-colors">Certification</Link>
                <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Yagna Patel. All rights reserved.</p>
        </footer>
    );
}

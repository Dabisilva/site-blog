import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:flex-row gap-8 py-8">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link href="/use-terms" className="hover:text-primary transition-colors">Use Terms</Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/feedback" className="hover:text-primary transition-colors">Feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
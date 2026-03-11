import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActiveLink } from "@/components/active-link";

export const Header = () => {

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 background-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" className="rounded-lg" asChild>
              <Link href="/start">Start</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
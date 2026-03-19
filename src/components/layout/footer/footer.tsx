import Link from 'next/link';
import { Logo } from '@/components/logo';

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 sm:flex-row">
          <Logo />

          <nav className="flex flex-col items-center gap-4 text-sm text-blue-100 md:flex-row">
            <Link href="/use-terms" className="hover:text-blue-200">
              Use Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue-200">
              Privacy Policy
            </Link>
            <Link href="/feedback" className="hover:text-blue-200">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

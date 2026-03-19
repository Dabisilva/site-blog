import { inter, ptSansCaption } from '@/utils/fonts';
import { Footer } from './footer';
import { Header } from './header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${ptSansCaption.className} ${inter.className} font-inter relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="mt-10 mb-12 flex flex-1 flex-col pt-16">{children}</main>
      <Footer />
    </div>
  );
};

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`relative flex min-h-screen flex-col ${inter.className} bg-gray-700`}>
      <Header />
      <main className="pt-16 flex-1 flex flex-col mb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};
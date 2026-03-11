import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="pt-16 flex-1 flex flex-col mb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};
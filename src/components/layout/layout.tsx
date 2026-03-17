
import { inter, ptSansCaption } from "@/utils/fonts";
import { Footer } from "./footer";
import { Header } from "./header";

type LayoutProps = {
  children: React.ReactNode;
};


export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${ptSansCaption.className} ${inter.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}>
      <Header />
      <main className="pt-16 flex-1 flex flex-col mt-10 mb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};
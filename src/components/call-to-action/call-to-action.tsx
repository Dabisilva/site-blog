import { CreateStoreButton } from '@/components/create-store-button/create-store-button';
import { Store } from 'lucide-react';
import { PT_Sans_Caption } from 'next/font/google';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
});

export const CallToAction = () => {
  return (
    <section className="py-24 bbg-linear-to-b from-cyan-950/20 to-gray-700">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full">
            <Store className="text-cyan-100" />
          </div>

          <h2
            className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl`}
          >
            Create your affiliate store and start selling today
          </h2>

          <CreateStoreButton />
        </div>
      </div>
    </section>
  );
};
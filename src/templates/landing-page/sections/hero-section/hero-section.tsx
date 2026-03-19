import { CreateStoreButton } from '@/components/create-store-button/create-store-button';
import { Clock, Store } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative container mt-16 flex items-center justify-center">
      <div className="grid min-h-80 grid-cols-1 items-center gap-8 md:h-144 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-heading-hg text-center font-sans text-gray-100 md:text-left">
            Sell your products as an affiliate in one place
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-100" />
                <span className="text-body-md text-gray-200">
                  Create your site in less than 5 minutes
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-cyan-100" />
                <span className="text-body-md text-gray-200">
                  Track and optimize your online business
                </span>
              </div>
            </div>

            <div className="ls:items-start mt-5 flex flex-col items-center gap-2 text-white md:items-start">
              <CreateStoreButton className="w-fit rounded-full" />

              <p className="text-body-xs text-gray-300">No credit card required</p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-80 items-center justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            src="/hero-section.svg"
            alt="Illustration with store, tag and bag icons"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

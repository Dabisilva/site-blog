import { CreateStoreButton } from '@/components/create-store-button/create-store-button';
import Image from 'next/image';

export const FeatureSection = () => {
  return (
    <section className="container grid gap-6 bg-gray-700 pt-8 pb-8 md:grid-cols-2 md:py-10">
      <div className="flex w-fit flex-col gap-4 rounded-2xl bg-gray-500 p-8 md:p-12">
        <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-3 py-1.5 text-blue-200 uppercase">
          Simple
        </span>
        <h2 className="text-heading-lg font-sans text-gray-100">
          Create an online product catalog in a few minutes
        </h2>
      </div>
      <div className="flex w-fit flex-col gap-4 rounded-2xl bg-gray-500 p-8 md:p-12">
        <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-3 py-1.5 text-blue-200 uppercase">
          Practical
        </span>
        <h2 className="text-heading-lg font-sans text-gray-100">
          Sell to your audience through a single platform
        </h2>
      </div>

      <div className="col-span-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-12 rounded-lg bg-gray-500 p-6 md:grid-cols-2 md:gap-4 md:p-12">
          <div className="flex w-fit flex-col gap-4 rounded-2xl">
            <span className="text-body-tag w-fit rounded-sm bg-blue-400 px-3 py-1.5 text-blue-200 uppercase">
              Personalized
            </span>
            <h2 className="text-heading-lg font-sans text-gray-100">
              Get a customized online store that reflects your brand
            </h2>
            <CreateStoreButton className="mt-4 hidden w-fit rounded-full md:mt-auto md:flex" />
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Feature section"
                width={440}
                height={330}
                className="w-full object-cover"
              />
            </div>
            <CreateStoreButton className="mt-4 w-full gap-2 rounded-full md:mt-auto md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

import { CreateStoreButton } from "@/components/create-store-button/create-store-button";
import Image from "next/image";

export const FeatureSection = () => {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col bg-gray-500 rounded-2xl p-8 md:p-12 gap-4 w-fit">
        <span className="text-blue-200 text-body-tag bg-blue-400 px-3 py-1.5 rounded-sm uppercase w-fit">Simple</span>
        <h2 className="font-sans text-gray-100 text-heading-lg">Create an online product catalog in a few minutes</h2>
      </div>
      <div className="flex flex-col bg-gray-500 rounded-2xl p-8 md:p-12 gap-4 w-fit">
        <span className="text-blue-200 text-body-tag bg-blue-400 px-3 py-1.5 rounded-sm uppercase w-fit">Practical</span>
        <h2 className="font-sans text-gray-100 text-heading-lg">Sell to your audience through a single platform</h2>
      </div>

      <div className="col-span-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
          <div className="flex flex-col rounded-2xl gap-4 w-fit">
            <span className="text-blue-200 text-body-tag bg-blue-400 px-3 py-1.5 rounded-sm uppercase w-fit">Personalized</span>
            <h2 className="font-sans text-gray-100 text-heading-lg">Get a customized online store that reflects your brand</h2>
            <CreateStoreButton className="hidden md:flex rounded-full w-fit mt-4 md:mt-auto" />
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden">
              <Image src="/feature-section.svg" alt="Feature section" width={440} height={330} className="object-cover w-full" />
            </div>
            <CreateStoreButton className="rounded-full w-full mt-4 md:mt-auto gap-2 md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};
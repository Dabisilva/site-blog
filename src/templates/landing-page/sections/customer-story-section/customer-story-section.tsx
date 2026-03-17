import { CustomerCard } from "./customer-card";



const customerStories = [
  {
    content:
      'Creating my store with Site.Set was the best decision for my business. The platform is super intuitive and I was able to list my products for sale in just a few minutes.',
    author: {
      name: 'Annete Bones',
      role: 'CEO at Anne Corp',
      avatar: '/customer-01.png',
    },
  },
  {
    content:
      'Turning my idea into an online store was quick and easy. I loved the customization options and the simple order management. I can already see my products reaching more people!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO at JJ Corp',
      avatar: '/customer-02.png',
    },
  },
];

export const CustomerStorySection = () => {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2
          className="font-sans text-heading-xl text-gray-100"
        >
          Everyone who uses it, approves!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customerStory) => (
            <CustomerCard customerStory={customerStory} key={customerStory.author.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
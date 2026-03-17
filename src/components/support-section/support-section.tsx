import { SupportSectionCard } from '@/components/support-section-card/support-section-card';
import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';

const supportSectionCards = [
  {
    Icon: PaintbrushVertical,
    title: 'Customize your site',
    text: 'Add your logo, favicon, and colors to your catalog and make it all yours.',
    bgColor: 'bg-blue-400',
    color: 'bg-blue-300',
  },
  {
    Icon: Store,
    title: 'Sell from any store',
    text: 'No matter the store, Site.Set lets you add any affiliate link.',
    bgColor: 'bg-cyan-300',
    color: 'bg-cyan-200',
  },
  {
    Icon: HeartHandshake,
    title: 'Get friendly support',
    text: 'Our team is always ready to help you with whatever you need.',
    bgColor: 'bg-blue-400',
    color: 'bg-blue-300',
  },
];

export const SupportSection = () => {
  return (
    <section className="pb-8 md:py-10 bg-gray-700">
      <div className="container flex flex-col items-center gap-12">
        <h2
          className="font-sans text-balance text-center text-heading-xl text-gray-100"
        >
          Your affiliate store, simple, the way it should be
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {supportSectionCards.map((card) => (
            <SupportSectionCard key={card.title} className={`${card.bgColor}`}>
              <SupportSectionCard.Icon className={`${card.color}`}>
                <card.Icon className="h-6 w-6 text-white" />
              </SupportSectionCard.Icon>
              <SupportSectionCard.Title>{card.title}</SupportSectionCard.Title>
              <SupportSectionCard.Text>{card.text}</SupportSectionCard.Text>
            </SupportSectionCard>
          ))}
        </div>
      </div>
    </section>
  );
};
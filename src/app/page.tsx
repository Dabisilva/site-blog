import { LandingPage } from '@/templates/landing-page/landing-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site.Set DS',
  description: 'Sell your products as an affiliate in one place',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Site.Set',
    description: 'Sell your products as an affiliate in one place',
    images: {
      url: '/og-image.jpg',
      width: 800,
      height: 600,
      alt: 'Site.Set DS',
    },
    url: 'https://site-blog-five-eta.vercel.app/og-image.jpg',
    siteName: 'Site.Set DS',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    countryName: 'Brazil',
  },
};

export default function Home() {
  return <LandingPage />;
}

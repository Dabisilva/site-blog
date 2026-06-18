import { siteConfig } from '@/lib/site-config';
import { LandingPage } from '@/templates/landing-page/landing-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site.Set DS',
  description: 'Sell your products as an affiliate in one place',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Site.Set DS',
    description: 'Sell your products as an affiliate in one place',
    url: siteConfig.url,
    siteName: 'Site.Set DS',
    type: 'website',
    locale: siteConfig.locale,
    alternateLocale: [...siteConfig.alternateLocales],
    countryName: siteConfig.countryName,
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set DS',
      },
    ],
  },
};

export default function Home() {
  return <LandingPage />;
}

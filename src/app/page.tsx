import { siteConfig } from '@/lib/site-config';
import { LandingPage } from '@/templates/landing-page/landing-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: siteConfig.locale,
    alternateLocale: [...siteConfig.alternateLocales],
    countryName: siteConfig.countryName,
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function Home() {
  return <LandingPage />;
}

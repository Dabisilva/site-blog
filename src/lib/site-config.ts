export const siteConfig = {
  name: 'Site.Set DS',
  shortName: 'Site.Set',
  description: 'Sell your products as an affiliate in one place',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://site-blog-five-eta.vercel.app',
  locale: 'en_US',
  alternateLocales: ['pt_BR'] as const,
  countryName: 'Brazil',
} as const;

export const siteUrl = new URL(siteConfig.url);

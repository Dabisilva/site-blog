import { Layout } from '@/components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/site-config';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.name,
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
        alt: 'Site.Set DS',
      },
    ],
  },
};

const themeScript = `
(function() {
  var t = localStorage.getItem('theme');
  var dark = t === 'dark' || (t !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', !!dark);
})();
`.trim();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

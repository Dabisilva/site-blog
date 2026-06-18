import { siteConfig } from '@/lib/site-config';
import BlogList from '@/templates/blog/blog-list';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips and strategies to boost your business',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Blog',
    description: 'Tips and strategies to boost your business',
    url: siteConfig.url,
    siteName: 'Blog',
    type: 'website',
    locale: siteConfig.locale,
    alternateLocale: [...siteConfig.alternateLocales],
    countryName: siteConfig.countryName,
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Blog',
      },
    ],
  },
};

export default function BlogPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return <BlogList posts={sortedPosts} />;
}

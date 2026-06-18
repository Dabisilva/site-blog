import { siteConfig } from '@/lib/site-config';
import { Post } from '@/templates/blog';
import { allPosts, type Post as PostType } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug?.toLowerCase()) as PostType;

  if (!post) {
    return {
      title: 'Post not found',
      description: 'Post not found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [
      {
        name: post.author.name,
      },
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      images: [post.image],
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      alternateLocale: [...siteConfig.alternateLocales],
      countryName: siteConfig.countryName,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug?.toLowerCase()) as PostType;

  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
}

import { Post } from '@/templates/blog';
import { allPosts, type Post as PostType } from 'contentlayer/generated';
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

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug?.toLowerCase()) as PostType;

  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
}

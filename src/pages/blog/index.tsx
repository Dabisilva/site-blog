import BlogList from '@/templates/blog/blog-list';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps } from 'next';

export default function BlogPage({ posts }: { posts: Post[] }) {
  return <BlogList posts={posts} />;
}

export const getStaticProps = (async () => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return { props: { posts } };
}) satisfies GetStaticProps<{ posts: Post[] }>;

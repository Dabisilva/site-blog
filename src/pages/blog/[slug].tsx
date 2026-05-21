import { Post } from '@/templates/blog';
import { allPosts, type Post as PostType } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

type PostPageProps = {
  post: PostType;
};

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />;
}

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const recentPosts = sortedPosts.slice(0, 5);

  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;

  const post = allPosts.find((post) => post.slug.toLowerCase() === slug?.toLowerCase());

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}) satisfies GetStaticProps<{ post: PostType }>;

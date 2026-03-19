import { Search } from '@/components/search';
import { allPosts } from 'contentlayer/generated';
import { useRouter } from 'next/router';
import { PostCard } from './components/post-card';
import { PostGridCards } from './components/post-grid-cards';

export default function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? '';
  const pageTitle = query
    ? `Results for: "${query}"`
    : 'Tips and strategies to boost your business';

  return (
    <div className="flex h-full grow flex-col py-24">
      <header className="mb-6">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="mb-6 flex flex-col gap-4 md:mb-0 md:px-0">
            <span className="text-body-tag w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-cyan-100 md:text-left">
              BLOG
            </span>

            <h1 className="text-heading-lg md:text-heading-xl max-w-2xl text-start text-balance text-gray-100 md:text-left">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      <PostGridCards>
        {allPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </PostGridCards>
    </div>
  );
}

import { Search } from '@/components/search';
import { allPosts } from 'contentlayer/generated';
import { Inbox } from 'lucide-react';
import { useRouter } from 'next/router';
import { PostCard } from './components/post-card';
import { PostGridCards } from './components/post-grid-cards';

export default function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? '';
  const pageTitle = query
    ? `Results for: "${query}"`
    : 'Tips and strategies to boost your business';

  const posts = query
    ? allPosts.filter((post) => {
        return (
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.description.toLowerCase().includes(query.toLowerCase()) ||
          post.author.name.toLowerCase().includes(query.toLowerCase())
        );
      })
    : allPosts;

  const hasPosts = posts.length > 0;

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

      {hasPosts && (
        <PostGridCards>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </PostGridCards>
      )}
      {!hasPosts && (
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-300 p-8 md:p-12">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <p className="text-body-sm text-center text-gray-100">No posts found</p>
          </div>
        </div>
      )}
    </div>
  );
}

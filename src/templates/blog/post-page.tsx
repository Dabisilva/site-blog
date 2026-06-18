import { Avatar } from '@/components/avatar';
import { Markdown } from '@/components/markdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { dataFormat } from '@/utils/dataFormat';
import { type Post as PostType } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { PostShare } from './components/post-share';

type PostPageProps = {
  post: PostType;
};

export const Post = ({ post }: PostPageProps) => {
  const postLink = `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/blog/${post?.slug}`;

  if (!post) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-20">
        <p className="text-body-md text-gray-200">Post not found.</p>
      </div>
    );
  }

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">{post?.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
          <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
            <figure className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ''}
                alt={post?.title ?? ''}
                fill
                className="object-cover"
              />
            </figure>

            <header className="mt-8 p-4 pb-0 md:mt-12 md:p-6 lg:p-12">
              <h1 className="text-heading-lg md:text-heading-xl lg:text-heading-xl mb-8">
                {post?.title}
              </h1>
              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar ?? ''}
                  alt={post?.author.name ?? ''}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em <time dateTime={post?.date}>{dataFormat(post?.date)}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert mt-12 max-w-none px-4 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw} />
            </div>
          </article>
          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700">
              <h2 className="text-heading-sm mb-4 hidden text-gray-100 md:block">Share</h2>
              <div className="flex justify-between gap-2 md:flex-col">
                <PostShare url={postLink} post={post} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

import { Avatar } from '@/components/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { dataFormat } from '@/utils/dataFormat';
import { allPosts } from 'contentlayer/generated';
import { Facebook, Link2, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const post = allPosts.find((post) => post.slug.toLowerCase() === slug?.toLowerCase());

  if (!post) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-24">
        <p className="text-body-md text-gray-200">Post not found.</p>
      </div>
    );
  }

  const postLink = `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}/blog/${post.slug}`;

  const shareLinks = [
    {
      label: 'Linkedin',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postLink)}`,
    },
    {
      label: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postLink)}`,
    },
    {
      label: 'Slack',
      icon: Link2,
      href: `https://slack.com/intl/en-br/`,
    },
  ];

  return (
    <main className="mt-32 text-gray-100">
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
            <Image src={post?.image ?? ''} alt={post?.title ?? ''} fill className="object-cover" />
          </figure>

          <header className="p-4 pb-0 md:p-6 lg:p-12">
            <h1 className="text-heading-lg md:text-heading-xl lg:text-heading-xl mb-6">
              {post?.title}
            </h1>
            <Avatar.Container>
              <Avatar.Image src={post?.author.avatar ?? ''} alt={post?.author.name ?? ''} />
              <Avatar.Content>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>
                  Publicado em <time dateTime={post?.date}>{dataFormat(post?.date)}</time>
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>
        </article>
      </div>
    </main>
  );
}

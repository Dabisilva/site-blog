import Image from 'next/image';
import Link from 'next/link';

import { dataFormat } from '@/utils/dataFormat';
import { Post } from 'contentlayer/generated';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="w-full max-w-2xl overflow-hidden rounded-[12px] border border-gray-400 bg-gray-600 transition-all duration-300 hover:border hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="overflow-hidden rounded-3xl p-2">
        {/* Imagem Container */}
        <div className="relative">
          <div className="absolute top-0 right-0 rounded-bl-[10px] bg-gray-600 px-3 py-1 backdrop-blur-sm">
            <span className="text-body-xs text-gray-300">{dataFormat(post.date)}</span>
          </div>
          <Image
            src={post.image}
            alt=""
            width={288}
            height={144}
            className="h-40 w-full rounded-t-[8px] object-cover object-center"
          />
        </div>

        {/* Post info */}
        <div className="mt-4 mb-4 space-y-4 px-2">
          <h2 className="text-heading-sm line-clamp-3 text-gray-100">{post.title}</h2>

          <p className="text-body-sm line-clamp-3 text-gray-300">{post.description}</p>
        </div>

        {/* Post footer */}
        <div className="flex items-center gap-3 border-t border-gray-400 py-4">
          <div className="relative h-5 w-5 overflow-hidden rounded-full border border-blue-200 md:h-6 md:w-6">
            <Image src={post.author.avatar} alt="" fill className="rounded-md object-cover" />
          </div>
          <span className="text-body-sm text-gray-300">{post.author.name}</span>
        </div>
      </div>
    </Link>
  );
};

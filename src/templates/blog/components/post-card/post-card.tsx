import Image from 'next/image';
import Link from 'next/link';

import { Avatar } from '@/components/avatar';
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
            className="h-40 w-full rounded-[8px] object-cover object-center"
          />
        </div>

        {/* Post info */}
        <div className="mt-4 mb-4 space-y-4 px-2">
          <h2 className="text-heading-sm line-clamp-3 text-gray-100">{post.title}</h2>

          <p className="text-body-sm line-clamp-3 text-gray-300">{post.description}</p>
        </div>

        {/* Post footer */}
        <div className="flex items-center gap-3 border-t border-gray-400 py-4">
          <Avatar.Container>
            <Avatar.Image src={post.author.avatar} alt={post.author.name} />
            <Avatar.Content>
              <Avatar.Title>{post.author.name}</Avatar.Title>
              <Avatar.Description>
                Publicado em <time dateTime={post.date}>{dataFormat(post.date)}</time>
              </Avatar.Description>
            </Avatar.Content>
          </Avatar.Container>
        </div>
      </div>
    </Link>
  );
};

'use client';

import { Button } from '@/components/ui/button';
import { useShare } from '@/hooks';
import { type Post as PostType } from 'contentlayer/generated';

type PostShareProps = {
  url: string;
  post: PostType;
};

export const PostShare = ({ url, post }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title: post?.title ?? '',
    text: post?.description ?? '',
  });

  return (
    <>
      {shareButtons.map((share) => (
        <Button
          key={share.provider}
          variant="outline"
          size="icon"
          className="w-fit cursor-pointer justify-start gap-2 px-4 md:w-full"
          onClick={() => share.action()}
        >
          {share.icon}
          <span className="hidden md:block">{share.name}</span>
        </Button>
      ))}
    </>
  );
};

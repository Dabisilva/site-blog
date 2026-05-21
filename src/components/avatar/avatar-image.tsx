import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';

type AvatarImageSize = 'xs' | 'sm';

type AvatarImageProps = Omit<ImageProps, 'width' | 'height'> & {
  size?: AvatarImageSize;
};

const avatarImageSizes = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
};

export const AvatarImage = ({ size = 'xs', alt, ...props }: AvatarImageProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border border-blue-200',
        avatarImageSizes[size],
      )}
    >
      <Image alt={alt} {...props} fill />
    </div>
  );
};

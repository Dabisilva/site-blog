import Image, { ImageProps } from 'next/image';

type AvatarImageProps = ImageProps;

export const AvatarImage = ({ width = 40, height = 40, alt, ...props }: AvatarImageProps) => {
  return <Image width={width} height={height} alt={alt} {...props} />;
};

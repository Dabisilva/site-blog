import { Link } from 'lucide-react';
import { useClipboard } from '../use-clipboard';
import { ShareConfig, SOCIAL_PROVIDERS, SocialProvider } from './share-provider';

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({ url, title, text, clipboardTimeout = 2000 }: UseShareProps) => {
  const { handleCopy, isCopied } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  };

  const share = async (provider: SocialProvider) => {
    if (provider === 'clipboard') {
      return await handleCopy(url);
    }
    const providerConfig = SOCIAL_PROVIDERS[provider];
    if (!providerConfig) {
      throw new Error(`Provider não suportado: ${provider}`);
    }
    try {
      const shareUrl = providerConfig.shareUrl(shareConfig);
      const shareWindow = window.open(shareUrl, '_blank');
      return !!shareWindow;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const shareButtons = [
    ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
      provider: key,
      name: provider.name,
      icon: provider.icon,
      action: () => share(key as SocialProvider),
    })),
    {
      provider: 'clipboard',
      name: isCopied ? 'Copied' : 'Copy',
      icon: <Link className="h-4 w-4" />,
      action: () => handleCopy(url),
    },
  ];
  return { shareButtons };
};

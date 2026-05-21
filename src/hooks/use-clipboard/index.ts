import { useState } from 'react';

type UseClipboardProps = {
  timeout?: number;
};

export const useClipboard = ({ timeout = 2000 }: UseClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (text: string) => {
    if (!navigator.clipboard) {
      console.error('Clipboard API not supported');
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };
  return { handleCopy, isCopied };
};

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type CreateStoreButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const CreateStoreButton = ({ ...props }: CreateStoreButtonProps) => {
  return (
    <Button variant="primary" asChild  {...props}>
      <Link href="/create-store">
        Create free store
        <ArrowRight />
      </Link>
    </Button>
  );
};
'use client';

import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ href, children, ...props }: ActiveLinkProps) => {
  const linkPath = (typeof href === 'string' ? href : href.pathname) ?? '';
  const pathname = usePathname();

  const isActive = () => {
    if (linkPath === '/') return pathname === '/';
    return pathname === linkPath || pathname?.startsWith(`${linkPath}/`);
  };

  const linkClass = () => (isActive() ? 'text-blue-500' : 'text-gray-100');

  return (
    <Link
      href={linkPath}
      {...props}
      className={cn('text-action-sm trasition-colors hover:text-primary', linkClass())}
    >
      {children}
    </Link>
  );
};

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ href, children, ...props }: ActiveLinkProps) => {
  const router = useRouter();

  const isActive = (path: string) => {
    if (path === "/") return router.pathname === "/";
    return router.pathname === path || router.pathname.startsWith(path + "/");
  };

  const linkClass = (path: string) =>
    isActive(path) ? "text-blue-500" : "text-gray-100";

  return <Link href={href.toString()} {...props} className={cn('text-action-sm trasition-colors hover:text-primary', linkClass(href.toString()))}>{children}</Link>;
};

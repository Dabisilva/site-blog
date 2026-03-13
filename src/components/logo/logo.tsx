import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" title="Inital Page">
      <Image src="/logo.svg" alt="Site Logo" width={100} height={100} />
    </Link>
  );
};
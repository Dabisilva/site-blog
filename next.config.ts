import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "@": path.join(process.cwd(), "src"),
    },
  },
};

export default nextConfig;

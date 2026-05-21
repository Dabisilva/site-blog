import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';
import path from 'path';

const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: 'infer',
    panicThreshold: 'all_errors',
  },
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      '@': path.join(process.cwd(), 'src'),
    },
  },
};

export default withContentlayer(nextConfig);

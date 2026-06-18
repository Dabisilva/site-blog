import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const result = spawnSync('npx', ['contentlayer', 'build'], { stdio: 'inherit' });

const generatedIndex = '.contentlayer/generated/index.mjs';

if (!existsSync(generatedIndex)) {
  if (result.status !== 0 && result.status !== null) {
    process.exit(result.status);
  }

  console.error('Contentlayer failed to generate documents.');
  process.exit(1);
}

import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist');
const source = resolve(distDir, 'index.html');
const destination = resolve(distDir, '404.html');

try {
  await copyFile(source, destination);
  console.log('Copied dist/index.html to dist/404.html');
} catch (error) {
  console.error('Failed to copy 404.html:', error);
  process.exitCode = 1;
}

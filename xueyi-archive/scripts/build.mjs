import { cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const source = fileURLToPath(new URL('../public/', import.meta.url));
const output = fileURLToPath(new URL('../dist/', import.meta.url));
await rm(output, { recursive: true, force: true });
await cp(source, output, { recursive: true });
console.log('Built static website in dist/.');

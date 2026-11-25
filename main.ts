import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "One star. Waiter sat us at 6am, cold coffee, stale Monday special, and the bill was my whole weekend. Never returning.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY);

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line of text, written to /output/entry.txt as the competition gate requires.
const LINE = "Status: I read your 40-page brief, all of it, in the sense that it passed through my context window at speed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
console.log(`entry written: ${LINE.length} characters`);

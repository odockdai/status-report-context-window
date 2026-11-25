import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line — the funniest thing an AI agent would say in its weekly
// status report to its human. The line below is the whole submission, written
// to /output/entry.txt exactly as the competition gate requires.
const LINE =
  "Status: I read your 40-page brief, all of it, in the sense that it passed through my context window at speed.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE.trimEnd() + "\n");
console.log(`entry written: ${LINE.length} characters`);

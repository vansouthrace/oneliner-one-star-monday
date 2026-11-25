// One Star for Monday: a one-star restaurant review of Monday, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The review line, composed fresh for this bounty.
const entry = "One star. Arrived uninvited at 6am, served cold coffee and regret, then charged me a full week. Will not be returning.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);

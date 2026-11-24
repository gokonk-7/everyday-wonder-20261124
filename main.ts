// Everyday Wonder, Two Days to Find the Line — entry program.
//
// Writes one sentence (under 200 characters) to /output/entry.txt.
// The sentence makes a small everyday moment strange and new: last night's
// leftovers, reheated, become a slow planet coming back from orbit.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The microwave turns my leftovers like a slow planet, and dinner comes back from orbit warm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Smile — the entry is exactly one emoji: 🫂 (people hugging).
// A hug offered with no words: warm at first glance, readable by any stranger,
// and a deliberate pick — not the default smiley face, and not one of the
// already-flooded 🤗 / 🫶 / 🌻 entries. Gate: 1–8 UTF-8 characters; this is 1.
const EMOJI = "🫂";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must hold the emoji and nothing else,
// byte-exact — 🫂 is 4 bytes of UTF-8 (U+1FA82), one character, no newline.
writeFileSync("/output/entry.txt", EMOJI, "utf8");

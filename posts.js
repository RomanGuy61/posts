/* =========================================================================
   SITE CONFIG
   Change these four lines to rebrand the whole site.
   ========================================================================= */
const SITE_CONFIG = {
  name: "SIGNAL",                                  // shows in the top-left brand and hero
  eyebrow: "// INCOMING TRANSMISSION",              // small line above the hero title
  tagline: "Dev log, patch notes & dispatches from the build.",
  footerNote: "Broadcasting from the build."
};

/* =========================================================================
   HOW TO ADD A POST
   -------------------------------------------------------------------------
   1. Copy the block below (from "{" to "},").
   2. Paste it at the TOP of the POSTS array (newest first).
   3. Fill in your own text. Every field is a plain string.
   4. Drop your image in the /images folder and point "image" at it,
      e.g. "images/my-screenshot.jpg" — or leave it "" for no image.
   5. "tag" controls the coloured chip + filter bar. Use any short word
      you like (DEVLOG, RELEASE, PATCH, UPDATE, TEASER...) — new tags
      just work, no other file needs to change.
   6. "content" is the full post. Separate paragraphs with a blank line
      (\n\n) and they'll render as separate paragraphs.

   {
     id: "unique-slug-2026-08-01",
     tag: "DEVLOG",
     title: "Your post title",
     date: "2026-08-01",
     image: "images/example.jpg",
     excerpt: "One or two sentences shown on the card in the feed.",
     content: "First paragraph of the full post.\n\nSecond paragraph, and so on."
   },
   ========================================================================= */

const POSTS = [
  {
    id: "hull-plating-pass-2026-08-01",
    tag: "DEVLOG",
    title: "Repainting the hull plating shader",
    date: "2026-08-01",
    image: "images/example.jpg",
    excerpt: "A pass on the ship hull material — better parallax, less banding, and a metalness map that finally reads right under the hangar lights.",
    content: "stuff"
  }
   ];

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
    id: "aug-statue-2026-08-04",
    tag: "TEASER",
    title: "August 2026 Status Update",
    date: "2026-08-04",
    image: "images/Aug2026.png",
    excerpt: "Talking about some of the stuff coming soon...",
    content: "I have a screenshot here showing just a bit of whats coming to V0.5. There is so much more coming but I can't put too much here.\n\nI am stopping development for V0.4C because I have added way to much while working. There is a title screen rework (Better than the one from 0.3A). There is a ton of optimization too. The old versions have TONS of assets that are now going to be unused because of how I have wanted the game to look. The full game will come out before 2029.\n\nH-slice. An H-slice is a 1.0 almost finished version. I am working on that so 1.0 will come faster and better. The features will be kinda done in the H-slice but not fully. That lets me have the features that I want, and make them better and possibly add mre faster.\n\nThe End of status update August 2026."
  }
   ];

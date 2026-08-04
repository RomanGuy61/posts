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
    content: "I have a screenshot showing just a small preview of what’s coming to V0.5, and even that tiny glimpse barely represents the scale of what’s being built behind the scenes. This update is shaping up to be one of the most transformative steps in the project so far, with new systems, visual improvements, and structural changes that push the game closer to its long‑term vision. There is far more planned than I can reveal right now, and many features are still in active development or being tested privately. The screenshot is just a teaser of a much larger wave of content and improvements.\n\nI’m officially stopping development on V0.4C. While working on it, I ended up adding far more than originally intended, and the update grew beyond its original scope. Because of that, shifting all focus to V0.5 is the best move for the project. The title screen is getting a full rework—one that looks significantly better than the version from 0.3A—and the entire game is receiving a major round of optimization. Older builds contain a huge number of assets that will now be retired as the game’s visual direction becomes more defined. This cleanup not only improves performance but also makes future development faster and more organized. The full game is still planned for release before 2029, and these changes help keep that timeline realistic.\n\nI’m also working on something I call the H‑slice. An H‑slice is essentially a near‑complete 1.0 version—about 1.0 in spirit, even if not fully polished. The goal is to get the core features implemented early, even if they aren’t fully refined yet. This approach lets me lock in the systems I want, improve them faster, and potentially add new features more efficiently. The H‑slice will act as a foundation for the final version, allowing me to refine mechanics, visuals, and gameplay flow without constantly rebuilding older systems. It should help the true 1.0 arrive sooner and in better shape.\n\nThere are also several experimental features being tested for possible inclusion in V0.5 or the H‑slice. Some of these may not make it into the final version, but exploring them now helps shape the direction of future updates. The goal is to create a stable, flexible base that supports long‑term development and makes each update more impactful.\n\nThat concludes the status update for August 2026."
  }
   ];

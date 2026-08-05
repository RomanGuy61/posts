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
    id: "aug-status-2026-08-04",
    tag: "TEASER",
    title: "BGP+ August 2026 Status Update",
    date: "2026-08-04",
    image: "images/Aug2026.png",
    excerpt: "Talking about some of the stuff coming soon...",
    content: "I have a screenshot showing just a small preview of what’s coming to V0.5, and even that tiny glimpse barely represents the scale of what’s being built behind the scenes. This update is shaping up to be one of the most transformative steps in the project so far, with new systems, visual improvements, and structural changes that push the game closer to its long‑term vision. There is far more planned than I can reveal right now, and many features are still in active development or being tested privately. The screenshot is just a teaser of a much larger wave of content and improvements.\n\nI’m officially stopping development on V0.4C. While working on it, I ended up adding far more than originally intended, and the update grew beyond its original scope. Because of that, shifting all focus to V0.5 is the best move for the project. The title screen is getting a full rework—one that looks significantly better than the version from 0.3A—and the entire game is receiving a major round of optimization. Older builds contain a huge number of assets that will now be retired as the game’s visual direction becomes more defined. This cleanup not only improves performance but also makes future development faster and more organized. The full game is still planned for release before 2029, and these changes help keep that timeline realistic.\n\nI’m also working on something I call the H‑slice. An H‑slice is essentially a near‑complete 1.0 version—about 1.0 in spirit, even if not fully polished. The goal is to get the core features implemented early, even if they aren’t fully refined yet. This approach lets me lock in the systems I want, improve them faster, and potentially add new features more efficiently. The H‑slice will act as a foundation for the final version, allowing me to refine mechanics, visuals, and gameplay flow without constantly rebuilding older systems. It should help the true 1.0 arrive sooner and in better shape.\n\nThere are also several experimental features being tested for possible inclusion in V0.5 or the H‑slice. Some of these may not make it into the final version, but exploring them now helps shape the direction of future updates. The goal is to create a stable, flexible base that supports long‑term development and makes each update more impactful.\n\nThat concludes the status update for August 2026."
  },
   {
   id: "version-0-5",
   tag: "RELEASE",
   title: "BGP+ V0.5 Release notes",
   date: "2026-08-05",
   image: "images/0dot5.png",
   excerpt: "New BGP+ update on itch.io",
   content: "V0.5A, The first major update is finally here! This update brings a huge amount of new content, visual improvements, and quality-of-life changes.\n\nFirst, the old 2D scene has been completely removed and replaced with a brand-new 3D environment. Alongside the visual upgrade, I also made several optimizations to improve overall game performance.\n\nSecond, Customization is finally available! The customization button has been sitting there since V0.3A without doing anything, but it's now fully functional. The shop still isn't available yet, since there aren't enough items to actually purchase... for now.\n\nThird, there's a mysterious new locked door in the first main game area. The key hasn't been fully added yet because... someone stole it. (Take a look to your left next to Brimace.)\n\nFourth, the game has an entirely redesigned main menu. The title screen has received a complete overhaul with new animations, improved buttons, and updated artwork. It finally looks like a real game instead of a low-effort mobile game.\n\nFifth, Speedrunning support has been added! A new in-game timer tracks how long it takes you to complete the game, making it easy to challenge yourself or compete with friends.\n\nSixth, the UI has been fixed to properly scale with different screen resolutions. Previously, changing your resolution could make large parts of the interface disappear, but that's no longer an issue.\n\nThis is by far the biggest update yet, and it's only the beginning. Thanks for playing and supporting the game—there's plenty more content, secrets, and features coming in future updates. Have fun exploring V0.5A!"
{
   ];

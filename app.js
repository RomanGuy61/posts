(function () {
  "use strict";

  // Colour rotation for tags — cycles automatically so new tags "just work".
  var TAG_PALETTE = [
    { color: "#ff3d6e", soft: "rgba(255, 61, 110, .16)" },  // rose
    { color: "#34f5c5", soft: "rgba(52, 245, 197, .16)" },  // mint
    { color: "#ffb443", soft: "rgba(255, 180, 67, .16)" },  // amber
    { color: "#9d7cff", soft: "rgba(157, 124, 255, .16)" }  // violet
  ];

  var tagColorMap = {};
  function colorForTag(tag) {
    if (!tagColorMap[tag]) {
      var idx = Object.keys(tagColorMap).length % TAG_PALETTE.length;
      tagColorMap[tag] = TAG_PALETTE[idx];
    }
    return tagColorMap[tag];
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function paragraphs(content) {
    return content
      .split(/\n\s*\n/)
      .map(function (p) { return "<p>" + escapeHtml(p).replace(/\n/g, "<br>") + "</p>"; })
      .join("");
  }

  var posts = (typeof POSTS !== "undefined" ? POSTS.slice() : []);
  posts.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

  var config = (typeof SITE_CONFIG !== "undefined") ? SITE_CONFIG : {};
  document.getElementById("site-name").textContent = config.name || "SIGNAL";
  document.getElementById("site-title").textContent = config.name || "SIGNAL";
  document.getElementById("footer-name").textContent = config.name || "SIGNAL";
  document.getElementById("site-eyebrow").textContent = config.eyebrow || "// INCOMING TRANSMISSION";
  document.getElementById("site-tagline").textContent = config.tagline || "";
  document.title = (config.name || "SIGNAL") + " — Dev Log";

  document.getElementById("post-count").textContent =
    posts.length + (posts.length === 1 ? " entry logged" : " entries logged");
  document.getElementById("latest-date").textContent =
    posts.length ? "Last updated " + formatDate(posts[0].date) : "";

  var grid = document.getElementById("post-grid");
  var filterBar = document.getElementById("filter-bar");
  var emptyState = document.getElementById("empty-state");
  var activeTag = "ALL";

  function uniqueTags() {
    var tags = [];
    posts.forEach(function (p) {
      if (tags.indexOf(p.tag) === -1) tags.push(p.tag);
    });
    return tags;
  }

  function buildFilters() {
    var tags = ["ALL"].concat(uniqueTags());
    filterBar.innerHTML = "";
    tags.forEach(function (tag) {
      var btn = document.createElement("button");
      btn.className = "chip" + (tag === activeTag ? " active" : "");
      btn.type = "button";
      btn.textContent = tag;
      if (tag !== "ALL") {
        btn.style.setProperty("--chip-color", colorForTag(tag).color);
      }
      btn.addEventListener("click", function () {
        activeTag = tag;
        buildFilters();
        renderGrid();
      });
      filterBar.appendChild(btn);
    });
  }

  function cardTemplate(post, index) {
    var palette = colorForTag(post.tag);
    var card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.style.setProperty("--card-color", palette.color);
    card.style.setProperty("--card-soft", palette.soft);
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Open dispatch: " + post.title);

    var imageWrap = document.createElement("div");
    imageWrap.className = "card-image-wrap";

    if (post.image) {
      var img = document.createElement("img");
      img.src = post.image;
      img.alt = post.title;
      img.loading = "lazy";
      img.onerror = function () {
        imageWrap.innerHTML = '<div class="card-image-fallback">' + escapeHtml(post.tag) + "</div>";
      };
      imageWrap.appendChild(img);
    } else {
      imageWrap.innerHTML = '<div class="card-image-fallback">' + escapeHtml(post.tag) + "</div>";
    }

    var body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML =
      '<div class="card-meta">' +
        '<span class="tag-chip">' + escapeHtml(post.tag) + "</span>" +
        '<span class="card-date">' + escapeHtml(formatDate(post.date)) + "</span>" +
      "</div>" +
      '<h3 class="card-title">' + escapeHtml(post.title) + "</h3>" +
      '<p class="card-excerpt">' + escapeHtml(post.excerpt || "") + "</p>" +
      '<span class="card-cta">Read dispatch <span class="arrow">→</span></span>';

    card.appendChild(imageWrap);
    card.appendChild(body);

    card.addEventListener("click", function () { openOverlay(index); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openOverlay(index); }
    });

    return card;
  }

  var visiblePosts = [];

  function renderGrid() {
    grid.innerHTML = "";
    visiblePosts = activeTag === "ALL" ? posts : posts.filter(function (p) { return p.tag === activeTag; });

    emptyState.hidden = visiblePosts.length !== 0;

    visiblePosts.forEach(function (post, i) {
      grid.appendChild(cardTemplate(post, i));
    });

    observeCards();
  }

  document.getElementById("clear-filter").addEventListener("click", function () {
    activeTag = "ALL";
    buildFilters();
    renderGrid();
  });

  // Scroll-in animation
  var io = ("IntersectionObserver" in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () { entry.target.classList.add("in-view"); }, (i % 6) * 60);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  function observeCards() {
    var cards = grid.querySelectorAll(".card");
    if (io) {
      cards.forEach(function (c) { io.observe(c); });
    } else {
      cards.forEach(function (c) { c.classList.add("in-view"); });
    }
  }

  /* ---------------- Overlay / detail view ---------------- */
  var overlay = document.getElementById("overlay");
  var overlayScrim = document.getElementById("overlay-scrim");
  var overlayClose = document.getElementById("overlay-close");
  var overlayImage = document.getElementById("overlay-image");
  var overlayTag = document.getElementById("overlay-tag");
  var overlayDate = document.getElementById("overlay-date");
  var overlayTitle = document.getElementById("overlay-title");
  var overlayContent = document.getElementById("overlay-content");
  var overlayPrev = document.getElementById("overlay-prev");
  var overlayNext = document.getElementById("overlay-next");

  var currentIndex = 0;
  var lastFocused = null;

  function openOverlay(index) {
    currentIndex = index;
    lastFocused = document.activeElement;
    renderOverlay();
    overlay.hidden = false;
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
    overlayClose.focus();
  }

  function closeOverlay() {
    overlay.hidden = true;
    overlay.style.display = "none";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function renderOverlay() {
    var post = visiblePosts[currentIndex];
    if (!post) return;
    var palette = colorForTag(post.tag);

    overlayTag.textContent = post.tag;
    overlayTag.style.background = palette.soft;
    overlayTag.style.color = palette.color;
    overlayDate.textContent = formatDate(post.date);
    overlayTitle.textContent = post.title;
    overlayContent.innerHTML = paragraphs(post.content || post.excerpt || "");

    if (post.image) {
      overlayImage.src = post.image;
      overlayImage.alt = post.title;
      overlayImage.style.display = "";
      overlayImage.onerror = function () { overlayImage.style.display = "none"; };
    } else {
      overlayImage.removeAttribute("src");
      overlayImage.style.display = "none";
    }

    overlayPrev.disabled = currentIndex <= 0;
    overlayNext.disabled = currentIndex >= visiblePosts.length - 1;
    document.getElementById("overlay-panel").scrollTop = 0;
    overlay.scrollTop = 0;
  }

  overlayClose.addEventListener("click", closeOverlay);
  overlayScrim.addEventListener("click", closeOverlay);
  document.addEventListener("keydown", function (e) {
    if (overlay.hidden) return;
    if (e.key === "Escape") closeOverlay();
    if (e.key === "ArrowLeft" && !overlayPrev.disabled) { currentIndex--; renderOverlay(); }
    if (e.key === "ArrowRight" && !overlayNext.disabled) { currentIndex++; renderOverlay(); }
  });
  overlayPrev.addEventListener("click", function () { if (currentIndex > 0) { currentIndex--; renderOverlay(); } });
  overlayNext.addEventListener("click", function () { if (currentIndex < visiblePosts.length - 1) { currentIndex++; renderOverlay(); } });

  /* ---------------- Init ---------------- */
  buildFilters();
  renderGrid();
})();

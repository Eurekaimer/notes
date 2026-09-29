(() => {
  // One subscription survives Zensical instant navigation; each mounted page owns its listeners.
  const mounted = new WeakSet();
  const platforms = { youtube: "YouTube", bilibili: "Bilibili" };
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const button = (className, text) => {
    const node = element("button", className, text);
    node.type = "button";
    return node;
  };
  const embedURL = (video) => {
    if (video.platform === "youtube") return `https://www.youtube.com/embed/${encodeURIComponent(video.video_id)}`;
    if (video.platform === "bilibili") return `https://player.bilibili.com/player.html?bvid=${encodeURIComponent(video.video_id)}&autoplay=0`;
    return null;
  };

  async function initialize() {
    const root = document.querySelector("#video-archive");
    if (!root || mounted.has(root)) return;
    mounted.add(root);
    const pageURL = new URL(location.href);
    // Relative to the page, not the domain root: also works under /Stathelper/.
    const source = new URL(root.dataset.source, pageURL);
    const search = root.querySelector("#video-search");
    const sort = root.querySelector("#video-sort");
    const grid = root.querySelector("#video-grid");
    const status = root.querySelector("#video-status");
    const empty = root.querySelector("#video-empty");
    const error = root.querySelector("#video-error");
    const more = root.querySelector("#video-more-tags");
    let videos;
    try {
      const response = await fetch(source);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      videos = await response.json();
      const ids = new Set();
      if (!Array.isArray(videos)) throw new Error("Expected an array");
      for (const video of videos) {
        const fields = ["id", "title", "platform", "video_id", "url", "channel", "published_at", "description"];
        if (fields.some((key) => typeof video[key] !== "string") || ids.has(video.id) || !video.id ||
            !/^\d{4}-\d{2}-\d{2}$/.test(video.published_at) ||
            !Number.isFinite(Date.parse(video.published_at)) ||
            new Date(video.published_at).toISOString().slice(0, 10) !== video.published_at ||
            !Array.isArray(video.tags) || video.tags.some((tag) => typeof tag !== "string" || !tag.trim()) ||
            !["http:", "https:"].includes(new URL(video.url).protocol)) {
          throw new Error("Invalid video entry: " + (video.id || "unknown"));
        }
        ids.add(video.id);
      }
    } catch (cause) {
      if (!root.isConnected) return;
      status.textContent = "";
      error.hidden = false;
      error.textContent = "视频数据加载失败，请刷新页面；维护者请检查 videos.json 的格式、必填字段和 YYYY-MM-DD 日期。";
      console.error("Video Archive:", cause);
      return;
    }
    if (!root.isConnected) return;

    const tags = [...new Set(videos.flatMap((video) => video.tags))].sort();
    const selected = new Set((pageURL.searchParams.get("tags") || "").split(",").filter(Boolean));
    search.value = pageURL.searchParams.get("q") || "";
    sort.value = ["newest", "oldest", "title"].includes(pageURL.searchParams.get("sort")) ? pageURL.searchParams.get("sort") : "newest";
    let columns = "3";
    try { if (localStorage.getItem("video-grid-columns") === "2") columns = "2"; } catch { /* Storage can be disabled. */ }
    for (const control of root.querySelectorAll("[data-display]")) {
      const key = control.dataset.display;
      try { control.checked = localStorage.getItem(`video-show-${key}`) === "true"; } catch { /* Optional preference. */ }
      const apply = () => { root.dataset[`show${key[0].toUpperCase()}${key.slice(1)}`] = String(control.checked); };
      apply();
      control.addEventListener("change", () => {
        apply();
        try { localStorage.setItem(`video-show-${key}`, String(control.checked)); } catch { /* Optional preference. */ }
      });
    }

    const tagButton = (tag) => {
      const node = button("video-tag", `#${tag}`);
      node.dataset.tag = tag;
      node.setAttribute("aria-pressed", "false");
      return node;
    };
    const all = button("video-tag", "All");
    all.dataset.all = "";
    root.querySelector("#video-tags").append(all);
    // Keep the first row bounded; all remaining tags stay searchable and selectable.
    const counts = new Map(tags.map((tag) => [tag, 0]));
    for (const video of videos) for (const tag of new Set(video.tags)) counts.set(tag, counts.get(tag) + 1);
    tags.sort((a, b) => counts.get(b) - counts.get(a) || a.localeCompare(b));
    tags.forEach((tag, index) => root.querySelector(index < 10 ? "#video-tags" : "#video-extra-tags").append(tagButton(tag)));
    // Preserve unknown shared filters visibly rather than silently broadening the result.
    for (const tag of selected) if (!tags.includes(tag)) root.querySelector("#video-extra-tags").append(tagButton(tag));
    more.hidden = !root.querySelector("#video-extra-tags").children.length;
    if ([...selected].some((tag) => !tags.slice(0, 10).includes(tag))) more.open = true;

    const entries = videos.map((video) => {
      const card = element("article", "video-card");
      card.dataset.id = video.id;
      const media = element("div", "video-media");
      const src = embedURL(video);
      let preview;
      if (src) {
        // Load only the cover until the user requests the third-party player.
        const play = button("video-play");
        const thumbnail = video.thumbnail || (video.platform === "youtube" ? `https://i.ytimg.com/vi/${encodeURIComponent(video.video_id)}/hqdefault.jpg` : null);
        if (thumbnail) {
          const image = element("img", "video-thumbnail");
          image.alt = "";
          image.loading = "lazy";
          image.decoding = "async";
          image.referrerPolicy = "no-referrer";
          image.src = thumbnail;
          image.addEventListener("error", () => image.remove(), { once: true });
          play.append(image);
        }
        play.append(element("span", "video-play-label", `播放 · ${platforms[video.platform]}`));
        play.setAttribute("aria-label", `播放 ${video.title}`);
        preview = play;
        play.addEventListener("click", () => {
          const iframe = element("iframe");
          iframe.src = src;
          iframe.title = video.title;
          iframe.loading = "lazy";
          iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
          iframe.allowFullscreen = true;
          iframe.referrerPolicy = "strict-origin-when-cross-origin";
          media.replaceChildren(iframe);
          iframe.focus();
        });
        media.append(play);
      } else {
        media.append(element("span", "", "请通过标题在原平台观看"));
      }
      const body = element("div", "video-body");
      const heading = element("h2", "video-title");
      const link = element("a", "", video.title);
      link.href = video.url;
      link.title = video.title;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      heading.append(link);
      const meta = element("p", "video-meta", `${video.channel} · ${platforms[video.platform] || video.platform}${video.example ? " · 示例" : ""}`);
      const date = element("time", "video-meta", video.published_at);
      date.dateTime = video.published_at;
      const pills = element("div", "video-card-tags");
      for (const tag of new Set(video.tags)) pills.append(tagButton(tag));
      body.append(heading, meta, date, element("p", "video-description", video.description), pills);
      card.append(media, body);
      return { video, card, media, preview, text: [video.title, video.channel, video.description, ...video.tags].join(" ").toLowerCase() };
    });

    function updateURL() {
      const url = new URL(location.href);
      for (const [key, value] of [["q", search.value], ["tags", [...selected].sort().join(",")], ["sort", sort.value === "newest" ? "" : sort.value]]) {
        if (value) url.searchParams.set(key, value);
        else url.searchParams.delete(key);
      }
      // Replace rather than adding a history entry for every keystroke. Preserve Zensical's history state.
      history.replaceState(history.state, "", url);
    }
    function render() {
      const query = search.value.trim().toLowerCase();
      const activeTags = [...selected];
      const visible = entries.filter(({ video, text }) => text.includes(query) && activeTags.every((tag) => video.tags.includes(tag)));
      visible.sort((a, b) => {
        if (sort.value === "title") return a.video.title.localeCompare(b.video.title) || a.video.id.localeCompare(b.video.id);
        const order = a.video.published_at.localeCompare(b.video.published_at);
        return (sort.value === "oldest" ? order : -order) || a.video.id.localeCompare(b.video.id);
      });
      // Replacing cards stops any running player when the result set/order changes.
      // The local Play button is restored so returning to a result cannot silently restart it.
      for (const { media, preview } of entries) {
        if (media.querySelector("iframe")) media.replaceChildren(preview);
      }
      grid.replaceChildren(...visible.map(({ card }) => card));
      empty.hidden = visible.length !== 0;
      status.textContent = `${visible.length} / ${videos.length} 个视频`;
      for (const tag of root.querySelectorAll("[data-tag]")) tag.setAttribute("aria-pressed", String(selected.has(tag.dataset.tag)));
      all.setAttribute("aria-pressed", String(selected.size === 0));
    }
    function setColumns(value) {
      grid.dataset.columns = value;
      for (const control of root.querySelectorAll("[data-columns]")) {
        if (control.tagName === "BUTTON") control.setAttribute("aria-pressed", String(control.dataset.columns === value));
      }
    }
    root.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target) return;
      if (target.hasAttribute("data-columns")) {
        setColumns(target.dataset.columns);
        try { localStorage.setItem("video-grid-columns", target.dataset.columns); } catch { /* Optional preference. */ }
        return;
      }
      if (target.hasAttribute("data-tag")) {
        const tag = target.dataset.tag;
        if (selected.has(tag)) selected.delete(tag); else selected.add(tag);
        if (!tags.slice(0, 10).includes(tag)) more.open = true;
      } else if (target.hasAttribute("data-clear")) {
        selected.clear();
        search.value = "";
      } else if (target.hasAttribute("data-all")) selected.clear();
      else return;
      render();
      updateURL();
      if (!target.isConnected || target.closest("[hidden]")) search.focus();
    });
    search.addEventListener("input", () => { render(); updateURL(); });
    sort.addEventListener("change", () => { render(); updateURL(); });
    setColumns(columns);
    render();
  }

  if (typeof document$ !== "undefined") document$.subscribe(initialize);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();

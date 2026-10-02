(() => {
  const mounted = new WeakSet();
  const excludedContent = "pre, code, .arithmatex, script, style, svg, .giscus, #__comments, .headerlink, .md-icon, .md-content__button, .filename, .note-reading-meta, button, input, select, textarea";
  const blockContent = "p, div, h1, h2, h3, h4, h5, h6, li, blockquote, summary, td, th, dt, dd";
  const numberFormat = new Intl.NumberFormat("zh-CN");

  function normalizePath(path) {
    return path.replace(/\/index\.html$/, "/").replace(/\/+$/, "");
  }

  function initialize() {
    const article = document.querySelector(".md-content__inner");
    const homeLink = document.querySelector("a.md-logo");
    if (!article || !homeLink || mounted.has(article)) return;

    // 从主题首页链接推导部署前缀，根目录和 /notes/ 部署使用同一套排除规则。
    const homePath = normalizePath(new URL(homeLink.href).pathname);
    const pagePath = normalizePath(location.pathname);
    if (pagePath === homePath || pagePath === `${homePath}/friends-link`) return;
    mounted.add(article);

    const parts = [];
    function collect(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        parts.push(node.nodeValue);
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (node.matches(excludedContent)) {
        parts.push(" ");
        return;
      }
      const isBlock = node.matches(blockContent);
      if (isBlock) parts.push("\n");
      for (const child of node.childNodes) collect(child);
      if (isBlock) parts.push("\n");
    }
    collect(article);
    const text = parts.join("");
    let chineseCharacters = 0;
    let words = 0;
    for (const match of text.matchAll(/\p{Script=Han}/gu)) chineseCharacters += 1;
    const otherText = text.replace(/\p{Script=Han}/gu, " ");
    for (const match of otherText.matchAll(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)) words += 1;

    // 中文按每分钟 300 字、英文等词语按每分钟 200 词估算，不将代码和公式混入正文。
    const count = chineseCharacters + words;
    const minutes = Math.max(1, Math.ceil(chineseCharacters / 300 + words / 200));
    const metadata = document.createElement("p");
    metadata.className = "note-reading-meta";
    metadata.textContent = `${numberFormat.format(count)} 字 · 预计阅读 ${minutes} 分钟`;
    metadata.title = "汉字每字计 1，英文等连续词语每词计 1；不含代码、公式和评论。";
    metadata.dataset.wordCount = count;
    metadata.dataset.readingMinutes = minutes;
    const heading = article.querySelector("h1");
    if (heading) heading.after(metadata);
    else article.prepend(metadata);
  }

  if (typeof document$ !== "undefined") document$.subscribe(initialize);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();

(() => {
  window.MathJax = {
    loader: {
      load: ["[tex]/boldsymbol"],
    },
    tex: {
      packages: { "[+]": ["boldsymbol"] },
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex",
    },
  };

  function markOutlineMath() {
    // TOC 保留公式分隔符，但剥掉了正文的 arithmatex 包装。
    for (const label of document.querySelectorAll(".md-nav--secondary .md-ellipsis")) {
      const text = label.querySelector(".md-typeset") || label;
      if (/\\[([]/.test(text.textContent)) text.classList.add("arithmatex");
    }
  }

  function typeset() {
    markOutlineMath();
    if (!window.MathJax?.startup?.output) return;
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  }

  // 首次加载也先标记目录，之后交给 MathJax 的启动排版处理。
  markOutlineMath();
  if (typeof document$ !== "undefined") document$.subscribe(typeset);
  else window.addEventListener("load", typeset, { once: true });
})();

// 共用打字机效果：页面放置 .modern-typewriter 标记即可，短语经 data-phrases 传入。
(() => {
  const mounted = new WeakSet();

  function initialize() {
    const el = document.querySelector("#typewriter-text");
    if (!el || mounted.has(el)) return;
    mounted.add(el);

    const phrases = JSON.parse(el.dataset.phrases || "[]");
    if (!phrases.length) return;
    const typeSpeed = Number(el.dataset.typeSpeed || 90);
    const deleteSpeed = Number(el.dataset.deleteSpeed || 50);
    const holdTime = Number(el.dataset.holdTime || 2000);
    const pause = 500;

    let loopIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      if (!el.isConnected) return; // 页面已切走，停止计时器
      const phrase = phrases[loopIndex];
      charIndex += deleting ? -1 : 1;
      el.textContent = phrase.slice(0, charIndex);

      let delay = deleting ? deleteSpeed : typeSpeed;
      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        delay = holdTime;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        loopIndex = (loopIndex + 1) % phrases.length;
        delay = pause;
      }
      setTimeout(tick, delay);
    }
    tick();
  }

  if (typeof document$ !== "undefined") document$.subscribe(initialize);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();

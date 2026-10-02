---
comments: true
hide: title
---

<style>
  /* 1. 卡片外层容器 */
  .blog-card-container {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 170px;
    background-color: var(--md-default-bg-color);
    border: 1px solid var(--md-default-fg-color--lightest);
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    margin-bottom: 24px;
    padding: 12px; 
    box-sizing: border-box;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .blog-card-container:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    border-color: var(--md-accent-fg-color);
  }

  .blog-card-left {
    width: 220px;      
    min-width: 220px;  
    height: 100%;      
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.05);
    overflow: hidden;
    margin-right: 20px;
  }

  .blog-card-left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin: 0;
  }

  .blog-card-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 10px; 
  }

  .blog-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
    line-height: 1.3;
    color: var(--md-typeset-color);
  }

  .blog-card-desc {
    font-size: 0.95rem;
    opacity: 0.8;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .blog-card-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .md-grid {
    max-width: 1540px;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    .blog-card-container {
      height: auto;
      flex-direction: column;
    }
    .blog-card-left {
      width: 100%;
      height: 180px;
      margin-right: 0;
      margin-bottom: 12px;
    }
  }
</style>

# Home

<div class="modern-typewriter">
    <span id="typewriter-text"></span>
    <span class="blinking-cursor"></span>
</div>

<style>
    /* --- 核心样式 --- */
    .modern-typewriter {
        /* 字体设置：优先使用系统现代字体 */
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-weight: 600;       /* 粗体，显眼但不过分 */
        font-size: 1.6rem;      /* 字号：1.8倍根字号，适中 */
        color: #3f6d9b;         /* 颜色：深灰蓝，比纯黑更现代 */
        /* 如果是暗黑模式笔记，请把上面改成 color: #e0e0e0; */

        display: flex;
        justify-content: center; /* 居中 */
        align-items: center;
        white-space: nowrap;     /* 关键：强制不换行 */
        margin: 20px 0;          /* 上下留白 */
        line-height: 1.2;
    }

    /* --- 光标样式 --- */
    .blinking-cursor {
        display: inline-block;
        width: 3px;              /* 光标宽度 */
        height: 1.8rem;          /* 光标高度与文字一致 */
        background-color: #2c3e50; /* 光标颜色，建议与文字一致 */
        margin-left: 4px;
        animation: blink-animation 1s step-end infinite;
    }

    /* 光标闪烁动画 */
    @keyframes blink-animation {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
</style>

<script>
    (function() {
        // ---在此处修改你的列表---
        const phrases = [
            "「不必要なことはしない 必要なことは迅速に」"
        ];

        const el = document.getElementById("typewriter-text");
        let loopIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        // 速度设置 (单位: 毫秒)
        const typeSpeed = 90;    // 打字速度
        const deleteSpeed = 50;  // 删除速度
        const holdTime = 2000;   // 打完字后停留的时间

        function loop() {
            const currentPhrase = phrases[loopIndex];

            if (isDeleting) {
                // 删除逻辑
                el.innerText = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // 输入逻辑
                el.innerText = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            // 动态决定下一次回调的时间
            let delta = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting && charIndex === currentPhrase.length) {
                // 打完了，停顿一会儿
                delta = holdTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // 删完了，切换到下一句
                isDeleting = false;
                loopIndex = (loopIndex + 1) % phrases.length;
                delta = 500; // 开始新句子前的小停顿
            }

            setTimeout(loop, delta);
        }

        loop();
    })();
</script>

<div class="blog-card-container">
    <a href="https://www.eurekaimer.icu/notes/WebSource/计算机科学(CS)资源汇总/" class="blog-card-link"></a>
    <div class="blog-card-left">
        <img src="https://lain.bgm.tv/r/400/pic/cover/l/f6/0f/604826_2XWRN.jpg" alt="Cover">
    </div>
    <div class="blog-card-right">
        <div class="blog-card-title">Computer Science Resources</div>
        <div class="blog-card-desc">
            计算机科学学习资源汇总
        </div>
    </div>
</div>

<div class="blog-card-container">
    <a href="/friends-link" class="blog-card-link"></a>
    <div class="blog-card-left">
        <img src="https://lain.bgm.tv/r/400/pic/cover/l/73/26/110467_Fx9tT.jpg" alt="Cover">
    </div>
    <div class="blog-card-right">
        <div class="blog-card-title">Friends Link</div>
        <div class="blog-card-desc">
            朋友们
        </div>
    </div>
</div>

!!! info "官方文档"
    Zensical 官方文档: [https://zensical.org/docs/](https://zensical.org/docs/)

目前大概是将原本[MkDocs博客](https://www.eurekaimer.icu/blog/)的一些板块迁移过来了

---

<div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 2em;" markdown="1">

<div style="flex: 1; padding-right: 30px; display: flex; flex-direction: column; gap: 1.5em; align-items: flex-start;" markdown="1">

<div>
站点声明<br>
<span style="font-size: 0.9em; color: gray; line-height: 1.6;">
站长：Eurekaimer<br>
本站所有内容遵循 CC BY-SA 4.0 协议<br>
如需联系，请查看页面底部页脚信息
</span>
</div>

[请我喝下午茶](https://raw.githubusercontent.com/Eurekaimer/MyIMGs/refs/heads/main/img/buy_me_a_coffee.png){ .md-button .md-button--primary }

</div>

<div style="text-align: right;">
    <img src="https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/20260218021229.png" alt="Eurekaimer Signature" style="width: 220px; opacity: 0.9; mix-blend-mode: multiply;">
</div>

</div>

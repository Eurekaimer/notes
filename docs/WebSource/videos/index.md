---
hide:
  - toc
---

# Video Archive {#video-archive-title}

这里收集值得回看的讲座、教程与讨论；可以按标题搜索、按标签筛选，并在播放前查看来源与发布日期。

<div id="video-archive" data-source="videos.json">
  <p class="video-metadata-warning" role="note">
    点击播放加载 YouTube 或 Bilibili 原生播放器，也可以点击标题在原站观看。
  </p>

  <section class="video-toolbar" aria-label="视频搜索、排序与布局控制">
    <div class="video-control video-search-control">
      <label for="video-search">搜索视频</label>
      <input id="video-search" type="search" placeholder="搜索标题、频道或简介" autocomplete="off" aria-controls="video-grid">
    </div>

    <div class="video-control video-sort-control">
      <label for="video-sort">排序方式</label>
      <select id="video-sort" aria-controls="video-grid">
        <option value="newest">最新发布</option>
        <option value="oldest">最早发布</option>
        <option value="title">按标题</option>
      </select>
    </div>

    <fieldset class="video-control video-layout-control">
      <legend>每行卡片数</legend>
      <div class="video-button-group">
        <button type="button" class="video-control-button" data-columns="2" aria-pressed="false" aria-controls="video-grid">2 列</button>
        <button type="button" class="video-control-button" data-columns="3" aria-pressed="true" aria-controls="video-grid">3 列</button>
      </div>
    </fieldset>

    <button type="button" class="video-clear-button" data-clear aria-controls="video-grid">清除筛选</button>
  </section>

  <details class="video-display-options">
    <summary>显示选项</summary>
    <div class="video-option-list">
      <label><input type="checkbox" data-display="description"> 显示视频简介</label>
      <label><input type="checkbox" data-display="tags"> 显示卡片标签</label>
    </div>
  </details>

  <section class="video-tag-filters" aria-labelledby="video-tags-label">
    <span id="video-tags-label" class="video-filter-label">标签</span>
    <div id="video-tags" class="video-tags" role="group" aria-label="常用标签"></div>
    <details id="video-more-tags" class="video-more-tags">
      <summary>更多标签</summary>
      <div id="video-extra-tags" class="video-tags" role="group" aria-label="更多标签"></div>
    </details>
  </section>

  <p id="video-status" class="video-status" role="status" aria-live="polite" aria-atomic="true">正在加载视频…</p>

  <div id="video-error" class="video-message video-error" role="alert" hidden>
    视频目录暂时无法加载，请稍后重试或检查 <code>videos.json</code>。
  </div>

  <div id="video-grid" class="video-grid" data-columns="3" aria-label="视频列表"></div>

  <div id="video-empty" class="video-message video-empty" hidden>
    <p>没有符合当前条件的视频。</p>
    <button type="button" class="video-clear-button" data-clear aria-controls="video-grid">清除筛选</button>
  </div>

  <noscript>
    <p class="video-message video-noscript">此页面需要 JavaScript 才能读取本地视频目录并使用筛选功能。你仍可直接查看 <a href="videos.json">videos.json</a>。</p>
  </noscript>
</div>

<details class="video-maintenance" markdown="1">
<summary>维护视频目录</summary>

- 在同目录的 `videos.json` 数组中新增对象。每项使用 `id`、`title`、`platform`、`video_id`、`url`、`channel`、`published_at`（`YYYY-MM-DD`）、`description`、`tags` 和 `example` 字段。
- `example: true` 表示仅供展示的占位元数据；正式条目请核实内容、替换占位信息，并设为 `false`。
- YouTube：`platform` 填 `"youtube"`，`video_id` 填观看链接中 `v=` 后的 ID，`url` 填完整原视频链接。
- Bilibili：`platform` 填 `"bilibili"`，`video_id` 填完整 BV 号，`url` 填 `https://www.bilibili.com/video/BV号`。
- 封面使用可选的 `thumbnail` 图片 URL（也支持相对此页的本地图片路径）。YouTube 默认根据视频 ID 生成封面地址；Bilibili 请手动填写封面地址。封面懒加载，不调用平台 API；图片不可用时仍能点击播放。
- 顶部「显示选项」可开启简介和卡片标签，默认均隐藏，选择会保存在当前浏览器中；隐藏内容仍参与搜索和筛选。
- `id` 必须唯一；`published_at` 填视频原始发布日期，而不是收藏日期。`tags` 是字符串数组，建议使用小写、连字符连接的标签，例如 `["llm", "talk", "reference"]`；多个筛选标签采用 AND。
- 新标签会自动进入筛选器，无需修改页面；目录完全读取本地 JSON，不调用任何 API。

</details>

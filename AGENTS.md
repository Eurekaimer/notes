# Notes 仓库记忆文件（写作者与 AI 通用）

个人学习笔记站（Zensical / MkDocs-Material 主题），部署在 https://www.eurekaimer.icu/notes/。
写笔记、改结构、调排版前先读本文件；渲染细则见 `zensical-rendering-skill.md`。

## 构建与预览

- 预览：`.venv/bin/zensical serve -a 127.0.0.1:8000`
- 构建：`.venv/bin/zensical build --clean`（输出到 `site/`，`site/` 已入库，构建后一并提交）
- 新增页面必须登记到 `zensical.toml` 的 `nav`，否则不出现在侧边栏

## 目录结构

- 顶级分区：Home / Analysis / Algebra / Probability / Statistics / Computer Science / Tech / WebSource / Research / Physics / Friends Link
- 目录名用英文 PascalCase（如 `MathematicalAnalysis`、`StochasticProcess`）；笔记文件名可以保留中文（历史文件不强制改名），新文件建议英文
- 每个分区必须有 `index.md`，其一级标题用英文（如 `# Analysis`），正文可用中文
- 新笔记归属：数学分析/实分析/泛函分析 → Analysis；高等代数 → Algebra；概率论/随机过程 → Probability；数理统计/回归分析/运筹 → Statistics；课程与工具分别进 Computer Science / Tech
- 站内链接用标准 Markdown 相对路径（`[x](./x.md)`），禁用 `[[wikilink]]`

## 中文排版规范

依据《中文文案排版指北》（sparanoid/chinese-copywriting-guidelines）：

### 空格

- 中文与英文之间加一个半角空格：`使用 Python 编写`
- 中文与数字之间加一个半角空格：`共 3 个`、`2025 年`
- 数字与单位之间加空格：`10 GB`、`20 TB`；例外：`90°`、`15%` 不加
- 全角标点与其它字符之间不加空格：`刚刚买了一部 iPhone，好开心！`
- 行内代码、公式与中文之间也留一个空格：`使用 \`pip\` 安装`

### 标点

- 中文句子用全角标点：`，。、；：！？（）《》「」……`；英文整句、代码、公式用半角标点
- 不重复标点：不要 `！！`、`？！？`；省略号用 `……`，不用 `...`
- 中文句内的括注用全角括号 `（示例）`；纯英文括注写成 `中文 (English)` 形式
- 引号：中文内容用弯引号 “ ”（或「」），代码与英文用直引号，不混用

### Markdown

- 标题简洁、层级不跳级（# → ## → ###）
- 无序列表统一用 `+`
- 行尾只有两种状态：无空格，或恰好 2 个空格（表示换行 `<br>`）
- 块级公式 `$$` 前后空行、公式内部不留空行；Admonition 用 `!!! type "标题"` + 4 空格缩进

### Admonition 的换行（易错）

`!!!` 的正文里连续的多行**默认会被合并成一个段落**（按 HTML 规则渲染成一行），必须靠
行尾 2 个空格转成 `<br>`。所以：

- 课程简介 `!!! tldr` 这类「每项占一行」的块，除最后一行外**每行结尾都要有 2 个空格**，
  中文全角标点之间的空格不会被保留：`所属大学：南开大学  ` 后面的两个空格才是换行
- 绝对不要用 `.rstrip()` / 尾随空格清理脚本处理 `!!!`、`???`、`>` 引用的正文，会把换行
  全部吃掉；需要批量清理时先排除这些区域，或只清理 1 个和 ≥3 个空格、保留恰好 2 个
- 段落之间要空一行（缩进 4 格内的空行），而不是靠换行
- 对照验收：构建后 `site/<page>/index.html` 里该块内应出现 `<br />`；若整块只有一个
  `<p>` 且没有 `<br />`，说明换行已经丢失

### 专有名词

- 使用官方大小写：GitHub、Python、LaTeX、NixOS、Zensical、Vim
- 不使用不地道缩写

### 排版自检清单

- [ ] 中英文/中文数字间有空格，全角标点两侧无空格
- [ ] 没有半角逗号/句号混入中文句子
- [ ] 代码块、公式、链接目标未被排版规则改写
- [ ] 新页面已登记 nav，站内链接可跳转

## 代码规范

- 站点只通过 `zensical.toml` 注册外部资源（字体、CSS、JS）；CSS 内不再用 `@import` 重复加载
- 页面级样式用作用域选择器隔离（如 `#video-archive`、`.blog-card-*`、`body:has(...)`），不写全局标签覆盖
- 脚本统一 IIFE + `document$` 订阅（兼容 instant navigation）+ 目标元素守卫；用 `const`/`let`、2 空格缩进、写分号；注释成句说明“为什么”
- 组件逻辑只保留一份；跨页面复用抽到 `docs/javascripts/`，不复制 `<style>`/`<script>`
- 一次性迁移脚本用完即删，不长期留在仓库

## 字体

统一、简单：**全站霞鹜文楷（LXGW WenKai）**，代码用 **JetBrains Mono**，全部在
`docs/stylesheets/extra.css` 里用 CSS 变量声明，写 Markdown 时不需要任何 HTML 或 class。

| Markdown | 生成 HTML | 呈现 |
|---|---|---|
| 普通正文 | `<p>` / `<li>` / `<blockquote>` | LXGW Regular |
| `**加粗**` | `<strong>` | LXGW **Italic**（不是 Bold） |
| `*斜体*` | `<em>` | LXGW Italic |
| `***两者***` | `<strong><em>` | LXGW Italic |
| `[文字](url)` | `<a>` | LXGW Italic（锚点 ⚓︎ 与按钮除外） |
| `` `代码` `` | `<code>` / `<pre>` | JetBrains Mono |

- `h1`、`h2` 用 Italic；`h3`–`h6` 与正文同字重（400），靠字号与间距区分层级
- 提示框标题、折叠块标题、导航属于 UI 文本，固定 Regular，不参与强调规则
- LXGW 没有独立 Italic 字面，因此 `html { font-synthesis-style: auto }` 让浏览器合成倾斜；
  换成自带 Italic 的字体时应改回 `none` 并补 `@font-face` 的 italic
- `zensical.toml` 里 `[project.theme] font = false` 关闭主题的 Google Fonts 拉取；
  JetBrains Mono 的 woff2 放在 `docs/fonts/`，LXGW 走 `extra_css` 里的 webfont CDN
- **CSS 覆盖主题时注意残留**：主题给 `blockquote` 设了右边框和左右 padding，
  覆盖时要显式清掉（`border-right: 0`），否则引用框会比正文列还宽

## 导航

- `navigation.expand` 会强制展开侧边栏的所有章节、导致无法折叠，已移除；
  需要「展开/折叠」行为时不要开启它，只保留 `navigation.sections` / `navigation.prune`

## 未发布内容

未完成的笔记放在仓库根的 `_wip/` 下（在 `docs_dir` 之外），不会被构建、索引或出现在
`nav` 中；准备好后再 `git mv` 回 `docs/` 并登记 nav。


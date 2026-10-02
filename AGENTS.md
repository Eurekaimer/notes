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

## 字体分工

字体按语义分工，变量定义在 `docs/stylesheets/extra.css`，并同步覆盖 Material 的
`--md-text-font-family` / `--md-code-font-family`：

| 变量 | 字体 | 用在哪里 |
|---|---|---|
| `--font-body` | Comic Neue + Noto Serif SC | 正文段落、列表（个人叙述） |
| `--font-serif` | Source Serif 4 + Noto Serif SC | `blockquote`、定义/定理/引述类 admonition、`cite`、`.references` |
| `--font-sans` | Lato + Noto Sans SC | 标题、导航、标签、页脚、卡片标题 |
| `--font-mono` | Inconsolata | 代码、`pre`、`kbd` |

Comic Neue 等英文字体没有中文字形，中文一律由后面的 CJK 字体回落（正文走宋体，
标题走黑体）。新增组件时用变量而不是写死字体名。

## 未发布内容

未完成的笔记放在仓库根的 `_wip/` 下（在 `docs_dir` 之外），不会被构建、索引或出现在
`nav` 中；准备好后再 `git mv` 回 `docs/` 并登记 nav。


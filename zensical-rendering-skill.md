# Zensical 渲染格式规范

## 总则

本文件记录 Zensical 静态站点（MkDocs-Material 主题）下笔记的正确渲染格式，确保 MathJax、Mermaid、Admonition 等扩展正常工作。新加笔记时参照此规范。

---

## 1. 数学公式

### 1.1 行内公式 `$...$`

用于正文中短公式。**前后不需要空行**，直接嵌入句子。

```markdown
由 $F=ma$ 可得加速度。
```

### 1.2 块级（展示）公式 `$$...$$` ⚠️ **关键规则**

**块级公式前后必须各有一个空行**，否则 MathJax 可能不渲染或错位。

✅ 正确：
```markdown
那么场强可以表示为：

$$
\overline{E}= \frac{\overline{F}}{\delta q}
$$

将公式组合在一起即可得到...
```

❌ 错误 — 缺少空行：
```markdown
那么场强可以表示为：
$$
\overline{E}= \frac{\overline{F}}{\delta q}
$$
将公式组合在一起即可得到...
```

### 1.2.1 ⚠️ `$$...$$` **内部**不能有空行

MkDocs 的 Markdown 解析器遇到 `$$` 块内部的空行会将其断开为多个段落，导致 MathJax 无法解析。

✅ 正确 — 连续行，无空行：
```markdown
$$
\begin{aligned}
i(t)&= I_{0}\cos wt\\
u(t)&=U_{0}\cos(wt+\varphi)
\end{aligned}
$$
```

❌ 错误 — 内部有空行（`\end{aligned}` 前的空行会断开公式块）：
```markdown
$$
\begin{aligned}
i(t)&= I_{0}\cos wt\\
u(t)&=U_{0}\cos(wt+\varphi)

\end{aligned}
$$
```

### 1.2.2 ⚠️ 构建后 `$$` 会变成 `\[ \]` — 这是正常的

`zensical.toml` 中 `generic = true` 会让 `pymdownx.arithmatex` 扩展在构建时把 `$$...$$` 转为 `<div class="arithmatex">\[...\]</div>`。这是 **MathJax v3 的标准中间格式**，浏览器端加载 MathJax 后会渲染为公式。**不要改 `generic = false`**——那会输出 MathJax v2 格式，v3 不认识，所有公式全部失效。

> 简单说：源文件写 `$$`，HTML 里出现 `\[ \]` → 正常。看到页面有裸 `\[` 文字 → 检查 `site/` 缓存是否过期（删除 `site/` 重建）。

### 1.3 多行公式 `\begin{aligned}`

```markdown
$$
\begin{aligned}
E= \frac{\sigma_{0}}{\varepsilon_{0}} &\implies U_{AB}=Ed= \frac{qd}{\varepsilon_{0}S}\\
C&= \frac{q}{U}= \frac{\varepsilon_{0}S}{d}
\end{aligned}
$$
```

### 1.4 编号抑制 `\notag`

在公式行末加 `\notag` 可防止自动生成公式编号（MkDocs 默认不编号，但某些环境需要）：

```markdown
$$
P(E) \le 1 \notag
$$
```

### 1.5 常用 LaTeX 宏（MathJax 均支持）

| 用途 | 写法 |
|------|------|
| 粗体向量 | `\boldsymbol{E}` 或 `\mathbf{E}` |
| 求和 | `\sum\limits_{i=1}^{n}` |
| 曲面积分 | `\iint_{S}` |
| 极限 | `\lim\limits_{ n \to \infty }` |
| 花括号 | `\left\{ ... \right\}` |
| 彩色 | `{\color{Blue} ... }` |
| 上/下确界 | `\sup` / `\inf` |
| 上划线 | `\overline{P}` |
| 微分 d | `\, d \overline{l}` （加 `\,` 小空格）|
| 空格 | `\quad` / `\;` / `\:` |

`docs/javascripts/mathjax.js` 显式加载并启用 `boldsymbol` 扩展。
标题中的公式仍用 `$...$`；右侧目录的公式由脚本补充 `arithmatex` 标记后参与渲染。
检查 `\boldsymbol` 时不能只数 `<mjx-container>`：未知命令也可能被渲染成红色文本，
应确认没有残留的命令文本且粗斜体数学字形已加载。

---

## 2. Admonition（提示框/引用块）

### 2.1 支持的类型

| 类型 | 用途 | 示例 |
|------|------|------|
| `tip` | 定理/关键公式 | `!!! tip "高斯定理"` |
| `example` | 例题 | `!!! example "几个例子"` |
| `tldr` | 课程简介/摘要 | `!!! tldr "课程简介"` |
| `note` | 一般注释 | `!!! note "注意事项"` |
| `quote` | 总结归纳（替代 Obsidian 的 CITE）| `!!! quote "一个总结"` |

### 2.2 语法 ⚠️ **关键规则**

**不要用 Obsidian 的 `> [!type]` 语法** — MkDocs-Material 不认识，只当普通引用渲染。

必须用 `!!! type "Title"`（非折叠）或 `??? type "Title"`（可折叠）：

```markdown
!!! tip "库仑定律"
    内容第一行
    内容第二行

    $$
    \overline{F}_{12}= k \frac{q_{1}q_{2}}{r_{12}^{2}} \hat{r}_{12}
    $$
```

#### 2.2.1 格式要点

- `!!!` 后跟空格 + 类型 + 空格 + `"标题"`
- **内容行缩进 4 个空格**（不是 `>`）
- 内部的 `$$` 块也需缩进 4 个空格
- 列表也缩进 4 个空格：
  ```markdown
  !!! quote "一个总结"
      + 对称性分析
          + 球对称性
          + 轴对称性
  ```
+ 本仓库的 `notes_extensions` 自动将 `!!!`、`???` 和普通引用正文中的单次换行转换为
  `<br />`，不需要两个尾随空格。如课程简介可直接写成：
  ```markdown
  !!! tldr "课程简介"
      所属大学：南开大学
      主讲教师：陈璐
  ```
+ 空行仍表示分段；已有的两个尾随空格兼容且不会重复换行。普通段落不受影响；
  代码、公式和原始 HTML 保持原样。
+ `>` 引用和 `!!! quote` 统一使用粉色圆角框、玫粉色左侧粗边与右下角斜体 `cite`，
  由 `docs/stylesheets/extra.css` 全局控制；不需要在笔记里复制样式。
+ 代码围栏必须标注准确语言，构建时会自动显示语言名；普通输出或伪代码使用 `text`。
---

## 3. Mermaid 流程图 / 图表

### 3.1 格式

````markdown
```mermaid
flowchart LR
A["静止电荷"] --> B["静电场"]
```
````

### 3.2 备注

- 使用 fenced code block，语言标记为 `mermaid`
- CSS `classDef` 支持自定义颜色（但 `fill: #ffffff` 在白底上可能不可见）

---

## 4. 文件结构与 Frontmatter

### 4.1 YAML Frontmatter

每个 Markdown 文件**必须有**：

```yaml
---
title: 真空中的静电场
comments: true
tags:
  - Physics
---
```

- `title`：页面标题（必填）
- `comments: true`：启用评论区（推荐）
- `tags`：分类标签，便于搜索

### 4.2 目录结构

```
Boring/
  大学物理2/
    index.md                    # 目录页：课程简介 + 章节链接
    大学物理2-1-真空中的静电场.md  # 各章节
    大学物理2-2-...
```

### 4.3 index.md 模板

```markdown
---
title: 大学物理2
comments: true
tags:
  - Physics
---

# 大学物理2

课程简介...

目前已有：

+ [章节A](./章节A.md)
+ [章节B](./章节B.md)

以上内容均遵循[CC BY-SA 4.0 license](...)
```

---

## 5. 链接

### 5.1 站内链接 — **不用 `[[wikilink]]`**

Obsidian 的 `[[双链]]` 在 Zensical/MkDocs 中**不支持**。必须转换为标准 Markdown：

替换前：`[[大学物理2-1-真空中的静电场]]`
替换后：`[大学物理2-1-真空中的静电场](./大学物理2-1-真空中的静电场.md)`

### 5.2 外部链接

标准语法：`[描述](URL)`

---

## 6. 特殊字符转义

| 字符 | 转义 |
|------|------|
| `*` | `\*`（非数学上下文）|
| `_` | `\_`（非数学上下文）|
| `~` | `\~`（非数学上下文）|

---

## 7. 快速检查清单

- [ ] 每个 `$$` 块前后有空行？
- [ ] YAML frontmatter 完整？
- [ ] 无 `[[wikilink]]` 残留？
- [ ] Admonition 格式正确（`> [!type]`）？
- [ ] Mermaid 块语言标记为 `mermaid`？
- [ ] 图片路径相对于 `docs/`？（如 `images/xiaoju.jpg`）
- [ ] 许可证声明？（CC BY-SA 4.0）

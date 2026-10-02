# Notes

个人学习笔记站，使用 Zensical 构建，主题基于 MkDocs-Material。

+ 在线阅读：[Eurekaimer 的 Notes](https://www.eurekaimer.icu/notes/)
+ 内容目录：[`docs/`](./docs/)
+ 站点配置：[`zensical.toml`](./zensical.toml)

## 排版与写作改进

| 项目 | 本仓库的行为 |
| --- | --- |
| Callouts 换行 | 提示框正文直接回车即可换行，不再要求行尾两个空格 |
| 全站字体 | 正文使用霞鹜文楷，代码使用 JetBrains Mono |
| 一级、二级标题 | 700 字重 + 斜体；正文与三级以下标题保持 400 字重 |
| 引用框 | 与正文左右对齐的粉色圆角框、同色系粗边、斜体 `cite` 标识 |
| 代码块 | 标注准确语言，自动显示语言名并进行语法高亮 |
| 首页卡片 | 桌面横排、手机竖排，封面规则高于主题图片规则，卡片链接兼容 `/notes/` 子路径 |
| 阅读统计 | 标题下显示字数和预计阅读时间，仅排除 Home 与 Friends Link |
| 数学公式 | 显式加载 `boldsymbol` 扩展，右侧目录中的标题公式也参与 MathJax 渲染 |
| Markdown 空行 | 正文连续空行统一为一个；块级公式前后各留一个空行，内部不留空行；代码示例和原始 HTML 字面内容不改写 |

### Callouts：直接回车换行

Zensical 原本遵循标准 Markdown 的软换行规则，提示框里的连续两行会合并显示。本仓库通过 [`notes_extensions.py`](./notes_extensions.py) 自动保留提示框正文的换行。

```markdown
!!! tldr "课程简介"
    所属大学：南开大学
    主讲教师：陈璐
    课程时间：Spring 2026
```

上面的三项会分别显示在三行，**不需要添加尾随空格**。

+ 支持 `!!!` 提示框、`???` 折叠提示框和普通 `>` 引用，包括嵌套提示框。
+ 内容仍需缩进 4 个空格；空行仍表示分段。
+ 原来的两个尾随空格写法继续兼容，不会产生重复换行。
+ 普通段落仍遵循标准 Markdown 规则，不会被全局强制换行。
+ 代码块、行内代码、数学公式和原始 HTML 保持原样；公式仍需遵守块级公式的空行规范。
+ 使用 `!!! note` 等语法，不直接使用 Obsidian 的 `> [!note]` 语法。

### 字体：霞鹜文楷与 JetBrains Mono

字体样式集中在 [`docs/stylesheets/extra.css`](./docs/stylesheets/extra.css)，写笔记不需要额外的 HTML 或字体 class。

| 内容 | 显示方式 |
| --- | --- |
| 正文、列表、普通引用 | 霞鹜文楷 Regular，字重 400 |
| 一级、二级标题 | 霞鹜文楷 Bold Italic，字重 700 |
| 三级至六级标题 | 霞鹜文楷 Regular，字重 400 |
| `**强调**`、`*斜体*`、`***两者***` | 统一使用斜体，字重 400，而不是正文粗体 |
| 正文链接 | 斜体；按钮、图标和标题锚点除外 |
| 导航、提示框标题 | Regular |
| 行内代码与代码块 | JetBrains Mono |

霞鹜文楷没有独立的 Italic 字面，斜体由浏览器合成。霞鹜文楷通过 Webfont CDN 加载，JetBrains Mono 本地托管；主题自带的 Google Fonts 请求已关闭。

### 引用框：粉色圆角与斜体 cite

普通引用和 `!!! quote` 共享一套全局样式，无需在文章里手写 CSS：

```markdown
> 第一行引用内容
> 第二行引用内容
```

```markdown
!!! quote "专栏说明"
    第一行说明
    第二行说明
```

+ 浅粉色背景、玫粉色左侧粗边与细边框、12 px 圆角和轻阴影。
+ 外沿与正文列对齐，手机端同样保持在内容区内。
+ 右下角自动显示斜体 `cite`，独占一行，不遮挡长引用；这是装饰标识，不会自动生成文献来源。
+ 深色模式使用配套暗粉色背景与浅玫粉色粗边。
+ WebSource 中两个资源汇总页的「专栏说明」已从蓝色提示框同步为引用样式。

### 代码块：语言名与高亮

代码围栏应标注真实语言，构建时自动显示语言名：

````markdown
```python
print("Hello, Notes!")
```
````

常见标识包括 `python`、`c`、`bash`、`powershell`、`json`、`nix`。终端会话可用 `console`；普通文本、输出或没有明确语言的伪代码可用 `text`。Mermaid 图仍使用 `mermaid`。

### 阅读统计与目录公式

笔记标题下自动显示字数和预计阅读时间，Home 与 Friends Link 不显示。汉字每字计 1，
英文等连续词语每词计 1；代码、公式和评论不计入正文统计。中文按每分钟 300 字、
英文等词语按每分钟 200 词估算，向上取整，最少显示 1 分钟。站内导航切换后自动重新计算。

MathJax 显式预加载 `boldsymbol`，避免将 `\boldsymbol` 显示为红色未知命令。
右侧目录保留标题的公式分隔符，并在排版前补上 `arithmatex` 标记，公式可以正常渲染，
不需要修改标题的 Markdown 写法。

## 本地预览与构建

```bash
uv sync
.venv/bin/zensical serve -a 127.0.0.1:8000
```

预览地址：<http://127.0.0.1:8000/notes/>。

先停止预览服务，再单独构建，避免两个进程同时修改 `site/`：

```bash
.venv/bin/zensical build --clean
```

`uv sync` 会安装本仓库的换行扩展；CI 对应使用 `pip install .`。`site/` 已入库，修改站点后需同步构建产物。新增页面需登记到 `zensical.toml` 的 `nav`。

本地 Python 3.12 曾在构建的 emoji 扩展中发生段错误。遇到此情况，可使用已验证的隔离环境构建，不修改原虚拟环境或 Zensical 版本：

```bash
uv run --isolated --no-project --python 3.11 --with . --with zensical==0.0.19 zensical build --clean
```

提示框换行回归检查：

```bash
.venv/bin/python -m unittest discover -s tests -p test_callout_breaks.py
```

更多写作细则见 [`zensical-rendering-skill.md`](./zensical-rendering-skill.md)。

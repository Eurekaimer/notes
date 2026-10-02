---
tags:
  - Tutorial
  - Wheel
---
# Sioyek

>Sioyek is a PDF viewer with a focus on textbooks and research papers

You can get more infos about Sioyek in [GitHub](https://github.com/ahrm/sioyek)

## Basic Tutorial

Video was deployed in [Youtube](https://www.youtube.com/watch?v=RaHRvnb0dY8), this tutorial is also refer to it. 但是我的建议是不如去看那个下载之后会自己出现的教程，只需要按下 <kbd>Shift</kbd> + <kbd>O</kbd> 即可得到先前的PDF文件(tutorial.pdf)，下面只大概写一下我常用的功能键：

### 基础导航

抛弃鼠标，用键盘移动效率更高：

+ 快速调用目录： <kbd>:</kbd>
+ 翻页 <kbd>Space</kbd> 下翻一屏， <kbd>Shift</kbd> + <kbd>Space</kbd> 上翻一屏
+ 适应宽度：按 <kbd>F9</kbd> 。让页面宽度自动填满屏幕（最常用的视图设置）
+ 开头/结尾： <kbd>gg</kbd> 去第一页， <kbd>G</kbd> / <kbd>shift</kbd> + <kbd>G</kbd> 去最后一页
+ 去特定页码：输入数字（例如 NUM），然后按 <kbd>gg</kbd>
+ 目录：按 <kbd>t</kbd> 打开可搜索的目录

### 行聚焦的功能

大概使用方法很简单：先右键标记当前所在行然后按 <kbd>F7</kbd> 即可通过 <kbd>j</kbd> / <kbd>k</kbd> 来移动下划线标记实现一个行聚焦的效果

- <kbd>j</kbd> ：高亮条下移一行。
- <kbd>k</kbd> ：高亮条上移一行。

也可以按 <kbd>F8</kbd> 改为护眼模式

### Smart Jump

- 查看引用（预览）：**鼠标右键**点击绿色的引用链接（如 `[1]` 或 `Figure 3`）。
    - _效果_：会在屏幕中间弹出一个小窗口预览那个位置的内容，不用真正跳过去。
- 跳转引用：**鼠标中键点击**（或 <kbd>ctrl</kbd> + 点击）。
    - _效果_：直接跳转到引用位置。
- **History:** 按 <kbd>Backspace</kbd> 或 <kbd>shift</kbd> + <kbd>Backspace</kbd>。
    - _效果_：看完引用后，按一下马上回到刚才读的正文
- 谷歌学术搜索功能： <kbd>ss</kbd> 选中文本后使用即可进行搜索

### 高亮与标注 (Highlights)

- 高亮文本：选中文字 -> 按 <kbd>h</kbd> -> 再按一个**小写字母**（作为分类，例如 <kbd>a</kbd> ）
    - _例如：选中一段话，按 <kbd>h</kbd> 然后按 <kbd>r</kbd> （代表 Red），这段话就会被标记
- 查看所有高亮：按 <kbd>gh</kbd>
- 删除高亮：点击高亮处 -> 按 <kbd>dh</kbd>

![20260216174454](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/20260216174454.png)


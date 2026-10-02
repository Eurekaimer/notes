---
title: CachyOS-Recovery
tags:
  - Linux
  - CachyOS
  - Wheel
---
# CachyOS 快速安装（新手向）

!!! info "说明"

    声明：本文内容基本由 AI（LLM）扩写整理，主要就为方便我自己照着复制 CLI 命令——从零装好 CachyOS 并复原开发环境，命令照抄即可。

    全文也发布在我的个人网站：[CachyOS-Recovery](https://www.eurekaimer.icu/notes/Tech/Wheels/CachyOS-Recovery/) —— 外网 / GitHub 临时不通时，可以打开这个页面照抄。

## 目录 {#toc}

- [总共就四步](#s0)
- [准备：Ventoy + CachyOS ISO](#s1)
- [安装：连网、换镜像、选桌面](#s2)
- [几个概念：知道就跳过](#s3)
- [外网/代理：能访问 GitHub 是前提](#s4)
- [换源](#s5)
- [装基础工具](#s6)
- [QQ 工作流：手机问、电脑执行](#s7)
- [omp：连 API Key + 一键复原](#s8)
- [Niri 快捷键速查](#s9)
- [常见问题](#s10)

## 总共就四步 {#s0}

1. 用装了 Ventoy 的 U 盘烧好 CachyOS ISO
2. 进安装器：连网 → 换对应地区镜像 → 选桌面（新手选 KDE Plasma / GNOME，我用 Niri）
3. 装完跑三条命令堆：换源 → 装基础工具 → 装 QQ、omp
4. 克隆我的配置仓库，让 omp 连上 API Key 后一键复原

## 准备：Ventoy + CachyOS ISO {#s1}

### Ventoy 是什么

Ventoy 是 U 盘「启动器」：装一次后，把 ISO 像普通文件一样拷进 U 盘，开机就弹菜单让你选从哪个启动。一个 U 盘能放多个系统，换版本也不用重新烧盘；而 Rufus、balenaEtcher、dd 每次都得整盘重写，所以推荐 Ventoy。

下载：官网 [ventoy.net](https://www.ventoy.net/cn/) → 下对应系统版本 → 解压打开 → 选中 U 盘 →「安装」。

### 下载 CachyOS ISO

官方下载页：[cachyos.org/download](https://cachyos.org/download/)。优先用 BT 种子，速度相当快；桌面机选 Desktop Edition（KDE 版即可，桌面想换随时能换）；NVIDIA 显卡先用默认配置，驱动后面再说，装完用 `nvidia-smi` 检测是否连通。

!!! question "旧版 ISO 还能用吗？"

    能开机、能装，但不推荐。旧 ISO 里是旧安装器、旧软件源快照和旧签名密钥，装完第一步 `sudo pacman -Syu` 很容易报签名/损坏错误。省这几分钟，会亏好几个小时，去官网下最新版。

### 制作启动盘

把下载好的 ISO 拖进 Ventoy U 盘，弹窗选「用于启动」即可。

## 安装：连网、换镜像、选桌面 {#s2}

开机按启动菜单键（常见 `F12` / `F11` / `Esc` / `Del`），选你的 UEFI 启动项进入安装界面。

### 连网

有线插上一般直接可用；无线在托盘选 Wi-Fi，校园网可能要先网页认证。网络是第一步，后面全要网，先连上再继续。

### 选桌面

- **新手选 KDE Plasma 或 GNOME**：完整桌面，有开始菜单、任务栏、设置中心，出问题网上的答案最多；
- 本文讲的是 **Niri**：基于 Wayland 的滚动平铺窗口管理器，简洁、默认快捷键顺手（见下文「Niri 快捷键速查」）。

!!! tip "选错桌面没关系"

    桌面只是个「外壳」程序，装完随时能换。想回传统桌面，装个 `plasma-desktop` 或 `gnome` 包，在登录界面切换会话即可。

### 换镜像（就这一步是关键操作）

安装器里会让你**选镜像地区**：选你所在地区，它自动生成离你最近的镜像源，等于安装时顺手把换源做完了。

!!! question "装时忘了选 / 装完网速还慢？"

    装完系统再跑一次统一命令即可，见下文「换源」。

### 完成安装

新机器直接「整盘自动分区」最省事，要保留 Windows 就选手动、别选错盘。用户/密码随便设但要**记住**，后面所有 `sudo` 都要用它。装完重启、拔掉 U 盘。

## 几个概念：知道就跳过 {#s3}

这一段是零基础补课，都懂的直接跳过，不影响后面。

### Shell

Shell 就是你打命令的窗口程序。CachyOS 默认 bash，也可装 fish / zsh（补全更友好）。不会的命令直接问 AI：「在 CachyOS 命令行里，怎么……？」，把回答抄回来粘贴就行。

### pacman

Linux 软件一般由包管理器统一安装和更新。Arch 系（CachyOS 基于 Arch）的就是 pacman，记住 3 条：

| 想干什么 | 命令 |
|---|---|
| 更新系统全部软件 | `sudo pacman -Syu` |
| 安装软件 | `sudo pacman -S 包名` |
| 搜索软件 | `pacman -Ss 关键词` |

### AUR

官方仓库没有的软件（比如 clash-verge-rev、QQ）基本都在 **AUR（Arch User Repository）**——用户共同维护、几乎覆盖所有 Linux 软件的大仓库。

### paru

paru 是「AUR 助手」，用法和 pacman 一样：`paru -S 包名`。它先在官方仓库找，找不到自动去 AUR。CachyOS 通常自带（应急安装法见「装基础工具」一节）。

!!! tip "软件优先用 pacman"

    **凡 `sudo pacman -S` 能装的，就别去 AUR / GitHub 手动折腾**。官方包经过测试、依赖自动处理、更新统一，最省心；AUR 是兜底。

## 外网/代理：能访问 GitHub 是前提 {#s4}

下面的命令要下载 / clone GitHub 上的东西（clash、bun、我的配置仓库……），国内直连经常超时。解决思路：

- 最快：其他设备（Windows / 手机）有梯子或机场 → 把订阅链接发到电脑；
- **clash-verge-rev** 就是在 Linux 上开系统代理的客户端（「装基础工具」一节会装），装好导入订阅、打开「系统代理」即可。

!!! question "完全上不了 GitHub，怎么装 clash-verge-rev？"

    它在 **AUR**（[aur.archlinux.org](https://aur.archlinux.org)），国内直连一般能通，只是慢一点。实在装不上，就从 Windows 拷它的 **.AppImage** 到 U 盘带过来，双击就能跑。另外教程全文就在开头说的个人网站上，GitHub 全挂也能照抄。

## 换源 {#s5}

`cachyos-rate-mirrors` 是 CachyOS 的**统一换源命令**：按你所在地区测速、自动生成最快镜像列表，不用手动改配置。装完先跑一次，再用 `-Syyu` 强制刷新。

```bash
# 按地区测速，自动生成最优镜像（会要 sudo 密码）
sudo cachyos-rate-mirrors

# 强制刷新软件源数据库并更新系统
sudo pacman -Syyu
```

!!! question "提示 cachyos-rate-mirrors: command not found"

    先更新系统再装它：`sudo pacman -Syu && sudo pacman -S cachyos-rate-mirrors`，然后重跑上面两条命令。

## 装基础工具 {#s6}

代码框从上到下依次装：编译依赖 → 常用工具/字体 → 代理客户端 → GitHub Desktop → bun → omp → QQ。**每步确认没报错**再继续下一步。

```bash
# —— 1. 官方仓库：编译依赖 + 常用工具 + 中文字体（优先级最高）——
sudo pacman -S --needed git curl wget unzip zip base-devel
sudo pacman -S neovim yazi fish eza bat fd ripgrep fzf btop fastfetch \
               noto-fonts noto-fonts-cjk noto-fonts-emoji ttf-jetbrains-mono-nerd

# —— 2. 代理客户端（在 Linux 上开系统代理，访问 GitHub 就靠它）——
paru -S clash-verge-rev-bin

# —— 3. GitHub Desktop（图形化 git，习惯 Windows 端的朋友上手快）——
paru -S github-desktop-bin

# —— 4. bun（JS/TS 运行时，用来装 omp）——
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc        # fish 用户换成：source ~/.config/fish/config.fish

# —— 5. omp（我的终端 agent，命令行里跟它对话写代码/跑命令）——
bun add -g @oh-my-pi/pi-coding-agent

# —— 6. QQ（Linux 版，传命令用，见下文「QQ 工作流」）——
paru -S linuxqq
```

各组件作用：

| 工具 | 作用 |
|---|---|
| `git` | 克隆代码、管理配置仓库 |
| `neovim` / `yazi` | 终端编辑器 / 终端文件管理器 |
| `fish` / `eza` / `bat` / `fd` / `rg` / `fzf` | 更好用的 shell 和 ls/cat/find/grep 的替代品 |
| `btop` / `fastfetch` | 看 CPU/内存占用 / 开机系统信息 |
| `noto-fonts-cjk` | **中文字体**，没它网页和终端中文全是方块 |
| `ttf-jetbrains-mono-nerd` | 带图标的编程等宽字体，终端更好看 |
| `clash-verge-rev` | 代理客户端，打通 GitHub |
| `github-desktop-bin` | 图形化 git 客户端 |
| `bun` | 极快的 JS/TS 运行时，`omp` 由它托管 |
| `omp` | 终端 agent（npm 包 `@oh-my-pi/pi-coding-agent`），命令就叫 `omp` |
| `linuxqq` | 电脑版 QQ |

!!! question "提示 paru: command not found"

    CachyOS 一般自带 paru。真没有就临时编译装一个：

    ```bash
    sudo pacman -S --needed base-devel git
    git clone https://aur.archlinux.org/paru-bin.git && cd paru-bin && makepkg -si
    cd .. && rm -rf paru-bin
    ```

!!! question "omp: command not found"

    bun 装完后全局命令在 `~/.bun/bin`。先确认：

    ```bash
    echo 'export PATH="$HOME/.bun/bin:$PATH"' >> ~/.bashrc   # fish: set -Ua fish_user_paths $HOME/.bun/bin
    source ~/.bashrc && which bun && which omp
    ```

## QQ 工作流：手机问、电脑执行 {#s7}

不用背命令的办法：

1. 手机上装任意一个 **LLM 聊天软件**（DeepSeek / Kimi / ChatGPT……）并充几块钱；
2. 遇到不会的操作，直接问：「**在 CachyOS（Niri）的命令行里，怎么……？给出完整可粘贴命令**」；
3. 把命令**发到电脑 QQ 的「我的电脑」/「文件传输助手」**；
4. 电脑上复制 → 粘贴到终端回车。

整套流程就是：**手机 LLM 负责生成命令，QQ 负责搬运，终端只负责执行**。

!!! warning "小心 AI 乱编包名"

    LLM 偶尔会编造不存在的包。粘贴前扫一眼：包名能 `pacman -Ss` 搜到，或来源是 `paru -S xxx`（AUR）一般没问题；涉及改系统配置的命令（`sudo rm`、重写 `/etc`）先复制到草稿确认再执行。

## omp：连 API Key + 一键复原 {#s8}

我的配置仓库 `cachyos-config` 里已包含整套配置 + 复原脚本：让 omp 连上 API Key，再按脚本跑一遍，环境就自动复原。

```bash
# 1. 第一次运行 omp，按提示填入 API Key
#    （花一两块钱创建个「稍微正常模型」的 Key，照提示粘贴即可）
omp

# 2. 在 ~/Documents 下建一个 Github 文件夹，把配置仓库克隆进去
mkdir -p ~/Documents/Github
git clone https://github.com/Eurekaimer/cachyos-config ~/Documents/Github/cachyos-config
cd ~/Documents/Github/cachyos-config

# 3. 一键复原（先检查，再预览，再正式跑，最后重启）
./scripts/audit.sh                   # 检查快照内容有无泄露
./scripts/restore-all.sh --dry-run   # 预览所有要替换/安装的操作
./scripts/restore-all.sh             # 软件包、系统、用户配置、服务，一次搞定
sudo reboot
```

!!! note "一键复原会做什么"

    自动装回软件包，恢复系统/用户配置和 dconf，启用系统服务，把我定制的 Niri / Neovim / Yazi / Kitty 配置全部就位。目标机器用户名不同也没关系，脚本会把 home 路径改成当前用户。想细看：`./scripts/restore-all.sh --help`。

!!! question "克隆仓库一直超时？"

    回到「外网/代理」一节：确保 **clash-verge-rev → 导入订阅 → 打开系统代理**。也可以临时只让 git 走代理：

    ```bash
    git config --global http.proxy http://127.0.0.1:7897
    git config --global https.proxy http://127.0.0.1:7897
    # 复原完不想走代理：git config --global --unset http.proxy（https 同理）
    ```

## Niri 快捷键速查 {#s9}

Niri 是滚动平铺窗口管理器：没有传统开始菜单/桌面，窗口自动铺满、靠键盘切换，但默认快捷键很顺手，背几个就够。

### Super 就是 Win 键

Niri 默认键大量用到 `Super`，它就是**键盘上的 Windows / 徽标键**（`Super = Win = ⊞`）。

### 先背这三个

| 想干什么 | 快捷键 |
|---|---|
| 打开终端 | `Super` + `T` |
| 打开帮助（快捷键悬浮窗）| `Super` + `Shift` + `/` |
| 打开应用启动器 | `Super` + `D` |

记不住就按 `Super+Shift+/`，屏幕会弹出快捷键悬浮窗，照着按就行。

### 默认快捷键速查表

| 功能 | 快捷键 |
|---|---|
| 打开终端 | `Super+T` |
| 应用启动器 | `Super+D` |
| 帮助/快捷键悬浮窗 | `Super+Shift+/` |
| 关闭窗口 | `Super+Q` |
| 切换工作区 1~9 | `Super+1` … `Super+9` |
| 把窗口移到工作区 1~9 | `Super+Ctrl+1` … `Super+Ctrl+9` |
| 焦点移动（左/下/上/右）| `Super+←/↓/↑/→`（也支持 `Super+H/J/K/L`）|
| 移动当前窗口位置 | `Super+Ctrl+←/↓/↑/→` |
| 最大化窗口到屏幕边缘 | `Super+M` |
| 全屏 | `Super+Shift+F` |
| 概览（所有工作区总览）| `Super+O` |
| 锁屏 | `Super+Alt+L` |
| 退出 Niri（带确认弹窗）| `Super+Shift+E` |

!!! question "按了没反应？"

    - 输入法/剪贴板管理可能抢占个别组合键，但上面的 T/D/Q 一般不会被抢；
    - 确认登录的是 **Niri 会话**（不是 KDE/GNOME），会话在登录界面右下角切换；
    - 按 `Super+Shift+/` 看悬浮窗里实际绑定的键，以它为准；
    - 本表是官方默认值，安装我的配置仓库后以实际生效的 niri 配置为准（可看仓库 `docs/zh-CN/niri.md`）。

## 常见问题 {#s10}

!!! question "终端中文显示方块/问号"

    缺中文字体。「装基础工具」一段已装 `noto-fonts-cjk`，装完**注销重登一次**即可；网页字体缺失也一样解决。

!!! question "pacman 报 signature is unknown / keyring 问题"

    多半是旧 ISO 或源没刷新，先跑：

    ```bash
    sudo pacman -Syyu
    sudo pacman-key --refresh-keys
    ```

!!! question "提示「未找到软件包」"

    源没同步到最新：`sudo pacman -Syyu`。还没有就用 `paru -Ss 名字` 搜（含 AUR），比如 `paru -Ss clash-verge` 看确切包名。

!!! question "NVIDIA 显卡黑屏/花屏"

    装闭源驱动再重启用它：

    ```bash
    sudo pacman -S nvidia nvidia-utils
    ```

    重启后跑 `nvidia-smi`，能显示显卡型号 / 显存就是驱动连通了，报错就是没装上。

    启动菜单若有 NVIDIA 相关选项，优先选它。

!!! question "开机卡在引导 / 进了系统没桌面"

    常见于开了 Secure Boot 时用 Ventoy 启动：进 BIOS **关闭 Secure Boot** 再试；或换最新 ISO（见「下载 CachyOS ISO」）。

!!! question "要不要装杀毒软件？"

    基本不用。保持 `sudo pacman -Syu` 及时更新，比杀毒软件有用。

## 结尾

到这里就算装完了，一共没几条命令。以后重装系统或换新电脑，从「换源」开始照着重跑一遍就行。

卡住了先看「常见问题」清单，再不行就把报错原文丢给 LLM。

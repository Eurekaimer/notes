---
tags:
  - NixOS
  - Wheel
---

# 如何使用 NixOS 玩明日方舟

>本文档总结在 NixOS 系统下完美运行明日方舟 PC 版的完整流程。核心要点是使用 unstable 分支的最新工具 (Lutris+ProtonPlus)，并配合 dwproton 兼容层来绕过 ACE 反作弊系统的检测

最后你会得到下面的结果：

![20260213174002](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/20260213174002.png)

## 准备工作：修改系统配置

首先需要确保你的系统安装了 Lutris、ProtonPlus 和 umu-launcher。推荐使用 unstable 源以获取最新版本，确保存储库路径和依赖正常。

- [ ] 修改 flake.nix 文件，引入 unstable 源（如果已有则跳过）

具体操作过程如下：

+ inputs 区域 (configuration.nix or others) 加入：

```nix
nixpkgs-unstable.url = "github:nixos/nixpkgs/nixos-unstable";
```

+ 修改 configuration.nix 文件，安装必要软件

加入以下包。这里使用 pkgs-unstable 变量指代 unstable 源：

```nix
pkgs-unstable.lutris
pkgs-unstable.protonplus
pkgs-unstable.umu-launcher
```

+ 应用更改并重建系统（如果你使用了 flake）：

```bash
sudo nixos-rebuild switch --flake .
```

## 第一步：配置 ProtonPlus 并下载兼容层

我们需要下载专门修复国产游戏反作弊和 WebView 组件的 Wine 版本，打开 ProtonPlus 软件并下载 dwproton：

+ 在 ProtonPlus 中搜索 dwproton。
+ 选择最新版本（例如 dwproton-10.0-17 或更高）进行安装。

>dwproton 是避开 ACE 安全组件运行异常（报错代码 13-131104-257）的关键。

## 第二步：在 Lutris 中安装游戏

前往[明日方舟官网](https://ak.hypergryph.com/#index)下载最新的 Windows 版安装包（.exe 文件）。

- [ ] 打开 Lutris
- [ ] 设置兼容层（Runner options）
	- [ ] 在 Wine version 下拉菜单中，选择刚才下载的 dwproton（例如 dwproton-10.0-17）
	- [ ] ![20260213174103](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/20260213174103.png)
- [ ] 点击左上角的 + 号，选择 Install a Windows game from an executable
- [ ] 填写游戏名称：Arknights
- [ ] 点击 Install，选择刚才下载的 .exe 安装包
- [ ] 跟随安装向导完成安装。

## 第三步：启动游戏

在 Lutris 中选中明日方舟，点击 Play。

第一次启动时，Wine 会初始化运行环境，可能需要等待几分钟。随后应能看到正常的启动器登录界面。如果使用了 dwproton，ACE 反作弊系统将被正常绕过，不会出现安全组件异常的报错。

登录账号，开始游戏。
---
tags:
  - 图床
  - Wheel
---
# 图床搭建 (PicGo)

!!! info "方案讲解"
    这里选择的是 PicGo+GitHub 的方案（返璞归真）

主要的安装和配置步骤如下：

1. 先下载 PicGo 软件
2. 配置 GitHub 图床

## 下载 PicGo 软件

官方链接在这：[链接](https://picgo.github.io/PicGo-Doc/zh/guide/#picgo-is-here)

可以使用腾讯云 COS 的这个[链接](https://github.com/Molunerfinn/PicGo/releases)下载

## 配置 GitHub 图床

配置的手法主要来自于官方的[配置手册](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github%E5%9B%BE%E5%BA%8A)


```
{
  "repo": "", // 仓库名，格式是username/reponame
  "token": "", // github token
  "path": "", // 自定义存储路径，比如img/
  "customUrl": "", // 自定义域名，注意要加http://或者https://
  "branch": "" // 分支名，默认是main
}
```

!!! tip "使用什么平台？"
    建议使用 GitHub 因为不需要为内存和安全付费，而且操作也比较简单

!!! warning "token"
    关于如何获取 token 在官方的配置手册中已经说的比较详细了，在此不再赘述，但是需要注意一定要对 token 文件进行备份，因为后续如果需要进行多设备配置仍然需要使用这一 token（本人在台式机上配置图床上传工具时就遇到了这一问题），但是没有备份也没有关系，只需要重新生成然后修改之前配置的 token 即可。

![PicGo1](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/PicGo_tutorial1)

!!! info "注意"
    由于版本更新的比较快，只需要对于 PicGo 软件自身的一些设置进行选择就可以达到比较好的使用体验，所以在此删除其他复杂的配置

    给出一些建议勾选的部分：

    + 开机自启
    + 上传前重命名（如果你是一个对于命名法要求不高的“粗糙”的使用者，你可以只选择时间戳重命名）
    + 时间戳重命名
    + 上传后自动复制 URL

## vs-picgo

>我确信这是我最后一次忘记 tokens 了

因为今年将自己的笔记本改为了 NixOS，并且没有人对于 PicGo 进行 Nix 打包 [Issue](https://github.com/Molunerfinn/PicGo/issues/1224)，因此很尴尬的事情就是我没有办法使用Nix安装PicGo，于是就动了些小聪明选择了在VSC内置的插件vs-picgo(这样就可以避开系统的限制了)

下面给出简要的安装和使用说明：

首先在 VSC 的扩展栏中安装[PicGo](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo)插件，然后需要对于json文件进行一个简单的配置：

```Json
// 激活 GitHub 模式
"picgo.picBed.current": "github",
// 详细参数
"picgo.picBed.github": {
	"repo": "Eurekaimer/MyIMGs", // 你的仓库
	"token": "ghp_", // 你的Token
	"branch": "main", // 分支
	"path": "img/", // 存放在 img 目录下
	// 自动使用 jsDelivr CDN 加速访问，避免图片在国内裂开
	// 格式: https://cdn.jsdelivr.net/gh/用户名/仓库名@分支
	"customUrl": "https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main"
},
// 上传前自动重命名，防止文件名重复导致上传失败 (强烈建议开启)
"picgo.settings.autoRename": true,
```

不会写 json 建议去问 AI

然后就可以使用了，使用方法也非常简单，只需要复制你需要插入进 md 文档的图片，然后 `Ctrl+Alt+U` 即可插入，需要注意的是还需要安装 `xclip` ，对于 NixOS 来说是非常简单的（直接安装 xclip 包即可）


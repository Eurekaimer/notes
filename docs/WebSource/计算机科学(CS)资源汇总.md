---
comments: true
tags:
    - 资源
---

# 计算机科学 (CS) 资源汇总

!!! quote "专栏说明"
    CS 是开源氛围最为浓厚的一个领域，网络上有着大量的资料和优质的博客，这里主要收录一些我曾经阅读过的优秀资料，帮助更多的人节约检索资料的时间。但是需要注意的是：能够放在这里的资料基本是**粒度较大**的（也就是说关于一些过于细节的问题或者小众的方向并不会收录，**比如某个语言的特性和语法糖之类的，这类我推荐去专门的社区或者相关的文档查找引用，这里还是尽量避免产生深度的逻辑嵌套**）

## 基本教程

+ [CS 自学指南](https://csdiy.wiki/) 对我非常关键的一个教程，我也向很多人推荐
+ [CS 61B Spring 2021](https://sp21.datastructur.es/)
+ [CLRS](https://walkccc.me/CLRS/Chap07/Problems/7-3/) 算法导论的解答
+ [2025 年秋冬学期计算机学院朋辈辅学「技能拾遗」](https://inuebisu.github.io/SkillsTutorial/)
+ [ML System - 酒井科协暑培 2026](https://summer26.net9.org/ai/ML/)
+ [Structure and Interpretation of Computer Programs](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/full-text/book/book.html) SICP
+ [CS50x](https://cs50.harvard.edu/x/) Harvard 计算机科学导论
+ [CS 61A](https://cs61a.org/) UC Berkeley 程序结构与解释（SICP 配套课程）

## 编程语言

+ [TIOBE Index](https://www.tiobe.com/tiobe-index/) 这是一个语言流行度的一个排行榜
+ **Python** 我最擅长的一门语言，深度学习的唯一选择，AI 时代的红利持有者，但是由于在 3.11 版本之后的更新实在是不堪入目，而且包过多（一方面扩大了可解决问题的闭包，另一方面意味着选择成本也变相增大，你需要思考库的实现效率，可维护性，是否流行），运行效率过低，从个人喜好上不是非常喜欢这门语言了
	+ [NumPy - Learn](https://numpy.org/learn/) Numpy的文档当然不容错过了
	+ [PyPy](https://pypy.org/) 这是一个类似补丁的项目，主要目标就是优化和取代那个该死的 CPython ，应该说是勇敢的尝试但是如果覆盖的包面积不够的话应该还是没人会用的（**更别说原本使用 Python 的就是一帮不思进取的懒狗，包括我自己**）
	+ [Examples — Matplotlib](https://matplotlib.org/stable/gallery/index.html) 一个 Matplotlib 的图表效果展示，你可以从中得到作图的灵感
	+ [scikit-learn docs](https://scikit-learn.org/stable/index.html) SKlearn 的文档内容，我在学习 CS224N 和做深度学习复现实验的时候经常翻阅（翻阅文档仍然是得到真相最直接绝对的方法，再结合大模型基本就可以 double check 了）
	+ [nbviewer](https://nbviewer.org/) 可以用于预览 GitHub 中的 Jupyter Notebook
+ **Scheme** 这是一门 Lisp 的方言，通过撰写 Scheme 能够帮助你更好的理解编译器/解释器，通过写 Scheme 也可以很好的锻炼抽象能力
	+ [Scheme 语言简明教程](https://wizardforcel.gitbooks.io/teach-yourself-scheme/content/010-enter-scheme.html)
	+ [Scheme 在线编写](https://try.scheme.org/)
+ **Java** 这是我选择的后端语言之一，并且抽象程度刚好也能够用于锻炼撰写数据结构和算法的相关内容（没有 Python 的那么多包，也没有 C 语言的那种还需要兼顾硬件因素）
	+ [JavaGuide](https://javaguide.cn/) 这是我非常喜欢的一个项目，内部包含了不只有 Java 的基本内容，还有很多关于计算机基础和 AI 应用开发的内容，而且内部还有很多优质资料的引用（包括很多大厂的技术公众号）
	+ [The Java HotSpot Performance Engine Architecture](https://www.oracle.com/java/technologies/whitepaper.html)
	+ [Learn Java - Dev.java](https://dev.java/learn/) 官方的教程文档
	+ [Core Java](https://horstmann.com/corejava/) 一本经典的 Java 教材的官方网站
	+ [Java 学习路线 - 南开飞书云文档](https://my.feishu.cn/wiki/VVv1w0kCzirT04kmHwKc5PDWnBg) Java 后端的学习路径，我认为是非常简洁和直接的一份教程
	+ [Java 实习速成学习路线](https://www.wolai.com/ustcse/3VVBxRwpafQYtB5fH8M7TH) USTC 的 Java 路线
	+ [The Java® Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se8/html/index.html) JVMS 文档
+ **Go** 这是我当前最喜欢的一门语言了，有点古板的语法，谨慎的语言特性选择，甚至还有对于代码格式的一些偏执的严格，写起来又简单效果又好，**极大的减轻了码风不同带来的对于 review 别人代码的心智负担**
	+ [The Go Blog](https://go.dev/blog/) 官方的 Blog 发布，可以得到一些最新的特性消息
	+ [Go Playground](https://go.dev/play/) 在线运行
	+ [Effective Go](https://go.dev/doc/effective_go) 简单的官方教程
+ **Rust** 路转粉转黑，致敬扫码一样的小鬼和最宗教的语言，使得 RIIR 已经变成月经话题了（许多人只比较运行速度而忽略其他工程因素），编译时间相对长。但是得益于出色的安全性能（但是这个安全获取的有点困难啊，所有权机制就写，编译器就骂）和接近 C 的性能还是被我偶尔用于 toy-project，但是由于基本上没有人会写 C（**优秀的 C 语言项目撰写极其困难**），所以 Rust 结合 Agent 重写 C 项目也是基本上优化了，对于 Vibe Coding 是一个很好的语言选择
	+ [What do people love about Rust? | Rust Blog](https://blog.rust-lang.org/2025/12/19/what-do-people-love-about-rust/)
	+ [2023 Annual Rust Survey Results | Rust Blog](https://blog.rust-lang.org/2024/02/19/2023-Rust-Annual-Survey-2023-results/?utm_source=chatgpt.com)
	+ [Rust Blog](https://blog.rust-lang.org/) 官方 Blog
+ **CPP** 很好的入门，应该是我的第二门语言，我曾经利用这个语言锻炼了各种数据结构
	+ [cppreference | 容器库](https://en.cppreference.com/w/cpp/container) STL 容器官方参考
	+ [cppreference | 算法库](https://en.cppreference.com/w/cpp/algorithm) STL 算法官方参考
	+ [现代 C++ 特性（Modern C++）](https://www.arong-xu.com/modern-cpp/) C++11 起的现代特性归纳
	+ [当 Go 还在追求极简时，C++ 26 却又加了四大“史诗级”新特性](https://tonybai.com/2026/03/31/go-minimalism-vs-cpp26-epic-new-features) C++ 的特性实在太多了，标准库和语言特性不断膨胀，这大概也是内核开发不爱用它的原因之一
+ **前端** 由于前端的技术是比较混杂的，因此决定将一整个前端内容都作为一个分类，基本上前端都是需要 **HTML + CSS + JavaScript**
	+ [学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn_web_development)
	+ [千古前端图文教程](https://web.qianguyihao.com/)
	+ [谈谈不受欢迎的博客技术特征 | 纸鹿摸鱼处](https://blog.zhilu.site/2025/unpopular-blog-tech)

## 算法训练

+ [力扣](https://leetcode.cn/) 基本上求职必备的
+ [AtCoder](https://atcoder.jp/home) 可以和下面的 CF 进行互补，难度会更加适中
+ [Codeforces](https://codeforces.com/) 应该是世界级的 TOP OJ 了
+ [洛谷](https://www.luogu.com.cn/) 国内 XCPC 和 OI 的著名训练场，我过去的主 OJ
+ [OI Wiki](https://oi-wiki.org/) 极度良莠不齐，部分算法讲解可以参考，但是有些算法写的就一般了
+ [代码随想录](http://programmercarl.com/) 质量比较高的一个算法讲解
+ [CS 61B](https://datastructur.es/) UC Berkeley 数据结构（数据结构的经典课程）

## 操作系统

下面结合我的一些看法对于 Linux 社区的常见问题做一个批判（主要的观点来源是 [FreeBSD 从入门到跑路](https://docs.bsdcn.org/README#%E8%B4%A1%E7%8C%AE%E8%80%85) ）：

+ **技术本应服务于人，而不是反过来规训人**。一个人如果只是想用 Linux 拯救一台老电脑，那么能简单、舒服地满足这个需求就已经足够了，没有必要因为社区的某种审美而强迫自己使用命令行、Vim 或高门槛的 WM。每次在各种寻求解决问题方法的帖子底下，看到回答者完全无理地要求提问者直接把问题原因破坏的（Just change your distro to Arch/Debian/Ubuntu/Fedora/Gentoo/OpenSUSE），我都觉得那个答者是来捣乱的
+ **工具只是手段，人的需求和快乐才是目的**。说到底，就像 Linus 那句 **Just For Fun**：喜欢怎么用、怎么折腾就怎么折腾，不必把自己的玩法变成别人的义务，也是出于这种原则现在的软件设计越来越臃肿和复杂（实际上这有点反 UNIX 哲学了，越想要让一个程序能够尽量满足人的需求，那个程序的功能也就会越复杂，和 UNIX Principles 中的单一性是矛盾的）
+ 一方面，**社区没有义务为完全拒绝阅读和思考的人承担成本**。如果提示已经足够明确，一个问题通过最基本的阅读、搜索或尝试就能够解决，那么要求提问者先完成这些工作并不是所谓精英主义（主要反对的是那些在技术社区中一直低效提问而不去查询文档或者询问大模型的人）。《提问的智慧》中要求提问者展示自己的思考过程，本质上也是对其他社区成员时间的尊重（换句话说**没有必要无偿回答一些极其显然的问题而不是鼓励搜索和思考**，对于学习数理的同学这更加明显，因为大部分的问题是没有答案的，**你必须通过自己的思考找到线索并且基本上无法得到权威的帮助**，很大的概率是那个权威跟你距离一个太平洋或者大西洋）。
+ 另一方面，复杂也并不天然意味着糟糕（主要反对的是那些认为使用 Vim/NeoVim/Emacs 等键盘流工具的都是嘉豪的言论）。很多技术工具之所以复杂，之所以前置难度高，是因为它们试图解决更加复杂的问题，而这种学习成本往往能够换来更高的效率、更强的自动化能力和更大的表达空间。GUI 可以让第一次操作更简单，而 CLI 和脚本可能让第一千次操作更简单。**真正应该反对的不是复杂度，而是没有收益的复杂度**。
+ 最后，如果一个人只是想用 Linux 完成自己的日常工作，那么当然**没有必要也不需要听从任何人的建议**，你只是在过自己的生活，越简单越好，按照别人的标准把自己训练成所谓的 Stronger User 是一种讨好型人格或者对自己没有清楚认知定位的表现；但如果一个人的目标就是深入理解 Linux、操作系统或者任何一个专业领域，那么投入大量时间和精力本身就是不可避免的。**知识存在客观的复杂性，一些弯路本身也是加深理解和了解先进想法动机的一部分，而这种必要的学习成本并不属于“苦难哲学”**。

+ [DMS in NixOS](https://danklinux.com/docs/dankmaterialshell/nixos) DMS 的文档，可惜我选了 Noctalia （
+ [Linux 101](https://101.lug.ustc.edu.cn/) 一个挺入门的书籍，中科大开源的
+ [NixCN](https://nix.org.cn/zh-CN/) NixOS 在中国的社区，定期会有一些会议
+ [FreeBSD 从入门到跑路](https://docs.bsdcn.org/README#%E8%B4%A1%E7%8C%AE%E8%80%85) 前言写得很好。它表面上是在批判 Linux/Unix 社区中对命令行、复杂工具和高学习成本的过度推崇，本质上反对的却是一种“苦难哲学”：**把工具的难用合理化，把忍受不必要的学习成本当成能力甚至优越感的证明**。不过这个观点还是值得商榷的，因为这是苦难的前提是那个多余的复杂度无法带来收益（这基本不可能啊，那说明这个软件或者工具的设计是纯粹的脱离时代或者设计的非常糟糕，而且真的会有人蠢到会了豪去学习无价值的工具吗）
+ [Ventoy](https://www.ventoy.net/cn/doc_livecd.html) 起码是**目前**（2025年）最流行的重装系统的软件工具
+ [archlinux 简明指南](https://arch.icekylin.online/) 我基本上跟着这个装过 archlinux ，非常顺畅和直白，小白也能装清楚
+ [Arch Linux](https://www.archlinuxcn.org/) 官网，看看 Wiki 可以增加了解（Arch 的很大一个优点就是 Wiki 了）
+ [CachyOS](https://cachyos.org/) 官网，相比 Arch 我更加推荐的新手发行版，图形化安装、自动匹配镜像、强大的性能优化都很适合新手入门
+ [NixOS & Flakes Book](https://nixos-and-flakes.thiscute.world/zh/) 属于是刚入门看不太懂（无动机），会了一点之后感觉也没什么用
+ [Nix 语言基础知识](https://nix.dev/tutorials/nix-language#derivations) 没什么用，就是个简单的配置语言，用得多了自然就会了，如果实在是懒可以让 LLM 帮你写配置文件，没有洁癖就直接当黑盒用（但是你可以后期阅读和改造源码漂白，信息论大师），我自己的一个 NixOS 使用过程是：全部交给 LLM 然后替换配置文件 -> 自己重构项目架构和接口，完全掌控 -> Coding Agent 时代到来，让 LLM 撰写相关的 README 和 Architecture Map 之后搭配 harness 工程直接将新板块 merge，完全相信 LLM （
+ [NixOS Search](https://search.nixos.org/packages?channel=unstable) 官方找包的
+ [My NixOS](https://mynixos.com/) 还是找包的
+ [Home Manager Manual](https://nix-community.github.io/home-manager/index.xhtml#ch-introduction) HM 的文档
+ [The little book about OS development](https://littleosbook.github.io/) 简明的操作系统
+ [CS:APP3e](https://csapp.cs.cmu.edu/3e/labs.html)
+ [CS 61C](https://cs61c.org/) UC Berkeley 计算机体系结构/机器结构
+ [MIT 6.828（操作系统工程）](https://pdos.csail.mit.edu/6.828/2021/schedule.html) 2021 课程表页

## 分布式系统

+ [MIT 6.5840（原 6.824）](https://pdos.csail.mit.edu/6.5840/) 分布式系统经典课程 官方
+ [DDIA 中文精读](https://ddia.qtmuniao.com/#/) 看原文比较好
+ [DDIA ZH-CN](https://ddia.vonng.com/v1/ch1/) 中文网络翻译版
+ [Distributed systems for fun and profit](https://book.mixu.net/distsys/)
+ [Distributed systems theory for the distributed systems engineer | Paper Trail](https://www.the-paper-trail.org/post/2014-08-09-distributed-systems-theory-for-the-distributed-systems-engineer/)

## 数据科学

+ [CS224N](https://web.stanford.edu/class/cs224n/) Stanford 自然语言处理与深度学习（NLP 经典课程）
+ [ML and DL 这类统计学类数据科学甚至转 cs 的方法](https://www.zhihu.com/question/395556369/answer/2102149123)
+ [Kaggle 入门经验贴 - 知乎](https://www.zhihu.com/question/23987009/answer/3111007309)
+ [Recod.ai/LUC - 科学图像伪造检测 | Kaggle --- Recod.ai/LUC - Scientific Image Forgery Detection](https://www.kaggle.com/competitions/recodai-luc-scientific-image-forgery-detection) 我参加的第一个 Kaggle 比赛，差一点拿牌了，早知道当时期末不复习了，不过想一想金牌的方案感觉非常巧妙
+ [2026 年机器学习指南 IBM](https://www.ibm.com/cn-zh/think/machine-learning#605511093)

## Agent/LLM

+ [Hello-Agents](https://hello-agents.datawhale.cc/#/./README)
+ [Anthropic Research Website](https://www.anthropic.com/research) A\ 的各个研究团队，会发布很多高质量的技术前沿博客，虽然这个公司依然很cs
+ 可解释性研究
	+ [Neel Nanda](https://www.neelnanda.io/) 一个非常出名的领域研究者（ A\ 的可解释性团队的）的博客
	+ [anthropic interpretability](https://www.anthropic.com/research/team/interpretability) A\ 的团队主页
+ [AI Alignment Forum](https://www.alignmentforum.org/)
+ [Andrej Karpathy](https://karpathy.ai/) 一个出名的研究者的博客
+ [A Recipe for Training Neural Networks](https://karpathy.github.io/2019/04/25/recipe/) From Karpathy 但是现在有点过时了
+ 扩散模型研究
	+ 下面三篇苏剑林的博客我认为是很有必要读的，对于掌握 DDPM 有成效
	+ [生成扩散模型漫谈（一）：DDPM = 拆楼 + 建楼 - 科学空间|Scientific Spaces](https://spaces.ac.cn/archives/9119)
	+ [生成扩散模型漫谈（二）：DDPM = 自回归式 VAE - 科学空间|Scientific Spaces](https://spaces.ac.cn/archives/9152)
	+ [生成扩散模型漫谈（三）：DDPM = 贝叶斯 + 去噪 - 科学空间|Scientific Spaces](https://spaces.ac.cn/archives/9164)
	+ [Generative Modeling by Estimating Gradients of the Data Distribution | Yang Song](https://yang-song.net/blog/2021/score/) Song Yang 的一篇文章，他的 taste 是很好的，可以学习
	+ [Diffusion 综述阅读笔记 - 瓜瓜没有瓜子](https://www.cnblogs.com/Meloniala/p/18285101)
	+ [Diffusion LM / D3PM](https://zhuanlan.zhihu.com/p/1909197530278896656) 当时做随机过程的大作业有参考，非常适合学习马尔可夫链和扩散模型的关系

## 大厂技术博客

+ [历史文章 | 美团 · 技术团队](https://tech.meituan.com/history.html)
+ 主要还是应该去微信公众号上面寻找，基本上都扎根在微信公众号里，可以参考 [一文收藏｜中国互联网大厂技术公众号全景图谱](https://mp.weixin.qq.com/s/0E_HXjt4o9_3M3NH2mUBew)，下面是我比较喜欢的一些大厂公众号
	+ 美团技术团队
	+ 字节跳动技术团队
	+ 阿里技术
	+ 腾讯技术工程

## 博客技术

+ GitHub Profile 使用的一些小组件
	+ [Readme Typing SVG - Demo Site](https://readme-typing-svg.demolab.com/demo/?font=Buda&weight=500&size=25&color=F760C4%C2%A2er=true&lines=Welcome+to+Eurekaimer%27s+GitHub!) - 打字特效
	+ [Platane/snk](https://github.com/Platane/snk) - GitHub Contributions 贪吃蛇动画
	+ [yoshi389111/github-profile-3d-contrib](https://github.com/yoshi389111/github-profile-3d-contrib) - 3D GitHub Contributions 贡献图
+ [Mkdocs 部署的 yml 说明](https://zhuanlan.zhihu.com/p/62460160?utm_campaign=)
+ [Hugo 框架的搭建](https://zhuanlan.zhihu.com/p/901399736)
+ [Butterfly - A Simple and Card UI Design theme for Hexo](https://butterfly.js.org/) 一个 Hexo 主题
+ [Astro-Firefly](https://docs-firefly.cuteleaf.cn/zh/)
+ [NameBeta: 域名注册比价 - 全网域名价格实时查询与比价平台](https://namebeta.com/)
+ [Umami](https://cloud.umami.is/analytics/us/websites) 一个能够检测博客访问量的小工具
+ [MapMyVisitors — Real-Time Visitor Map Widget for Your Website](https://mapmyvisitors.com/)
+ [域名注册_阿里云](https://wanwang.aliyun.com/domain/) 我租域名使用的，阿里云的价格基本是比较划算的
+ [Cloudflare 免费套餐能做什么：一份独立开发者的零成本部署指南 | Monolith](https://monolith-client.pages.dev/posts/cloudflare-free-tier-guide)

## 好用的工具

+ AI 工具
	+ [opencode](https://opencode.ai/zh)
	+ [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-3-pro-preview)
	+ [Google Gemini](https://gemini.google.com/app)
	+ [Google NotebookLM](https://notebooklm.google/)
	+ [ChatGPT](https://chatgpt.com/)
	+ [DeepSeek](https://platform.deepseek.com/)
	+ [omp | Oh My Pi](https://omp.sh/) 编码代理 harness
+ 编辑与终端
	+ [Neovim](https://neovim.io/) 官方
	+ [LazyVim](https://www.lazyvim.org/) Neovim 发行版/配置框架
	+ [Yazi](https://yazi-rs.github.io/) 终端文件管理器
	+ [Just Vim It](https://vim.nauxscript.com/)
	+ [fish-shell documentation](https://fishshell.com/docs/current/index.html)
+ 阅读工具
	+ [Sioyek](https://sioyek.info/) PDF 阅读器（论文阅读友好）
	+ [Foliate](https://johnfactotum.github.io/foliate/) Linux 电子书阅读器（GNOME）
	+ [Readest](https://readest.com/) 跨平台电子书阅读器
+ 桌面与合成器
	+ [Niri](https://yalter.github.io/niri/) 滚动平铺 Wayland 合成器
	+ [Noctalia](https://github.com/noctalia-dev/noctalia-shell) Quickshell 桌面外壳
+ 虚拟化
	+ [QEMU](https://www.qemu.org/) 模拟器
	+ [KVM](https://linux-kvm.org/) Linux 内核虚拟化（配合 QEMU/libvirt）
+ LaTeX 使用
	+ [LaTeX 官方](https://www.latex-project.org/)
	+ [LaTeX 的 Snippets 设置](https://zhuanlan.zhihu.com/p/350249305)
	+ [LaTeX 的一个简单模板（彩色底框填充）](https://www.zhihu.com/question/362654946/answer/2364047739)
	+ [Tikz 的使用](https://zhuanlan.zhihu.com/p/48300815) 其实最好自己学习一下如何书写（或者 LLM 直接穿）
	+ [tikzcd-editor](https://tikzcd.yichuanshen.de/#N4Igdg9gJgpgziAXAbVABwnAlgFyxMJZABgBpiBdUkANwEMAbAVxiRADM4oBGEAX1LpMufIRTdyVWoxZsodBAKHY8BIhIAsU+s1aIQ-QSAwrRRAMykATNpl6DfKTCgBzeEVDsAThAC2SK2ocCCRzRz4gA) 快速生成 tikz 代码的辅助网站
	+ [SimpleTex-OCR](https://simpletex.cn/ai/latex_ocr) 现在使用 LLM 可以直接打穿常用的 OCR 工具
		+ 如果你实在懒得打可以使用这个 OCR 工具，网页端支持的扫描数量更大但是都会出现遇到高峰期需要排队的问题，因此如果有需要最好平常就在一些少人的时间将需要的资料识别好，笔者曾经多次在随机过程课上现场 OCR 老师的 Notes 有点手忙脚乱了。
	+ [国外小哥的 Vim+LaTeX](https://castel.dev/post/lecture-notes-1/#environments) 昔人已逝，缅怀
+ Obsidian 使用
	+ [Obsidian 官方](https://obsidian.md/)
	+ [Obsidian 的使用--一位研究生](https://www.zhihu.com/question/401972085/answer/3365454194)
	+ [一位学长使用 Obsidian 的心得](https://zhuanlan.zhihu.com/p/657343154)
+ 其他
	+ [uv](https://docs.astral.sh/uv/) Python 包与项目管理器
	+ [OpenList 文档](https://doc.oplist.org.cn/guide) 网盘项目（fork Alist）
	+ [draw.io](https://app.diagrams.net/) 绘图工具
	+ [Mermaid 中文网](https://mermaid.nodejs.cn/)
	+ [mpv](https://mpv.io/) 媒体播放器
	+ [公众号图片提取](https://tools.kalvinbg.cn/convenience/mp/imgcraw) 当时提取过公众号上面的 Slides 然后转换成 PDF

## 杂项

+ [UE 虚幻引擎文档](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-documentation)
+ [Bitwarden](https://vault.bitwarden.com/#/vault) 密码管理平台
+ [Diátaxis](https://diataxis.fr/) A systematic approach to technical documentation authoring.（文档方法论）
+ [ASCII art generator for geeks! - Convert images/pictures to ASCII art online! (HTML/text)](https://manytools.org/hacker-tools/convert-images-to-ascii-art/go/)


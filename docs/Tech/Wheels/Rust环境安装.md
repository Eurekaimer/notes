---
tags:
  - Rust
  - Wheel
---
# Rust 环境安装

我认为严格来说应该分三步(可以参考国内的一本[Rust 中文圣经](https://beatai.org/rust-course/about-book))，其中第三步是因为我喜欢使用Vscode

+ 搞定 C++ 构建依赖 (MSVC)
+ 下载并运行官方安装器 (`rustup`)
+ 激活 VS Code

>使用的是 Windows11，Nixos 下载对应的包即可

但是实际上操作只需要去[官网](https://rustup.rs/)下载`rust-init.exe`文件然后运行，会出现三个选项你只需要选择1然后回车，或者直接回车，等待其下载完成即可，如果是在powershell中使用可能会出现无法连接的问题(实际就是网络问题)，请通过你的代理访问或者干脆设置国内源使用

+ 使用清华/中科大镜像源（最简单，推荐）

```shell
# 1. 设置 Rust 核心组件的下载镜像（这里用清华源）
$env:RUSTUP_DIST_SERVER="https://mirrors.tuna.tsinghua.edu.cn/rustup"

# 2. 设置 Rustup 自身更新的镜像
$env:RUSTUP_UPDATE_ROOT="https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup"

# 3. 在同一个窗口中，重新运行安装程序
.\rustup-init.exe
```

+ 因为终端默认不走代理，所以把代理挂上

```shell
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"

.\rustup-init.exe
```

端口号当然应该填实际的

然后在 Vscode 中下载 `rust-analyzer` 扩展，不要下载那个 `rust` 扩展，社区>官方（现在都是官方），关于为什么请参考[Rust 语言圣经](https://beatai.org/rust-course/first-try/editor)

下面是测试是否可以正常运行的文件 ("Hello world")，新建一个文件夹然后创建相关文件：

```shell
cargo new hello_rust 
cd hello_rust
cargo run
```


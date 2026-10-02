---
tags:
  - CachyOS
  - Wheel
---

# 如何使用 CachyOS 玩阴阳师

> 本文总结在 CachyOS 下运行《阴阳师》安卓版的完整流程。核心方案是使用 Waydroid 运行 Android 系统，通过 libhoudini 提供 ARM 应用转译，并使用 waydroid-nvidia 让 NVIDIA 显卡为 Android 游戏提供硬件加速。下面的图片是没有使用显卡的 CPU 情况，请勿模仿。

![CPU + Waydroid](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/20260826164338429.png)

我使用的主要环境为：

```text
CachyOS
Wayland + niri
Intel x86_64 CPU
NVIDIA RTX 5060
nvidia-open
Waydroid
libhoudini
```

最终运行路径大致为：

```text
阴阳师 ARM Android 版
        ↓
libhoudini
        ↓
Waydroid x86_64
        ↓
ANGLE / Vulkan / Venus
        ↓
NVIDIA RTX 5060
```

相比在 Wine 中继续套一层 Android 模拟器，这种方式要直接得多。

最后你会得到一个可以直接从 Linux 桌面启动的《阴阳师》Android 客户端。

---

## 准备工作：安装 Waydroid

首先安装 Waydroid：

```bash
sudo pacman -S waydroid
```

初始化 Android 镜像：

```bash
sudo waydroid init
```

启动并启用容器服务：

```bash
sudo systemctl enable --now waydroid-container.service
```

然后启动 Android Session：

```bash
waydroid session start
```

正常情况下会看到类似：

```text
[gbinder] Service manager /dev/binder has appeared
Android with user 0 is ready
```

打开完整 Android 界面：

```bash
waydroid show-full-ui
```

也可以查看当前安装的 Android 应用：

```bash
waydroid app list
```

---

## 第一步：安装 ARM 转译 libhoudini

Waydroid 本身运行的是 x86_64 Android，而包括《阴阳师》在内的大量 Android 游戏包含 ARM native library。

因此首先需要给 Waydroid 加入 ARM 转译。

可以先确认 CPU：

```bash
grep -m1 'vendor_id' /proc/cpuinfo
```

我的结果为：

```text
vendor_id : GenuineIntel
```

因此使用 Intel 的 `libhoudini`。

安装需要的工具：

```bash
sudo pacman -S --needed git lzip
```

克隆 Waydroid Extras Script：

```bash
cd ~/Projects

git clone https://github.com/casualsnek/waydroid_script
cd waydroid_script
```

项目官方文档使用传统的 `venv + pip`，这里我使用自己更习惯的 `uv` 管理 Python 环境：

```bash
uv venv
uv pip install -r requirements.txt
```

然后安装 libhoudini：

```bash
sudo .venv/bin/python main.py install libhoudini
```

脚本会下载并修改 Waydroid 对应的 system/vendor 环境。

完成后重新启动 Waydroid：

```bash
waydroid session stop

sudo systemctl restart waydroid-container.service

waydroid session start
```

检查 native bridge：

```bash
sudo waydroid shell getprop ro.dalvik.vm.native.bridge
```

正常应该输出：

```text
libhoudini.so
```

继续检查 ABI：

```bash
sudo waydroid shell getprop ro.product.cpu.abilist
```

我的结果为：

```text
x86_64,x86,arm64-v8a,armeabi-v7a,armeabi
```

这说明 Waydroid 已经具备运行 ARM Android 应用的能力。

> 如果使用 AMD CPU，可以优先考虑 `libndk`；本文使用 Intel CPU，因此后续全部基于 libhoudini。

---

## 第二步：安装《阴阳师》

前往《阴阳师》官方渠道下载 Android APK。

假设 APK 位于：

```text
~/Downloads/yys/onmyoji.apk
```

使用 Waydroid 安装：

```bash
waydroid app install ~/Downloads/yys/onmyoji.apk
```

安装完成后可以直接让 Android Package Manager 检查：

```bash
sudo waydroid shell pm list packages | grep -Ei 'netease|onmyoji'
```

正常情况下会看到：

```text
package:com.netease.onmyoji
```

需要注意的是，《阴阳师》在部分情况下可能不会出现在：

```bash
waydroid app list
```

的 Launcher 应用列表中。

只要：

```bash
sudo waydroid shell pm list packages
```

能够看到：

```text
com.netease.onmyoji
```

就说明 APK 已经成功安装。

直接启动：

```bash
waydroid app launch com.netease.onmyoji
```

---

## 第三步：解决 Waydroid 没有网络的问题

正常情况下 Waydroid 应该可以自动联网，但如果系统使用 UFW、Docker 等工具，可能出现：

```text
Android 可以启动
↓
应用可以运行
↓
但是 Browser 和游戏完全无法联网
```

可以先检查 Waydroid 网桥：

```bash
ip addr show waydroid0
```

正常情况下宿主机会有：

```text
inet 192.168.240.1/24
```

再检查 Android 内部：

```bash
sudo waydroid shell -- ip -4 addr show eth0
```

正常应该获得：

```text
192.168.240.x/24
```

例如：

```text
inet 192.168.240.112/24
```

检查 Android 的路由表：

```bash
sudo waydroid shell -- ip route show table eth0
```

正常结果应该类似：

```text
default via 192.168.240.1 dev eth0 proto static
192.168.240.0/24 dev eth0 proto static scope link
```

如果 `eth0` 完全没有 IPv4 地址，或者没有默认路由，可以检查 UFW：

```bash
sudo ufw status verbose
```

如果 UFW 开启，可以仅针对 Waydroid 放行 DHCP、DNS 与转发流量，而不是直接开放整个系统的 FORWARD：

```bash
sudo ufw allow in on waydroid0 proto udp to any port 67

sudo ufw allow in on waydroid0 \
  to 192.168.240.1 port 53 proto udp

sudo ufw allow in on waydroid0 \
  to 192.168.240.1 port 53 proto tcp

sudo ufw route allow in on waydroid0 \
  from 192.168.240.0/24 to any
```

应用配置：

```bash
sudo ufw reload
```

然后重启 Waydroid：

```bash
waydroid session stop

sudo systemctl restart waydroid-container.service

waydroid session start
```

重新检查：

```bash
sudo waydroid shell -- ip -4 addr show eth0
sudo waydroid shell -- ip route show table eth0
```

---

### Docker 用户额外注意

如果同时使用 Docker：

```bash
systemctl is-active docker
```

可能看到：

```text
active
```

检查：

```bash
sudo iptables -S FORWARD
```

如果出现：

```text
-P FORWARD DROP
```

说明 Docker 修改了 Linux 的转发策略。

这可能导致 Waydroid：

```text
Android
  ↓
waydroid0
  ↓
FORWARD DROP
  ↓
无法访问公网
```

可以先临时验证：

```bash
sudo iptables -I FORWARD 1 -i waydroid0 -j ACCEPT
sudo iptables -I FORWARD 1 -o waydroid0 -j ACCEPT
```

如果加入以后 Waydroid 可以正常联网，就说明问题确实在 Docker/防火墙转发这一层。

对于长期同时使用 Docker 和 Waydroid 的机器，也可以在 Docker 配置中避免 Docker 主动把 forwarding policy 修改成 DROP。

如果 `/etc/docker/daemon.json` 已经存在其他设置，请将下面的字段合并进去，而不是直接覆盖整个文件：

```json
{
  "ip-forward-no-drop": true
}
```

然后重新启动 Docker：

```bash
sudo systemctl restart docker.service
```

---

## 第四步：测试 Waydroid 网络

Waydroid 自带 LineageOS Browser，可以直接启动：

```bash
waydroid app launch org.lineageos.jelly
```

尝试访问百度。

也可以从命令行测试：

```bash
sudo waydroid shell -- ping -c 3 www.baidu.com
```

正常情况下应该能够完成 DNS 解析并收到响应。

如果：

```text
192.168.240.1 能 ping
公网 IP 不能访问
```

重点检查宿主机 FORWARD 和 NAT。

如果：

```text
公网 IP 可以访问
域名无法解析
```

则重点检查 DNS。

当 Browser 能正常打开网页以后，《阴阳师》的资源检查和资源下载也应该可以正常工作。

---

## 第五步：给 Waydroid 启用 NVIDIA GPU 加速

普通 Waydroid 在 NVIDIA 显卡上很可能退化到 SwiftShader 软件渲染。

可以检查：

```bash
sudo waydroid shell dumpsys SurfaceFlinger | grep GLES
```

如果看到类似：

```text
ANGLE
Vulkan
SwiftShader Device
```

说明：

```text
阴阳师
  ↓
ANGLE
  ↓
SwiftShader
  ↓
CPU 软件渲染
```

此时虽然游戏可能可以启动，但通常会出现：

```text
CPU 占用非常高
画质较差
帧率低
发热严重
```

对于 NVIDIA RTX 显卡，可以使用 `waydroid-nvidia`。

首先确认当前使用 NVIDIA Open Kernel Module：

```bash
pacman -Q | grep -E 'nvidia|waydroid'
```

我的 CachyOS 使用：

```text
linux-cachyos-nvidia-open
nvidia-utils
```

停止当前 Waydroid：

```bash
waydroid session stop
sudo systemctl stop waydroid-container.service
```

然后使用 `paru` 安装：

```bash
paru -S waydroid-nvidia-bin
```

`waydroid-nvidia-bin` 与普通 `waydroid` 冲突。

安装过程中如果提示：

```text
waydroid-nvidia-bin and waydroid are in conflict.
Remove waydroid?
```

选择删除普通 `waydroid` 即可。

这里替换的是 Waydroid 软件包，并不需要主动删除：

```text
/var/lib/waydroid
```

也不要重新清空 Android 数据，否则已经安装的《阴阳师》和其他 Android 数据也会一起消失。

安装完成后：

```bash
waydroid init
```

然后部署 NVIDIA guest stack：

```bash
sudo waydroid-nvidia-setup
```

启用服务：

```bash
sudo systemctl enable --now waydroid-container.service

systemctl --user enable --now wd-venus.service
```

完成后建议注销当前 Wayland/niri 会话，然后重新登录一次。

重新登录后：

```bash
waydroid session start
```

检查 Venus 服务：

```bash
systemctl --user status wd-venus.service
```

然后检查 GPU：

```bash
sudo waydroid shell dumpsys SurfaceFlinger | grep GLES
```

普通软件渲染时会看到：

```text
SwiftShader
```

正确启用 NVIDIA 后，应该变成类似：

```text
ANGLE
NVIDIA
Vulkan
Venus
NVIDIA GeForce RTX 5060
```

也就是说最终渲染链路变成：

```text
阴阳师
  ↓
ANGLE
  ↓
Vulkan / Venus
  ↓
RTX 5060
```

而不再让 CPU 使用 SwiftShader 模拟 GPU。

---

## 第六步：确认 libhoudini 没有失效

切换到 `waydroid-nvidia` 后，建议再次检查 ARM 转译：

```bash
sudo waydroid shell getprop ro.dalvik.vm.native.bridge
```

应该仍然是：

```text
libhoudini.so
```

然后：

```bash
sudo waydroid shell getprop ro.product.cpu.abilist
```

应该仍包含：

```text
arm64-v8a
armeabi-v7a
```

如果这两项正常，就说明：

```text
ARM 转译     OK
NVIDIA GPU   OK
Waydroid     OK
```

---

## 第七步：启动《阴阳师》

现在直接运行：

```bash
waydroid app launch com.netease.onmyoji
```

也可以先进入完整 Android：

```bash
waydroid show-full-ui
```

再从 Android 界面启动游戏。

至此完整结构为：

```text
CachyOS
   │
   └── Waydroid
          │
          ├── libhoudini
          │      └── ARM → x86_64
          │
          └── waydroid-nvidia
                 └── ANGLE
                      ↓
                    Venus
                      ↓
                  RTX 5060
                      ↓
                   阴阳师
```

---

## 更新《阴阳师》

《阴阳师》日常的资源更新通常直接由游戏客户端完成，例如：

```text
活动资源
新式神资源
语音
地图
资源包
```

这部分与 Android 手机上的游戏基本一致，不需要重新安装 Waydroid。

如果以后遇到必须更新 APK 的大版本，可以下载新的官方 APK，再执行：

```bash
waydroid app install /path/to/new-onmyoji.apk
```

只要依然使用同一个：

```text
com.netease.onmyoji
```

并且 APK 签名一致，Android 会按照应用升级处理。

因此一般不需要：

```text
卸载旧版
重新安装
重新下载所有数据
```

---

## 更新 Waydroid 后的注意事项

Waydroid、Android image 和《阴阳师》本身是三套不同的更新。

平时：

```text
阴阳师资源
→ 游戏自己更新

阴阳师 APK
→ 下载新版 APK 覆盖安装

Waydroid 软件包
→ CachyOS / paru 更新
```

如果以后 Waydroid system/vendor image 发生较大更新，建议重新检查：

```bash
sudo waydroid shell getprop ro.dalvik.vm.native.bridge
```

如果不再是：

```text
libhoudini.so
```

重新进入：

```bash
cd ~/Projects/waydroid_script
```

执行：

```bash
sudo .venv/bin/python main.py install libhoudini
```

对于 NVIDIA 环境，如果升级后 GPU 加速失效，也可以重新执行：

```bash
sudo waydroid-nvidia-setup
```

然后检查：

```bash
sudo waydroid shell dumpsys SurfaceFlinger | grep GLES
```

---

## 常用检查命令

检查 Waydroid 状态：

```bash
waydroid status
```

打开完整 Android：

```bash
waydroid show-full-ui
```

查看应用：

```bash
waydroid app list
```

检查《阴阳师》是否安装：

```bash
sudo waydroid shell pm list packages | grep onmyoji
```

启动《阴阳师》：

```bash
waydroid app launch com.netease.onmyoji
```

检查 ARM 转译：

```bash
sudo waydroid shell getprop ro.dalvik.vm.native.bridge
```

检查 ABI：

```bash
sudo waydroid shell getprop ro.product.cpu.abilist
```

检查 GPU：

```bash
sudo waydroid shell dumpsys SurfaceFlinger | grep GLES
```

检查 Android IPv4：

```bash
sudo waydroid shell -- ip -4 addr show eth0
```

检查默认路由：

```bash
sudo waydroid shell -- ip route show table eth0
```

测试网络：

```bash
sudo waydroid shell -- ping -c 3 www.baidu.com
```

查看日志：

```bash
sudo waydroid logcat
```

如果《阴阳师》出现闪退、黑屏或者无法进入游戏，可以一边运行：

```bash
sudo waydroid logcat
```

一边重新启动游戏，从日志中寻找：

```text
FATAL
SIGSEGV
houdini
ANGLE
Vulkan
EGL
onmyoji
```

相关报错。

---

最终，这套方案的优势是整个 Android 游戏仍然运行在 Linux 容器中：

```text
Linux Kernel
      ↓
Waydroid Container
      ↓
Android
      ↓
libhoudini + Venus
      ↓
RTX 5060
```

不需要：

```text
Linux
→ Wine
→ Windows Android 模拟器
→ Android
→ 游戏
```

对于 CachyOS + NVIDIA 用户来说，在解决 ARM 转译、网络和 NVIDIA GPU 加速以后，Waydroid 可以作为一个相当实用的 Android 游戏运行环境。
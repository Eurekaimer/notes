---
tags:
  - 国外公开课
  - CS
---
# CS61A

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Progress Bar Example</title>
  <style>
    /* 设置进度条外容器 */
    .progress {
      width: 100%;
      height: 30px;
      background-color: #e0e0e0; /* 进度条背景色 */
      border-radius: 5px;
      margin: 20px 0;
      position: relative;
    }

    /* 设置进度条内部分 (动态) */
    .progress-bar {
      height: 100%;
      background-color: red; /* 红色进度条 */
      width: 0; /* 默认宽度为 0 */
      border-radius: 5px;
      position: absolute;
      animation: progress 3s ease-out forwards; /* 动画效果 */
    }

    /* 进度条动画 */
    @keyframes progress {
      0% {
        width: 0;
      }
      100% {
        width: 60%; /* 最终宽度设置为 x% */
      }
    }

  </style>
</head>
<body>

<div class="progress">
  <div class="progress-bar"></div> <!-- 只保留进度条，没有内部数字 -->
</div>

</body>
</html>

## 前言

存放[@Eurekaimer](https://github.com/Eurekaimer)在完成CS61A过程中的HWs/Labs/Projects的实现和一些新手可能犯的错误(因为我在学习过程中应该会都踩一遍)，相关实现请参考Github的[CS61A仓库](https://github.com/Eurekaimer/CS61a)

完成的时间轴：TBA(To be anounced)(2025.04.05-)

- [x] 版本选用：2024spring

> 由于一些版权上的问题 UCB 似乎向非 UCB 的学习者封闭了 Archive 的通道，所以这里建议选用国内的备份站点和 B 站的视频

- [x] 时间安排：预计 200h

- [x] 语言：Python

- [x] 前置：无

- [x] 参考学习顺序：videos-reading-q&a-(lab/disc/hw)-project

完成的时间轴：TBA(2025.04.05-)

以下是所有内容的完成情况（按照顺序排列）:

- [x] [61A-Week-1](Week%201.md) 2025.4.5
	- [x] Disc 00
	- [x] Reading
	- [x] Videos(Functions)
	- [x] Lab 00
	- [x] HW 01
- [x] [61A-Week-2](Week%202.md) 2025.4.25
	- [x] Videos(Control,Higher-Order Functions,Environments)
	- [x] Reading
	- [x] Lab 01
	- [x] Disc 01
	- [x] HW 02: Higher-Order Functions
	- [x] [Hog](Project%201-The%20Game%20of%20Hog.md)
- [x] [61A-Week-3](Week%203.md) 2025.4.27
	- [x] Videos(Functional Abstraction,Function Examples)
	- [x] Lab 02
	- [x] Disc 02
- [x] [61A-Week-4](Week%204.md) 2025.4.30
	- [x] Videos(Recursion,Tree Recursion)
	- [x] HW 03
	- [x] Disc 03
- [x] [61A-Week-5](Week%205.md) 2025.5.12
	- [x] Videos(Sequences,Containers,Data Abstraction)
	- [x] Lab 03
	- [x] Disc 04
	- [x] [Cats](Project%202-CS%2061A%20Autocorrected%20Typing%20Software.md)
- [x] [61A-Week-6](Week%206.md) 2025.5.13
	- [x] Videos
	- [x] Lab 04
	- [x] Disc 05
	- [x] HW 04
- [x] [61A-Week-7](Week%207.md) 2025.9.2
	- [x] Videos(Iterators, Generators, Objects)
	- [x] Lab 05
	- [x] Disc 06
	- [x] HW 05

## 资源汇总

CS61a 的资源参考 (24spring) 如下：
1. [ZJU 课程评价平台](https://conanhujinming.github.io/comments-for-awesome-courses/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%AF%BC%E8%AE%BA/UC%20BerkeleyCS61A%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A8%8B%E5%BA%8F%E7%9A%84%E6%9E%84%E9%80%A0%E4%B8%8E%E8%A7%A3%E9%87%8A/)
2. [CSDIY](https://csdiy.wiki/%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8/Python/CS61A/?h=cs61a#_1)
3. [Videos/Recordings](https://www.bilibili.com/video/BV1sy411z7nA/?vd_source=483c12ed150608294868953a0c6e7078)
4. [参考实现](https://github.com/shuo-liu16/CS61A)
5. [Learn-CS](https://www.learncs.site/docs/curriculum-resource/cs61a/cs61a_en)：主要使用这个备份站点的资源(无法使用Recording)
6. [一个学习总结](https://github.com/half-dreamer/CS61A-20fa?tab=readme-ov-file)

文章参考：

1. [CS61a 学习总结](https://zhuanlan.zhihu.com/p/640290712)
2. [CS61A 学习经验&感想](https://zhuanlan.zhihu.com/p/486323075)

也可以使用[24fall 备份（可 fork 完成作业）](https://github.com/InsideEmpire/CS61A-Assignments?tab=readme-ov-file#%E4%B8%AD%E6%96%87%E8%AF%B4%E6%98%8E)

## Question and Feedback

实际上，这门课的视频几乎可以说是完全包含于 textbook 中了，我认为如果有一定基础完全可以不看视频直接看书本然后完成 lab 和 hw 即可

### Lab 00

+ 在线评测如何 local 使用 OK（不通过 UCBedu 邮箱）的问题：在正确的目录中 (ls contains ok) type `python ok --local` in terminal

### HW 03

+ 关于匿名实现递归的信仰之跃


# Lecture 2 - Poisson Processes


!!! tldr "Syllabus"
    + Poisson 过程  
    + 到达间隔  
    + 到达时间


## Poisson 过程的定义

>Poisson 过程刻画了人们“等待”和“计数”等行为中所蕴含随机性。Poisson 过程是最基本也是最重要的一类连续时间参数随机过程。它是最典型的 Markov 过程，Levy 过程；而且还是一个半鞅。

### 基本概念


!!! note "Definition 2.1 (计数过程, Counting processes)"
    如果随机过程 $\left\{ N(t),t \geqslant 0 \right\}$ 表示时间段内发生的事件总数，则称随机过程 $N(t)$ 为计数过程 (Counting processes)

It should qualified:

+ $N(t)\geqslant 0$
+ $N(t)$ 是整数
+ 单调性

为了更好的研究计数过程可以增加一些自定义的约束条件：独立增量与平稳增量


!!! note "Definition 2.2 (独立增量过程， independent increments)"
    对于连续时间的随机过程，简单来说就是任意设置间隔点，其中发生的事件数相互独立，这就称为**独立增量过程**


如果对于 $X(t+s)-X(t)$，有任意的 $t$ 分布相同，则称为**平稳增量过程**(stationary increments)

接下来利用上面的概念给出最基本的一类随机过程-Poisson 过程的刻画

### Poisson 过程


!!! note "Definition 2.3 (Poisson过程, 1)"
    若计数过程 $\left\{ N(t),t \geqslant 0 \right\}$ 满足
    + N(0)=0
    + 具有独立增量
    + 长度为 $t$ 的任意区间内的事件数服从均值 $\lambda t$ 的 Poisson 分布，即 $\forall s,t \geqslant 0,P(N(t+s)-N(s)=n)=e^{-\lambda t} \frac{\left( \lambda t \right)^{n}}{n!},n=0,1\dots$

    称为具有速率 $\lambda$ 的 Poisson 过程。

然而条件 (3) 在实际中是很难验证的，所以我们有必要给出一个等价定义

Remark: 需要掌握其中的差别和互推的方式






## 到达间隔与等待时间的分布












## 到达时间的条件分布






## M/G/1 的忙期








# Lecture 2 - Poisson Processes

!!! tldr "Syllabus"
    + Poisson 过程
    + 到达间隔
    + 到达时间

>老师这里给出的内容感觉还是不够的，结合了排队论内容但是没有很好的讲清楚细节，Poisson 过程也不是很严谨的讲（讲的乱乱的感觉，当时单纯被灌倒是感觉还可以，不过起码比大多数老师念书好多了）

## Poisson 过程的定义

Poisson 过程作为最为基本的一种随机过程以其丰富的性质和与现实世界的深刻联系吸引着（包括我）对于概率和随机过程有深刻爱好的人，因此本篇笔记就来详细地（或者说是按照我随机过程老师的脉络--without measure theory）梳理一下关于 Poisson 过程的相关定义和性质，以及它是如何启发相关的研究内容并为其他内容打通关节、提供动机。

>Poisson 过程刻画了人们“等待”和“计数”等行为中所蕴含随机性。Poisson 过程是最基本也是最重要的一类连续时间参数随机过程。它是最典型的 Markov 过程，Levy 过程；而且还是一个半鞅。

### 基本概念

从比较基本的定义出发再过度到我们正式的研究对象——

+ 计数过程
+ 独立增量过程
+ 平稳增量过程

!!! note "计数过程, Counting processes"
    如果随机过程 $\left\{ N(t),t \geqslant 0 \right\}$ 表示时间段内发生的事件总数，则称随机过程 $N(t)$ 为计数过程 (Counting processes)

It obviously should qualified:

+ $N(t)\geqslant 0$
+ $N(t)$ 是整数
+ 单调性

>换句话说就是采用了最为基本的计数测度

为了更好的研究计数过程可以增加一些自定义的约束条件（或者说是一些假设）：独立增量与平稳增量（后编：突然觉得这个地方的动机有点奇怪……，有一些为了叙述方便将逻辑反转了）

!!! note "独立增量过程， independent increments"
    对于连续时间的随机过程，简单来说就是任意设置间隔点，其中发生的事件数相互独立，例如：$\forall t_{i}$，我们都有 $X(t_{i+1})-X(t_{i})$ 相互独立，这类过程就称为**独立增量过程** (independent increments)

如果 $X(t+s)-X(t)$ 的分布对于任意的 $t$ 分布相同（换句话说就是将二元变量的分布函数问题转换为了一元的关于两个变量差值的研究问题，我们只需要研究两个参数的差值即可确定分布，这很好的简化了原本的问题），则称为**平稳增量过程**(stationary increments)

接下来利用上面的概念给出最基本的一类随机过程-Poisson 过程的刻画（为什么不先刻画一下普通的平稳性呢？）

### Poisson 过程

下面直接给出 Poisson 过程的相关定义：

!!! note "Poisson过程, 1"
    若计数过程 $\left\{ N(t),t \geqslant 0 \right\}$ 满足
    + $N(0)=0$
    + 具有独立增量
    + 长度为 $t$ 的任意区间内的事件数服从均值 $\lambda t$ 的 Poisson 分布，即 $\forall s,t \geqslant 0$

    $$P(N(t+s)-N(s)=n)=e^{-\lambda t} \frac{\left( \lambda t \right)^{n}}{n!},n=0,1\dots$$

    称其为具有速率 $\lambda$ 的 Poisson 过程。

我们可以很轻易的从条件 (3) 中得到下面的性质，

+ Poisson 过程具有平稳增量
+ $P(N(t)=n)=e^{-\lambda t} \frac{(\lambda t)^{n}}{n!},E[N(t)]=\lambda t$，因此将 $\lambda=\frac{E[N(t)]}{t}$ 为过程的速率或者强度

然而条件 (3) 在实际应用中是很难验证的，所以我们有必要给出一个等价定义

!!! info "注意"
    显然你需要掌握其中定义的细微差别和等价定义互推的方式

!!! note "Poisson过程，2"
    若计数过程 $\left\{ N(t),t \geqslant 0 \right\}$ 满足

    + $N(0)=0$
    + 具有平稳增量和独立增量
    + $P(N(h)=1)=\lambda h+o(h)$
    + $P(N(h)\geqslant 2) = o(h)$

    称其为具有速率 $\lambda > 0$ 的 Poisson 过程。

>可以粗略先对比两个定义的不同点，定义 2 通过直接加入平稳增量来弥补原本定义 1 隐含的条件，而对于初等概率论有较多了解（如果看过李贤平老师的《概率论》）就会知道定义 2 的后两个条件能够利用微分方程推导出概率函数（定义 1 的条件 3）

下面就来进行直接的数学证明：

`Proof.`

先证明从 `定义2` $\implies$ `定义1`

$$
\begin{aligned}
P(N(h)=0)&=1-P(N(h)\geqslant 1)\\
&=1-\lambda h+o(h)\\
P(N(t+h)=0)&=P(N(t)=0)P(N(t+h)-N(t)=0)\\
&=P(N(t)=0)[1-\lambda h+o(h)]\\
\frac{P(N(t+h)=0)-P(N(t)=0)}{h}&=-\lambda P(N(t)=0)+ \frac{o(h)}{h}
\end{aligned}
$$

那么很自然的我们令 $h\to 0$，马上就可以得到 $\frac{dP(N(t)=0)}{dt}=-\lambda P(N(t)=0)$，解微分方程结合初值条件

$$
P(N(t)=0)=e^{-\lambda t}
$$

类似的推导过程（我只是沿袭了老师的证明步骤，但是按照我个人的想法如果要理解这个过程的话，证明应当从这里开始写，然后发现解微分方程需要利用到初值条件然后倒回上面的推导过程）：

$$
\begin{aligned}
P(N(t+h)=n)&=\sum\limits P(N(t+h)-N(t)=k,P(N(t)=n-k))\\
&=P(N(t)=n,N(t+h)-N(t)=0)+\\
&P(N(t)=n-1,N(t+h)-N(t)=1)+o(h)\\
&=(1-\lambda h)P(N(t)=n)+\lambda hP(N(t)=n-1)+o(h)\\
\frac{P(N(t+h)=n)-P(N(t)=n)}{h}&=-\lambda P(N(t)=n)+\lambda P(N(t)=n-1)+ \frac{o(h)}{h}\\
&\implies \frac{dP(N(t)=n)}{dt}=-\lambda P(N(t)=n)+\lambda P(N(t)=n-1)
\end{aligned}
$$

这里需要用到一些常微分方程的知识，但是并不多：

$$
\begin{aligned}
Formula&= \frac{d}{dt}(e^{\lambda t}P(N(t)=n))=\lambda e^{\lambda t}P(N(t)=n-1)\\
 \frac{d}{dt}(e^{\lambda t}P(N(t)=1))&=\lambda e^{\lambda t}P(N(t)=0)=\lambda
\end{aligned}
$$

然后可以考虑使用数学归纳法得到 $P(N(t)=n)=e^{-\lambda t} \frac{(\lambda t)^{n}}{n!}$

再证明从 `定义1` $\implies$ `定义2`

显然的，直接利用 PDF 即可得到 $P(N(h)=1),P(N(h)\geqslant 2)$ 的结果


+ 注 1：可以通过直接利用定义 2 的后两个条件结合二项分布有近似 Poisson 分布的性质来证明 $N(t)$ 服从 Poisson 分布，证明留作习题
+ 注 2：也可以使用矩母函数证明（参考《随机过程及其应用（第二版）》，陆大䋮，张颢 P76）

## 到达间隔与等待时间的分布

我们除了关心一段时间内事件发生次数，也关心事件之间的时间间隔，下面给出关于到达间隔和等待时间的定义


!!! note "到达间隔"
    考虑一个 Poisson 过程，如果使用 $X_{1}$ 表示首个事件的到达时刻，对 $n\geqslant 1$ 以 $X_{n}$ 表示第 $n-1$ 和第 $n$ 个事件之间的时间，序列 $\left\{ X_{n} \right\}$ 称为到达时间间隔序列 (sequence of intervarrival times)

由于是 Poisson 过程，显然具有独立增量和平稳增量那么有 $X_{1},X_{2},\dots$ 独立同分布，并且由于 $P(X_{1}>t)=e^{-\lambda t}$，还可以得出 $X_{i}$ 是具有均值 $\frac{1}{\lambda}$ 的指数随机变量 ($E(X)=\int_{0}^{\infty}  \, P(X>t)dt$)


!!! note "等待时间"
    实际就是第 $n$ 个事件的到达时间，$S_{n}=\sum\limits_{i=1}^{n}X_{i}$，称为第 $n$ 个事件的等待时间

显然我们会得到 $f(t)=\lambda e^{-\lambda t} \frac{(\lambda t)^{n-1}}{(n-1)!}$，可以利用 Gamma 分布的可加性得到这一结论

通过对于到达间隔和等待时间的定义和性质讨论，我们可以得到 Poisson 过程的另一个等价定义

!!! note "Poisson过程，3"
    设 $\left\{ X_{n} \right\}$ 是独立同分布的均值为 $\frac{1}{\lambda}$ 的指数随机变量序列，定义计数过程 $\left\{ N(t) \right\}$，并且它的第 $n$ 个事件在时刻 $S_{n}$ 发生，则 $N(t)$ 称为具有速率 $\lambda > 0$ 的 Poisson 过程。

等价性证明是显然的，直接利用 `定义3` $\implies$ `定义1`

## 到达时间的条件分布

下面来看一个小练习，如果我们已经知道一个 Poisson 分布并且在时刻 $t$ 前恰好有一个事件发生，那么这个事件发生的时刻在 $[0,s]$ 上的条件分布为？

$$
\begin{aligned}
P(S_{1}<s|N(t)=1)&= \frac{P(X_{1}<s,N(t)=1)}{P(N(t)=1)}\\
&=\frac{P_{1}([0,s))P_{0}([s,t))}{P(N(t)=1)}\\
&=\frac{\lambda se^{-\lambda s}\cdot e^{-\lambda(t-s)}}{\lambda te^{-\lambda t}}\\
&=\frac{s}{t}
\end{aligned}
$$

可以知道事件发生的时刻是均匀分布的，下面推广这个命题，即考察多个事件的联合条件分布，在推广之前需要对次序统计量进行一个Recall

$\mathbf{Recall}.$ 下面回忆一下关于次序统计量的知识，主要是知道$Y_{(k)}$表示的是在$Y_{i}$中的第$k$个最小值即可，剩下的性质都可以通过简单的概率论得到

我们关注下面这个命题：在给定$N(t)=n$的条件下，$n$个事件的到达事件$S_{i}$的联合条件分布与$n$个独立的$(0,t)$上的均匀分布随机变量的次序统计量的分布相同

`Proof.`

考虑充分小的$h_{i}$使得满足$t_{i}+h_{i} < t_{i+1}$：

$$
\begin{aligned}
&P(t_{i}\leqslant S_{i} < t_{i}+h_{i}|N(t)=n)\\
=& \frac{P\left( N(h_{i})=1,N\left( t-\left( \sum\limits h_{i} \right)=0 \right) \right)}{P(N(t)=n)}\\
=& \frac{\prod\lambda h_{i}e^{-\lambda h_{i}}\cdot e^{-\lambda\left( t-\sum\limits h_{i} \right)}}{\frac{e^{-\lambda t}(\lambda t)^{n}}{n!}}\\
=& \frac{n!}{t^{n}} \prod h_{i}
\end{aligned}
$$

那么显然的直接令$h_{i}\to 0$马上就可以得到联合条件密度为$f(t_{1},\dots,t_{n})= \frac{n!}{t^{n}}$

## M/G/1的忙期

>我曾经在高数课上写过排队论相关内容作为期末小论文，排队论是运筹学和管理科学中的重要内容，课程重点的是关心排队系统模型(最为经典的也就是MG1)，我自己认为这是老师补充的私货(虽然说张灏老师的书中也有介绍)，对于定义的讲述不是很详细

先给出排队系统的定义：

!!! note "排队系统"
    一个排队系统的记号为$X / Y/Z$，其中$X$表示到达间隔时间的分布，$Y$表示服务时间的分布，$Z$表示服务台的数量，这个记号也被称为Kendall记号

+ 注1：$X / Y$的常见类型有$M,G,D$分别表示Memoryless, 指数分布；General, 一般的分布G；Deterministic, 确定型
+ 注2：排队论的标准化符号为$X/Y /Z / A /B / C$，其中$A$表示系统容量的限制，$B$表示客源数量(一般假定为无穷)，$C$表示服务方式
+ 注3：什么是服务时间和服务台没有定义，其实有一个示意图就可以解释，但是没有

排队是很形象的事情，其中关键的环节也很容易理解，下定义是自然的，比如忙期的概念

!!! note "忙期"
    忙期(busy period)就是指从顾客到达空闲的服务机构起到服务机构再次空闲的时间长度，也就是连续繁忙的时间长度

对于$M /G /1$排队系统的忙期(bp)分布为：

$$
P(bp \leqslant t) = B(t)=\sum\limits_{n=1}^{\infty} \int_{0}^{t} e^{-\lambda t} \frac{(\lambda t)^{n-1}}{n!} \, dG_{n}(t)  
$$
其中$G_{n}$是服务时间分布$G$与其自身的$n$次卷积

`Proof.`

显然如果忙期长度为$t$并且需要进行$n$次服务的条件是(忙期开始应该代表第一个顾客到达服务台)：

+ $S_{k}\leqslant \sum\limits_{i=1}^{k}Y_{i}$
+ $\sum\limits_{i=1}^{n}Y_{i}=t$ 服务时间序列为$Y_{i}$
+ 在$(0,t)$有$n-1$个顾客到达

$\mathbf{Step 1}$ 考虑计算$(0,t)$内有$n-1$次到达并且$\sum\limits_{i=1}^{n}Y_{i}=t$的概率，直接利用上面的分布：

$$
e^{-\lambda t} \frac{(\lambda t)^{n-1}}{(n-1)!}dG_{n}(t)
$$

$\mathbf{Step 2}$ 利用条件分布函数与次序统计量的等价性：

!!! info "Lemma(Ross lemma 2.3.5)"
    如果$\tau_{i}$为$n-1$个独立的在$(0,t)$上均匀分布的随机变量的次序统计量，$\left\{ Y_{1},\dots ,Y_{n} \right\}$是与它们独立的独立同分布非负随机变量，那么有

    $$P\left( \sum\limits_{i=1}^{k} Y_{i}<\tau_{k}|\sum\limits_{i=1}^{n} Y_{i}=t \right)= \frac{1}{n}$$

结合引理

$$
\begin{aligned}
&P\left( S_{k}\leqslant \sum\limits_{i=1}^{k} Y_{i}|condition(2)(3) \right)\\
=& P\left( \tau_{k}\leqslant \sum\limits_{i=1}^{k} Y_{k}| \sum\limits_{i=1}^{n} Y_{i}=t \right)\\
=&P\left( t-\tau_{n-k }\leqslant t- \sum\limits_{i=k+1}^{n}Y_{i} | \sum\limits_{i=1}^{n} Y_{i}=t \right)\\
=&P\left( \tau_{n-k} \geqslant \sum\limits_{i=k+1}^{n} Y_{i}|\sum\limits_{i=1}^{n} Y_{i}=t \right)\\
=&P\left( \tau_{k} \geqslant \sum\limits_{i=1}^{k} Y_{i}|\sum\limits_{i=1}^{n} Y_{i}=t \right)\\
=&P\left( \tau_{k} > \sum\limits_{i=1}^{k} Y_{i}|\sum\limits_{i=1}^{n} Y_{i}=t \right)\\
=& \frac{1}{n}
\end{aligned}
$$


$\mathbf{Step 3}$ 先结合上面的两个步骤，定义$B(t,n)$为忙期长度$t$进行$n$次服务的概率

我们很自然的有：

$$
B(t,n)=\int_{0}^{t}e^{-\lambda t} \frac{(\lambda t)^{n-1}}{n!}  \, dG_{n}(t)
$$

忙期长度的分布为：

$$
B(t)=\sum\limits_{n=1}^{\infty} B(t,n)=\sum\limits_{n=1}^{\infty} \int_{0}^{t}e^{-\lambda t} \frac{(\lambda t)^{n-1}}{n!}  \, dG_{n}(t)
$$

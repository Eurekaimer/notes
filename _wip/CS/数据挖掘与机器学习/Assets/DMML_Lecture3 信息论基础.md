 # Chapter 3 信息论基础

!!! tldr "Outline"
    + 引言
    + 信息熵
    + KL 散度：分布差异的度量
    + 互信息：变量相关性的度量

    !!! quote "References"
        + [Stanford EE376A](https://web.stanford.edu/class/ee376a/files/scribes/lecture_notes.pdf)
        + [Shannon entropy in the context of machine learning and AI](https://medium.com/swlh/shannon-entropy-in-the-context-of-machine-learning-and-ai-24aee2709e32)
        + Lecture Slides(NKU_DMML, Lecturer: Fu)

关于[Stanford EE376A](https://web.stanford.edu/class/ee376a/files/scribes/lecture_notes.pdf) 本人很推荐，写的很有趣，开篇是三个信息论在工程学中的应用，然后对于信息论的一些基本概念也都有所提及，且讲述的很详细

!!! quote "Birth"
    It is among the few disciplines fortunate to have a precise date of birth: 1948, with the publication of Claude E. Shannon’s paper entitled A Mathematical Theory of Communication. Shannon’s Information theory had a profound impact on our understanding of the concepts in communication.

## Some applications

>A few representative examples which try to give a flavour of the problems which can be addressed using information theory

+ 无损压缩
+ 信道编码
+ 有损压缩

!!! tip "扩展"
    关于上述的这三个例子在 Stanford 的 Notes 的后续章节中都有一个 Chapter 进行了比较详细的介绍，如果对于上述例子比较感兴趣且想更加深入的了解的话，建议仔细阅读后续的章节

### Lossless compression

Think about a source that emits a sequence of symbols $U_{1},U_{2}\dots$ with $U_{i}\in \left\{ a,b,c \right\}$

$$
\begin{aligned}
P(U=a)&=0.7\\
P(U=b)&=P(U=c)=0.15
\end{aligned}
$$

Compare with traditional encoding way, a = 00 b = 01 c = 10, however, we can use a = 0 due to the lettter appears more often, b = 10 c = 11. Such that, we can find that this code satisfies the prefix condition, meaning no codeword is the prefix of another codeword, which allows us to decode a message consisting of stream of bits without any ambiguity.

$$
\overline{L}=1 \times P(U=a)+2\times P(U=b)+2\times P(U=c)=1.3
$$

Can we do it better? Yes! We can encode two values at a time instead of encoding each value individually.

| source symbols | probability | encoding |
| -------------- | ----------- | -------- |
| aa             | 0.49        | 0        |
| ab             | 0.105       | 100      |
| ac             | 0.105       | 111      |
| ba             | 0.105       | 101      |
| ca             | 0.105       | 1100     |
| bb             | 0.0225      | 110100   |
| bc             | 0.0225      | 110101   |
| cb             | 0.0225      | 110110   |
| cc             | 0.0225      | 110111   |

If we use the above encoding scheme the the expected number of bits used per source symbol is **1.1975**

推广上述思想，我们可以考虑一族以整数 $k$ 为索引的编码方案。给定一个整数 $k$，我们可以用一个满足前缀条件的方案一次编码 $k$ 个值，并将较短的码字分配给更多的普通符号。在某种最优编码方案下，每个值的期望比特数会随着 $k$ 的增加而减少，这似乎是合理且 work 的

那么很自然的我们会想到这个 $\overline{L}$ 是否会有一个下界 (Lower bound)，Shannon 证明了对于任意给定的源，他所能达到的最优下界称为该源的**熵 (Entropy)** $H(U)$，定义为：

$$
H(U)\overset{\Delta}{=}\sum\limits_{u\in U}p(u)\log_{2} \frac{1}{p(u)}
$$

>Note that the statements of the theorems here will be informal; they will be made rigorous in later lectures.

!!! tip "Theorem"
    $\forall$ families of encoding schemes, the average codeword length, $\overline{L}\geqslant H(U)$

For our example, the lower bound is thus

$$
0.7 \times \log_{2} \frac{1}{0.7}+ 2\times 0.15 \times \log_{2} \frac{1}{0.15}\approx 1.181
$$

We will also show an upper bound, namely

$\forall \varepsilon >0$, $\exists$ family of schemes, such that the average codeword length, $\overline{L}\leqslant H(U)+\varepsilon$

### Channel coding

仍然考虑一个源向外发射信号，但是这次只有两个可能 $U_{i}\in \left\{ 0,1 \right\}$，服从伯努利分布，此外增加噪声，有$q< \frac{1}{2}$的概率使得原本的编码反转，因此令最终的输出为$Y_{i}$

$$
Y_{i}=X_{i} \oplus W_{i},W_{i}\sim Ber(q)
$$

where $\oplus$ is the $XOR$ operator

令$p_{e}=q< \frac{1}{2}$作为每个信源比特发生错误的概率，自然会想到我们希望能够降低$p_{e}$的值，我们可以采用重复编码的方法，例如对某个接收到的比特发送$k$次，将其中接收到的出现次数最多的比特作为真实值接受，由此可以降低错误发生率

但是我们还需要考虑重复编码使用的信道空间扩大的问题，因此引入比特率(bit rate)的概念，记为$R$，在重复发送3次的例子中我们认为比特率为$\frac{1}{3}$，而不重复编码时比特率为$1$

!!! tip "Theorem(Bit rate limitation)"
    $\exists C>0$ and $\exists$ family of schemes with $R<C$ satisfying $p_{e}\to 0$

In fact, the largest such C is known as the **channel capacity** of a channel, which represents the largest bit rate ( the largest C ) that still allows for reliable communication.

!!! example "Two examples"
    + Binary Symmtric Channel
    The channel capacity of a binary symmetric channel with bit-flipping probability $q$ is $1-H(X),X\sim Ber(q)$. Moreover if we let $X\sim Ber(q)$ and $Y\sim Ber(p_{e})$, we will see that a bit rate $R$ such that $R< \frac{1-H(X)}{1-H(Y)}$ is achievable
    + Additive White Gaussian Noise (AWGN) Channel
    Assumptions are like before, and we think $Y_{i}=X_{i}+N_{i},N_{i}\sim N(0,\sigma^{2})$. We want to develop a scheme so that we can reliably reconstruct $U_i$ from the given $Y_i$. One idea is make $X_{i}$ a large positive value if $U_{i}=1$ and $X_i$ is a large negative value if $U_{i}=0$. Usually, we suppose there is an additional constraint on the average power of the tansmitted signal, s.t. we require $\frac{1}{n}\sum\limits_{i=1}^{n}X_{i}^{2}\leq p$

For a given value $p$, in fact, we will see that

!!! tip "Theorem"
    If the rate of transmission is $< \frac{1}{2}\log_{2}\left( 1+ \frac{p}{\sigma^{2}} \right)$, then $\exists$ family of schemes that communicate reliably. And if the rate of transmission is $> \frac{1}{2}\log_{2}\left( 1+ \frac{p}{\sigma^{2}} \right)$, then there is no family of schemes which communicates reliably.

The RATIO $\frac{p}{\sigma^{2}}$ is reffered to as SNR(signal-to-noise ratio)/信噪比

### Lossy compression

Let $B_{1},B_{2}\dots$ be the bits sent. One natural scheme is to set

$$
B_{i}= \left\{ \begin{matrix}
1& if\ \ U_{i}\geqslant 0\\ 
0 & if\ \ U_{i } < 0
\end{matrix} \right.
$$

After receiving the bits, let $V_1, V_2,\dots$ be the reconstructed values. The distortion of the scheme is defined as

$$
D\overset{\Delta}{=}\mathbb{E}[(U_{i}-V_{i})^{2}]
$$

而根据一个常见的结论可以知道使得均方误差(MSE)最小的一个解就是取条件期望(The optimal estimation rule for minimum mean squared error is **the conditional expectation**)

$$
\begin{aligned}
D&=\mathbb{E}[(U_{i}-V_{i})^{2}]\\
&=Var(U_{i}|B_{i})\\
&=0.5\times Var(U_{i}|B_{i}=1)+0.5\times Var(U_{i}|B_{i}=0)\\
&=Var(U_{i}|B_{i}=1)\\
&=\mathbb{E}[U_{i}^{2}|B_{i}=1]-(\mathbb{E}[U_{i}|B_{i}=1])^{2}\\
&=\sigma^{2}\left( 1- \frac{2}{\pi} \right)
\end{aligned}
$$

正如我们所看到的，部分例子表明信息论对通信领域的有用性。在接下来的几个部分中，我们将尝试建立信息论理论的数学基础，这将使我们在以后的应用中更加方便。

## Introduction

### What is information

信息是需要有上下文(context)，有使用价值，经过处理后能够变得有意义，所谓价值就是能够影响决策和行为，具有消除不确定性的好处；它还需要建立在数据(data)基础上，因此我们可以给出信息的粗略定义：原始数据在被接收、解释和赋予上下文后，才能变成有用的信息；而信息的价值又体现在消除不确定性，因此我们可以认为信息的多少也取决于不确定性的大小

### What is information theory

!!! quote "Background"
    信息论由Claude Shannon(1916 - 2001)于1948年创立，核心任务是研究信息如何量化、存储与运输，探索其基本极限

    几个关键概念：

    + 熵(Entropy)：刻画**不确定性**的大小
    + 信息量与互信息：度量信息的多少与变量间的**相关性**
    + 传输效率与极限：信息如何高效、可靠地传递

    所以我们可以认为信息论=研究如何度量与利用信息的不确定性

    几个典型应用：特征选择、模型评估、正则化、生成模型

!!! tip "信息量的三大规律"
     1. 函数性： $I(x_{i})=f[p(x_{i})]$
     2. 单调性： $p(x_{i})\downarrow \implies I(x_{i})\uparrow$
     3. 可加性： 独立事件的信息量可加

    $$I(x_{1}x_{2}\dots)=\sum\limits_{i}I(x_{i})$$

## 熵以及相关概念

本章节将给出一些有关于信息度量(measures of information)的关键概念，如熵、交叉熵、互信息、KL散度(在通信系统中也叫做相对熵)

在详细的介绍熵之前，我们有必要先引入惊奇函数(surprise function)

!!! note "Definition(surprise function)"
    这个函数用于衡量对于结果的“惊奇程度”，故名思义，该事件发生的概率越小，惊奇函数的值越大

    $$s(u) \overset{\Delta}{=}\log \frac{1}{p(u)}$$

以下是一个与惊奇函数完全等价的概念，自信息：我们认为发生概率越小的事件所带来的信息是越多的，因此惊奇程度也越高

>The fundamental concept behind Shannon entropy is the so-called self-information of an event, sometimes called surprisal.

### 自信息(Self-Information)

!!! note "Definition(Self-information)"
    对于离散随机变量$X$取值$x$，其自信息为：

    $$I(x)=f(P(x))=-\log_{b}P(x)$$

    其中$P(x)$为事件$X=x$的概率，$b$为对数底

根据定义式即可得到一些有关于自信息的性质：

+ 非负性：根据定义即可得到(概率总是小于等于1)
+ 单调性：越可能发生的事件所拥有的自信息越小(事件越可能发生，信息量越少)
+ 确定事件
+ 不可能事件

### 香农熵

我们从上面可以知道自信息是衡量单个事件发生的惊讶度，而香农熵$H(X)$则用于衡量整个随机变量的平均不确定性，也叫做微分熵，信息熵

!!! note "Definition(香农熵)"
    离散随机变量的香农熵:
    设离散随机变量$X\sim \mathcal{X}=\left\{ x_{1},x_{2},\dots,x_{n} \right\}$，概率分布为$P(X)=\left\{ p(x_{1}),p(x_{2}),\dots,p(x_{n}) \right\}$，香农熵的定义为：

    $$H(X)=\mathbb{E}[I(X)]=\sum\limits_{i=1}^{n} p(x_{i})I(x_{i})=-\sum\limits_{i=1}^{n} p(x_{i})\log p(x_{i})$$

    连续随机变量的微分熵:
    对于连续随机变量$X$的概率密度函数$p(x)$，微分熵的定义为

    $$H(X)=-\int_{-\infty}^{\infty} p(x)\log p(x) \, dx $$

物理意义来讲$H(X)$代表编码随机变量$X$所需最小的平均比特数

离散香农熵的性质：

+ 非负性 根据定义可以很显然的得到
+ 最大值性质：系数均匀分布均为 $\frac{1}{n}$ 的情况

可以使用Jensen不等式来得到有关熵的一个上界：

$$
\begin{aligned}
H(U)&=\mathbb{E}\left[ \log \frac{1}{p(u)} \right]\\
&\leqslant \log \mathbb{E}\left[  \frac{1}{p(u)} \right]\\
&=\log \sum\limits_{u}p(u) \frac{1}{p(u)}\\
&=\log m(WLOG,\mathcal{U}=\left\{ 1,2\dots m \right\} )
\end{aligned}
$$

根据Jensen不等式的取等条件当且仅当$P(u)= \frac{1}{m}\forall u$

对于一个概率质量函数$q$，被当作$p$定义在相同的字母表，定义

$$
H_{q}(U)\overset{\Delta}{=}\sum\limits_{u\in \mathcal{U}}p(u) \log \frac{1}{q(u)}
$$

这个时候我们会更加“惊奇”，数学形式上就是：

$$
H(U)\leqslant H_{q}(U)
$$

当且仅当$q=p$时取等

`Proof.`

$$
\begin{aligned}
H(U)-H_{q}(U)&\leqslant \log \mathbb{E}\left[  \frac{q(u)}{p(u)} \right]\\
&=\log \sum\limits_{u\in \mathcal{U}}p(u) \frac{q(u)}{p(u)}\\
&=0
\end{aligned}
$$

按照课程讲义中这里直接引入联合熵，但是EE376A选择直接进入Relative Entropy，个人认为后者有其合理性，因为这里引用的有关错误识别的性质在Relative Entropy中有更加生动的解释——KL散度始终大于等于0，当且仅当$p=q$时取到零

所以不妨先写下定义(剧透)：

!!! note "Definition(Relative Entropy/KL divergence)"
    An important measure of distance between probability measures is relative entropy, or the $Kullback-Leibler$ divergence

    $$D(p||q)\overset{\Delta}{=}\sum\limits_{u\in \mathcal{U}}p(u)\log \frac{p(u)}{q(u)}=\mathbb{E}\left[ \log \frac{p(u)}{q(u)} \right]$$

更加深入的内容在后续补充

### 联合熵(Joint Entropy)

!!! note "Definition(Joint Entropy)"
    设$(X,Y)$是联合离散随机变量，其联合分布为$p(x,y)$

    $$H(X,Y)=-\sum\limits_{x,y}p(x,y)\log p(x,y)$$

联合熵是用于衡量同时观测$X,Y$的不确定性，若是两个随机变量相互独立，显然可以得到$H(X,Y)=H(X)+H(Y)$，推广到任意多个随机变量的联合熵(Obviously)

### 条件熵(Conditional Entropy)

!!! note "Definition(Conditional Entropy)"
    条件熵$H(Y|X)$定义为(一般使用第二个表达式)：

    $$\begin{aligned}
    H(Y|X)&=-\sum\limits_{x,y}p(x,y)\log p(y|x)\\
    &=\sum\limits_{x}p(x)H(Y|X=x)
    \end{aligned}$$

也相当显然，表示已知$X$的条件下，$Y$仍然存在的不确定性，若$X,Y$独立，则$H(Y|X)=H(Y)$，若是$Y$由$X$决定则$H(Y|X)=0$

!!! tip "联合熵与条件熵的关系"
    可以将这些信息熵当作概率处理，而条件熵就对应条件概率，因此我们可以提出一套链式法则(Chain Rule for Entropy)：

    $$H(X,Y)=H(X)+H(Y|X)=H(Y)+H(X|Y)$$

也就是说联合不确定性可以分解为一个变量的不确定性+另一个变量在其条件下的不确定性，然后我们可以得出 **互信息(Mutual Information)** 的概念

$$
I(X;Y)=H(X)-H(X|Y)=H(Y)-H(Y|X)
$$

相当于它们所共有的一部分信息，而互信息就是为了衡量通过已知一个变量来减少另一个变量不确定性的量

## $KL$散度

!!! tip "$KL\ Divergence$(Kullback and Leibler, 1951)"
    用于衡量真实分布$P$与近似分布$Q$之间的差异：

    $$ \begin{aligned}
    D_{KL}(P||Q)&=\sum\limits_{x\in \mathcal{X}}P(x)\log \frac{P(x)}{Q(x)}\\
    &=\sum\limits_{x}P(x)\log P(x) - \sum\limits_{x}P(x)\log Q(x)
    \end{aligned}$$

    前一部分代表 $-H(P)$，后一部分代表 $-H(P;Q)$，$D_{KL}(P||Q)=H(P;Q)-H(P)$，其中 $H(P;Q)$ 即为交叉熵














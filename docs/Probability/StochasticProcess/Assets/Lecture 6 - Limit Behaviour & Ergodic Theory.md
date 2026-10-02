
# Lecture 6 - Limit Behaviour & Ergodic Theory

!!! tldr "Syllabus"
    + 正常返  
    + 遍历定理  
    + 不变分布的存在性与唯一性

本节课接着常返性的内容，考虑 $n\to\infty$ 的情形，继续研究随时间推移,Markov 链转移的规律。由上一节课中 Corollary 5.12，若状态 $j$ 是暂留的，那么对任意状态

$$P_{ij}^{(n)}\to0,\quad n\to\infty $$

所以本节课我们只考虑常返状态。

## 弱遍历定理

### 平均返回时间和正常返

假设状态 $i$ 是常返的，那么 $f_{ii}=\sum\limits_{n=1}^{\infty}f_{ii}^{(n)}=1$，把 $\left\{ f_{ii}^{(n)} \right\}$ 看成 $\mathbb{N}^{+}$ 上的一个分布，我们可以定义返回状态 $i$ 的平均转移次数

!!! note "Definition 6.1(平均返回时间)"
    对于常返状态 $i$ 的平均返回时间定义为

    $$\mu_{ii}\overset{\Delta}{=}\sum\limits_{n=1}^{\infty} nf_{ii}^{(n)}$$

利用平均返回时间可以进一步对常返状态分类

!!! note "Definition 6.2(正常返)"
    假设状态 $i$ 常返，如果它的平均返回时间是有限的，也就是$\mu_{ii}<\infty$，就称状态$i$是正常返的(Positive recurrent)，否则，$M_{ii}=\infty$，我们则称$i$为零常返(Null recurrent)

### 弱遍历定理

!!! tip "Theorem 6.3(弱遍历定理)"
    设$\left\{ X_{n} \right\}$是不可约常返Markov链，那么对$\forall i,j$状态

    $$\lim\limits_{ n \to \infty } \frac{1}{n}\sum\limits_{k=0}^{n-1} P_{ij}^{(k)}= \frac{1}{\mu_{jj}}$$

`Proof.`

先给出一个引理(不加证明)

!!! note "Lemma 6.4(Hardy&Littlewood)"
    设$\forall n ,a_{n}\geqslant 0$，记幂级数$A(z)$为$\sum\limits_{n=0}^{\infty}a_{n}z^{n},0\leqslant z<1$
    则有

    $$\lim\limits_{ n \to \infty } \frac{1}{n}\sum\limits_{k=0}^{n-1} a_{k}=\lim\limits_{ z \to 1^{-} }(1-z)A(z)$$

设$P_{ij}(z)\overset{\Delta}{=}\sum\limits_{n=0}^{\infty}P_{ij}^{(n)}z^{n}$，由引理得

$$
\lim\limits_{ n \to \infty } \frac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k)}=\lim\limits_{ z \to 1^{-} }(1-z)\sum\limits_{n=0}^{\infty} P_{ij}^{(k)}z^{n}
$$

回顾Theorem 5.11的证明中

$$
\sum\limits_{n=0}^{\infty} P_{ij}^{(n)}z^{n}=\delta_{ij}+\sum\limits_{k=1}^{\infty} \left( f_{ij}^{(k)}z^{k} \right) \sum\limits_{k=0}^{\infty} \left( P_{ij}^{(k)}z^{k} \right) 
$$

设$F_{ij}(z)\overset{\Delta}{=}\sum\limits_{n=1}^{\infty}f_{ij}^{(n)}z^{n}$，当$i\neq j$时，由Abel定理可得

$$
F_{ij}(1^{-})=\lim\limits_{ z \to 1^{-} } \sum\limits_{n=1}^{\infty} f_{ij}^{(n)}z^{n}=\sum\limits_{n=1}^{\infty} f_{ij}^{(n)}=1
$$

所以

$$
\begin{aligned}
\lim\limits_{ z \to 1^{-} } (1-z)F_{ij}(z)P_{jj}(z)&=\lim\limits_{ z \to 1^{-} } P_{jj}(z)\\
&=\lim\limits_{ z \to 1^{-} }  \frac{1-z}{1-F_{jj}(z)}
\end{aligned}
$$

当$i=j$时，直接有

$$
\lim\limits_{ z \to 1^{-} } (1-z)P_{jj}(z)=\lim\limits_{ z \to 1^{-} } \frac{1-z}{1-F_{jj}(z)}
$$

无论是否有$i=j$，即$\forall i$都有

$$
\begin{aligned}
\lim\limits_{ z \to 1^{-} } (1-z)P_{ij}(z)=\lim\limits_{ z \to 1^{-} } \frac{1-z}{1-F_{jj}(z)}\\
\overset{L'Hospital}{=}\lim\limits_{ z \to 1^{-} } \frac{1}{F_{jj}'(z)}
\end{aligned}
$$

由Abel定理(结合上面的所有等式可得)

$$
\lim\limits_{ n \to \infty } \frac{1}{n}\sum\limits_{k=0}^{n-1} P_{ij}^{(k)}=\lim\limits_{ z \to 1^{-} } \frac{1}{\sum\limits_{n=1}^{\infty} nf_{jj}^{(n)}z^{n-1}}=\frac{1}{\mu_{jj}}
$$

注. $\dfrac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k)}$ 具有明确的概率含义(概率转化为示性函数的期望)，

$$\begin{aligned}
\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k)}& =\frac{1}{n}\sum_{k=0}^{n-1}\mathbb{E}(\mathbf{I}_{[X_{k}=j|X_{0}=i]}) \\
&=\frac1n\mathbb{E}(\#\{n>k\geqslant0:X_{k}=j|X_{0}=i\})
\end{aligned}$$

其中#A表示**集合A中元素的个数**。所以$\dfrac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k)}$表示在$n-1$步转移中，处于状态$j$的次数与记录状态总数$n$ 的比值。

### 正常返的简单性质

和常返性一样，正常返也具有类的性质，即下面命题：

!!! note "Proposition 6.5"
    若$i$正常返,$i\to j$,那么$j$ 也正常返。

`Proof`

由于$i\to j$，那么存在$m$，使得$P_{ij}^{(m)}>0$ ，由**CK方程**，

$$P_{kj}^{(l+m)}=\sum_{s\in E}P_{ks}^{(l)}P_{sj}^{(m)}\geqslant P_{ki}^{(l)}P_{ij}^{(m)}$$

不等式两端对$l$求和平均，

$$\frac{1}{n}\sum\limits_{l=0}^{n-1}P_{kj}^{(l+m)}\geqslant\frac{1}{n}\sum\limits_{l=0}^{n-1}P_{ki}^{(l)}P_{ij}^{(m)}$$

两端同时令$n\to\infty$取极限，利用弱遍历定理：

$$\frac{1}{\mu_{jj}}\geqslant\frac{P_{ij}^{(m)}}{\mu_{ii}}>0$$

故$\mu_{jj}<\infty$，所以$j$正常返。

进一步，如果Markov链的状态是有限的，和常返性一样，有下面结论：

!!! note "Proposition 6.6"
    有限状态Markov链必然存在正常返态

`Proof`

反证法，若命题不成立。设状态空间$E=\{1,2,\ldots,N\}$，则所有状态都是暂留的或者零常返的。固定状态$i$，对任意$j$，由弱遍历定理，

$$\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k)}\to0,\quad n\to\infty $$

那么对有限的N，

$$\begin{aligned}\sum_{j=1}^N\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k)}\to0,\quad n\to\infty\end{aligned}$$

然而，由概率转移矩阵的性质：对任意$k$，$\sum\limits_{j=1}^{N}P_{ij}^{(k)}=1$

$$\begin{aligned}\frac{1}{n}\sum_{j=1}^{N}\sum_{k=0}^{n-1}P_{ij}^{(k)}=1\end{aligned}$$

矛盾(按假设应当趋于0)！故命题成立。

注.结合推论6.5可知，状态有限的不可约Markov链，所有状态都是正常返态。

## 不变分布的存在唯一性

### 基本问题

本节我们利用弱遍历定理回答关于不变分布的问题：

1.如果不变分布存在，什么条件下具有唯一性？

便于研究随机动力系统

2.不变分布在什么条件下存在？

3.如果存在且唯一那么那个Markov链的收敛速度有多快？如何刻画这个速度？(Next Lecture)

### 不变分布的唯一性

首先回答第一个问题，即下面定理(仍然研究不可约常返的Markov链)

!!! note "Theorem 6.7"
    设$\{X_n\}$ 是不可约常返的Markov链， $\pi$是$P$的一个不变分布，即满足不变方程$\pi=\pi P$，则对任意状态$j$，都有$\pi_j>0$，且

    $$\pi_j=\frac{1}{\mu_{jj}}$$

`Proof.`

先给出一个引理-有界收敛定理(实际是控制收敛定理的一个特例，M也就是控制函数，控制收敛定理可以在实变函数中得到证明，但有界收敛定理只需要初等概率论的知识)

---

!!! note "Lemma 6.8(有界收敛定理)"
    设$X_{1},X_{2},\ldots$.为随机变量序列，依概率收敛于$X$。若存在$M>$ 0，使得对任意$n\geq1$，$P(|X_n|\leq M)=1$，那么

    $$\lim\limits_{n\to\infty}\mathbb{E}[X_n]=\mathbb{E}[\lim\limits_{n\to\infty}X_n]=\mathbb{E}[X]$$

    依概率收敛，记为$X_n\stackrel{\mathrm{P}}{\longrightarrow}X$，如果对于$\varepsilon>0$

    $$\mathrm{P}(\omega:|X_n(\omega)-X(\omega)|>\varepsilon)\to0,n\to\infty.$$

`Proof`

首先，由于$X_{n}$ 依概率收敛于$X$ ，且$P(|X_{n}|\leq M)=1$ ，所以对任意$\epsilon>0$

$$P(|X|>M+\epsilon)\leq P(|X_n-X|>\epsilon)\to0$$

即$P(|X|\leq M)=1$ ．其次，对任意$\varepsilon>0$

$$\begin{aligned}
\mathbb{E}[|X_{n}-X|]& =\mathbb{E}[\left|X_{n}-X\right|\mathbf{I}_{\left|X_{n}-X\right|>\varepsilon}]+\mathbb{E}[\left|X_{n}-X\right|\mathbf{I}_{\left|X_{n}-X\right|\leqslant\varepsilon}] \\
&\leq\mathbb{E}[(|X_{n}|+|X|)\mathbf{I}_{|X_{n}-X|>\varepsilon}]+\varepsilon \\
&\leqslant2MP\left(|X_{n}-X|>\varepsilon\right)+\varepsilon.
\end{aligned}$$

最后，令$n\to\infty$ 可得，

$$\lim\sup\limits_{n\to\infty}\mathbb{E}|X_n-X|\leqslant\varepsilon $$

再令$\varepsilon\rightarrow0$ 即证。

---

回到原命题，对任意状态$i$，由于$\sum\limits_{s\in E}\pi_{s}=1$，所以存在$j\in S$，使得$\pi_j>0$。对于任意状态$i$，由于$\{X_n\}$ 不可约，所以$j\to i$，故存在$n$ ，使得$P_{ji}^{(n)}>0$，那么根据不变方程：

$$\pi_i=\sum_{k\in E}\pi_kP_{ki}^{(n)}\ge\pi_jP_{ji}^{(n)}>0$$

命题第一部分得证($\forall i,\pi_{i}>0$)。

不妨考虑$\{X_{n}\}$初始分布为$\pi$，由于$\pi$是不变分布，所以对任意$k$， $P(X_{k}=j)=\pi_{j}$ ，那么

$$\begin{aligned}
\mathbb{E}_{X_{0}\sim\pi}\left[{\frac{1}{n}}\sum_{k=0}^{n-1}P_{ij}^{(k)}\right]& =\mathbb{E}_{X_{0}\sim\pi}\left[\frac{1}{n}\sum_{k=0}^{n-1}\mathbb{E}[\mathbf{I}_{X_{k}=j|X_{0}=i}]\right] \\
&=\frac{1}{n}\sum_{k=0}^{n-1}P(X_{k}=j)=\pi_{j}
\end{aligned}$$

由于$0\leqslant\dfrac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k)}\leqslant 1$，所以由有界收敛定理+弱遍历定理

$$\begin{aligned}
\pi_{j}& =\lim_{n\to\infty}\mathbb{E}_{X_{0}\sim\pi}\left[\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k)}\right] \\
&=\mathbb{E}_{X_{0}\sim\pi}\left[\operatorname*{lim}_{n\to\infty}\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k)}\right]=\mathbb{E}_{X_{0}\sim\pi}\left[\frac{1}{\mu_{jj}}\right]=\frac{1}{\mu_{jj}}
\end{aligned}$$

注．上面的命题表明，对于不可约常返Markov链，不变分布如果存在，则是唯一的，并$\exists\pi_{j}=\frac{1}{\mu_{jj}}>0$ ，那么对任意状态$j$

$$\mu_{jj}=\frac{1}{\pi_{j}}<\infty $$

这说明：如果不变分布存在，就有所有状态都是正常返的。

下面我们证明其逆命题，也就是若$\mu_{jj}<\infty$ ，令$\pi_{i}=\frac{1}{\mu_{jj}}$ ，则$\pi$ 就是不变分布，这回答了：不变分布在什么条件下存在？

### 不变分布的存在性

!!! note "Theorem 6.9"
    不可约正常返的Markov链存在平稳分布。

`Proof`

由弱遍历定理，对不可约正常返Markov链中的任意状态$i,j$

$$\begin{aligned}\lim_{n\to\infty}\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k)}=\frac{1}{\mu_{jj}}\triangleq p_j>0\end{aligned}$$

我们下面证明$p=(p_{0},p_{1},\ldots)$ 为一个不变分布，即满足不变方程$p=pP$ ，且是一个概率分布。

先证不变方程$p=pP$ 成立。由C-K方程

$$\begin{aligned}\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k+1)}=\sum_{l\in E}\left(\frac{1}{n}\sum_{k=0}^{n-1}P_{il}^{(k)}\right)P_{lj}\end{aligned}$$

由于$\frac{1}{n}(P_{ij}^{(n)}-P_{ij}^{(0)})\to0$ $n\to\infty$

$$\begin{aligned}p_j=\lim_{n\to\infty}\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k)}=\lim_{n\to\infty}\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k+1)}\end{aligned}$$

由于$0\leqslant\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k)}\leqslant1$ ，所以由有界收敛定理

$$\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k+1)}=\sum\limits_{l\in E}\left(\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{il}^{(k)}\right)P_{lj}$$

即得不变方程

$$\begin{aligned}p_j=\sum_{l\in E}p_lP_{lj}\end{aligned}$$

再证$p$是一个概率分布，即$\sum_{l\in E}p_{l}=1$ ．由于对任意$k$

$$p=pP\Longrightarrow p=pP^k$$

所以

$$p_j=\sum_{l\in E}p_l\left(\frac{1}{n}\sum_{k=0}^{n-1}P_{lj}^{(k)}\right)$$

由于$0\leq\frac{1}{n}\sum_{k=0}^{n-1}P_{ij}^{(k)}\leq1$ ，所以由有界收敛定理

$$\begin{aligned}
\text{p} &=\lim_{n\to\infty}p_{j}=\lim_{n\to\infty}\sum_{l\in E}p_{l}\left(\frac{1}{n}\sum_{k=0}^{n-1}P_{lj}^{(k)}\right) \\
&=\sum_{l\in E}p_{l}\left(\operatorname*{lim}_{n\to\infty}\frac{1}{n}\sum_{k=0}^{n-1}P_{lj}^{(k)}\right)=p_{j}\sum_{l\in E}p_{l}
\end{aligned}$$

所以$\sum\limits_{l\in E}p_{l}=1$

### 弱遍历定理的另一形式

我们已经知道了弱遍历极限和不变分布的关系，可以得到弱遍历定理的另一个形式

!!! note "Theorem 6.10(弱遍历定理)"
    设$\{X_{n}\}$ 是不可约正常返的Markov链，$\pi$ 是不变分布，那么对任意状态$i,j$，

    $$\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(k)}=\pi_j$$

### 平均遍历定理

更一般地，可以得到下面的(平均)遍历定理(证明比较复杂课上略过)

!!! note "Theorem 6.11(遍历定理）"
    设$\{X_n\}$ 是不可约常返的Markov链， $\pi$是不变分布， $f$是$E$上的函数，满足$\sum\limits_{i\in E}\pi_{i}|f(i)|<\infty$，则

    $$\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{k=0}^{n-1}f(X_k)=\sum\limits_{i\in E}\pi_if(i)$$

`Proof`

参考《应用随机过程》，陈大岳、章复熹，北京大学出版社，2023，P118，P124-P128.

注1.遍历定理说明了长时间尺度下，函数$f$的**时间平均**，等于在**空间上平均**。这意味着系统的长期统计行为可以由其稳态分布完全描述。此外，在计算数学中，经常会处理高维空间上积分计算的问题，即$E$是高维空间，那么由遍历定理，即可通过构造随机动力系统(遍历的Markov过程)，通过计算时间上的一维积分，取极限得到高维积分的结果。

Addition：刘军 -《科学计算中的蒙特卡洛策略》- 科学出版社

注2.**遍历定理**可以视为大**数定律在Markov依赖结构下的推广**。大数定律适用于独立同分布的随机变量，表明样本均值收敛到期望：而遍历定理适用于具有Markov性的序列，表明时间平均收敛到平稳分布下的期望。两者都揭示了“平均行为的稳定性”，但遍历定理处理的是更一般的Markov依赖的情况。

回顾大数定律：

$$
\begin{aligned}
\frac{1}{n}\sum\limits_{i=1}^{n} X_{i}\overset{p}{\to}E\left[ X_{i} \right]\\
\frac{1}{n}\sum\limits_{i=1}^{n} X_{i}\overset{a.s.}{\to}E\left[ X_{i} \right]
\end{aligned}
$$

## 强遍历定理

常返性和弱遍历定理虽然给出了随Markov链转移状态的渐近规律，但是当$n\rightarrow\infty$时，转移概率$P_{ij}^{(n)}$的极限情况我们仍然不清楚。先看一个例子。

!!! example "Example 6.12(两状态的Markov链III)"
    考虑Markov链，状态空间为$\{0,1\}$ ，转移矩阵为

    $$P=\left(\begin{array}{cc}1-\alpha&\alpha\\\beta&1-\beta\end{array}\right)$$

    其中$\alpha,\beta\in(0,1)$

$$P^n=\frac{1}{\alpha+\beta}\left(\begin{array}{cc}\beta&\alpha\\\beta&\alpha\end{array}\right)+\frac{(1-\alpha-\beta)^n}{\alpha+\beta}\left(\begin{matrix}\alpha&-\alpha\\-\beta&\beta\end{matrix}\right)$$

转移概率的极限：

$$\lim\limits_{n\to\infty}P^{(n)}=\frac{1}{\alpha+\beta}\left(\begin{array}{cc}\beta&\alpha\\\beta&\alpha\end{array}\right)=\left(\begin{array}{c}\pi\\\pi\end{array}\right),$$

即$\lim\limits_{ n \to \infty }P_{ij}^{(n)}=\pi_{j}$.但是，如果$\alpha=\beta=1$，即

$$P=\left(\begin{array}{cc}0&1\\1&0\end{array}\right)$$

计算容易发现规律

$$P_{00}^{(n)}=P_{11}^{(n)}=\left\{\begin{array}{ll}1,&n=2k\\[6pt]0,&n=2k-1\end{array}\right.$$

有

$$\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{00}^{(n)}=\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{11}^{(n)}=\frac{1}{2}$$

该Markov链正常返，平均返回时间为2。然而，$\lim\limits_{ n \to \infty }P_{00}^{(n)}$ 和$\lim\limits_{ n \to \infty }P_{11}^{(n)}$都不存在

这个例子说明了弱遍历性无法得到$P_{ij}^{(n)}$ 的极限性质，即

$$\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{k=0}^{n-1}P_{ij}^{(n)}=\pi_j\nRightarrow\lim\limits_{n\to\infty}P_{ij}^{(n)}=\pi_j$$

也就是说，对于正常返的Markov链，$P_{ij}^{(n)}$ 的极限也可能不存在。事实上，状态的周期性对于转移概率的极限是否存在起着关键作用。

这个定理的证明将使用到概率论中的耦合方法(Very Important)

!!! note "Theorem 6.13(强遍历定理)"
    设$\{X_{n}\}$ 是不可约非周期的Markov链，若$\pi$是$P$的不变分布， 那么

    $$\lim\limits_{n\to\infty}\sum\limits_{j\in E}\lvert P_{ij}^{(n)}-\pi_{j}\lvert=0,\quad\forall i\in E.$$

    那么自然有

    $$\lim\limits_{n\to\infty}P_{ij}^{(n)}=\pi_j$$

`Proof`

设$\{X_{n}:n\geqslant0\}$和$\{Y_{n}:n\geqslant0\}$是$E$ 上以$P$ 为转移矩阵的相互独立的Markov链，初分布分别为$\mu$和$\nu$令

Remark：$Y_{n}$的存在性需要保证，但是存在性证明比较复杂所以跳过

下面这个构造方法叫做**耦合方法**(概率论研究的常用方法)：

$$\{Z_n=(X_n,Y_n):n\geqslant0\}$$

则它为$E\times E$ 上以$\mu\times\nu$为初分布的马氏链，转移矩阵记为

Remark：$\mu \times \nu$是乘积测度(Measure Theory)

$$\overline{P}\triangleq P\otimes P,$$

$$A\otimes B=\begin{bmatrix}a_{11}B&\cdots&a_{1n}B\\\vdots&\ddots&\vdots\\a_{m1}B&\cdots&a_{mn}B\end{bmatrix}.$$

其中$\otimes$表示Kronecker积，即

$$\overline{P}_{(i,j)(k,l)}=P_{ik}P_{jl}\quad\forall(i,j)(k,l)\in E\times E$$

自行验证$\overline{P}_{(i,j)(k,l)}^{(n)}=P_{ik}^{(n)}P_{jl}^{(n)}$

**Step1.** 证明$Z_{n}$不可约非周期

由于$P$不可约，所以存在$N_{1},N_{2}$,使得$\forall(i,j)(k,l)\in E\times E$

$$P_{ik}^{(n_1)}>0,\:P_{jl}^{(n_2)}>0,\quad\forall n_1>N_1,\:n_2>N_2$$

当 $n>\max\{N_{1},N_{2}\}$ 时，

$$\overline{P}_{(i,j)(k,l)}^{(n)}=P_{ik}^{(n)}P_{jl}^{(n)}>0$$

即 $\overline{P}$ 不可约。

由于 $P$ 非周期，所以对任意 $i,j\in E$

$$\gcd\{n:P_{ii}^{(n)}>0\}=1,\quad\gcd\{n:P_{jj}^{(n)}>0\}=1$$

那么

$$\gcd\{n:\overline{P}_{(i,j)(i,j)}^{(n)}=P_{ii}^{(n)}P_{jj}^{(n)}>0\}=1$$

即 $\bar{P}$ 非周期。

**Step2.** $\overline{P}$ 的不变分布为

$$\overline{\pi}_{(i,j)}=\pi_i\pi_j$$

不难自行验证。

**Step3.** 证明 $\{X_{n}:n\geqslant0\}$ 与 $\{Y_{n}:n\geqslant0\}$ 迟早相遇。

因为 $P$ 不可约且存在不变分布，那么 $Z_{n}$ 是常返的。令

$$\tau=\inf\{n\geqslant0:X_n=Y_n\}.$$

它是 $\{X_{n}:n\geqslant0$ 与 $\{Y_{n}:n\geqslant0\}$ 的相遇时刻，即 $\{Z_{n}:n\geqslant0\}$ 首达对角线

$$\overline D\triangleq\{(i,i):i\in E\}$$

的时间，他**不会超过**$Z_{n}$ 首达某个具体状态 $(i,i)$ 的时间，即

$$\tau\leqslant\tau_{(i,i)}\triangleq\inf\{n\geq0:Z_n=(i,i)\}$$

由于 $Z_n$ 常返，所以

$$P(\tau_{(i,i)}<\infty)=1.$$

那么$P(\tau<\infty)=1$

**Step4.** 证明在$\{X_{n}:n\geqslant0\}$与$\{Y_{n}:n\geqslant0\}$相遇之后，它们有同样的分布(unbelievable)，即

$$P(X_n=j,\tau\leqslant n)=P(Y_n=j,\tau\leqslant n)$$

假设$\{X_{n}:n\geqslant0\}$ 与$\{Y_{n}:n\geqslant0\}$ 在时刻$m$ 相遇于状态$i$。

直观上，那么从时刻$m$开始重新计时的话，它们都是从$i$出发以$P$ 为转移矩阵的马氏链，从而它们在任何时刻有相同的分布。严格的证明如下：

$$\begin{aligned}
P(X_{n}=j,\tau\leqslant n)& =\sum_{m=0}^{n}\sum_{i\in E}P(X_{n}=j,\tau=m,Z_{m}=(i,i))  \\
&=\sum_{m=0}^n\sum_{i\in E}P(\tau=m,Z_m=(i,i))P(X_n=j|\tau=m,Z_m=(i,i)).
\end{aligned}$$

注意到

$$\{\tau=m,Z_m=(i,i)\}=\{Z_0,\cdots,Z_{m-1}\notin\overline D,Z_m=(i,i)\}.$$

把$m$视为现在的时间，由$Z_{n}$的Markov性

$$\begin{aligned}
P(X_{n}=j|\tau=m,Z_{m}=(i,i))& =P(X_{n}=j|Z_{m}=(i,i))  \\
&=P(X_{n}=j|X_{m}=i,Y_{m}=i) \\
&=P(X_{n}=j|X_{m}=i)=P_{ij}^{(n-m)}.\quad(X_{n},Y_{n}\text{独立})
\end{aligned}$$

所以

$$P(X_n=j,\tau\leqslant n)=\sum_{m=0}^n\sum_{i\in E}P(\tau=m,Z_m=(i,i))P_{ij}^{(n-m)}.$$

同理，

$$\begin{aligned}
P(Y_{n}=j,\tau\leqslant n)&=\sum_{m=0}^{n}\sum_{i\in E}P(\tau=m,Z_{m}=(i,i))P(Y_{n}=j|Z_{m}=(i,i))\\
&=\sum_{m=0}^{n}\sum_{i\in E}P(\tau=m,Z_{m}=(i,i))P_{ij}^{(n-m)}.\end{aligned}$$

因此$P(X_{n}=j,\tau\leqslant n)=P(Y_{n}=j,\tau\leqslant n).$

**Step5.** 注意到

$$\begin{aligned}
P(X_n=j)&=P(X_n=j,\tau\leq n)+P(X_n=j,\tau>n)\\
P(Y_n=j)&=P(Y_n=j,\tau\leq n)+P(Y_n=j,\tau>n)
\end{aligned}$$

于是

$$\begin{aligned}
\sum_{j\in E}\lvert P(X_{n}=j)-P(Y_{n}=j)\rvert & =\sum_{j\in E}\lvert P(X_{n}=j,\tau>n)-P(Y_{n}=j,\tau>n)\rvert   \\
&\leqslant\sum_{j\in E}(P(X_{n}=j,\tau>n)+P(Y_{n}=j,\tau>n)) \\
&=2P(\tau>n)\overset{n\to\infty}{\longrightarrow}0.\quad(\text{由于}P(\tau<\infty)=1)
\end{aligned}$$

特别地，取 $X_{n}$ 和 $Y_{n}$ 的初分布分别为 $\mu=\delta_{i}(Dirac\ mass)$ 和 $\nu=\pi$，那么

$$P(X_n=j)=P_{ij}^{(n)},\quad P(Y_n=j)=\pi_j.$$

定理即证。

注 1.不可约 Markov 链中，非周期正常返的状态称为遍历态 (Ergodic state)

注 2.这里构造 $Z_{n}$ 的方法称为耦合方法 (Coupling Method)，是概率论中非常重要的证明方法，由于 $X_{n}$ 和 $Y_n$ 是独立的，这种特殊的耦合称为独立耦合。一般地，两个概率分布 $\mu$ 和 $\nu$ 的耦合 (Coupling) 定义为同一个概率空间上的一对随机变量 $(X,Y)$ ，满足

$$P\{X=x\}=\mu(x),\quad P\{Y=y\}=\nu(y).$$

注 3.还可以通过更新定理证明，参考《随机过程及其应用》，陆大䋮，张颢，清华大学出版社 定理 7.3。

定理 6.13 讨论了正常返、非周期情形 $P_{ij}^{(n)}$ 的极限，对于其他情况可以总结为下面定理。

!!! note "Theorem 6.14"
    $\{X_{n}\}$ 是不可约常返的 Markou 链，那么

    (1) 若 j 是零常返状态，则

    $$\lim_{n\to\infty}P_{ij}^{(n)}=0;$$

    (2) 若 $j$ 是正常返周期状态，周期为 $d_{j}$ ，则

    $$\begin{aligned}\lim_{n\to\infty}P_{ij}^{(nd_j)}=\frac{d_j}{\mu_{jj}}\end{aligned}$$

    其中 $\mu_{jj}\triangleq\sum\limits_{n=1}^{\infty}nf_{ij}^{(n)}$ 为平均返回时间。

书上的例子留作阅读学习作业。

不可约 Markov 链的分类总结如下：

+ 不可约
	+ 常返
		+ 正常返 $\iff$ 有不变分布
			+ $P_{ij}^{(n)}\to \pi_{j}$（非周期）
			+ $\frac{1}{n}\sum\limits_{k=0}^{n}P_{ij}^{(k)}\to \pi_{j}$（周期）
		+ 零常返：$P_{ij}^{(n)}\to 0$
	+ 非常返：$P_{ij}^{(n)}\to 0$


# Continuous linear operators

注：笔者原本打算的是直接扔下这份讲义去阅读 Brezis 的 FA and PDEs，但是阅读了第一章发现他的写法似乎有些 clear，但是问题在于我读起来又不是很 clear 于是回归这份讲义想先了解一个 overview 然后再回去读 Brezis，然后惊奇的发现这一章的内容正是我阅读 Brezis 时欠缺的部分，于是速通之

## Basic definitions and properties

给出赋范空间的单位闭球的概念：

!!! note "closed unit ball of $E$"
    For a normed space $E$, let

    $$U_{E}:= \left\{ x\in E:\lVert x \rVert \leqslant 1 \right\} $$

    be the closed unit ball of $E$

那么很自然的我们会使用缩放的闭球定义集合 $A$ 在 $E$ 中（赋范）有界，也就是说 $A\subseteq kU_{E}$，换句话说$\lVert a \rVert\leqslant k<+\infty,\forall a\in A$

我们考虑线性算子$T:E\to F$：$T(\alpha x+\beta y)=\alpha Tx+\beta Ty$，其中$E,F$均为赋范空间

显然我们可以得到以下等价结论：

!!! quote "Theorem(有界性和连续性)"
    假设$T$是一个线性算子，$T:E\to F$

    1. $T$ is Lipschitz continuous
    2. $T$ is countinuous
    3. $T$ is coutinuous at $0$
    4. $T(U_{E})$ is bounded in $F$
    5. $T$ sends bounded sets to bounded sets
    6. $\exists k>0$, s.t. $\lVert Tx \rVert\leqslant k \lVert x \rVert,\forall x\in E$

`Proof.`

前三条 $1\to 2 \to 3$ 是显然的

$3\to 4$，思路是利用定义证明 $T(U_{E})\subset kB_{F}$ 先定义 $B_{F}$ 是关于 $F$ 的在 0 点处的单位球邻域 $B_{F}=\left\{ y\in F|\lVert y \rVert\leqslant 1 \right\}$，利用条件，因为 $T(0)=0$，结合 0 点处连续性得到有 $E中$ 一个邻域 $V$ 使得 $TV\subseteq B_{F}$，并且利用 0 是 $V$ 的内点，可以得到 $\exists\lambda>0$，$\lambda U_{E}\subset V$：

$$
\lambda TU_{E}=T(\lambda U_{E})\subset TV\subset B_{F}
$$

那么有 $T(U_{E})\subset \frac{1}{\lambda}U_{F}$，因此 $TU_{E}$ 在 $F$ 中有界

$4\to 5$，$A\subseteq kU_{E}$，那么有 $TA\subset T(kU_{E})=kT(U_{E})$ 对于一个有界集的子集，显然有界

$5\to 6$，取 $E$ 中单位球 $U_{E}$ 作为有界集，那么根据条件可以得到 $T(U_{E})$ 是有界的，即存在一个常数 $k$，使得 $T(U_{E})\subset kU_{F}$，或者说 $\lVert Tx \rVert \leqslant k$，考虑 $\forall x\in E\setminus \left\{ 0 \right\}$，有 $\frac{x}{\lVert x \rVert }\in U_{E}$，显然：

$$
\left\lVert  T\left( \frac{x}{\lVert x \rVert } \right)  \right\rVert  \leqslant k\implies \lVert Tx \rVert \leqslant k\lVert x \rVert 
$$

对于 $x=0$ 是显然成立的

$6 \to 1$ 实际也是显然的

我们可以得到 $\lVert Tx-Ty \rVert =\lVert T(x-y) \rVert \leqslant k\lVert x-y \rVert$ 得到 Lipschitz 连续

综上得证结论成立！

然后是一个自然的结论：

!!! note "Lemma"
    假设 $T$ 是一个连续线性算子，若是有 $\lVert T \rVert:=\sup \left\{ \lVert Tx \rVert:x\in E,\lVert x \rVert\leqslant 1 \right\}$，我们有：

    $$
    \begin{aligned}
    \lVert T \rVert &=\sup \left\{ \frac{\lVert Tx \rVert }{\lVert x \rVert }:0\neq x\in E \right\}\\
    &=\sup \left\{ \lVert Tx \rVert :x\in E,\lVert x \rVert =1 \right\}\\
    &=\sup \left\{ \lVert Tx \rVert :x\in E,\lVert x \rVert < 1 \right\} <+\infty\\
    \lVert Tx \rVert &\leqslant\lVert T \rVert \lVert x \rVert ,\forall x\in E\\
    \lVert T \rVert &=\inf \left\{ k>0: \lVert Tx \rVert \leqslant k\lVert x \rVert ,\forall x\in E \right\}
    \end{aligned}
    $$

`Proof.`

显然我们可以得到$\lVert T \rVert<+\infty$，前三条的证明手法就是证明大于等于和小于等于两个方向，从而取等，都比较容易，留作习题

最后一行会稍微麻烦一点，我们先定义等式右边的集合为$K$，那么我们的目标就变成了证明$\lVert T \rVert=\inf K$只需要利用倒二的等式，马上得到$\lVert T \rVert\in K$那么$\inf K\leqslant \lVert T \rVert$

利用定义可以知道$\lVert Tx \rVert \leqslant k\lVert x \rVert,\forall x\in E$，结合第一行的等式：

$$
\lVert T \rVert =\sup \left\{ \frac{\lVert Tx \rVert }{\lVert x \rVert },x\neq 0 \right\} \implies \lVert T \rVert \leqslant k,\forall k\in K\implies \lVert T \rVert \leqslant \inf K
$$

结合两个不等式即得结论

关于两个赋范空间之间的线性算子$T$，如果有$T$将norm balls(或者说有界集)映射为norm balls(或者有界集)，我们就称其为有界算子(或者局部有界算子)，由前面的定理可以得到，有界集$A$的像集$TA$的直径要小于$A$的$\lVert T \rVert$倍

下面给出有界线性算子构成的集合的记号，对于$E,F$两个赋范空间，使用$B(E,F)$来记录所有的从$E$到$F$的有界线性算子，如果是同一个空间，有$B(E)=B(E,E)$

!!! note "Lemma(有界线性算子构成赋范空间)"
    $B(E,F)$通过给予算子范数$\lVert T \rVert=\sup\limits_{\lVert x \rVert\leqslant 1}\lVert Tx \rVert$构成一个赋范空间

证明只需要按照赋范空间的定义验证三条性质即可，然后探索这个算子范数我们可以得到一个等价的定义：

!!! note "Lemma(算子范数等价定义)"
    $H,K$ are Hilbert spaces and $T\in B(H,K)$. Then

    $$\lVert T \rVert =\sup \left\{ \lvert \langle Th,k\rangle \rvert : h\in U_{H},k\in U_{K}  \right\} $$

`Proof.`

只需要使用Cauchy-Schwarz不等式，即可得到：

$$
\lvert \langle Th,k\rangle \rvert \leqslant \lVert Th \rVert \lVert k \rVert \leqslant \lVert T \rVert \lVert h \rVert \lVert k \rVert \leqslant \lVert T \rVert  
$$

因为$h\in U_{H},k\in U_{K}$，反方向等式的求取我们利用归一化的方法，若是$h\in U_{H},Th\neq 0$，我们有$\frac{Th}{\lVert Th \rVert}\in U_{K}$

$$
\lVert Th \rVert= \frac{\langle Th,Th\rangle}{\lVert Th \rVert }= \left\lvert  \langle Th, \frac{Th}{\lVert Th \rVert }\rangle  \right\rvert 
$$

所以我们有$\lVert Th \rVert\in \left\{ \lvert \langle Th,k \rangle \rvert \right\}$，即：

$$
\lVert T \rVert =\sup\limits_{h\in U_{H}}\lVert Th \rVert \leqslant \sup \left\{ \lvert \langle Th,k\rangle \rvert : h\in U_{H},k\in U_{K}  \right\}  \leqslant \lVert T \rVert 
$$

## Exercise 4.1

!!! question "(1)"
    Let $(\alpha_{i,j})_{i,j\in\mathbb{N}}$ be an infinite matrix with

    $$
    K := (\sum_{i,j=1}^{\infty} |\alpha_{i,j}|^2)^{1/2} < \infty.
    $$

    Define a linear operator $T$ on $\ell^2$ by $T((\xi_n)_{n\in\mathbb{N}}) = (\eta_n)_{n\in\mathbb{N}}$, where

    $$
    \eta_n = \sum_{j=1}^{\infty} \alpha_{n,j}\xi_j, \quad n=1, 2, \dots
    $$

    Show that $T$ is a bounded linear operator on $\ell^2$.

`Proof.`

!!! question "(2)"
    Let $(\alpha_{i,j})_{i,j\in\mathbb{N}}$ be an infinite matrix such that

    $$
    \alpha_1 = \sup_j \sum_{i=1}^{\infty} |\alpha_{i,j}| < \infty
    $$

    and

    $$
    \alpha_\infty = \sup_i \sum_{j=1}^{\infty} |\alpha_{i,j}| < \infty.
    $$

    Show that there exists an operator $T$ on $\ell^2$ such that

    $$
    \langle Te_j, e_i \rangle = \alpha_{i,j} \quad \text{and} \quad \|T\|^2 \le \alpha_1 \alpha_\infty.
    $$

### **Proof & Explanation**

**Proof.**

我们需要证明该矩阵定义的算子 $T$ 在 $\ell^2$ 上是有界的，并估计其范数。这就需要用到 Schur 测试（Schur's Test）的思想。
设 $x = (x_j) \in \ell^2$，考虑 $(Tx)_i = \sum_{j=1}^{\infty} \alpha_{i,j} x_j$。
利用柯西-施瓦茨不等式，我们将各项拆分为 $\sqrt{|\alpha_{i,j}|} \cdot \sqrt{|\alpha_{i,j}|} |x_j|$：

$$
|(Tx)_i|^2 = \left| \sum_{j=1}^{\infty} \alpha_{i,j} x_j \right|^2 \le \left( \sum_{j=1}^{\infty} |\alpha_{i,j}| \right) \left( \sum_{j=1}^{\infty} |\alpha_{i,j}| |x_j|^2 \right)
$$

由题设，$\sum_{j=1}^{\infty} |\alpha_{i,j}| \le \alpha_\infty$，故：

$$
|(Tx)_i|^2 \le \alpha_\infty \sum_{j=1}^{\infty} |\alpha_{i,j}| |x_j|^2
$$

现在对 $i$ 求和以计算范数 $\|Tx\|^2$：

$$
\|Tx\|^2 = \sum_{i=1}^{\infty} |(Tx)_i|^2 \le \alpha_\infty \sum_{i=1}^{\infty} \sum_{j=1}^{\infty} |\alpha_{i,j}| |x_j|^2
$$

利用非负项级数求和次序的可交换性（Tonelli定理）：

$$
\|Tx\|^2 \le \alpha_\infty \sum_{j=1}^{\infty} |x_j|^2 \left( \sum_{i=1}^{\infty} |\alpha_{i,j}| \right)
$$

由题设，列和 $\sum_{i=1}^{\infty} |\alpha_{i,j}| \le \alpha_1$，代入得：

$$
\|Tx\|^2 \le \alpha_\infty \sum_{j=1}^{\infty} |x_j|^2 \alpha_1 = \alpha_1 \alpha_\infty \|x\|^2
$$

即 $\|Tx\| \le \sqrt{\alpha_1 \alpha_\infty} \|x\|$。
因为算子有界，所以 $T$ 是 $\ell^2$ 上良好定义的算子。由于 $Te_j$ 对应矩阵的第 $j$ 列，$\langle Te_j, e_i \rangle$ 即为矩阵第 $i$ 行第 $j$ 列的元素 $\alpha_{i,j}$。且我们已证明 $\|T\|^2 \le \alpha_1 \alpha_\infty$。

**解析：**
这是著名的 **Schur 测试**。
*   $\alpha_1$ 是矩阵**列模长和**的上界。
*   $\alpha_\infty$ 是矩阵**行模长和**的上界。
这个定理告诉我们，只要行和与列和都受控，这个无穷矩阵就定义了一个 $\ell^2$ 上的有界算子，其范数由这两个上界的几何平均值控制。

---

!!! question "(3)"
    Let $(e_n)_{n\in\mathbb{N}}$ be the usual basis of $\ell^2$ and $(\alpha_n)_{n\in\mathbb{N}}$ be a sequence of scalars. Show that there is a bounded linear operator $T$ on $\ell^2$ such that $Te_n = \alpha_n e_n$ for all $n \in \mathbb{N}$ if and only if $(\alpha_n)_{n\in\mathbb{N}}$ is bounded. This operator is called a *diagonal operator*.

### **Proof & Explanation**

**Proof.**

**充分性 ($\Leftarrow$)**：
假设序列 $(\alpha_n)$ 有界，即存在 $M > 0$ 使得对所有 $n$ 都有 $|\alpha_n| \le M$。
对于任意 $x = \sum x_n e_n \in \ell^2$，根据 $T$ 的线性性和定义，$Tx = \sum_{n=1}^{\infty} \alpha_n x_n e_n$。
计算其范数：

$$
\|Tx\|^2 = \sum_{n=1}^{\infty} |\alpha_n x_n|^2 = \sum_{n=1}^{\infty} |\alpha_n|^2 |x_n|^2 \le M^2 \sum_{n=1}^{\infty} |x_n|^2 = M^2 \|x\|^2
$$

因此 $\|Tx\| \le M \|x\|$，即 $T$ 是有界算子。

**必要性 ($\Rightarrow$)**：
假设 $T$ 是有界算子，即存在常数 $C$ 使得 $\|T\| \le C$。
对于任意 $n \in \mathbb{N}$，考察基向量 $e_n$（$\|e_n\|=1$）：

$$
Te_n = \alpha_n e_n
$$

对两边取范数：

$$
\|Te_n\| = \|\alpha_n e_n\| = |\alpha_n| \|e_n\| = |\alpha_n|
$$

根据算子有界性定义，$\|Te_n\| \le \|T\| \|e_n\| = \|T\|$。
因此，对于所有 $n$，都有 $|\alpha_n| \le \|T\|$。这表明序列 $(\alpha_n)$ 必须是有界的。

**解析：**
这是**对角算子**最基本的性质。
*   对角算子就像是把空间的每个坐标轴拉伸或压缩了 $\alpha_n$ 倍。
*   如果想要整个变换是“有限的”（有界），那么所有坐标轴的拉伸倍数 $\alpha_n$ 不能无限大，必须有一个统一的天花板（上界）。

---

### **(4) Problem Statement**

!!! question "(4)"
    Let $\varphi(x,t) : [0,1] \times [0,1] \to [0,\infty)$ be a continuous function such that

    $$
    \frac{\partial \varphi}{\partial x} : [0,1] \times [0,1] \to [0,\infty)
    $$

    exists and is continuous. Prove that the operator $T : C[0,1] \to C[0,1]$ defined by

    $$
    Tf(x) = \int_0^1 \varphi(x,t)f(t)dt
    $$

    is linear and continuous, with $\|T\| = \int_0^1 \varphi(1,t)dt$.

### **Proof & Explanation**

**Proof.**

**1. 线性性 (Linearity)**
积分运算本身是线性的，因此对于 $f, g \in C[0,1]$ 和标量 $\alpha, \beta$，显然有 $T(\alpha f + \beta g) = \alpha Tf + \beta Tg$。

**2. 连续性 (Continuity) 与范数上界**
算子 $T$ 的范数定义为 $\|T\| = \sup_{\|f\|_\infty \le 1} \|Tf\|_\infty$。
对于任意 $x \in [0,1]$：

$$
|Tf(x)| = \left| \int_0^1 \varphi(x,t)f(t) dt \right| \le \int_0^1 |\varphi(x,t)| |f(t)| dt
$$

题目已知 $\varphi(x,t) \ge 0$，故 $|\varphi(x,t)| = \varphi(x,t)$。且 $|f(t)| \le \|f\|_\infty$。

$$
|Tf(x)| \le \|f\|_\infty \int_0^1 \varphi(x,t) dt
$$

令 $g(x) = \int_0^1 \varphi(x,t) dt$。
由于已知 $\frac{\partial \varphi}{\partial x} \ge 0$，我们可以推导 $g(x)$ 的单调性：

$$
g'(x) = \int_0^1 \frac{\partial \varphi}{\partial x}(x,t) dt \ge 0
$$

因此，$g(x)$ 在 $[0,1]$ 上是单调递增（或非减）的。
于是 $\sup_{x \in [0,1]} g(x) = g(1) = \int_0^1 \varphi(1,t) dt$。

回到范数估计：

$$
\|Tf\|_\infty = \sup_{x \in [0,1]} |Tf(x)| \le \|f\|_\infty \cdot g(1)
$$

这证明了 $T$ 是有界的（连续的），且 $\|T\| \le \int_0^1 \varphi(1,t) dt$。

**3. 范数下界 (Lower Bound)**
为了证明等号成立，我们取常数函数 $f_0(t) \equiv 1$。显然 $f_0 \in C[0,1]$ 且 $\|f_0\|_\infty = 1$。
计算 $Tf_0$：

$$
(Tf_0)(x) = \int_0^1 \varphi(x,t) \cdot 1 dt = \int_0^1 \varphi(x,t) dt = g(x)
$$

计算其范数：

$$
\|Tf_0\|_\infty = \sup_{x \in [0,1]} |g(x)| = g(1) \quad (\text{因为 } g(x) \ge 0 \text{ 且单调递增})
$$

根据算子范数定义：

$$
\|T\| \ge \frac{\|Tf_0\|}{\|f_0\|} = g(1) = \int_0^1 \varphi(1,t) dt
$$

!!! question "(5)HW6-1"
    Let $1\leqslant p <\infty$ and $T:\ell_{\infty}\to L^{p}[0,1]$ be defined by

    $$
    T(x_{1},x_{2},\dots)= \sum\limits_{n=1}^{\infty} x_{n}\chi_{\left[  \frac{1}{2^{n}}, \frac{1}{2^{n-1}} \right]}
    $$

    Prove that $T$ is a linear and continuous operator, and calculate $\lVert T \rVert$

`Proof.`

!!! quote "$\ell_{\infty}$的含义"
    这里的 $\ell_{\infty}$ 是序列空间，它包含所有**有界**的实数（或复数）序列。也就是说，如果 $x = (x_1, x_2, \dots) \in \ell_{\infty}$，那么存在一个常数 $M$，使得对于所有的 $n$，都有 $|x_n| \le M$。

先假定 $x=(x_{n})_{n=1}^{\infty},y=(y_{n})_{n=1}^{\infty}\in \ell_{\infty},\alpha,\beta\in \mathbb{K}$，并且有 $t\in[0,1]$，线性性证明如下：

$$
\begin{aligned}
T(\alpha x+\beta y)(t)&=\sum\limits_{n=1}^{\infty}(\alpha x_{n}+\beta y_{n})\chi_{\left[  \frac{1}{2^{n}}, \frac{1}{2^{n-1}} \right]}(t)\\
&=\alpha\sum\limits_{n=1}^{\infty} x_{n}\chi_{\left[  \frac{1}{2^{n}}, \frac{1}{2^{n-1}} \right]}(t)+\beta\sum\limits_{n=1}^{\infty} y_{n}\chi_{\left[  \frac{1}{2^{n}}, \frac{1}{2^{n-1}} \right]}(t)\\
&=\alpha Tx(t)+\beta Ty(t)
\end{aligned}
$$

由于赋范空间中连续性和有界性的等价性，我们考虑有界性证明如下：

假设 $x\in \ell_{\infty}$ 那么因为特征函数支撑集互不相交有：

$$
\left\lvert \sum\limits_{n=1}^{\infty} x_{n}\chi_{\left[  \frac{1}{2^{n}}, \frac{1}{2^{n-1}} \right]} \right\rvert ^{p}=\sum\limits_{n=1}^{\infty}\lvert x_{n} \rvert ^{p}\chi_{\left[  \frac{1}{2^{n}}, \frac{1}{2^{n-1}} \right]}
$$

代入可知：

$$
\begin{aligned}
\|Tx\|_p &= \left( \int_0^1 \sum\limits_{n=1}^{\infty} |x_n|^p \chi_{\left[  \frac{1}{2^{n}}, \frac{1}{2^{n-1}} \right]}  dt \right)^{\frac{1}{p}} = \left( \sum\limits_{n=1}^{\infty} |x_n|^p \frac{1}{2^n} \right)^{\frac{1}{p}}\\
&\leqslant \left( \sum\limits_{n=1}^{\infty} \|x\|_\infty^p \frac{1}{2^n} \right)^{\frac{1}{p}} \\
&= \|x\|_\infty \left(\sum\limits_{n=1}^{\infty} \frac{1}{2^n} \right)^{\frac{1}{p}} \\
&= \|x\|_\infty\\
&< +\infty
\end{aligned}
$$

这证明了 $\|Tx\|_p \le \|x\|_\infty$，所以算子是有界的，且 $\|T\| \le 1$

取 $z_n = (1, 1, \dots, 1, 0, 0, \dots)$，前 $n$ 项是 1，后面全是 0，显然，$\|z_n\|_\infty = 1$ 并且 $Tz_n = \chi_{[\frac{1}{2^n}, 1]}$。

$$ \|Tz_n\|_p = \left( 1 - \frac{1}{2^n} \right)^{\frac{1}{p}} $$

根据上面的 $\lVert T \rVert \leqslant 1$ 有：

$$ \left( 1 - \frac{1}{2^n} \right)^{\frac{1}{p}} \leqslant \|T\| \cdot 1 $$

对上述不等式，令 $n \to \infty$，马上有 $\lVert T \rVert\geqslant 1$，结合两个不等式有 $\lVert T \rVert=1$

!!! question "(6)HW6-2"
    Consider the linear operators $A_n$ and $B_n$ on $\ell^2$ defined by

    $$
    A_n(x) = \left(\frac{x_1}{n}, \frac{x_2}{2n}, \dots\right), \quad B_n(x) = (0, \dots, 0, x_{n+1}, x_{n+2}, \dots)
    $$

    for all $x = (x_1, x_2, \dots) \in \ell^2$.

    Prove that $\|A_n\| \to 0$ and $B_n(x) \to 0$ for all $x \in \ell^2$, but that $(B_n)_{n \in \mathbb{N}}$ does not converge to 0 in the operator norm.

`Proof.`

先考虑 $A_{n}$，那么 $\forall x=(x_{n})_{n=1}^{\infty}\in \ell^{2}$，根据范数定义有：

$$
\begin{aligned}
\lVert A_{n}(x) \rVert ^{2}=\sum\limits_{k=1}^{\infty} \left\lvert  \frac{x_{k}}{kn}  \right\rvert ^{2}&= \frac{1}{n^{2}}\sum\limits_{k=1}^{\infty}  \frac{\lvert x_{k} \rvert ^{2}}{k^{2}}\leqslant \frac{1}{n^{2}}\lVert x \rVert ^{2}\\
\lVert A_{n} \rVert& \leqslant \frac{1}{n}
\end{aligned}
$$

令 $n\to \infty$ 显然为 0

再考虑 $B_{n}$，对于任意固定的 $x \in \ell^2$，根据范数定义有：

$$
\|B_n(x)\| = \left( \sum_{k=n+1}^{\infty} |x_k|^2 \right)^{\frac{1}{2}}\leqslant \lVert x \rVert 
$$

$n\to \infty$ 时，有 $B_n(x) \to 0$，并且 $\lVert B_{n} \rVert \leqslant 1$

对于固定的 $n$ 我们可以找到一个 $x=(0,\dots,0,1,0,\dots)$，前面 $n$ 个 0，$B_{n}(e_{n+1})=e_{n+1}$，所以有：

$$
1=\lVert e_{n+1} \rVert =\lVert B_{n}(e_{n+1}) \rVert \leqslant \lVert B_{n} \rVert \lVert e_{n+1} \rVert =\lVert B_{n} \rVert 
$$

因此有 $\lVert B_{n} \rVert=1$ 不收敛于 0

## Continuous linear functionals

向量空间 $X$ 上的线性泛函也就是线性映射：$f:X\to \mathbb{K}(\mathbb{R} /\mathbb{C})$

!!! tip "不连续线性泛函"
    在任意的无穷维赋范空间 $(E,\lVert \cdot \rVert)$ 都有不连续的线性泛函

下面给出（拓扑）对偶空间 dual space（或者共轭空间 conjugate space）的定义，一个拓扑向量空间 $X$ 上所有的连续线性泛函构成的向量空间记为 $X^{*}$

然后我们在赋范空间上考虑对偶空间：

!!! note "Definition(Banach dual space)"
    $E$ is a normed space, we call $E^{*}=B(X,\mathbb{K})$ the Banach dual space of $E$ when it's equipped with the dual norm

    $$\lVert f \rVert =\sup\limits_{\lVert x \rVert \leqslant 1}\lvert f(x) \rvert ,\forall f\in X^{*}$$

!!! tip "Banach-Alaoglu's Theorem"
    考虑赋范空间 $E$，那么对偶单位球 $U_{E^{*}}$ 在弱拓扑下紧

## Examples of dual spaces

## Adjoint of Hilbert space operators

## Exercise 4.3

!!! question "(1)HW7-1"
    Suppose that $\Omega$ is a $\sigma-$finite measure space and $y\in L^{\infty}(\Omega)$. Let $T$ be the multiplication operator $Tx(t)=y(t)x(t)$ for all $x\in L^{2}(\Omega)$ and $t\in \Omega$. Compute $T^{*}$

`Sol.`

我们根据定义知道：$\langle x,T^{*}z\rangle=\langle Tx,z\rangle,\forall x,z\in L^{2}(\Omega)$

根据内积定义：

$$
\begin{aligned}
\langle Tx,z\rangle&=\int_{\Omega}Tx (t)\overline{z(t)}dt\\
&=\int_{\Omega}y(t)x(t) \overline{z(t)}dt\\
&=\int_{\Omega}x(t) \overline{\overline{y(t)}z(t)}dt\\
\langle x,T^{*}z\rangle &=\int_{\Omega}x(t) \overline{T^{*}z(t)}dt\\
\int_{\Omega}x(t) \overline{\overline{y(t)}z(t)}dt&=\int_{\Omega}x(t) \overline{T^{*}z(t)}dt
\end{aligned}
$$

即有 $T^{*}z(t)= \overline{y(t)}z(t)$，因此 $T^{*}$ 是乘以复共轭函数 $\overline{y}$ 的乘法算子

!!! question "(3)HW7-2"
    Let $\varphi:[0,1]\to \mathbb{R}$ be a continuous function and $T:L^{2}[a,b]\to L^{2}[0,1]$ defined by

    $$
    Tf(x)=\varphi(x)\int_{0}^{1} \varphi(t)f(t) \, dt ,\forall x\in[a,b]
    $$

    Prove that $T$ is self-adjoint and positive.

`Proof.`

先证明自伴算子：

$$
\begin{aligned}
\langle Tf, g \rangle &= \int_0^1 (Tf)(x) \overline{g(x)} \, dx \\
&= \int_0^1 \left( \varphi(x) \int_0^1 \varphi(t)f(t) \, dt \right) \overline{g(x)} \, dx \\
&= \left( \int_0^1 \varphi(t)f(t) \, dt \right) \left( \int_0^1 \varphi(x)\overline{g(x)} \, dx \right)
\end{aligned}
$$

由于 $\varphi$ 是实函数，即 $\varphi(t) = \overline{\varphi(t)}$

$$
\begin{aligned}
\langle f, Tg \rangle &= \int_0^1 f(x) \overline{(Tg)(x)} \, dx \\
&= \int_0^1 f(x) \overline{\left( \varphi(x) \int_0^1 \varphi(t)g(t) \, dt \right)} \, dx \\
&= \int_0^1 f(x)\varphi(x) \left( \overline{\int_0^1 \varphi(t)g(t) \, dt} \right) \, dx \\
&= \left( \int_0^1 f(x)\varphi(x) \, dx \right) \left( \int_0^1 \varphi(t)\overline{g(t)} \, dt \right)
\end{aligned}
$$

因此 $\langle Tf, g \rangle = \langle f, Tg \rangle$，即 $T$ 是自伴算子

要证明 $T$ 是正算子，需证明对于任意 $f \in L^2[0, 1]$，都有：

$$
\langle Tf, f \rangle \geq 0
$$

根据定义展开即可：

$$
\begin{aligned}
\langle Tf, f \rangle &= \int_0^1 (Tf)(x) \overline{f(x)} \, dx \\
&= \int_0^1 \left[ \varphi(x) \int_0^1 \varphi(t)f(t) \, dt \right] \overline{f(x)} \, dx \\
&= \left( \int_0^1 \varphi(t)f(t) \, dt \right) \left( \int_0^1 \varphi(x)\overline{f(x)} \, dx \right)
\end{aligned}
$$

设复数 $A = \int_0^1 \varphi(t)f(t) \, dt$，由于 $\varphi$ 是实函数，第二个积分项实际上是 $A$ 的复共轭：

$$
\overline{A} = \overline{\int_0^1 \varphi(x)f(x) \, dx} = \int_0^1 \varphi(x)\overline{f(x)} \, dx
$$

因此：

$$
\langle Tf, f \rangle = A \cdot \overline{A} = |A|^2 \geq 0
$$

所以 $T$ 是正算子

## Projections on Hilbert spaces



































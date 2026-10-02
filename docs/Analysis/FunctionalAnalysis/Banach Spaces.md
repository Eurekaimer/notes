# Banach Spaces


!!! tldr "Outline"
    + Normed spaces
    + Banach spaces
    + Seperable Banach spaces
    + Completeness and Compactness in Banach spaces

泛函分析的基础就是下面所提到的赋范空间，在一个向量空间上赋以一个范数，因此称为赋范空间 (Normed space)，这是泛函分析中最为基本的研究对象，我们将完备性引入其中得到 Banach 空间


!!! tip "补充"
    也可以参考张恭庆的《泛函分析》一书，其中详细讲述了这一类空间是如何加强条件而产生的，由准范数的定义出发定义 $F^{*}$ 空间，进而完备化定义 $Frechet$ 空间，再添加齐次性使得准范数加强为范数，诱导出下面的赋范线性空间（$B^{*}$ 空间），完备化后就是本章要重点讲述的 $Banach$ 空间


    !!! quote "注：拓扑向量空间"
        而**拓扑向量空间 (TVS)(Topological Vector Space, TVS)**则是泛函分析的基本研究对象，是指带有拓扑的向量空间，这样的拓扑对无限维向量空间有不同选择，而有限维实或复向量空间上符合 Hausdorff 条件的拓扑向量空间结构唯一，需要注意 TVS 是对赋范空间的推广，它允许使用比范数诱导的拓扑更弱，更一般的拓扑（有些 TVS 的拓扑不能被任何度量诱导），因此有更加一般的性质！

        比较重要的拓扑向量空间的例子就是 Banach 空间和 Hilbert 空间，它们是满足额外条件的拓扑向量空间，而大致的包含关系是这样的：

        内积空间 $\subset$ 赋范空间 $\subset$ 可度量化的 TVS$\subset$ 拓扑向量空间

下面先介绍赋范（线性）空间

## Normed spaces

所谓的“赋范”就是指给空间赋以一个范数，那么就应当先给出范数的定义：

!!! note "Definition(norm)"
    Let $E$ be a vector space over the field $\mathbb{K}=\mathbb{R}\ or\ \mathbb{C}$, and let a function $\lVert \cdot \rVert: E\to \mathbb{R}_{+}:=[0,\infty)$ is a *norm* if the following 3 conditions are satisfied:
    1. $\lVert x \rVert \geqslant 0$ for all $x\in E$ and $\lVert x \rVert = 0\iff x=0$
    2. $\lVert \lambda x \rVert =\lvert \lambda \rvert\lVert x \rVert$ for all $\lambda\in \mathbb{K}$ and $x\in E$
    3. $\lVert x+y \rVert \leqslant \lVert x \rVert + \lVert y \rVert$ for all $x,y\in E$ (Triangle inequality)

    and we call $(E,\lVert \cdot \rVert)$ a **normed(vector) space**


A norm will induce a metric $d$ and it's defined by

$$
d(x,y)=\lVert x-y \rVert ,\forall x,y,z\in E
$$

这是非常显然的，度量就是两个向量差的范数，所以有了范数就一定有度量和距离的概念

!!! warning "Remark：LCS and TVS"
    Some terms may be used later: locally convex space(LCS for short), topological vector spaces(TVS)
    We note that $\mathbb{K}=\mathbb{C}\ or\ \mathbb{R}$, so we should consider $\overline{x}y\not\neq x \overline{y}$

We should know some about *topological vector spaces(TVS)*. You can find more about TVS in 拓扑向量空间 (TVS)(赋予了范数拓扑的赋范空间是一个局部凸拓扑向量空间 (LCS))

给出一些简单范数的例子（证明只需要根据定义 check）

!!! example "范数例子"
    1. 欧式范数
    在有限维的向量空间上定义一组基，定义范数 ($\lVert \cdot \rVert : E\to[0,+\infty)$) 为：

    $$\lVert x \rVert _{2}:= \left( \sum\limits_{i=1}^{n} \lvert x_{i} \rvert ^{2} \right) ^{ \frac{1}{2}},\forall x=\sum\limits_{i=1}^{n} x_{i}e_{i}\in E$$

    2. $p$ 范数
    对于$1\leqslant p < \infty$，定义在$\mathbb{K}^{n}$上的范数为

    $$\lVert x \rVert _{p}=\left( \sum\limits_{i=1}^{n} \lvert x_{i} \rvert ^{p} \right)^{\frac{1}{p}}$$

    比较特别的是无穷范数$\lVert x \rVert_{\infty}=\max\limits_{1\leqslant i \leqslant n}\lvert x_{i} \rvert$，事实上这只是针对于序列的，关于函数空间也有相应的$p$范数会在后续定义

    3. *Frobenius norm* or *Hilbert-Schmidt norm*
    定义矩阵函数：$M_{mn}\to[0,+\infty)$如下：

    $$\lVert A \rVert =\left( \sum\limits_{i=1}^{m} \sum\limits_{j=1}^{n} \lvert a_{ij} \rvert ^{2} \right)^{\frac{1}{2}},\forall A=(a_{ij}){1\leqslant i \leqslant m, 1\leqslant j \leqslant n}\in M_{mn}$$

下面给出一些关于$l_{\infty}$的子空间的例子

!!! example "important normed subspaces of $l_{\infty}$"
    (1) $c=\left\{ (x_{n})_{n=1}^{\infty}:\lim\limits_{ n \to \infty }x_{n}\ exists \right\}$
    (2) $c_{0}=\left\{ (x_{n})_{n=1}^{\infty}:\lim\limits_{ n \to \infty }x_{n}=0 \right\}$
    (3) $c_{00}=\left\{ (x_{n})_{n=1}^{\infty}:x_{n}=0 \right\}$ $x_{n}=0$ for all but at most finitely many $n$

其中第一个就是一个极限存在的数列，第二个就是一个极限是0的数列，第三个则是一个至多有有限多个项能够取到0的极限为0的数列

有一个不那么显然的范数判断留作习题，请参考*Exercises 2.1 8*

实际上在上面关于$p$范数的三角不等式性质证明中我们需要两个著名的不等式($H \ddot{o} lder$ inequality and Minkowski inequality)，在此citing with proof，后续不再赘述


!!! tip "Theorem($H\ddot{o}lder$'s inequality)"
    Here use $\mu$ as a positive measure and a set $\Omega$, let $1<p<\infty$. For any $f\in L^{p}(\Omega,\mu)$ and $g\in L^{q}(\Omega,\mu)$, where $\frac{1}{p}+ \frac{1}{q}=1$, we have $fg\in L^{1}(\Omega,\mu)$ and

    $$\lVert fg \rVert _{1}=\int_{\Omega}\lvert fg \rvert d \mu \leqslant \left( \int_{\Omega}\lvert f \rvert ^{p} d\mu \right)^{\frac{1}{p}}\left( \int_{\Omega}\lvert g \rvert ^{q}d\mu \right)^{\frac{1}{q}}=\lVert f \rVert _{p}\lVert g \rVert _{q}$$

`Proof.`

Step 1

Consider a convex function $\varphi(t) = \frac{t^{p}}{p}+ \frac{1}{q}-t,t\in[0,\infty)$, so its minimum $\varphi(1) =0$ when $t=1$, we can get $\frac{t^{p}}{p}+ \frac{1}{q}\geqslant t,\forall t\in[0,\infty)$. Let $t=uv^{-\frac{q}{p}}$ for any $u,v\geqslant 0$ and one can derive that $uv \leqslant \frac{u^{p}}{p}+ \frac{v^{q}}{q}$

Step 2

Setting $u= \frac{\lvert f(t) \rvert}{\lVert f \rVert_{p}},v= \frac{\lvert g(t) \rvert}{\lVert g \rVert_{q}}$(Obviously we should assume they are greater than zero) we derive that

$$
\frac{\lvert f(t)g(t) \rvert }{\lVert f \rVert _{p}\lVert g \rVert _{q}}\leqslant \frac{\lvert f(t) \rvert ^{p}}{p\lVert f \rVert _{p}^{p}}+ \frac{\lvert g(t) \rvert ^{q}}{q\lVert g \rVert _{q}^{q}},\forall t\in\Omega
$$

Hence

$$
\frac{\int_{\Omega} \lvert fg \rvert d\mu }{\lVert f \rVert _{p}\lVert g \rVert _{q}}\leqslant \frac{1}{p} \frac{\int_{\Omega}\lvert f\rvert ^{p}d\mu}{\lVert f \rVert _{p}^{p}}+ \frac{1}{q} \frac{\int_{\Omega}\lvert g\rvert ^{q}d\mu}{\lVert g \rVert _{q}^{q}}= \frac{1}{p}+ \frac{1}{q}=1
$$

So we get it.


!!! tip "Theorem(Minkowski inequality)"
    Let $\mu$ be a positive measure on a set $\Omega$，$1\leqslant p < \infty$ and $f,g\in L^{p}(\Omega,\mu)$. We have

    $$\lVert f+g \rVert _{p}\leqslant \lVert f \rVert _{p}+\lVert g \rVert _{p}$$

    that is,

    $$\left( \int_{\Omega}\lvert f+g \rvert ^{p}d\mu \right)^{\frac{1}{p}}\leqslant\left( \int_{\Omega}\lvert f \rvert ^{p}d\mu \right)^{ \frac{1}{p}}+\left( \int_{\Omega}\lvert g \rvert ^{p} d\mu\right)^{\frac{1}{p}}$$

`Proof.`

稍微陈述一下证明脉络：做一个拆分然后使用$H \ddot{o} lder$不等式进行放缩

Very easy.

$$
\begin{aligned}
\lVert f+g \rVert _{p}^{p}&=\int_{\Omega}\lvert f+ g\rvert^{p}d\mu=\int_{\Omega}\lvert f+g \rvert ^{p-1}\lvert f+g \rvert d\mu\\
&\leqslant\int_{\Omega}\lvert f+g \rvert ^{p-1}(\lvert f \rvert +\lvert g \rvert )d\mu\\
&\overset{H \ddot{o} lder \ Inequality}{\leqslant}\lVert \lvert f+g \rvert ^{p-1} \rVert _{q}\lVert f \rVert _{p}+\lVert \lvert f+g \rvert ^{p-1} \rVert _{q}\lVert g \rVert _{p}\left( q= \frac{p}{p-1} \right)\\
&=\lVert \lvert f+g \rvert ^{p-1} \rVert _{q}(\lVert f \rVert _{p}+\lVert g \rVert _{p})\\
&=\lVert f+g \rVert ^{p-1}_{p}(\lVert f \rVert _{p}+\lVert g \rVert _{p})\\
\lVert f+g \rVert _{p}&\leqslant\lVert f \rVert _{p}+\lVert g \rVert _{p}
\end{aligned}
$$

定义了范数（Norm）的向量空间称为**赋范空间**(Normed Space，或赋范线性空间)

在泛函分析中，我们主要研究这类空间。其中，最基本且最早被深入研究的一类是实数域或复数域上的**完备赋范空间**，这类空间被称为**Banach空间**。另一个重要的例子是**Hilbert空间**，它是一种特殊的 Banach 空间(准确的说是完备的内积空间)，其范数由一个内积所诱导

由于我们上面所介绍的范数和对应的空间都是针对于序列的，因此我们不免想要专门抽象出一个空间来进行表示，我们希望它能够将已有的范数概念推广到无穷维的序列上(推广至无穷也正是泛函分析这一学科研究的核心内容)，序列空间正是作为**有限维向量空间$\mathbb{K}^{n}$在无限维情况下的自然抽象和推广**，为无限维背景下研究收敛性、完备性、连续性提供了基础的模型

下面介绍一下Sequence spaces(序列空间)的内容，在泛函分析及其他领域中，序列空间就是一个向量空间，元素为实数或复数，等价地是一个函数空间($\mathbb{N}(\mathbb{Z})\to \mathbb{K}$)，所有的函数集自然与可能的元素在$\mathbb{K}$中的无限序列集相对应，并且在逐点加法与数乘运算中构成一个向量空间

那么关于上面的序列空间，我们仍然需要为它配备一个范数，这就引出了$\ell_{p}$空间，它很好继承了有限维情况下结构良好的$p$范数的性质，又兼具无穷求和有限的性质，便于进行分析，保证了范数的有界性，并且它也是完备的(Banach空间)

给出$\ell_{p}$空间的定义：


!!! note "Definiotion($l_{p}$ space)"
    Let $I$ be a set and $1\leqslant p < \infty$ and $l_{p}(I)$ to be the set of all functions $x:I\to \mathbb{K}$ s.t.

    $$\sum\limits_{i\in I}\lvert x(i) \rvert^{p}:=\lim\limits_{ F\in \mathcal{F} }\lvert x(i) \rvert ^{p}<\infty   $$

    where $\mathcal{F}$ is the direct family of finite subsets of $I$ ordered by set inclusion

实际上$\ell^{p}$空间是$L^{p}$空间在计数测度的一种特殊情况

>The most important sequence spaces in analysis are the ⁠⁠ spaces, consisting of the ⁠⁠power summable sequences, with the ⁠⁠-norm. These are special cases of [⁠Lp spaces](https://en.wikipedia.org/wiki/Lp_space "Lp space") for the [counting measure](https://en.wikipedia.org/wiki/Counting_measure "Counting measure") on the set of natural numbers. Other important classes of sequences like [convergent sequences](https://en.wikipedia.org/wiki/Convergent_sequence "Convergent sequence") or [null sequences](https://en.wikipedia.org/wiki/Sequence_space#c,_c0_and_c00) form sequence spaces, respectively denoted ⁠⁠ and ⁠⁠, with the [sup norm](https://en.wikipedia.org/wiki/Supremum_norm "Supremum norm"). Any sequence space can also be equipped with the [topology](https://en.wikipedia.org/wiki/Topology "Topology") of [pointwise convergence](https://en.wikipedia.org/wiki/Pointwise_convergence "Pointwise convergence"), under which it becomes a special kind of [Fréchet space](https://en.wikipedia.org/wiki/Fr%C3%A9chet_space "Fréchet space")called [FK-space](https://en.wikipedia.org/wiki/FK-space "FK-space").

关于 $L^{p}$ 空间的内容可以参考实分析教材或是 wikipedia，相关的博客[香蕉空间](https://www.bananaspace.org/wiki/Lp_%E7%A9%BA%E9%97%B4)的撰写也很有意思，列在下面(老师的讲义中也有这一部分，所以不重复叙述了)


!!! tip "Generation($L^{p}$ space)"
    设 $(X,\mathcal{A},\mu)$ 为测度空间，$f:X\to \mathbb{K}$ 为可测函数，$p\in[0,+\infty]$，则 $f$ 的 $L^{p}$ 范数（$p-$ 范数），记为 $\lVert f \rVert_{p}\in[0,+\infty]$，定义如下

    $$\lVert f \rVert _{p}=\left( \int_{X}\lvert f \rvert ^{p}d\mu \right)^{\frac{1}{p}}$$

    其中的积分为 Lebesgue 积分，若是 $p=\infty$，将 $\lVert f \rVert_{\infty}$ 定义为对于几乎所有 $x\in X$ 成立的最小上确界 (essential)，当 $\mu(X)>0$，称作 $\lvert f \rvert$ 的本质上确界 (essential supremum)，此时 $L^{\infty}$ 范数也称为一致范数

    $$ess\ \sup\ f = inf\left\{ \beta:\lvert f(t) \rvert \leqslant \beta\ \mu-a.e. \right\}  $$

    $\ell^{p}$ 是取 $X=\mathbb{Z}_{>0}$ 并采用计数测度而得到的 $L^{p}$ 空间，其元素可视为形如 $x=(x_{1},x_{2},\dots)$ 并使得范数 $\lVert x \rVert_{p}=\left( \sum\limits_{i=1}^{\infty}\lvert x_{i} \rvert ^{p}\right) ^{\frac{1}{p}}$ 有限的实数列

essential supremum 的定义是很好用的，它说明 $ess\ \sup(f-g)=0$ 等价于两函数相差一个零测集，可以视作等价，记为 $[f]$ 或是简单的 $f$ 表示在 $\Omega$ 上只与 $f$ 相差一个零测集的可测函数的等价类

关于 $L^{p}(\Omega,\mu)$ 是 $p$ 范数下的赋范线性空间的证明留做习题

再给出一个比较特殊情况的 $p$ 范数，就是在连续的函数空间 $C[a,b]$(real or complex valued continuous functions defined on the closed interval $[a,b]$) 中：

$$
\lVert f \rVert _{p}=\left( \int_{a}^{b} \lvert f(t) \rvert ^{p} \, dt  \right) ^{\frac{1}{p}}
$$

显而易见，$\lVert f \rVert_{\infty}=\max\limits_{t\in[a,b]}\lvert f(t) \rvert$，这就是原本在一般测度空间 $(X,\mathcal{A},\mu)$ 和 Lebesgue 积分下 $p$ 范数的特殊化，将测度空间定义在闭区间上，测度即为区间长度（连续性），根据连续函数积分的定理，其上 Lebesgue 积分值与 Riemann 积分相同，因此可以直接使用 R 积分


!!! quote "一些术语"
    BV(Bounded Variation) 即有界变差


!!! tip "Theorem"
    Let $E,F$ be two normed spaces. A linear operator $T$ from $E$ into $F$ is continuous with respect to the norm topology of $E$ and $F$ if and only if for any sequence $(x_{n})_{n\in \mathbb{N}}$ in $E$

    $$x_{n}\to 0\ in \ E \implies Tx_{n}\to 0\ in\ F$$

这个定理回答了赋范线性空间下如何判断线性算子连续性的问题，当且仅当它在零点处是序列连续的，这个定理成立的关键就是线性算子的线性性和赋范空间的平移不变性

给出范数等价的定义

!!! note "Definition(equivalent of norms)"
    Two norms $\lVert \cdot \rVert_{1},\lVert \cdot \rVert_{2}$ defined on a vector space $E$ are equivalent if there are constants $\alpha,\beta>0$ such that

    $$\alpha \lVert x \rVert_{1}\leqslant \lVert x \rVert_{2}\leqslant \beta \lVert x \rVert _{1}$$

    in this case, we write $\lVert \cdot \rVert_{1}\sim \lVert \cdot \rVert_{2}$

关于 norm topology 的定义可以参考[wikipedia](https://en.wikipedia.org/wiki/Operator_topologies)，简单来说就是拓扑诱导生成度量，而度量产生拓扑(一个满足相应条件的集族)，范数拓扑就可以简单理解为所有开球的任意并集构成的集合，而开球族可以利用球心和半径定义(实际上是拓扑基的定义)

用范数拓扑的语言来写范数等价性条件就是：

!!! note "Proposition(equivalent of norms)"
    Two norms $\lVert \cdot \rVert_{1},\lVert \cdot \rVert_{2}$ defined on a vector space $E$ are equivalent if and only if they define the same norm topology on $E$

实际上对于有限维向量空间 $E$ 而言，任意两个范数是等价的，也就是说只有一种范数拓扑定义在 $E$ 上


再给出赋范线性空间等价的定义

!!! note "Definition(equivalent of normed spaces)"
    Two normed spaces $E$ and $F$ are equivalent(resp. isometrically isomorphic) if there is a bijective linear map $T:E\to F$ such that both $T$ and $T^{-1}$ are continuous(resp. isometries)


## Exercises 2.1

!!! question "(1)"
    If $E$ is a linear space on which is given a mapping $p: E \to [0, \infty)$ with the properties:
    (a) $p(x) = 0 \iff x = 0$;
    (b) $p(\lambda x) = |\lambda|p(x)$ for any $x \in E$ and $\lambda \in \mathbb{K}$.
    Prove that $p$ is a norm if and only if $U_E := \{x \in E : p(x) \le 1\}$ is convex.

    纯定义，Gemini3 写的

`Proof.`

First, assume $p$ is a norm. Then $p$ satisfies the triangle inequality $p(x+y) \le p(x) + p(y)$. Let $x, y \in U_E$ and $t \in [0, 1]$. We have $p(x) \le 1$ and $p(y) \le 1$.

$$p(tx + (1-t)y) \le p(tx) + p((1-t)y) = |t|p(x) + |1-t|p(y)$$

Since $t \in [0, 1]$, this equals $t p(x) + (1-t)p(y) \le t(1) + (1-t)(1) = 1$. Thus $tx + (1-t)y \in U_E$, so $U_E$ is convex.

Conversely, assume $U_E$ is convex. We must show the triangle inequality $p(x+y) \le p(x) + p(y)$ to prove $p$ is a norm.

Let $x, y \in E$ be non-zero vectors (the zero case is trivial). As following:

$$
\begin{aligned}
\frac{p(x)}{p(x)+p(y)} \frac{x}{p(x)}+\frac{p(y)}{p(x)+p(y)} \frac{y}{p(y)}& = \frac{x+y}{p(x)+p(y)}\\
p\left( \frac{x+y}{p(x)+p(y)} \right)&\leqslant 1\\
p(x+y)\leqslant p(x)+&p(y)
\end{aligned}
$$

Thus $p$ is a norm.

!!! question "(2)"
    Prove that the norm topology defined by a norm $\|\cdot\|$ of a normed space $E$ is a vector topology.

    需要熟知向量拓扑和范数拓扑的定义，由范数生成的拓扑一定是一个向量拓扑，所以每一个赋范空间都是一个

`Proof.`

A topology on a vector space is a vector topology if vector addition and scalar multiplication are continuous mappings.

1. Continuity of addition $(x, y) \mapsto x+y$:

We need to show that if $x_n \to x$ and $y_n \to y$ in the norm topology, then $x_n + y_n \to x + y$.
Using the triangle inequality:

$$\|(x_n + y_n) - (x + y)\| = \|(x_n - x) + (y_n - y)\| \le \|x_n - x\| + \|y_n - y\|$$

Since $\|x_n - x\| \to 0$ and $\|y_n - y\| \to 0$, the right side converges to 0. Thus $x_n + y_n \to x + y$.

2. Continuity of scalar multiplication $(\lambda, x) \mapsto \lambda x$:

We need to show that if $\lambda_n \to \lambda$ in $\mathbb{K}$ and $x_n \to x$ in $E$, then $\lambda_n x_n \to \lambda x$.

Consider the difference:

$$\begin{aligned}
\|\lambda_n x_n - \lambda x\| = \|\lambda_n x_n - \lambda_n x + \lambda_n x - \lambda x\| &= \|\lambda_n(x_n - x) + (\lambda_n - \lambda)x\|\\
&\le |\lambda_n| \|x_n - x\| + |\lambda_n - \lambda| \|x\|
\end{aligned}$$

Since the sequence $\lambda_n$ is convergent, it is bounded, so there exists $M > 0$ such that $|\lambda_n| \le M$ for all $n$.

$$\|\lambda_n x_n - \lambda x\| \le M \|x_n - x\| + |\lambda_n - \lambda| \|x\|$$

As $n \to \infty$, $\|x_n - x\| \to 0$ and $|\lambda_n - \lambda| \to 0$, so the entire expression converges to 0. Thus the norm topology is a vector topology.

!!! question "(3)"
    Prove that the norm function is continuous with respect to the norm topology, that is,
    $x_n \to x$ in $E \implies \|x_n\| \to \|x\|$ in $\mathbb{R}$.

    范数函数关于它所生成的拓扑是连续的，有点废话，实际上算是 Lipschitz 连续

`Proof.`

From the triangle inequality, we have $\|x_n\| = \|x_n - x + x\| \le \|x_n - x\| + \|x\|$, which implies $\|x_n\| - \|x\| \le \|x_n - x\|$. Similarly, $\|x\| = \|x - x_n + x_n\| \le \|x - x_n\| + \|x_n\|$, which implies $\|x\| - \|x_n\| \le \|x_n - x\|$. Combining these gives the reverse triangle inequality:

$| \|x_n\| - \|x\| | \le \|x_n - x\|$

If $x_n \to x$ in $E$, then by definition $\|x_n - x\| \to 0$. Therefore, $| \|x_n\| - \|x\| | \to 0$, which means $\|x_n\| \to \|x\|$ in $\mathbb{R}$.

!!! question "(4)"
    Convergent sequence in a normed space is a bounded sequence.

    纯无聊，这是数学分析的定义问题

`Proof.`

Let $(x_n)$ be a convergent sequence in a normed space $E$ with limit $x$. By the definition of convergence, taking $\epsilon = 1$, there exists a natural number $N$ such that for all $n > N$, $\|x_n - x\| < 1$. For these $n > N$, using the triangle inequality:

$$\|x_n\| = \|x_n - x + x\| \le \|x_n - x\| + \|x\| < 1 + \|x\|$$

Let $M = \max\{\|x_1\|, \|x_2\|, \dots, \|x_N\|, 1 + \|x\|\}$. Then $\|x_n\| \le M$ for all $n \in \mathbb{N}$. Thus, the sequence is bounded.

!!! question "(5)"
    Let $E$ be a normed space and $x_0, y_0$ in $E$ such that $\|x_0 + y_0\| = \|x_0\| + \|y_0\|$. Prove that for all $\lambda, \mu \ge 0$, $\|\lambda x_0 + \mu y_0\| = \lambda\|x_0\| + \mu\|y_0\|$.

    仍然非常简单

`Proof.`

不妨假设 $\lambda \le \mu$ (如果 $\lambda > \mu$，则交换 $x_0$ 和 $y_0$ 的位置即可，证明是对称的)

$$
\begin{aligned}
\lVert \lambda x_{0}+\mu y_{0} \rVert & = \lVert \mu(x_{0}+y_{0})-(\mu-\lambda)x_{0} \rVert \\
&\geqslant \mu \lVert x_{0}+y_{0} \rVert -(\mu-\lambda) \lVert x_{0} \rVert\\
&=\mu \lVert x_{0} \rVert +\mu \lVert y_{0} \rVert -(\mu-\lambda)\lVert x_{0} \rVert\\
&=\lambda \lVert x_{0} \rVert +\mu \lVert y_{0} \rVert
\end{aligned}
$$

Conversely, by the triangle inequality:

$$\|\lambda x_0 + \mu y_0\| \le \|\lambda x_0\| + \|\mu y_0\| = \lambda \|x_0\| + \mu \|y_0\|$$

Since the quantity is bounded both above and below by $\lambda \|x_0\| + \mu \|y_0\|$, equality holds.

!!! question "(6)"
    Let $T$ be a continuous one-to-one linear operator from a normed space $E_1$ onto a normed space $E_2$. Prove that $T^{-1}$ is a linear operator. If $T^{-1}$ is continuous then $T$ is said to be a *topological isomorphism* from $E_1$ onto $E_2$; and $E_1$ is said to be *topologically isomorphic* to $E_2$. In this case, there exist positive numbers $\alpha, \beta > 0$ such that $\alpha \|x\| \le \|Tx\| \le \beta \|x\|$.

    直接计算$T^{-1}$是线性的

`Proof.`

First, we prove $T^{-1}: E_2 \to E_1$ is linear. Let $u, v \in E_2$ and $k \in \mathbb{K}$. Since $T$ is onto, there exist unique $x, y \in E_1$ such that $Tx = u$ and $Ty = v$, implying $x = T^{-1}u$ and $y = T^{-1}v$.
$T(x + y) = Tx + Ty = u + v$. Applying $T^{-1}$ to both sides: $T^{-1}(u + v) = x + y = T^{-1}u + T^{-1}v$.
Similarly, $T(kx) = kTx = ku$. Applying $T^{-1}$: $T^{-1}(ku) = kx = kT^{-1}u$. Thus $T^{-1}$ is linear.

Now assume $T^{-1}$ is continuous. Since $T$ is a continuous linear operator, it is bounded. Thus, there exists $\beta > 0$ such that $\|Tx\| \le \beta \|x\|$ for all $x \in E_1$. This provides the upper bound. Since $T^{-1}$ is a continuous linear operator, it is bounded. Thus there exists a constant $C > 0$ such that $\|T^{-1}y\| \le C\|y\|$ for all $y \in E_2$. Let $y = Tx$. Then $\|x\| \le C\|Tx\|$. This implies $\|Tx\| \ge \frac{1}{C}\|x\|$. Let $\alpha = \frac{1}{C}$. Since $C > 0$, $\alpha > 0$. Combining these inequalities, we get $\alpha \|x\| \le \|Tx\| \le \beta \|x\|$.

!!! question "(7)"
    Let $\mathcal{P}$ be the vector space of polynomials defined on $[0, 1]$. Since $\mathcal{P}$ is a linear subspace of $C[0, 1]$, it has the sup-norm $\|\cdot\|_\infty$. And since $\mathcal{P}$ is a linear subspace of $L^1[0, 1]$, it has another norm $\|\cdot\|_1$. Show that $\|\cdot\|_\infty$ and $\|\cdot\|_1$ are not equivalent on $\mathcal{P}$.

    直接反证法即可

`Proof. `

Suppose on the contrary that $\|\cdot\|_\infty$ and $\|\cdot\|_1$ are equivalent. Then there exist positive numbers $\alpha, \beta > 0$ such that

$$ \alpha\|f\|_1 \leq \|f\|_\infty \leq \beta\|f\|_1, \quad \forall f \in \mathcal{P} $$

Let $f_n$ be the polynomial $f_n(t) = t^n$ ($\forall t \in [0, 1]$). Then we have

$$ \|f_n\|_\infty = 1, \quad \|f_n\|_1 = \frac{1}{n+1}. $$

On other hand, $\|f_n\|_1 \geq \frac{1}{\beta}\|f_n\|_\infty = \frac{1}{\beta}$, which is a contradiction. 


!!! question "(8)"
    Let $a > 0$. On $C[0,1]$, we consider two norms: $\left\Vert \cdot \right\Vert_\infty$ and

    $$ \left\Vert f \right\Vert_0 = a \int_0^1 |f(t)| dt, \quad \forall f \in C[0,1]. $$

    Prove that $\left\Vert f \right\Vert = \min\{\left\Vert f \right\Vert_\infty, \left\Vert f \right\Vert_0\}$ is a norm on $C[0,1]$ if and only if $a \leq 1$.

`Proof.`

按照范数的定义验证:

(1)非负性

显然由于 $\left\Vert f \right\Vert_{\infty}, \left\Vert f \right\Vert_{0} \geq 0$，$\left\Vert f \right\Vert \geq 0$，并且$\left\| f \right\|= \min\{\left\Vert f \right\Vert_\infty, \left\Vert f \right\Vert_0\} =0$当且仅当其中至少一个范数取$0$时成立，而根据范数的定义，此时$f=0$取等号。

(2)齐次性

对任意 $\lambda \in \mathbb{R}$，有


$$\left\Vert \lambda f \right\Vert = \min\{\left\Vert \lambda f \right\Vert_\infty, \left\Vert \lambda f \right\Vert_0\} = |\lambda| \min\{\left\Vert f \right\Vert_\infty, \left\Vert f \right\Vert_0\} = |\lambda| \left\Vert f \right\Vert.$$

(3)三角不等式

充分性：当$a \leq 1$时，有

 $$\left\Vert f \right\Vert_0 = a \int_0^1 |f(t)| dt \leq a \cdot 1 \cdot \left\Vert f \right\Vert_\infty \leq \left\Vert f \right\Vert_\infty,$$

综上，有$\left\| f \right\| = \min\{\left\| f \right\|_\infty, \left\| f \right\|_0\} = \left\| f \right\|_0$.



必要性：考虑举反例，当$a > 1$时， 取$f,g \in C[0,1]$，定义如下(先列出，大小关系后续讨论)

$$f(x)\equiv \varepsilon,\forall x\in[0,1]$$

$$

g(x)=\left\{ \begin{matrix}

&n&x=0 \\

 &linear & x\in(0, \frac{1}{n}) \\

&0&x\geq \frac{1}{n}

\end{matrix} \right.

$$


那么有$\lVert f \rVert=\min\left\{ \varepsilon,a\varepsilon \right\}=\varepsilon(a>1),\lVert g \rVert=\min\left\{ n, \frac{a}{2} \right\}= \frac{a}{2}$

$$
\lVert f+g \rVert =\min\left\{ n+\varepsilon,a\varepsilon+ \frac{a}{2} \right\}= a\varepsilon+ \frac{a}{2} >\varepsilon+ \frac{a}{2}=\lVert f \rVert +\lVert g \rVert

$$

综上需要满足不等式组：

$$\left\{ \begin{matrix}

&n > \frac{a}{2} \\

&n+\varepsilon > a\varepsilon + \frac{a}{2}

\end{matrix} \right.

$$

直接取$n=4a,\varepsilon =\frac{1}{n}$即可满足上述不等式组($4a+\frac{1}{4a}> \frac{1}{4}+\frac{a}{2}$)，因此三角不等式不成立.


!!! question "(9)"
    Let $1 < p < \infty$ and $G = \{(\xi_n)_{n \in \mathbb{N}} \in \ell_p : \sum_{n=1}^\infty \xi_n = 0\}$. Prove that $G \subseteq \ell_p$ is not closed.

`Proof.`

要证明 $G$ 不闭，只需找到一个序列 $\{x^{(k)}\} \subset G$，使得它在 $\ell_p$ 范数下收敛于某个元素 $x$，但 $x \notin G$。
考虑 $\ell_p$ 中的元素 $e_1 = (1, 0, 0, \dots)$。显然 $\sum_{n=1}^\infty (e_1)_n = 1 \neq 0$，所以 $e_1 \notin G$。

我们构造序列 $x^{(k)} \in \ell_p$ 如下：

$$x^{(k)} = (1, \underbrace{-\frac{1}{k}, -\frac{1}{k}, \dots, -\frac{1}{k}}_{k \text{ 个}}, 0, 0, \dots)$$

也就是说，第 1 项是 1，第 2 到 $k+1$ 项是 $-1/k$，其余项为 0。验证 $x^{(k)} \in G$：

$$\sum_{n=1}^\infty x^{(k)}_n = 1 + \sum_{j=1}^k (-\frac{1}{k}) = 1 - 1 = 0$$

所以 $x^{(k)} \in G$。现在计算 $\|x^{(k)} - e_1\|_p$：$x^{(k)} - e_1 = (0, -\frac{1}{k}, \dots, -\frac{1}{k}, 0, \dots)$

$$\|x^{(k)} - e_1\|_p = \left( \sum_{j=1}^k \left| -\frac{1}{k} \right|^p \right)^{1/p} = \left( k \cdot \frac{1}{k^p} \right)^{1/p} = (k^{1-p})^{1/p} = k^{\frac{1}{p} - 1}$$

由于 $1 < p < \infty$，所以 $\frac{1}{p} - 1 < 0$。因此，当 $k \to \infty$ 时，$\|x^{(k)} - e_1\|_p \to 0$。这说明 $e_1$ 是 $G$ 的一个极限点，但 $e_1 \notin G$。因此 $G$ 不是闭集。

!!! question "(10)"
    Is the set of all polynomials open in $C[-1, 1]$?

`Sol.`

不是。设 $P$ 是 $C[-1, 1]$ 中所有多项式构成的集合。$P$ 是 $C[-1, 1]$ 的一个真子空间（根据魏尔斯特拉斯逼近定理，$P$ 在 $C[-1, 1]$ 中稠密，但也存在非多项式的连续函数，例如 $f(x) = |x|$ 或 $e^{|x|}$，故 $P \neq C[-1, 1]$）。如果在赋范空间中一个线性子空间是开集，那么它必须包含一个原点的邻域（开球）。根据第 (11) 题的结论，**任何包含开球的线性子空间必然是整个空间**。由于 $P \neq C[-1, 1]$，所以 $P$ 不包含任何开球，因此 $P$ 不是开集。事实上，真子空间的内部一定是空集。

!!! question "(11)"
    Let $E$ be normed space. Find all linear subspaces $E_0 \subseteq E$ which contain a ball.

    主要是说这件事：任何包含开球的线性子空间必然是整个空间

`Sol.`

唯一的这样的子空间是 $E$ 本身（即 $E_0 = E$）

证明如下：

假设 $E_0$ 是 $E$ 的线性子空间，且包含一个开球 $B(x_0, r) = \{x \in E : \|x - x_0\| < r\} \subseteq E_0$。由于 $E_0$ 是子空间，它包含 $-x_0$。根据子空间的加法封闭性，对于任意 $z \in B(x_0, r)$，有 $z - x_0 \in E_0$。注意到 $B(x_0, r) - x_0 = B(0, r)$。这意味着原点周围的开球 $B(0, r) = \{y \in E : \|y\| < r\}$ 包含在 $E_0$ 中。

对于 $E$ 中任意非零元素 $x \in E$，我们可以对其进行缩放：令 $y = \frac{r}{2\|x\|} x$。显然 $\|y\| = \frac{r}{2\|x\|} \|x\| = \frac{r}{2} < r$，所以 $y \in B(0, r) \subseteq E_0$。由于 $E_0$ 是线性空间，它对数乘封闭，所以 $x = \frac{2\|x\|}{r} y$ 必定也属于 $E_0$。对于 $x=0$，显然 $0 \in E_0$。因此，对于任意 $x \in E$，都有 $x \in E_0$，即 $E \subseteq E_0$。综上所述，$E_0 = E$。

!!! question "(12)"
    Given any $1 < p < \infty$, find an element $a$ such that $a \in \ell_p$ but $a \notin \ell_q$ for all $1 \le q \le p$.

解答：
题目中要求 $a \notin \ell_q$ for all $1 \le q \le p$ 包含 $q=p$ 的情况，这是不可能的，因为若 $a \in \ell_p$，则 $a$ 必然属于 $\ell_p$。推测题目意图是寻找 $a \in \ell_p$ 但对于所有 $1 \le q < p$，$a \notin \ell_q$。
构造如下元素 $a = (a_n)_{n \in \mathbb{N}}$：
令 $a_n = \frac{1}{n^{1/p} (\ln(n+1))^{2/p}}$。
1. 验证 $a \in \ell_p$：
$\sum_{n=1}^\infty |a_n|^p = \sum_{n=1}^\infty \frac{1}{n (\ln(n+1))^2}$。
由于积分 $\int_1^\infty \frac{dx}{x (\ln x)^2}$ 收敛，该级数收敛。所以 $a \in \ell_p$。
2. 验证对于 $1 \le q < p$，有 $a \notin \ell_q$：
考虑 $|a_n|^q = \frac{1}{n^{q/p} (\ln(n+1))^{2q/p}}$。
由于 $q < p$，则指数 $\alpha = q/p < 1$。
对于级数 $\sum \frac{1}{n^\alpha (\ln n)^\beta}$，当 $\alpha < 1$ 时，无论 $\beta$ 为何值，级数均发散（与 $1/n$ 比较，分子项趋于无穷或分母增长慢于 $n$）。
具体来说，由于 $q/p < 1$，当 $n$ 充分大时，$\frac{1}{n^{q/p} (\ln(n+1))^{2q/p}} > \frac{1}{n}$。
由调和级数发散可知 $\sum |a_n|^q$ 发散。
因此，该元素 $a$ 满足条件（在 $q < p$ 的修正理解下）。

!!! question "(13)"
    Show that if $(E, \|\cdot\|_E)$ is a normed space, $W$ is a vector space and $T: W \to E$ is a linear bijection, then

    $$ \|x\|_W := \|Tx\|_E, \quad \forall x \in W $$

    defines a norm on $W$.

解答：
我们需要验证 $\|\cdot\|_W$ 满足范数的三条公理：
1. **非负性与正定性**：
对于任意 $x \in W$，$\|x\|_W = \|Tx\|_E \ge 0$（因为 $\|\cdot\|_E$ 是范数）。
若 $\|x\|_W = 0$，则 $\|Tx\|_E = 0$。由 $\|\cdot\|_E$ 的正定性可知 $Tx = 0_E$。由于 $T$ 是双射（特别是单射），$Tx = 0 \implies x = 0_W$。
2. **齐次性**：
对于任意 $x \in W$ 和标量 $\lambda$，
$\|\lambda x\|_W = \|T(\lambda x)\|_E$。
由 $T$ 的线性性，$T(\lambda x) = \lambda Tx$。
所以 $\|\lambda x\|_W = \|\lambda Tx\|_E = |\lambda| \|Tx\|_E = |\lambda| \|x\|_W$。
3. **三角不等式**：
对于任意 $x, y \in W$，
$\|x + y\|_W = \|T(x + y)\|_E$。
由 $T$ 的线性性，$T(x + y) = Tx + Ty$。
利用 $\|\cdot\|_E$ 的三角不等式：
$\|Tx + Ty\|_E \le \|Tx\|_E + \|Ty\|_E = \|x\|_W + \|y\|_W$。
即 $\|x+y\|_W \le \|x\|_W + \|y\|_W$。
综上，$\|\cdot\|_W$ 定义了 $W$ 上的一个范数。

!!! question "(14)"
    Suppose that $U$ is an open subspace of a normed space $E$, show that $U = E$.

    (11)题的变式

`Proof.`

因为 $U$ 是 $E$ 的子空间，所以 $0 \in U$。因为 $U$ 是开集，所以存在一个 $r > 0$ 使得原点的开球 $B(0, r) \subset U$。这意味着 $U$ 是一个包含球的线性子空间。直接引用第 (11) 题的结论，任何包含球的线性子空间必定等于整个空间。所以 $U = E$。

!!! question "(15)"
    If $E$ is a normed space and $M$ is a closed linear subspace of $E$, show that

    $$ \|[x]\|_{E/M} = \inf_{u \in M} \|x + u\| $$

    defines a norm on the quotient space $E/M$.

解答：

我们需要验证商范数的三条公理：

1. **非负性与正定性**：

显然 $\|[x]\|_{E/M} = \inf_{u \in M} \|x+u\| \ge 0$。
若 $[x] = [0]$（即 $x \in M$），则取 $u = -x \in M$，得 $\|x+u\| = 0$，故范数为 0。
反之，若 $\|[x]\|_{E/M} = 0$，即 $\inf_{u \in M} \|x+u\| = 0$。这意味着存在序列 $\{u_n\} \subset M$ 使得 $\|x - (-u_n)\| \to 0$。这表明 $x$ 是 $M$ 的一个极限点。因为 $M$ 是**闭**子空间，所以 $x \in M$，即 $[x] = [0]$。

2. **齐次性**：

对于 $\lambda \neq 0$：
$\|[\lambda x]\| = \inf_{u \in M} \|\lambda x + u\| = \inf_{u \in M} \|\lambda (x + \frac{u}{\lambda})\|$。
令 $v = u/\lambda$。当 $u$ 遍历 $M$ 时，由于 $M$ 是子空间，$v$ 也遍历 $M$。
$= \inf_{v \in M} |\lambda| \|x + v\| = |\lambda| \inf_{v \in M} \|x + v\| = |\lambda| \|[x]\|$。
对于 $\lambda = 0$，等式显然成立。

3. **三角不等式**：

设 $[x], [y] \in E/M$。
$\|[x+y]\| = \inf_{w \in M} \|x + y + w\|$。
对于任意 $\epsilon > 0$，根据下确界定义，存在 $u \in M$ 和 $v \in M$ 使得：
$\|x+u\| < \|[x]\| + \epsilon/2$ 且 $\|y+v\| < \|[y]\| + \epsilon/2$。
令 $w = u + v$，则 $w \in M$。
$\|[x+y]\| \le \|x + y + u + v\| \le \|x+u\| + \|y+v\| < \|[x]\| + \|[y]\| + \epsilon$。
由于 $\epsilon$ 是任意的，所以 $\|[x+y]\| \le \|[x]\| + \|[y]\|$。
综上，定义的是一个范数。

## Banach spaces

主要知道Cauchy列和Banach空间是什么就可以了

!!! abstract "Definition: 柯西列与 Banach 空间"

    **柯西列 (Cauchy Sequence)**
    设 $(x_n)$ 是赋范空间 $E$ 中的一个序列。如果对于任意给定的 $\varepsilon > 0$，都存在一个正整数 $N$，使得当 $m, n > N$ 时，都有 $\|x_m - x_n\| < \varepsilon$，则称该序列为柯西列。

    **Banach 空间 (Banach Space)**
    如果赋范空间 $E$ 中的**每一个**柯西列都收敛于 $E$ 中的某一点（即空间是完备的），则称 $E$ 为 Banach 空间。

!!! example "Example 2.2.2: 柯西列不一定收敛 (反例)"
    这是一个非常经典的例子，说明完备性不是理所当然的。

    考虑空间 $C[0,1]$（闭区间上的连续函数），装备 $1$-范数 $\|f\|_1 = \int_0^1 |f(t)| dt$。

    我们构造一个序列 $(f_n)_{n \ge 2}$，图形上看，它是一个在 $t=1/2$ 处越来越陡峭的折线：
    $$
    f_n(t) = \begin{cases}
    0, & 0 \le t \le \frac{1}{2} - \frac{1}{n} \\
    1 - n(\frac{1}{2} - t), & \frac{1}{2} - \frac{1}{n} \le t \le \frac{1}{2} \\
    1, & \frac{1}{2} < t \le 1
    \end{cases}
    $$


1. 它是柯西列

对于 $n > m \ge 2$，函数 $f_n$ 和 $f_m$ 的差异仅存在于区间 $[\frac{1}{2} - \frac{1}{m}, \frac{1}{2}]$ 上。直接计算积分：
 $$ \|f_n - f_m\|_1 = \int_0^1 |f_n(t) - f_m(t)| dt = \int_{\frac{1}{2}-\frac{1}{m}}^{\frac{1}{2}} |f_n(t) - f_m(t)| dt \le \frac{1}{m} $$
当 $m \to \infty$ 时，该值趋于 0，因此它是 $1$-范数下的柯西列。

 2. 它在空间中不收敛

假设该序列在 $C[0,1]$ 中收敛于某个连续函数 $f$。通过对误差 $\|f_n - f\|_1$ 的分析，令 $n \to \infty$，我们发现极限函数必须几乎处处满足：

$$ f(t) = \begin{cases} 0, & 0 \le t < 1/2 \\ 1, & 1/2 \le t \le 1 \end{cases} $$

这是一个阶跃函数，显然是不连续的。因此极限 $f \notin C[0,1]$。

结论：$(C[0,1], \|\cdot\|_1)$ 不是 Banach 空间。

注：如果换成上确界范数 $\|\cdot\|_\infty$，它就是 Banach 空间，因为一致极限保持连续性


!!! example "一个基本且重要的练习(Example 2.2.7)"
    If $1\leqslant p \leqslant \infty$, then $l^{p}$, $L^{p}[a,b]$ are Banach spaces under the corresponding $p-$norms $\lVert \cdot \rVert _p$ for $1\leqslant p\leqslant \infty$

`Proof.`

(a)If $1\leqslant p <\infty$, $l^{p}$ is a Banach space

For any Cauchy sequence, $x_{n}=(\xi_{k}^{(n)})_{k=1}^{\infty}\in l^{p}$

By definition, we have $\forall\varepsilon>0,\exists N$ if $m,n>N,\lvert x_{m}-x_{n} \rvert=\left( \sum\limits_{k=1}^{\infty}\lvert \xi_{k}^{(n)}-\xi_{k}^{(m)} \rvert^{p} \right) ^{\frac{1}{p}}<\varepsilon$

We can use the convergence that $(\xi_{k}^{(n)})_{n\in \mathbb{N}}\implies \xi_{k}$

$$
\left( \sum\limits_{k=1}^{k_{0}} \lvert \xi_{k}^{(n)}-\xi_{k}^{(m)} \rvert ^{p} \right)^{\frac{1}{p}}<\varepsilon,\forall n,m\geqslant N
$$

Just let $m\to \infty$, we get


$$
\left( \sum\limits_{k=1}^{k_{0}} \lvert \xi_{k}^{(n)}-\xi_{k} \rvert ^{p} \right)^{\frac{1}{p}}\leqslant\varepsilon,\forall n\geqslant N,\forall k_{0}\in \mathbb{N}
$$


Put $x=(\xi_{k})_{k\in \mathbb{N}}$, we derive that

$$
\begin{aligned}
\left( \sum\limits_{k=1}^{k_{0}} \lvert \xi_{k} \rvert ^{p} \right)^{\frac{1}{p}}&\leqslant \left( \sum\limits_{k=1}^{k_{0}} \lvert \xi_{k}-\xi_{k}^{(N)} \rvert ^{p} \right)^{\frac{1}{p}}+\left( \sum\limits_{k=1}^{k_{0}} \lvert \xi_{k}^{(N)} \rvert ^{p} \right)^{\frac{1}{p}}<\varepsilon+\lVert X_{N} \rVert _{p}<+\infty\\
\lVert x \rVert _{p}&\leqslant \varepsilon+\lVert x_{N} \rVert _{p}
\end{aligned}
$$

(b)Similarly, we can prove that $l_{\infty}$ is a Banach space

Now turn to $L^{p}$ space

(c)$L^{p}[a,b]$ is a Banach space when $1\leqslant p <\infty$

Let $(f_{n})_{n\in \mathbb{N}}$ be any Cauchy sequence in $L^{p}[a,b]$. For any $\varepsilon>0$, there exists $N\in \mathbb{N}$ s.t.

$$
\lVert f_{n}-f_{m} \rVert _{p}<\varepsilon,\forall n,m\geqslant N
$$

Obviously, we can choose a subsequence $(f_{n_{k}})_{k\in \mathbb{N}}$ s.t.

$$
\lVert f_{n_{k+1}}-f_{n_{k}} \rVert _{p}< \frac{1}{2^{k}},\forall k\in \mathbb{N}
$$

So we can naturally get $\sum\limits_{k=1}^{\infty}\lVert f_{n_{k+1}}-f_{n_{k}} \rVert < 1$, let

$$
g_{m}(t)=\lvert f_{n_{1}} (t)\rvert + \sum\limits_{k=1}^{m} \lvert f_{n_{k+1}}(t)-f_{n_{k}}(t) \rvert ,\forall t\in[a,b] 
$$

So

$$
\begin{aligned}
\lVert g_{m} \rVert _{p}&\leqslant \lVert f_{n_{1}} \rVert _{p}+\sum\limits_{k=1}^{m} \lVert f_{n_{k+1}}-f_{n_{k}} \rVert _{p}\\
&<\lVert f_{n_{1}} \rVert _{p}+1,\forall m= 1,2\dots
\end{aligned}
$$

Note $g_{m}(t)$ is positive and increasing, let $g_{0}(t)=\lim\limits_{ m \to \infty }g_{m}(t)$

$$
\begin{aligned}
\int_{a}^{b}\lvert g_{0} \rvert ^{p}  \, dt &=\int_{a}^{b} \mathop{\lim \inf }\limits_{m\to \infty }\lvert g_{m} \rvert ^{p}\, dt\\
&\leqslant \mathop{\lim\inf}\limits_{m\to \infty}\int_{a}^{b} \lvert g_{m} \rvert ^{p} \, dt\\
&=\lim\limits_{ m \to \infty } \lVert g_{m} \rVert _{p}^{p}\\
&\leqslant (\lVert f_{n_{1}} \rVert _{p}+1)^{p}
\end{aligned}
$$

So $g_{0}\in L^{p}[a,b]$ and


$$
g_{0}(t)=\lvert f_{n_{1}}(t) \rvert+\sum\limits_{k=1}^{\infty} \lvert f_{n_{k+1}}(t)-f_{n_{k}}(t) \rvert  
$$

converges to a finite positive number a.e. on $[a,b]$, therefore the series

$$
f(t):= f_{n_{1}}(t)+\sum\limits_{k=1}^{\infty} \lvert f_{n_{k+1}}(t)-f_{n_{k}}(t) \rvert  
$$
converges to a finite(real or complex) number a.e. on $[a,b]$. And $\lvert f \rvert \leqslant g_{0}$, we have $f\in L^{p}[a,b]$. It follows from

$$
\begin{aligned}
\lVert f-f_{n_{m}} \rVert _{p}&=\left\lVert  f-\left( f_{n_{1}}+\sum\limits_{k=1}^{m} (f_{n_{k+1}}-f_{n_{k}}) \right)  \right\rVert _{p}\\
&=\left\lVert  \sum\limits_{k=m+1}^{\infty} (f_{n_{k+1}}-f_{n_{k}})  \right\rVert _{p}\\
&\leqslant   \sum\limits_{k=m+1}^{\infty} \left\lVert(f_{n_{k+1}}-f_{n_{k}})  \right\rVert _{p}\\
&\leqslant \frac{1}{2^{m}}
\end{aligned}
$$


that $f_{n_{m}}\to f$

(d)$L^{\infty}[a,b]$ is a Banach space

Suppose that $(f_n)_{n\in\mathbb{N}}$ is a Cauchy sequence in $L^\infty[a,b]$. For any $k \in \mathbb{N}$, there exists $N_k > 0$ such that

$$ \|f_n - f_m\| < \frac{1}{k}, \quad \forall n, m \ge N_k. $$

We can find a measurable subset $E_k$ of zero measure such that

$$ \sup_{[a,b]\setminus E_k} |f_m(t) - f_n(t)| < \frac{1}{k}, \quad \forall n, m \ge N_k. \quad (2.5) $$

Let $E = \bigcup_{k=1}^\infty E_k$, which has zero measure. We have

$$ |f_m(t) - f_n(t)| \to 0 \quad \text{uniformly for all } t \in [a,b] \setminus E. $$

By the completeness of $\mathbb{K}$, the limit $f(t) = \lim_n f_n(t)$ exists for all $t \in [a,b] \setminus E$. Setting $f = 0$ on $E$, we see that $f_n(t) \to f(t)$ a.e. on $[a,b]$, and thus $f$ is measurable. Letting $m \to \infty$ in (2.5), we have

$$ \sup_{[a,b]\setminus E_k} |f(t) - f_n(t)| \le \frac{1}{k}, \quad \forall n \ge N_k, \quad (2.6) $$

which shows that $f - f_n \in L^\infty[a,b]$ for any $n \ge N_k$. Consequently, $f \in L^\infty[a,b]$. It follows from (2.6) that

$$ \|f(t) - f_n(t)\|_\infty \le \frac{1}{k}, \quad \forall n \ge N_k, $$

which proves that $f = \lim_n f_n$ in $L^\infty[a,b]$. 

!!! abstract "Proposition 2.2.5: 维数与完备性的关系"

    **定理**：不存在具有**可数维数**（指 Hamel 基是可数的）的无限维 Banach 空间

    **证明逻辑**：

    假设空间 $E$ 有可数基 $\{x_1, x_2, \dots\}$，定义有限维闭子空间 $E_n = \text{span}\{x_1, \dots, x_n\}$

    显然 $E = \bigcup_{n=1}^\infty E_n$。根据 **Baire Category Theorem**（贝尔纲定理），Banach 空间不能写成可数个无处稠密集合的并。因此，至少有一个 $E_{n_0}$ 包含一个开球。线性子空间如果包含开球，它必须等于整个空间。即 $E = E_{n_0}$。这推导出 $E$ 是有限维的，产生矛盾。

    **推论 (Example 2.2.6)**：
    *   $c_{00}$（有限支集序列）有可数基，所以它**不是** Banach 空间。
    *   $P[a,b]$（多项式空间）有可数基，所以它也**不是** Banach 空间。


!!! info "Finite Dimensional Spaces (有限维相关性质)"

    **Proposition 2.2.9**：每一个**有限维**赋范空间都是完备的
    *   因为有限维空间同构于 $\mathbb{K}^n$，而欧几里得空间是完备的

    **Proposition 2.2.10**：赋范空间的每一个**有限维子空间**都是闭的
    *   有限维子空间自身是完备的，完备子空间在 Hausdorff 空间中必然是闭集


!!! example "反例"
    *   多项式空间 $P$ 在 $C[0,1]$ 中不是闭的（因为根据 Weierstrass 定理，多项式可以逼近非多项式的连续函数，如 $e^t$）
    *   $c_{00}$ 在 $\ell_\infty$ 中不是闭的（可以逼近无限项非零的序列，如 $1, 1/2, 1/3 \dots$）


## Exercises 2.2





!!! question "HW2-1"
    Let $P$ be the vector space of polynomials definded on $[0,1]$. It has two norms $\lVert \cdot \rVert_{\infty}$​ and $\lVert \cdot \rVert_{1}$​ . Show that the two norms are not equivalent.


`Proof.`

只需要找到一个反例多项式函数$f$使得$\lVert f \rVert_{\infty}\leqslant C\lVert f \rVert_{1}$不成立即可

不妨设$f(x)=x^{n}$

那么有$\lVert f \rVert_{\infty}=\max\limits_{x\in[0,1]}\lvert f(x) \rvert=1,\lVert f \rVert_{1}=\int_{0}^{1} \lvert f(x) \rvert \, dx= \frac{1}{n+1}$

对于任意的固定常数$C$，总有$n+1>C$时使得$\lVert f \rVert_{\infty}\leqslant C\lVert f \rVert_{1}$不成立，因此两个范数显然不等价


!!! question "HW2-2"
    If $(E,\lVert \cdot \rVert _{E}​)$ is a normed space, $W$ is a vector space and $T:W\to E$ is a linear bijection, then

    $$\lVert x \rVert _{W}=\lVert Tx \rVert _{E}$$

    define a norm on $W$

题目应当是验证这是一个范数，我们按照定义验证三条性质：

(1) 正定性

$$
0=\lVert x \rVert _{W}=\lVert Tx \rVert _{E}\implies Tx=0\implies x=0
$$

后一个推论是因为 $T$ 是一个双射，并且 $\lVert x \rVert_{W}=\lVert Tx \rVert_{E}\geqslant 0$

(2) 正齐次性

$$
\lVert ax \rVert _{W}=\lVert T(ax) \rVert _{E}=\lvert a \rvert \lVert Tx \rVert _{E}=\lvert a \rvert \lVert x \rVert _{W}
$$

(3) 三角不等式

$$
\begin{aligned}
\lVert x+y \rVert _{W}&=\lVert T(x+y) \rVert _{E}=\lVert Tx+Ty \rVert _{E}\\
&\leqslant\lVert Tx \rVert _{E}+\lVert Ty \rVert _{E}\\
&=\lVert x \rVert _{W}+\lVert y \rVert _{W}
\end{aligned}
$$

前两个小节实际上只是讲述了基本的 Banach 空间的定义和一些基本内容的回顾，下面两个小节则是正式开始围绕 Banach 空间的性质进行讨论：可分性和完备性、紧性
## Seperable Banach spaces

### 可分性 (Separability)

!!! note "Definition 2.3.1 (可分性 / Separability)"
    一个赋范空间 $E$ 被称为 **可分的 (separable)**，如果它包含一个**可数的 (countable)** 且在范数意义下**稠密的 (dense)** 子集 $M$。否则，$E$ 被称为 **不可分的**。

    *   **直观理解**：如果一个空间是可分的，说明空间中的任意元素都可以被一个（固定的）可数集中的元素以任意精度逼近。

!!! example "常见 Banach 空间的可分性判定"

    | 空间 | 可分性 | 稠密子集构造思路 / 不可分理由 |
    | :--- | :--- | :--- |
    | **$c_0$** | ✅ 可分 | 具有有理数坐标的有限项序列（尾部为 0）。|
    | **$c$** | ✅ 可分 | 最终常数为有理数，且前有限项为有理数的序列。|
    | **$C[a,b]$** | ✅ 可分 | 有理系数多项式集合（Weierstrass 逼近定理）。|
    | **$\ell^p$** $(1 \le p < \infty)$ | ✅ 可分 | 具有有理数坐标的有限项序列（尾部为0）。 |
    | **$L^p[a,b]$** $(1 \le p < \infty)$| ✅ 可分 | 有理系数多项式集合（经过三步逼近）。 |
    | **$\ell^\infty$** | ❌ **不可分** | 存在不可数个彼此距离为 1 的点（0-1序列）。 |
    | **$L^\infty[a,b]$** | ❌ **不可分** | 存在不可数个彼此距离为 1 的函数（特征函数）。 |

    !!! abstract "证明思路归纳 (Proof Sketches)"

        **1. 序列空间与有限逼近 ($c, c_0, \ell^p$)**
        *   **核心思想**：截断 + 有理化。
        *   **逻辑**：对于收敛序列或 $p$-级数收敛的序列，其“尾部”趋于 0。先将无穷项截断为有限项 $N$，再将这有限项坐标用有理数 $r_i$ 逼近。
        *   **构造**：$M = \{(r_1, \dots, r_N, 0, \dots) : r_i \in \mathbb{Q}\}$。

        **2. 函数空间与多项式逼近 ($C[a,b], L^p$)**
        *   **$C[a,b]$**：直接利用 **Weierstrass 逼近定理**，有理系数多项式在一致范数下稠密。
        *   **$L^p[a,b]$**：采用**三步逼近法**：
           1.  $L^p$ 函数 $\xrightarrow{截断}$ 有界且支集有限的函数。
           2.  有界可测函数 $\xrightarrow{Lusin定理}$ 连续函数。
           3.  连续函数 $\xrightarrow{Weierstrass}$ 有理系数多项式。

        **3. 不可分的计数反例 ($\ell^\infty, L^\infty$)**
        *   **核心思想**：构造一个**不可数**集，其中任意两点距离 $\ge 1$。
        *   **$\ell^\infty$**：取 $A = \{ (\xi_n) : \xi_n \in \{0, 1\} \}$（不可数）。对于 $x \neq y \in A$，$\|x-y\|_\infty = 1$。
        *   **$L^\infty[a,b]$**：取特征函数系 $\{\mathbf{1}_{[a, t]} : t \in [a, b]\}$（不可数）。对于 $t \neq s$，$\|\mathbf{1}_{[a, t]} - \mathbf{1}_{[a, s]}\|_\infty = 1$。
        *   **推论**：若存在稠密子集，则在以这些点为心、半径为 $1/3$ 的互不相交的球中，每个球里至少要有一个稠密集的点。球不可数 $\implies$ 稠密集不可数。

!!! note "Definition 2.3.3 (Schauder 基)"
    设 $(e_n)_{n \in \mathbb{N}}$ 是 Banach 空间 $E$ 中的单位向量序列（$\|e_n\|=1$）。如果对于 $E$ 中的任意元素 $x$，都存在**唯一**的标量序列 $\alpha_n$ 使得：

    $$ x = \sum_{n=1}^\infty \alpha_n e_n \quad (\text{即 } \lim_{n\to\infty} \left\|x - \sum_{i=1}^n \alpha_i e_i\right\| = 0) $$

    则称 $(e_n)$ 为 $E$ 的一个 **Schauder 基**。显然，Schauder 基是线性无关的。

!!! tip "Theorem 2.3.4 (Schauder 基与可分性)"
    如果一个 Banach 空间 $E$ 拥有 Schauder 基，则 $E$ 是**可分的**。

`Proof Sketch.`

1.  **构造**：考虑所有由基向量组成的**有限**线性组合，且系数限制为**有理数**（若 $\mathbb{K}=\mathbb{C}$ 则为实部虚部均为有理数）：
    $$ M = \left\{ \sum_{i=1}^n r_i e_i : r_i \in \mathbb{Q}, n \in \mathbb{N} \right\} $$

2.  **可数性**：$M$ 是可数集的可数并，因此是可数的。
3.  **稠密性**：对于任意 $x = \sum \alpha_i e_i$，其部分和 $S_n$ 收敛于 $x$。我们只需用有理数 $r_i$ 逼近标量 $\alpha_i$，即可证明 $M$ 中的元素可以任意逼近 $x$。

## Exercise 2.3

!!! question "HW3-1"
    Show that a Banach space $V$ is separable if and only if

    $$V=\overline{\bigcup\limits_{n=1}^{\infty} V_{n}}$$

    where $(V_{n})_{n\in \mathbb{N}}$ are finite dimensional subspace of $V$

`Proof.`

$\implies$

证明：如果$V$是可分的，那么有$V=\overline{\bigcup\limits_{n=1}^{\infty}V_{n}}$

由于$V$是可分的Banach空间，那么它一定包含一个可数稠密子集，我们将其记为$D=\left\{ d_{1},d_{2},\dots,d_{n},\dots \right\}$，然后考虑定义$V$上有限维子空间$V_{n}$


$$
V_{n}=span\left\{ d_{1},d_{2},\dots,d_{n} \right\} 
$$

令$U=\bigcup\limits_{n=1}^{\infty} V_{n}$，那么$U=span(D)$，也就是说$U$是由$D$张成的$V$上的子空间

下面证明$\overline{U}=V$即可，这是显然的，因为$U=span(D)\implies D\subset U\subset V$，但是$D$在$V$上稠密，所以根据稠密子集的定义，$V$上任意一点$x_{0}$均存在$D$中子列收敛到该点，并且$D\subset U$，所以子列也含于$U$中，那么$x_{0}\in  \overline{U}$，由此即得$V\subset  \overline{U}$，并且因为$V$是闭的，综合两个等式即得$V=\overline{U}= \overline{\bigcup\limits_{n=1}^{\infty}V_{n}}$

$\impliedby$

证明：如果$V= \overline{\bigcup\limits_{n=1}^{\infty}V_{n}}$，则$V$是可分的

考虑利用定义证明，只需要在其中找到一个可数稠密子集即可，由于$V_{n}$是有限维赋范空间，我们知道是可分的，因此可以在每个$V_{n}$内找到一个可数稠密子集记为$D_{n}$

考虑$\bigcup\limits_{n=1}^{\infty}D_{n}=D$，我们想要证明它是$V$中可数稠密的子集，由于$D$是可数集的可数并，因此仍然可数，下面说明$D$在$V$内稠密即可：

换句话说，就是要说明$\forall x\in V,\varepsilon>0,\exists d\in D,s.t.\lVert x-d \rVert<\varepsilon$

因为$V=\overline{\bigcup\limits_{n=1}^{\infty}V_{n}}$，令$U=\bigcup\limits_{n=1}^{\infty}V_{n}$，取$x\in V= \overline{U}$，因此存在$x_{1}\in U$，使得$\lVert x_{1}-x \rVert< \frac{\varepsilon}{2}$，那么必有$x_{1}\in V_{N}$，并且$D_{N}\subset V_{N}$，且稠密，那么存在$x_{2}\in D_{N}$，使得$\lVert x_{2}-x_{1} \rVert< \frac{\varepsilon}{2}$

利用三角不等式即得：

$$
\lVert x-x_{2} \rVert =\lVert x-x_{1}+x_{1}-x_{2} \rVert \leqslant \lVert x-x_{1} \rVert +\lVert x_{1}-x_{2} \rVert <\varepsilon
$$

因此$D$在$V$中稠密，可知$V$可分

!!! question "(1)"
    Let $\mathbf{e}_k$ be the scalar sequence whose only nonzero term is '1' in the $k$th coordinate. Show that $\{e_k : k = 1, 2, \dots\}$ is a Schauder basis of the Banach space $(c_0, \|\cdot\|_\infty)$.

    根据定义进行验证即可

`Proof.`

对于任意 $x = (\xi_1, \xi_2, \dots) \in c_0$，根据 $c_0$ 的定义，我们有 $\lim\limits_{k\to\infty} \xi_k = 0$。考虑级数 $\sum_{k=1}^\infty \xi_k e_k$ 的部分和序列 $(s_n)$，其中 $s_n = \sum_{k=1}^n \xi_k e_k = (\xi_1, \xi_2, \dots, \xi_n, 0, 0, \dots)$

计算 $x$ 与 $s_n$ 的距离：

$$
\|x - s_n\|_\infty = \|(0, \dots, 0, \xi_{n+1}, \xi_{n+2}, \dots)\|_\infty = \sup_{k > n} |\xi_k|
$$

由于 $\xi_k \to 0$，即 $\forall \varepsilon > 0, \exists N$ 使得 $k > N \implies |\xi_k| < \varepsilon$。因此，当 $n \to \infty$ 时，$\sup\limits_{k > n} |\xi_k| \to 0$。这意味着 $x = \sum_{k=1}^\infty \xi_k e_k$ 在范数意义下收敛

根据定义还需要说明**唯一性**，假设 $x = \sum_{k=1}^\infty \alpha_k e_k$。由坐标泛函的连续性（或直接比较坐标），第 $k$ 个坐标必须相等，即 $\alpha_k = \xi_k$

综上，$\{e_k\}$ 是 $c_0$ 的 Schauder 基。

!!! question "(2)"
    Let $\mathbf{e}_k$ be the scalar sequence whose only nonzero term is '1' in the $k$th coordinate, and let $\mathbf{e} = (1, 1, \dots)$ with all coordinates '1'. Show that $\{e_k : k = 1, 2, \dots\} \cup \{e\}$ is a Schauder basis of the Banach space $(c, \|\cdot\|_\infty)$.

`Proof.`

对于任意 $x = (\xi_k) \in c$，由于序列收敛，设 $\lim_{k\to\infty} \xi_k = l$。
我们需要证明 $x$ 可以唯一表示为 $l\mathbf{e} + \sum_{k=1}^\infty (\xi_k - l)e_k$。
考察向量 $y = x - l\mathbf{e} = (\xi_1 - l, \xi_2 - l, \dots)$。
由于 $\xi_k \to l$，所以 $y$ 的分量趋于 0，即 $y \in c_0$。
根据 Problem 1 的结论，$y$ 可以唯一表示为 $c_0$ 的基 $\{e_k\}$ 的线性组合：
$$ y = \sum_{k=1}^\infty (\xi_k - l) e_k $$
代回 $x$，我们得到展开式：
$$ x = l\mathbf{e} + \sum_{k=1}^\infty (\xi_k - l) e_k $$
下面验证收敛性（其实由 $c_0$ 的结论已得，这里写明）：
$$ \left\| x - \left( l\mathbf{e} + \sum_{k=1}^n (\xi_k - l)e_k \right) \right\|_\infty = \left\| \sum_{k=n+1}^\infty (\xi_k - l)e_k \right\|_\infty = \sup_{k > n} |\xi_k - l| $$
因 $\xi_k \to l$，当 $n \to \infty$ 时上式趋于 0。

**唯一性**：设 $x = \alpha \mathbf{e} + \sum_{k=1}^\infty \alpha_k e_k$。对两边取极限（$k \to \infty$），由于 $e_k$ 的项趋于 0，可知 $\lim x = \alpha \cdot 1 + 0$，故 $\alpha = l$。剩下的部分即归结为 $c_0$ 中系数的唯一性，得 $\alpha_k = \xi_k - l$。

!!! question "(3)"
    Let $\mathbf{e}_k$ be the scalar sequence whose only nonzero term is '1' in the $k$th coordinate. Show that $\{e_k : k = 1, 2, \dots\}$ is a Schauder basis of the Banach space $(\ell_p, \|\cdot\|_p)$ when $1 \le p < +\infty$.

`Proof.`

设 $x = (\xi_k) \in \ell_p$，这意味着 $\sum_{k=1}^\infty |\xi_k|^p < \infty$。考虑部分和 $s_n = \sum_{k=1}^n \xi_k e_k$。考察误差的范数：

$$
\|x - s_n\|_p = \left\| \left( 0, \dots, 0, \xi_{n+1}, \xi_{n+2}, \dots \right) \right\|_p = \left( \sum_{k=n+1}^\infty |\xi_k|^p \right)^{1/p}
$$

由于级数 $\sum |\xi_k|^p$ 收敛，其**尾部和**（Tail sum）当 $n \to \infty$ 时必趋于 0。即 $\lim\limits_{n \to \infty} \|x - s_n\|_p = 0$。因此 $x = \sum_{k=1}^\infty \xi_k e_k$。唯一性同理，由坐标对应直接得到。

!!! question "(4)"
    Does the Banach space $(\ell_\infty, \|\cdot\|_\infty)$ have a Schauder basis?

`Answer.`

**No.** $(\ell_\infty, \|\cdot\|_\infty)$ does not have a Schauder basis.

`Reasoning.`

根据 **Theorem 2.3.4** (Schauder 基与可分性)，如果一个 Banach 空间拥有 Schauder 基，那么它必须是**可分的 (Separable)**。回顾之前的笔记（Example 2.3.2 (iii)），我们已经证明了 $\ell_\infty$ 是**不可分**的（因为存在不可数个距离为 1 的元素，无法被可数稠密子集逼近）。由于 $\ell_\infty$ 不可分，因此它不可能拥有 Schauder 基。

## Completeness and Compactness in Banach spaces

先给出级数收敛的相关定义，在此不赘述(不知道的可以参考数学分析)，重新指出只是为了方便下面的叙述罢了，因为柯西列在Banach空间中收敛，仍然有柯西收敛原理成立，至于绝对收敛定义仍然同数学分析一样，下面让我们进入本节的正题——完备性

### 完备性

!!! info "补充定义：完备性 (Completeness)"
    一个赋范空间 $(E, \|\cdot\|)$ 被称为**完备的**（即 Banach 空间），如果 $E$ 中的每一个**柯西列 (Cauchy sequence)** 都收敛于 $E$ 中的某一点。

!!! abstract "Theorem 2.4.4"
    一个赋范空间 $E$ 是完备的，当且仅当 $E$ 中的每一个**绝对收敛 (absolutely convergent)** 的级数都在 $E$ 中收敛。

`Proof.`

证明的难点在于从“绝对收敛级数收敛”推导出“空间完备”。我们需要证明任意一个柯西列 $(x_n)$ 都收敛。思路是构造一个收敛极快的子列，将其转化为级数问题。

首先，由于 $(x_n)$ 是柯西列，我们可以选取一个**子列** $(x_{n_k})$，使得相邻项极其接近。具体来说，对于每一个 $k$，选取足够大的下标，使得：
$$ \|x_{n_k} - x_{n_{k-1}}\| < \frac{1}{2^k}, \quad \forall k \ge 2 $$

!!! tip "技巧：构造裂项级数 (Telescoping Series)"
    我们考虑由该子列相邻项之差构成的级数：
    $$ x_{n_1} + \sum_{k=2}^{\infty} (x_{n_k} - x_{n_{k-1}}) $$
    注意到，这个级数的前 $m$ 项部分和 $S_m$ 恰好就是子列的第 $m$ 项：
    $$ S_m = x_{n_1} + (x_{n_2} - x_{n_1}) + \dots + (x_{n_m} - x_{n_{m-1}}) = x_{n_m} $$

接下来验证该级数是否**绝对收敛**。根据我们在选取子列时的构造：
$$ \sum_{k=2}^{\infty} \|x_{n_k} - x_{n_{k-1}}\| < \sum_{k=2}^{\infty} \frac{1}{2^k} = \frac{1}{2} < \infty $$
既然级数绝对收敛，根据定理的假设，该级数在 $E$ 中**收敛**。

设级数的和为 $x$。根据“级数和”的定义，就是部分和序列的极限，因此我们得到了子列的收敛性：
$$ x = \lim_{m \to \infty} S_m = \lim_{m \to \infty} x_{n_m} $$

!!! success "结论：从子列收敛到原序列收敛"
    我们现在有一个柯西列 $(x_n)$，且它有一个收敛于 $x$ 的子列 $(x_{n_k})$。利用三角不等式：
    $$ \|x_n - x\| \le \|x_n - x_{n_k}\| + \|x_{n_k} - x\| $$
    *   当 $n, n_k$ 足够大时，第一项因柯西列性质趋于 0。
    *   第二项因于列收敛趋于 0。

    因此 $\lim\limits_{n \to \infty} x_n = x$。即任意柯西列都收敛，空间完备。

    我们需要知道任何赋范空间都可以扩张成一个Banach空间（完备赋范空间）

!!! abstract "Theorem 2.4.5 (完备化定理)"
    设 $E$ 是一个赋范空间，总是存在一个 Banach 空间 $\tilde{E}$ 和一个从 $E$ 到 $\tilde{E}$ 的等距映射 $T$，使得 $T(E)$ 是 $\tilde{E}$ 的稠密子空间。

    换句话说，$\tilde{E}$ 是 $E$ 的完备化。此外，在等距同构的意义下，$E$ 的完备化 $\tilde{E}$ 是唯一的。

`Proof Sketch.`

构造思路类似于从有理数构造实数。我们考虑 $E$ 中**所有柯西列**构成的向量空间 $\mathcal{E}$，并定义等价关系：如果两个柯西列的差趋于 0，则视为等价。商空间 $\tilde{E} = \mathcal{E} / \sim$ 在商范数下构成 Banach 空间。最后，原空间 $E$ 可以通过常数序列自然地、等距地嵌入到 $\tilde{E}$ 中，并且构成稠密子空间。

!!! example "Example 2.4.6 (典型完备化例子)"
    *   **(a)** 装备 $p$-范数 ($1 \le p < \infty$) 的 $C[a, b]$ 不是完备的，其完备化是 $L^p[a, b]$。
    *   **(b)** 有限支集序列空间 $c_{00}$ 的完备化是趋于 0 的序列空间 $c_0$。
    *   **(c)** 多项式空间 $P[0, 1]$ 在上确界范数下的完备化是连续函数空间 $C[0, 1]$。

在有限维赋范空间中，有界闭集必定是紧集（Heine-Borel 性质）。但在无穷维空间中这一性质不再成立。Riesz 引理正是处理无穷维空间几何结构、描述这种差异的重要工具。

!!! abstract "Theorem 2.4.7 (Riesz 引理)"
    设 $Y$ 是赋范空间 $E$ 的**闭真子空间**（即 $Y \neq E$），且 $0 < \alpha < 1$。则存在范数为 1 的元素 $x_\alpha \in E$，使得它到子空间 $Y$ 的距离大于 $\alpha$，即：
    $$ \|x_\alpha - y\| > \alpha, \quad \forall y \in Y $$

`Proof.`

因为 $Y$ 是真子空间，我们可以取 $x \in E \setminus Y$。设 $d = \inf\{\|x - y\| : y \in Y\}$ 为 $x$ 到 $Y$ 的距离。由于 $Y$ 是闭集，故 $d > 0$。

因为 $d < d\alpha^{-1}$，根据下确界定义，存在 $y_0 \in Y$ 使得 $\|x - y_0\| < d\alpha^{-1}$。我们令 $x_\alpha = \frac{x - y_0}{\|x - y_0\|}$，显然 $\|x_\alpha\| = 1$。
对于任意 $y \in Y$，考察距离 $\|x_\alpha - y\|$：
$$ \|x_\alpha - y\| = \left\| \frac{x - y_0}{\|x - y_0\|} - y \right\| = \frac{1}{\|x - y_0\|} \| x - \underbrace{(y_0 + \|x - y_0\|y)}_{\in Y} \| $$
注意括号内的部分仍属于 $Y$，因此其与 $x$ 的距离至少为 $d$。从而我们得到 

$$\|x_\alpha - y\| \ge \frac{d}{\|x - y_0\|} > \frac{d}{d\alpha^{-1}} = \alpha$$

!!! abstract "Theorem 2.4.8 (无穷维空间的单位球非紧)"
    设 $E$ 是无穷维赋范空间。则其单位球 $U_E := \{x \in E : \|x\| \le 1\}$ 和单位球面 $S_E := \{x \in E : \|x\| = 1\}$ **都不是紧集**。

`Proof.`

我们要构造一个没有收敛子列的序列。任取 $x_1 \in S_E$。由于 $E$ 是无穷维的，$span\{x_1\}$ 是一个有限维的真子空间（也就是闭真子空间）。应用 Riesz 引理（取 $\alpha = 3/4$），存在 $x_2 \in S_E$ 使得 $\|x_2 - x_1\| \ge 3/4$。

归纳地，假设已选取 $x_1, \dots, x_n$。考虑闭真子空间 $Y_n = span\{x_1, \dots, x_n\}$。再次应用 Riesz 引理，存在 $x_{n+1} \in S_E$ 使得对于所有 $y \in Y_n$ 都有 $\|x_{n+1} - y\| \ge 3/4$。

如此得到的序列 $(x_n)$ 满足：当 $n \neq m$ 时，$\|x_n - x_m\| \ge 3/4$。该序列显然不是柯西列，因此没有任何收敛子列。故 $S_E$ 和 $U_E$ 不紧。

Banach 不动点定理是分析学中构造解和证明唯一性的核心工具。

!!! abstract "Theorem 2.4.9 (Banach 不动点定理 / 压缩映射原理)"
    设 $K$ 是 Banach 空间 $E$ 的非空闭子集，$\varphi: K \to K$ 是一个**压缩映射**，即存在常数 $0 < \rho < 1$ 使得：
    $$ \|\varphi(x) - \varphi(y)\| \le \rho\|x - y\|, \quad \forall x, y \in K $$
    则 $\varphi$ 在 $K$ 中有且仅有一个不动点，即存在唯一的 $z_0 \in K$ 使得 $\varphi(z_0) = z_0$。

`Proof.`

**存在性**：任取 $x_0 \in K$，定义迭代序列 $x_{n+1} = \varphi(x_n)$。考察相邻项距离，利用压缩性质可得 $\|x_{n+1} - x_n\| \le \rho^n\|x_1 - x_0\|$。对于任意 $m > n$，利用三角不等式和几何级数求和：

$$ \|x_m - x_n\| \le \sum_{i=n}^{m-1} \|x_{i+1} - x_i\| \le \left(\sum_{i=n}^{m-1} \rho^i\right) \|x_1 - x_0\| \le \frac{\rho^n}{1-\rho}\|x_1 - x_0\| $$

当 $n \to \infty$ 时右端趋于 0，故 $(x_n)$ 是柯西列。因 $E$ 完备且 $K$ 闭，设 $x_n \to z_0 \in K$。由压缩性质知 $\varphi$ 连续，故 $z_0 = \lim x_{n+1} = \lim \varphi(x_n) = \varphi(z_0)$。

**唯一性**：假设也有 $u \in K$ 使得 $\varphi(u) = u$。则 $\|u - z_0\| = \|\varphi(u) - \varphi(z_0)\| \le \rho\|u - z_0\|$。因为 $\rho < 1$，这迫使 $\|u - z_0\| = 0$，即 $u = z_0$。

## Exercise 2.4

!!! question "HW3-2"
    Show that Theorem 2.4.9 need not hold if

    $$\left|\varphi(x)-\varphi(y)\right|<\left|x-y\right|$$

    But the result does still hold under this weakened condition if $K$ is compact

`Proof.`


??? quote "Theorem 2.4.9(Banach Fixed Point Theorem)"
    Let $K$ be a nonempty closed subset of a Banach space $E$ and $\varphi:K\to K$ a constraction, that is, there exists a constant $0< \rho<1$ such that

    $$\lVert \varphi(x)-\varphi(y) \rVert \leqslant \rho \lVert x-y \rVert , \forall x,y\in K$$

    Then $\varphi$ has a unique fixed point in $K$, that is, there exists a unique $z_{0}\in K$ such that $\varphi(z_{0})=z_{0}$


$\mathbf{Counter\ Example:}$

考虑$f(x)=x+ \frac{1}{x},E=\mathbb{R},K=[1,+\infty]$

那么显然对$x\geqslant 1,f(x)=x + \frac{1}{x}\geqslant 1\in K,f(x):K\to K$

再利用拉格朗日中值定理：

$$
\lvert f(x)-f(y) \rvert =\lvert f'(\xi) \rvert \lvert x-y \rvert,f'(\xi)= 1- \frac{1}{\xi^{2}}<1 ,x,y\in K
$$

满足条件，但是其不存在不动点，反证：

$$
x+ \frac{1}{x}=x\implies \frac{1}{x}=0
$$

不存在这样的$x$

下面说明在紧性条件下，减弱条件也可以推出不动点存在：

修改命题条件为假设$K$为$Banach$空间$E$中的非空紧集，且$\varphi:K\to K$，并且满足

$$
\lVert \varphi(x)-\varphi(y) \rVert <\lVert x-y \rVert ,\forall x,y\in K,x\neq y
$$

我们需要证明其有不动点


构造函数$f(x):K\to \mathbb{R}$

$$
f(x)=\lVert x-\varphi(x) \rVert 
$$

根据$Lipschitz$条件可知$\varphi$连续，那么$f$也是连续函数，利用紧性可知，其极小值存在，不妨设在$x_{0}$处取到，即$f(x_{0})=\min\limits_{x\in K}f(x)$

下面说明$x_{0}$为不动点，也就是要说明$f(x_{0})=0$，反证$f(x_{0})=\delta >0$，再考虑$\varphi(x_{0})\in K$

$$
f(\varphi(x_{0}))=\lVert \varphi(x_{0})-\varphi(\varphi(x_{0})) \rVert <\lVert \varphi(x_{0})-x_{0} \rVert =f(x_{0})
$$

与 $f(x_{0})$ 的极小性矛盾，因此 $f(x_{0})=0$，即证不动点存在（唯一性是显然的）


!!! tip "紧集如何弥补收缩条件弱化所带来的不足"
    原定理成立的核心是完备性和收缩性，因此可以保证 $\lVert x_{n}-x_{n-1} \rVert$ 为柯西列，但是如果只是单纯的非减条件，可能会使得原本的数列收敛速度不够快，无法导出柯西列，因此结论可能不成立，那么这时候引入紧性就可以提供额外的拓扑结构，其作用体现在以下两点：
    1. 保证连续函数的最小值存在（极值定理）
    2. 利用距离严格递减性证明最小值必为零（反证法）



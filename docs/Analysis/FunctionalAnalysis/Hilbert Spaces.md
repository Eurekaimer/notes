# Hilbert Spaces

!!! tldr "Outline"
    + Basic properties  
    + Best approximation  
    + Orthogonal Decomposition  
    + Orthonormal basis

第三章主要研究的是 Hilbert 空间，也就是**完备内积空间**，第二章是为向量空间配备了范数（长度），这一章则是通过引入内积为其添加了角度和投影的概念，使得空间的几何结构更加接近我们熟悉的 $\mathbb{R}^{n}$，从而我们可以通过使用内积来同时表示长度和角度

我们将主要围绕内积的定义和基本性质，引申出 Hilbert 空间，然后介绍重要的不等式工具 Cauchy-Schwarz 不等式，平行四边形定理，再利用几何直观来解决最近点的问题（最优逼近定理），再然后开始介绍 Hilbert 空间最为重要的一个工具——投影，引出正交补和正交分解定理，既然有了正交就会开始思考利用正交关系构建一组基来表示空间的所有元素，所以最后会讨论正交规范基的概念以及空间同构的内容

## Basic properties

这一节的核心就是定义内积，然后引出 Hilbert 空间的定义和判定的手段：

>显然你应当熟悉所谓内积的四条性质以便于验证

!!! note "Definition (Inner Product)"
    Let $E$ be a vector space over $\mathbb{K}$. A function

    $$ \langle \cdot, \cdot \rangle : E \times E \to \mathbb{K} $$

    is said to be an *inner product* of $E$ if

    1.  $\langle x, x \rangle \ge 0$ for all $x \in E$; and $\langle x, x \rangle = 0$ if and only if $x = 0$;
    2.  $\langle x, y \rangle = \overline{\langle y, x \rangle}$ for all $x, y \in E$;
    3.  $\langle \lambda x, y \rangle = \lambda \langle x, y \rangle$ for all $x, y \in E$;
    4.  $\langle x + y, z \rangle = \langle x, z \rangle + \langle y, z \rangle$ for all $x, y, z \in E$.

    We call $(E, \langle \cdot, \cdot \rangle)$ a real or complex *inner product space* when the underlying field $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$, respectively.

关于内积的定义可以看作主要由下述性质构成：

+ 正定性
+ 共轭对称性
+ 对第一变元的线性，实际上对于第二变元是共轭线性的也就是 $\langle x,\lambda y\rangle= \overline{\lambda}\langle x,y\rangle$

!!! note "Definition(Hilbert空间)"
    通过内积诱导的范数 $\lVert x \rVert=\sqrt{ \langle x,x\rangle }$，如果内积空间在该范数下完备则称其为 Hilbert 空间

注：容易知道 $\lVert \cdot \rVert$ 满足范数的三条性质，并且将 $E$ 的范数拓扑也称为内积拓扑

我们接下来会讨论 Cauchy-Schwartz 不等式，实际上在数学分析和高等代数中就经常使用，这同样是内积空间中最著名的不等式，它建立了内积与范数（长度）之间的联系

!!! abstract "Theorem Cauchy-Schwarz inequality"
    Let $(E, \langle \cdot, \cdot \rangle)$ be an inner product space. It holds that

    $$ |\langle x, y \rangle| \le \sqrt{\langle x, x \rangle} \sqrt{\langle y, y \rangle}, \quad \forall x, y \in E. $$

    The equality holds if and only if $x = \lambda y$ for some $\lambda \in \mathbb{K}$ or $y = 0$.

证明手法可以采用非常经典的引入参数构造二次型和判别式方法，主要是利用内积的正定性质然后移项即可，在此不赘述了

再给出内积的连续性概念

!!! note "Continuity of inner product"
    Let $x_{n},y_{n},x,y$ be elements of an inner product space $E$, $n=1,2,\dots$ and

    $$x_{n}\to x,y_{n} \to y$$

    in the associated norm topology. Then

    $$\langle x_{n} , y_{n} \rangle \to \langle x,y \rangle $$

`Proof.`

$$
\begin{aligned}
\lvert \langle x,y\rangle-\langle x_{n},y_{n}\rangle \rvert&\leqslant  \lvert \langle x,y\rangle-\langle x,y_{n}\rangle \rvert+\lvert \langle x,y_{n}\rangle-\langle x_{n},y_{n}\rangle \rvert\\
&\leqslant \lVert x \rVert \lVert y-y_{n} \rVert + \lVert x-x_{n} \rVert \lVert y_{n} \rVert \\
& \leqslant \lVert x \rVert \lVert y-y_{n} \rVert +C\lVert x-x_{n} \rVert 
\end{aligned}
$$

因此可以很容易得到 $n\to \infty,\lvert \langle x,y\rangle-\langle x_{n},y_{n}\rangle \rvert\to 0$

下面给出能够判断一个空间是否由内积定义的重要定理——平行四边形定理

!!! tip "Paralletlogram Law"
    A norm $\lVert \cdot \rVert$ of a vector space $E$ is defined through an inner product on $E$, if and only if ,

    $$\lVert x+y \rVert ^{2}+\lVert x-y \rVert ^{2}=2(\lVert x \rVert ^{2}+\lVert y \rVert ^{2}),\forall x,y\in E$$

`Proof.`

**方向一：$(\Rightarrow)$ 若范数由内积定义**

这是显然的。直接利用内积展开范数定义 $\|x\|^2 = \langle x, x \rangle$：

$$
\begin{aligned}
\|x+y\|^2 &= \langle x+y, x+y \rangle = \|x\|^2 + \langle x, y \rangle + \langle y, x \rangle + \|y\|^2 \\
\|x-y\|^2 &= \langle x-y, x-y \rangle = \|x\|^2 - \langle x, y \rangle - \langle y, x \rangle + \|y\|^2
\end{aligned}
$$

两式相加，交叉项抵消，立刻得到 $2(\|x\|^2 + \|y\|^2)$。

**方向二：$(\Leftarrow)$ 若范数满足平行四边形法则**

我们需要构造一个内积 $\langle \cdot, \cdot \rangle$，并验证它满足内积的四条公理。

1. 构造内积：极化恒等式 (Polarization Identity)

我们需要通过范数来反解出内积的表达式。

!!! note "观察：如何“拼凑”出内积？"
    **情形 A：若 $\mathbb{K} = \mathbb{R}$ （实数域）**
    由方向一的展开式可知：
    $\|x+y\|^2 - \|x-y\|^2 = 2\langle x, y \rangle + 2\langle y, x \rangle = 4\langle x, y \rangle$ （利用实内积对称性）。
    于是我们可以定义：

    $$ \langle x, y \rangle = \frac{1}{4} (\|x+y\|^2 - \|x-y\|^2) \quad (3.2) $$

    **情形 B：若 $\mathbb{K} = \mathbb{C}$ （复数域）**
    复数情形稍微复杂，因为 $\langle y, x \rangle = \overline{\langle x, y \rangle}$。我们利用 $i^k$ 的技巧。
    考虑展开式：
    $\|x + i^k y\|^2 = \|x\|^2 + i^k \langle y, x \rangle + i^{-k} \langle x, y \rangle + \|y\|^2$。
    对 $k=0, 1, 2, 3$ 求和，并乘以 $i^k$：

    $$ \sum_{k=0}^3 i^k \|x + i^k y\|^2 = \sum_{k=0}^3 i^k (\|x\|^2 + \|y\|^2) + \langle y, x \rangle \sum_{k=0}^3 i^{2k} + \langle x, y \rangle \sum_{k=0}^3 i^0 $$

    利用 $\sum_{k=0}^3 i^k = 0$ 和 $\sum_{k=0}^3 i^{2k} = 1-1+1-1=0$，只剩下最后一项 $4\langle x, y \rangle$：

    于是，我们**定义**复空间上的内积为：

    $$ \langle x, y \rangle = \frac{1}{4} \sum_{k=0}^3 i^k \|x + i^k y\|^2 \quad (3.3) $$

    这两个公式 (3.2) 和 (3.3) 被称为 **极化恒等式**。

2. 验证构造出的函数是内积

下面我们以**复数情形**为例进行验证（实数情形是复数的一部分，且更简单）。

为了方便验证，我们将复内积拆解为实部和虚部。观察 (3.3) 式：

*   $k=0, 2$ （实部项）: $\frac{1}{4}(\|x+y\|^2 - \|x-y\|^2)$。
*   $k=1, 3$ （虚部项）: $\frac{i}{4}(\|x+iy\|^2 - \|x-iy\|^2)$。

记实部函数为 $\text{Re}\langle x, y \rangle$：

$$ \text{Re}\langle x, y \rangle = \frac{1}{4}(\|x+y\|^2 - \|x-y\|^2) \quad (3.4) $$

利用 $\|ix \pm y\| = \|i(x \mp iy)\| = \|x \mp iy\|$，我们可以把 (3.3) 重写为：

$$ \langle x, y \rangle = \text{Re}\langle x, y \rangle - i \text{Re}\langle ix, y \rangle \quad (3.5) $$

第一步：验证可加性 (Additivity)

这是最难的一步。我们需要证明 $\langle x+z, y \rangle = \langle x, y \rangle + \langle z, y \rangle$。只需证明实部满足可加性即可。

考察 $\text{Re}\langle x+z, y \rangle + \text{Re}\langle x-z, y \rangle$：

$$
\begin{aligned}
\dots &= \frac{1}{4} ( \underbrace{\|x+z+y\|^2 + \|x-z+y\|^2}_{\text{对 } (x+y) \text{ 和 } z \text{ 用平行四边形法则}} ) - \frac{1}{4} ( \underbrace{\|x+z-y\|^2 + \|x-z-y\|^2}_{\text{对 } (x-y) \text{ 和 } z \text{ 用平行四边形法则}} ) \\
&= \frac{1}{4} ( 2\|x+y\|^2 + 2\|z\|^2 ) - \frac{1}{4} ( 2\|x-y\|^2 + 2\|z\|^2 ) \\
&= \frac{1}{2} ( \|x+y\|^2 - \|x-y\|^2 ) \\
&= 2 \text{Re}\langle x, y \rangle \quad (3.6)
\end{aligned}
$$

即我们得到了：

$$ \text{Re}\langle x+z, y \rangle + \text{Re}\langle x-z, y \rangle = 2\text{Re}\langle x, y \rangle $$

在此式中，令 $z=x$，则 $\text{Re}\langle 2x, y \rangle + \text{Re}\langle 0, y \rangle = 2\text{Re}\langle x, y \rangle$。由于 $\text{Re}\langle 0, y \rangle = \frac{1}{4}(\|y\|^2 - \|-y\|^2) = 0$，故：

$$ \text{Re}\langle 2x, y \rangle = 2\text{Re}\langle x, y \rangle $$

现在，利用这个性质回到 (3.6)。令 $u = x+z, v = x-z$，则 $x = \frac{u+v}{2}, z = \frac{u-v}{2}$。

代入 (3.6) 式（或者如书中操作，将 $x$ 替换为 $\frac{1}{2}(x+z)$，将 $z$ 替换为 $\frac{1}{2}(x-z)$）：

$$ \text{Re}\langle x, y \rangle + \text{Re}\langle z, y \rangle = 2\text{Re}\langle \frac{x+z}{2}, y \rangle = \text{Re}\langle x+z, y \rangle \quad (3.8) $$

这证明了实部对第一个变量是可加的。结合 (3.5)，**整体函数 $\langle \cdot, \cdot \rangle$ 满足可加性**

$$ \langle x+z, y \rangle = \langle x, y \rangle + \langle z, y \rangle $$

第二步：验证齐次性 (Homogeneity)

我们需要证明 $\langle \alpha x, y \rangle = \alpha \langle x, y \rangle$

1.  **整数与有理数**：
    由可加性，显然 $\langle nx, y \rangle = n\langle x, y \rangle$ 对 $n \in \mathbb{N}$ 成立，进而推广到 $n \in \mathbb{Z}$，再推广到 $\alpha \in \mathbb{Q}$
2.  **实数**：
    由于范数函数 $\|\cdot\|$ 是连续的，由 (3.3) 定义的内积函数也是连续的
    利用连续性，从 $\mathbb{Q}$ 推广到 $\mathbb{R}$：

    $$ \langle \alpha x, y \rangle = \alpha \langle x, y \rangle, \quad \forall \alpha \in \mathbb{R} $$

3.  **复数（虚数单位 $i$）**：
    我们还需要验证 $\langle ix, y \rangle = i\langle x, y \rangle$
    利用定义 (3.5)：

    $$
    \begin{aligned}
    \langle ix, y \rangle &= \text{Re}\langle ix, y \rangle - i \text{Re}\langle i(ix), y \rangle \\
    &= \text{Re}\langle ix, y \rangle - i \text{Re}\langle -x, y \rangle \\
    &= \text{Re}\langle ix, y \rangle + i \text{Re}\langle x, y \rangle
    \end{aligned}
    $$

    另一方面：

    $$
    i\langle x, y \rangle = i(\text{Re}\langle x, y \rangle - i \text{Re}\langle ix, y \rangle) = i \text{Re}\langle x, y \rangle + \text{Re}\langle ix, y \rangle
    $$

    两者相等！因此 $\langle \alpha x, y \rangle = \alpha \langle x, y \rangle$ 对所有 $\alpha \in \mathbb{C}$ 成立

第三步：验证正定性与共轭对称
*   **正定性**：
    $\langle x, x \rangle = \frac{1}{4} \sum_{k=0}^3 i^k \|x + i^k x\|^2 = \frac{1}{4} (\|2x\|^2 + i\|x(1+i)\|^2 - \|0\|^2 - i\|x(1-i)\|^2) = \|x\|^2$
    显然 $\ge 0$，且等于 0 当且仅当 $x=0$
*   **共轭对称**：
    $\langle x, y \rangle = \overline{\langle y, x \rangle}$ 是由范数对称性 $\|x+y\|=\|y+x\|$ 直接得到的平凡结果

## Exercise 3.1

!!! question "(6)HW4-1"
    Let $H$ be an inner product space.
    (a) If $a,b\in H\setminus \left\{ 0 \right\}$, and if $a'= \frac{a}{\lVert a \rVert^{2}}$ and $b'= \frac{b}{\lVert b \rVert^{2}}$, then

    $$\lVert a'-b' \rVert = \frac{\lVert a-b \rVert }{\lVert a \rVert \lVert b \rVert }.$$

    (b) Prove the Ptolemaic inequality

    $$\lVert a-c \rVert \lVert b-d \rVert \leqslant \lVert a-b \rVert \lVert c-d \rVert +\lVert b-c \rVert \lVert a-d \rVert $$

    for all $a,b,c,d\in H$

`Proof.`

(a)

$$
\begin{aligned}
\lVert a'-b' \rVert ^{2}&= \left\lVert  \frac{a}{\lVert a \rVert ^{2}}- \frac{b}{\lVert b \rVert ^{2}}  \right\rVert ^{2}\\
&= \left\lVert  \frac{a\lVert b \rVert ^{2}-b\lVert a \rVert ^{2}}{\lVert a \rVert ^{2}\lVert b \rVert ^{2}  }\right\rVert ^{2}\\
&= \frac{1}{(\lVert a \rVert ^{2}\lVert b \rVert ^{2})^{2}}\langle a\lVert b \rVert ^{2}-b\lVert a \rVert ^{2},a\lVert b \rVert ^{2}-b\lVert a \rVert ^{2}\rangle\\
&= \frac{1}{(\lVert a \rVert ^{2}\lVert b \rVert ^{2})^{2}} \lVert a \rVert ^{2} \lVert b \rVert ^{2} \left( \lVert b \rVert ^{2}+\lVert a \rVert ^{2} -\langle a,b\rangle -\langle b,a\rangle\right) \\
\lVert a-b \rVert ^{2}&=\langle a-b,a-b\rangle \\
&=\lVert a \rVert ^{2}+\lVert b \rVert ^{2}-\langle a,b\rangle -\langle b,a\rangle\\
\lVert a'-b' \rVert ^{2}&=  \frac{\lVert a-b \rVert ^{2}}{\lVert a \rVert ^{2}\lVert b \rVert ^{2}}\\
\lVert a'-b' \rVert &= \frac{\lVert a-b \rVert }{\lVert a \rVert \lVert b \rVert }
\end{aligned}
$$

(b)

不妨同时除以 $\lVert a-d \rVert\lVert b-d \rVert\lVert c-d \rVert$ 原本的不等式简化为：

$$
 \frac{\lVert a-c \rVert}{\lVert a-d \rVert \lVert c-d \rVert }  \leqslant  \frac{\lVert a-b \rVert}{\lVert a-d \rVert \lVert b-d \rVert } + \frac{\lVert b-c \rVert}{\lVert b-d \rVert \lVert c-d \rVert } 
$$

再做一步显化以使用 (a) 的结论

$$
\begin{aligned}
 \frac{\lVert (a-d)-(c-d) \rVert}{\lVert a-d \rVert \lVert c-d \rVert }  &\leqslant  \frac{\lVert (a-d)-(b-d) \rVert}{\lVert a-d \rVert \lVert b-d \rVert } + \frac{\lVert (b-d)-(c-d) \rVert}{\lVert b-d \rVert \lVert c-d \rVert } \\
 \iff\lVert (a-d)'-(c-d)' \rVert &\leqslant \lVert (a-d)'-(b-d)' \rVert +\lVert (b-d)'-(c-d)' \rVert \\
\end{aligned}
$$

第二个不等式根据三角不等式是显然的，因此可以逆推回去，得证

!!! question "(8)HW4-2"
    If $H$ is a Hilbert space and $M$ is a closed subspace of $H$, show that $H \texttt{/} M$ is also a Hilbert space.

我们应当先知道赋范空间的商范数如何定义，可以参考[planetmath](https://planetmath.org/quotientnorm)

!!! quote "quotient norm"
    Let $V$ be a normed vector space with norm $\lVert \cdot \rVert$. Let $M$ be a closed subspace of $V$ and $V / M$ the quotient vector space.
    The norm $\lVert \cdot \rVert$ induces a norm $\lVert \cdot \rVert_{V / M}$ in $V / M$, called the quotient norm, given by

    $$\lVert v+M \rVert _{V / M}:= \inf\limits_{u\in v+M}\lVert u \rVert =\inf\limits_{m\in M}\lVert v+m \rVert $$

    $\mathbf{Theorem}$-$\lVert \cdot \rVert_{V / M}$ is a norm in $V / M$ iff $M$ is closed in $V$

$\mathbf{Method 1}$

只需要模仿上述定义，给出商范数

$$
\lVert [x] \rVert _{H / M}= \inf\limits_{u\in M}\lVert x+u \rVert 
$$

再说明这个范数符合平行四边形定则即可说明可定义内积在 $H/ M$ 上

$\mathbf{Method2}$

根据定义，我们想要证明 $H / M$ 是希尔伯特空间，需要证明两点

+ $H / M$ 上的范数 $\lVert \cdot \rVert$ 是由一个内积诱导的
+ $H / M$ 关于这个范数是完备的

我们考虑利用正交补空间，先将 $H$ 分解为 $M$ 和它的正交补 $M^{\perp}$ 的直和（正交分解定理）

$$
H=M\oplus M^{\perp}
$$

即 $\forall a\in H,\exists!m\in M,m^{\perp}\in M^{\perp},s.t.a=m+m^{\perp}$

然后我们想要说明 $H/ M$ 和 $M^{\perp}$ 是等距同构的，并且我们知道存在唯一的投影 $P_{M}$ 可以将 $H$ 中向量映射到 $M$ 上

定义一个映射 $T:H /M\to M^{\perp},T([a])=m^{\perp}$ 其中 $a=m+m^{\perp}$，实际上是投影

首先证明它是同构，若是有 $Tx=Ty\implies x-y=m_{x}-m_{y}\in M$，在同一个等价类内，即 $[x]=[y]$，因此其为单射，由正交分解可知满射，因此同构

再证明等距

$$
\begin{aligned}
\lVert [x]-[y] \rVert&=\lVert [x-y] \rVert \\
&=\inf\limits_{m\in M}\lVert (x-y)+m \rVert\\
&= \inf\limits_{m'\in M}\lVert m^{\perp}_{x-y}+m' \rVert(m'=m_{x-y}+m\in M)\\
&=\lVert m^{\perp}_{x-y} \rVert \\
&=\lVert T(x-y) \rVert\\
&=\lVert Tx-Ty \rVert 
\end{aligned}
$$

由此即得 $T$ 为等距同构

由于 $M^{\perp}$ 是 $H$ 的闭合子空间，因此它也是完备的内积空间（继承内积），所以仍然是 Hilbert 空间，再利用等距同构，$H /M$ 继承了 $M^{\perp}$ 的完备性和内积（可以利用 $T^{-1}$ 定义 $H /M$ 上的内积），因此 $H /M$ 是完备的内积空间，是 Hilbert 空间

## Best approximation

我们还想要研究关于最小距离的概念，利用几何的观点先给出最优逼近的定义：

!!! note "Definition(Best approximation)"
    The distance from $x$ to $B$ is defined as $d(x,B)=\inf\limits_{y\in B}d(x,y)$，if there is an $\tilde{x}\in B$ such that $d(x, \tilde{x})=d(x,B)$, we call $\tilde{x}$ is a best approximation of $x$ in $X$ from $B$, or a best approximate element.

下面给出最优逼近定理，在 Hilbert 空间中选取一个闭凸子集，在补集中选取任意一点，我们一定能够在闭凸子集中选取到其的最优逼近元

!!! tip "Theorem"
    Let $B$ be a nonempty closed convex subset of a Hilbert space $H$. Let $x\in H\setminus B$. Then there exists a unique $\tilde{x}$ in $B$ such that

    $$\lVert x-\tilde{x} \rVert =d(x,B)=\inf\limits_{y\in B}\lVert x-y \rVert $$

并且有等价条件：

+ $\lVert x- \tilde{x} \rVert=d(x,B)$
+ $\mathrm{Re}(x- \tilde{x},b - \tilde{x})\leqslant 0,\forall b\in B$
+ $\mathrm{Re}(x-b,\tilde{x}-b)\geqslant 0,\forall b\in B$

注：显然当域 $\mathbb{K}=\mathbb{R}$ 时，结论会变得简单，可以去除 $\mathrm{Re}$

推论：若是我们有两个任意的点 $x,y\in H$，那么假设 $\tilde{x},\tilde{y}$ 是 $x,y$ 在 $B$ 的最优逼近元，相应的有

$$\lVert \tilde{x}-\tilde{y} \rVert \leqslant \lvert x-y \rvert$$

再定义投影：

!!! note "Definition (Projection Map)"
    设 $B$ 是 Hilbert 空间 $H$ 中的一个**非空闭凸子集**。定义 **投影映射** $P_B : H \to B$，将任意 $x \in H$ 映射为 $P_B(x) = \tilde{x}$，其中 $\tilde{x}$ 是 $x$ 在 $B$ 中的 **（唯一）最佳逼近元素**。

!!! tip "Corollary (投影的连续性)"
    Hilbert 空间 $H$ 中非空闭凸子集上的投影映射 $P_B$ 是连续的。事实上，$P_B$ 是一个**压缩映射 (contraction)**，即满足：

    $$ \|P_B x - P_B y\| \le \|x - y\|, \quad \forall x, y \in H $$

`Proof.`

要证明投影是压缩的，我们需要利用投影元素的**变分特征不等式**（Variational Characterization）。

回顾最佳逼近元素的性质：$u = P_B x$ 当且仅当 $\text{Re}\langle x - u, z - u \rangle \le 0$ 对所有 $z \in B$ 成立。

现在设 $x, y \in H$，并记 $u = P_B x, v = P_B y$。由于 $u, v \in B$（凸集），我们可以分别将 $v$ 代入 $x$ 的不等式，将 $u$ 代入 $y$ 的不等式：

1.  $\text{Re}\langle x - u, v - u \rangle \le 0$
2.  $\text{Re}\langle y - v, u - v \rangle \le 0$

将两个不等式相加：

$$ \text{Re}\langle x - u, v - u \rangle + \text{Re}\langle y - v, u - v \rangle \le 0 $$

调整项的符号（利用内积线性）：

$$ \text{Re}\langle u - x, u - v \rangle + \text{Re}\langle y - v, u - v \rangle \le 0 $$

$$ \text{Re}\langle (u - x) + (y - v), u - v \rangle \le 0 $$

$$ \text{Re}\langle (u - v) - (x - y), u - v \rangle \le 0 $$

展开内积：

$$ \|u - v\|^2 - \text{Re}\langle x - y, u - v \rangle \le 0 $$

即：

$$ \|u - v\|^2 \le \text{Re}\langle x - y, u - v \rangle $$

由 Cauchy-Schwarz 不等式，$\text{Re}\langle x - y, u - v \rangle \le |\langle x - y, u - v \rangle| \le \|x - y\| \|u - v\|$。
因此：

$$ \|u - v\|^2 \le \|x - y\| \|u - v\| $$

消去一个 $\|u - v\|$（若为 0 则显然成立），得：

$$ \|u - v\| \le \|x - y\| $$

即 $\|P_B x - P_B y\| \le \|x - y\|$。证毕。

## Exercise 3.2

!!! question "(4)HW5-1"
    Show that the projection map $P_{B}$ of a nonempty closed convex subset of a Hilbert space $H$ is linear if and only if $B$ is a vector subspace of $H$.

`Proof.`

$\implies$

假设 $B$ 是 $H$ 的一个非空闭凸子集，并且投影映射 $P_{B}:H\to B$ 是线性的，我们要证明 $B$ 是 $H$ 的向量子空间

由于 $P_{B}$ 是线性的，根据凸性知道投影唯一，那么根据线性映射的性质 $P_{B}(0)=0$，那么可知 $0\in B$，还需证明封闭性，先说明加法封闭，$\forall x,y\in B$，$P_{B}(x+y)=x+y\in B$，再来说明数乘封闭，$\forall x\in B,\alpha\in \mathbb{K}$，那么有 $P_{B}(x)=x$，利用线性性马上得到 $P_{B}(\alpha x)=\alpha P_{B}(x)=\alpha x$

由此可知，$B$ 是 $H$ 的一个向量子空间

$\impliedby$

假设 $B$ 是 $H$ 的一个闭凸向量子空间，利用正交分解，$H=B\oplus B^{\perp}$，那么有对于任意的 $x\in H$，有唯一的 $b\in B,z\in B^{\perp}$ 使得 $x=b+z,P_{B}(x)=b$

下面来说明线性性：

$\forall x_{1},x_{2}\in H,\alpha\in \mathbb{K},x_{1}=b_{1}+z_{1},x_{2}=b_{2}+z_{2},b_{i}\in B,z_{i}\in B^{\perp}$，那么有 $P_{B}(x_{1})=b_{1},P_{B}(x_{2})=b_{2}$，并且有 $x_{1}+x_{2}=(b_{1}+b_{2})+(z_{1}+z_{2})$，利用向量子空间的性质，我们知道 $b_{1}+b_{2}\in B,z_{1}+z_{2}\in B^{\perp}$，那么根据映射 $P_{B}(x_{1}+x_{2})=b_{1}+b_{2}=P_{B}(x_{1})+P_{B}(x_{2})$

同理有 $P_{B}(\alpha x_{1})=\alpha b_{1}=\alpha P_{B}(x_{1})$，综上可知线性

结合两边得知：$P_{B}$ 是线性的当且仅当 $B$ 是 $H$ 的一个向量子空间

## Orthogonal Decomposition

下面研究内积空间非常重要的一个性质，也就是当内积为 0 的情况下称为正交的情形

!!! note "Definition orthogonal"
    假设 $X$ 是一个内积空间
    (a) 若满足 $\langle x,y\rangle=0$，两个 $X$ 中元素 $x,y$ 被称为正交可以记作 $x\perp y$
    (b) 若是有 $\forall y\in S,x\perp y\implies x\perp S$，将元素与集合正交的概念扩展到两个集合正交即 $\forall x\in S_{1},y\in S_{2}$，称两个集合正交
    (c) 给出正交补的概念，若是 $x\in X,x^{\perp}=\left\{ y\in X:\langle x,y\rangle=0 \right\}$，相应的可以给出正交补空间的概念，$S^{\perp}=\left\{ y\in X:\langle x, y\rangle =0 ,\forall x\in S \right\}$，将 $S^{\perp}$ 记为 $S$ 的正交补

根据正交的定义显然我们知道对于正交的两个元素有 $\lVert x+y \rVert^{2}=\lVert x \rVert^{2}+\lVert y \rVert^{2}$，反向也成立如果 $\mathbb{K}=\mathbb{R}$

### 关于正交补的性质

首先需要明确，对于内积空间中的任意子集 S，其正交补 $S^{\perp}$ 具有非常优良的数学性质。即便 S 本身不具备线性结构，其正交补 $S^{\perp}$ 也永远是该空间的一个闭子空间。此外，一个集合与其正交补的交集非常简单，即 $S \cap S^{\perp} = {0}$，因为若一个向量与自身正交，由内积的正定性可知该向量必为 0。

在包含关系方面，正交补表现出某种“逆转”特性：如果 $S \subseteq S_{1}$，那么 $S_{1}^{\perp} \subseteq S^{\perp}$。同时，任何集合都包含在其双正交补中，即 $S \subseteq S^{\perp\perp}$

下面是一些正交补的性质：

!!! tip "正交补的性质"
    设 $S$ 和 $S_1$ 是内积空间 $X$ 的**子集**（注意：不一定是子空间）。

    1.  $S^\perp$ 是 $X$ 的**闭子空间**，且 $S \cap S^\perp = \{0\}$。
    2.  $S \subseteq S^{\perp\perp}$。
    3.  包含关系反转：若 $S \subseteq S_1$，则 $S_1^\perp \subseteq S^\perp$。
    4.  **三次正交等于一次正交**：$S^\perp = S^{\perp\perp\perp}$。

### 正交分解定理

我们希望能够通过正交关系对于空间进行一个划分，这就引出了我们本节最重要的正交分解定理

!!! tip "Orthogonal Decomposition Theorem"
    If $M$ is a closed subspace of a Hilbert space $H$, then

    $$H=M\oplus M^{\perp}$$

    and $M=M^{\perp\perp}$

注：正交分解定理的证明深度依赖于 Hilbert 空间中的最佳逼近理论。根据定理 3.3.5，如果 $M$ 是 Hilbert 空间 $H$ 的一个闭子空间，那么对于空间中任意给定的向量 $x$，元素 $y$ 是 $x$ 在 $M$ 中的最佳逼近元（即满足距离最小化），当且仅当 $(x - y) \perp M$

这一几何特征至关重要，它意味着我们可以将任意向量 $x$ 拆解为一个位于子空间 $M$ 内的分量 $y$，以及一个与该子空间完全正交的分量 $(x - y)$。这个 $y$ 也被正式称为 $x$ 在闭子空间 $M$ 上的投影

正交分解定理揭示了闭子空间及其正交补如何共同“张开”整个 Hilbert 空间。

1. 直和分解的实现：对于 $H$ 中的任意元素 $x$，由于 $M$ 是闭子空间，根据最佳逼近定理存在唯一的 $y \in M$ 使得它离 $x$ 最近。令 $z = x - y$，根据前述的最佳逼近几何特征，$z$ 必然属于 $M^{\perp}$。因此，我们可以得到表达式 $x = y + z$。因为 $M \cap M^{\perp} = {0}$，这种将 $x$ 分解为 $M$ 元与 $M^{\perp}$ 元之和的方式是唯一的，故有 $H = M \oplus M^{\perp}$。
2. 双正交补恒等式：定理进一步指出，对于闭子空间，恒有 $M = M^{\perp\perp}$。虽然已知 $M \subseteq M^{\perp\perp}$ 总是成立，但反向包含的证明需要用到分解思想：设 $z \in M^{\perp\perp}$，由于 M 是闭的，我们可以将其分解为 $z = z_{1} + z_{2}$，其中 $z_{1} \in M$ 且 $z_{2} \in M^{\perp}$。由于 $z$ 和 $z_{1}$ 都属于 $M^{\perp\perp}$，那么它们的差 $z_{2}$ 也必须属于 $M^{\perp\perp}$。由于 $z_{2}$ 同时属于 $M^{\perp}$ 和 $M^{\perp\perp}$，它只能是 0。这证明了 $z = z_{1} \in M$，从而确立了等式。

注：若是 $H=M+N$ 并且 $M\subset N^{\perp}$，那么 $M=N^{\perp}$，该结论可以采用反证法进行证明，假如 $x\in N^{\perp}$ 并且 $x\not\in M$，那么显然我们有 $x=y+z,y\in M,z\in N$，那么我们有 $x$ 和 $z$ 的内积为 0，得到 $z=0$ 那么就是 $x=y$ 与原先假设矛盾

下面再给出正交性质和最优逼近结合的一个性质展现：

!!! abstract "Theorem (闭子空间上的最佳逼近)"
    设 $M$ 是 Hilbert 空间 $H$ 的一个**闭子空间**，且 $x \in H$。$x$ 在 $M$ 中的**最佳逼近元**是唯一的元素 $y \in M$，满足条件：

    $$ (x - y) \perp M $$

    也就是说，误差向量 $x - y$ 必须垂直于子空间 $M$。

注：直观理解就是，如果你想在一个平面 $M$ 上找一点 $y$ 离平面外的点 $x$ 最近，那么连线 $x-y$ 必须垂直于这个平面。如果连线是斜的，你总可以在平面上移动 $y$ 使得距离更近

## Exercise 3.3

!!! question "(4)HW5-2"
    For the Hilbert space $L^{2}[0,1]$, let

    $$M=\left\{ f\in L^{2}[0,1]: \int_{0}^{1} f(t) \, dt =0 \right\} $$

    Determine $M^{\perp}$. For $f_{0}(x)=\exp(x)$, determine $d(f_{0},M)$.

`Proof.`

根据 $L^{2}$ 空间的定义可知，$M$ 所包含的就是所有与函数 $g(t)=1$ 正交的函数集合，根据正交补的性质我们知道 $M=\left\{ g \right\}^{\perp}\implies M^{\perp}=(\left\{ g \right\}^{\perp})^{\perp}=\left\{ g \right\}$，而 $g(t)=1$ 所张成的空间即为常数函数空间 $g'(t)=c$

再来计算 $d(f_{0},M)$

$$
d(f_{0},M)=d(f_{0},\left\{ 1 \right\} ^{\perp})=\lvert \langle f_{0},1 \rangle \rvert =\int_{0}^{1} e^{x} \, dx =e-1
$$

!!! question "(5)HW5-3"
    Show that if $\langle x,y\rangle=0$ if and only if
    (i) $\lVert x+\alpha y \rVert \geqslant \lVert x \rVert$ for every $\alpha\in \mathbb{K}$ or
    (ii) $\lVert x+\alpha y \rVert=\lVert x-\alpha y \rVert$ for every $\alpha\in \mathbb{K}$

`Proof.`

(i)

$$
\lVert x+\alpha y \rVert ^{2}=\langle x+\alpha y,x+\alpha y\rangle=\lVert x \rVert ^{2}+2\mathrm{Re}[\alpha\langle x,y\rangle]+\lvert a \rvert ^{2}\lVert y \rVert ^{2}
$$

必要性，当 $\langle x,y\rangle=0$ 时是显然的，可以得到 $\lVert x+\alpha y \rVert^{2}=\lVert x \rVert^{2}+\lvert a \rvert^{2}\lVert y \rVert^{2}\geqslant\lVert x \rVert^{2}$

充分性，如果 $\lVert x+\alpha y \rVert\geqslant \lVert x \rVert$ 对于任意的 $\alpha\in \mathbb{K}$ 均成立，若是 $\langle x,y\rangle\neq0$，那么显然可以通过取 $\alpha= \frac{-2\mathrm{Re[\langle x,y\rangle]}}{\lVert y \rVert^{2}}\in \mathbb{R}$ 使得 $2\alpha \mathrm{Re}[\langle x,y\rangle]+\lvert a \rvert^{2}\lVert y \rVert^{2}< 0$，与条件矛盾，由此得出必须有 $\mathrm{Re}[\langle x,y\rangle]=0$，再取 $\alpha=i\beta$，可以类似的得到矛盾，由此可知 $\mathrm{Im}[\langle x,y\rangle]=0$，由此 $\langle x,y\rangle=0$

(ii)

$$
\lVert x-\alpha y \rVert ^{2}=\langle x-\alpha y,x-\alpha y\rangle=\lVert x \rVert ^{2}-2\mathrm{Re}[\alpha\langle x,y\rangle]+\lvert a \rvert ^{2}\lVert y \rVert ^{2}
$$

必要性，同 (i) 可知，当 $\langle x,y\rangle=0$ 时是显然的

充分性，直接做差取等即得

$$
-2\mathrm{Re}[\alpha\langle x,y\rangle]=2\mathrm{Re}[\alpha\langle x,y\rangle]
$$

如果 $\mathbb{K}=\mathbb{R}$，那么已经可以得到 $\langle x,y\rangle=0$，如果 $\mathbb{K}=\mathbb{C}$，需要额外使用 $\alpha=1,\alpha=i$ 得到实部和虚部均为 $0$，即 $\langle x,y\rangle=0$

## Orthonormal basis

## Exercise 3.4











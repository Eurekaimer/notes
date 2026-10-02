# Some big theorems

!!! tldr "Outline"
    + Hahn-Banach Extension Theorem  
    + Continuous linear functionals of a TVS  
    + Seperation Theorems  
    + Uniform Boundness Principle  
    + Open Mapping Theorem and Closed Graph Theorem

## Hahn-Banach Extension Theorem

>泛函分析中最为重要的定理，没有之一，所以必须要很好的掌握

!!! tip "Hahn-Banach Extension Theorem"
    $M$ is a subspace of a normed space $E$, $f$ is a continuous functional on $M$. Then $f$ can be extended to a continuous linear functional $g$ on $E$ with $\lVert g \rVert=\lVert f \rVert$

`Proof.`

证明思路如下，先考虑 $f=0$ 的平凡情况，然后下面是非零情形的证明：

`Step 1` 统一实数和复数的桥梁

先考虑实数情况，定义 $f$ 的实部：$u=\mathrm{Re}f= \frac{f+\overline{f}}{2}$，那么很自然的我们会考虑将虚部也按照实部表示：

$$
\mathrm{Im}f=-\mathrm{Re}f(ix)= \frac{f- \overline{f}}{2i}\implies f(x)=u(x)-iu(ix)
$$

那么我们现在只需要说明实数成立的 Hahn-Banach 延拓定理即可，复数可以根据上面的变换式推出

`Step 2` 证明范数相等

显然的会有 $\lVert u \rVert\leqslant \lVert f \rVert$，另一边我们可以考虑构造序列 $(x_{n})_{n\in \mathbb{N}}\in M$，使得 $\lVert x_{n} \rVert\leqslant 1$，并且还有 $0\neq \lvert f(x_{n}) \rvert \to \lVert f \rVert$，构造一个 $y_{n}= \frac{\overline{f(x_{n})}}{\lvert f(x_{n}) \rvert}x_{n}$，那么也有 $\lVert y_{n} \rVert\leqslant 1$，并且容易得到 $f(y_{n})=\lvert f(x_{n}) \rvert\to \lVert f \rVert$，由于必然大于 0，那么显然是实数，由此可知，$u(y_{n})\to \lVert f \rVert$，根据泛函范数的定义我们知道，$\lVert f \rVert\leqslant \lVert u \rVert$，结合两边立得 $\lVert u \rVert=\lVert f \rVert$

为了方便起见下面都假设 $\mathbb{K}=\mathbb{R},\lVert f \rVert=1$

`Step 3` 延拓到 $M$ 与某点的赋范空间

$\forall x_{0}\notin M$，将 $f$ 延拓到 $M_{0}=span\left\{ M,x_{0} \right\},\lVert f_{0} \rVert_{M_{0}}=\lVert f \rVert_{M}$，我们令 $f_{0}(x_{0})=r_{0}$

我们可以通过定义得到 $f_{0}(x+\alpha y)=f(x)+\alpha r_{0}$，所以显然有 $\lVert f_{0} \rVert \geqslant \lVert f \rVert$，那么我们需要构造一个 $r_{0}$ 使得 $\lVert f_{0} \rVert=\lVert f \rVert=1$，换句话说就是 $\lvert f(x)+\alpha r_{0} \rvert\leqslant \lVert x+\alpha r_{0} \rVert$

然后两边同时除以 $\lvert \alpha \rvert$ 即可得到：

$$
-f\left( \frac{x}{\alpha} \right)-\left\lVert  \frac{x}{\alpha}+x_{0}  \right\rVert \leqslant r_{0} \leqslant -f\left( \frac{x}{\alpha} \right)+\left\lVert  \frac{x}{\alpha}+x_{0}  \right\rVert 
$$

由于 $M$ 是子空间，可以简化为下面形式：

$$
-f(x)-\lVert x+x_{0} \rVert \leqslant r_{0} \leqslant -f(x)+\lVert x+x_{0} \rVert ,\forall x\in M
$$

我们要求对于上面的不等式有解即要求：

$$
\sup\limits\left\{ -f(x)-\lVert x+x_{0} \rVert :x\in M \right\} \leqslant \inf\left\{ -f(y)+\lVert y+x_{0} \rVert  :y\in M\right\} 
$$

因此任何满足上面不等式条件的 $r_{0}$ 均可以，而上面的等式是显然成立的，因为：

$$
\begin{aligned}
f(y)-f(x)&=f(y-x)\\
&\leqslant \lVert y-x \rVert \\
&\leqslant\lVert y+x_{0} \rVert +\lVert x+x_{0} \rVert 
\end{aligned}
$$

第一个不等号是因为我们假设了 $\lVert f \rVert=1$，第二个不等号是因为三角不等式，综上也就是说我们可以将 $f$ 延拓到 $M_{0}$ 上了，下面来说明可以延拓到 $E$ 上：

`Step 4` 延拓到 $E$

具体的思路可以参考补充的张恭庆《泛函分析讲义》，下面直接给出构造：

$$
\mathscr{F}=\left\{ (h,H) \right\} 
$$

这个集合的 $H$ 是 $E$ 的子空间，$h$ 是定义在其上的连续线性泛函，满足相应的函数值相等和范数相等 (1)，我们定义相关的序关系（显然 $\mathscr{F}$ 非空因为 $(f,M)\subset \mathscr{F}$）：

$$
(h_{1},H_{1})\prec (h_{2},H_{2}),if\ H_{1}\subset H_{2},h_{2}|_{H_{1}}=h_{1}
$$

根据一个全序子集 $C$ 构造，$K=\bigcup\limits_{(h,H)\in C}H,k:K\to \mathbb{K}$，显然 $k$ 也是连续线性泛函，那么我们可以知道 $(k,K)$ 是一个 $C$ 在 $\mathscr{F}$ 的上界

那么利用 Zorn 引理可以得到 $(g,G)$ 是 $\mathscr{F}$ 的最大元，我们只需要说明 $G$ 是 $E$ 即可，可以使用反证法，那么仿照 `Step 3` 的做法，我们可以延拓一个更大的集合 $G_{0}$，那么与最大元矛盾，从而我们可以知道 $g$ 是定义在 $E$ 的连续线性泛函 $f$ 的延拓，并且 $\lVert g \rVert=\lVert f \rVert$

!!! quote "张恭庆的补充"
    直接证明是一种比较粗暴且缺乏动机的做法，数学中常见的做法是从简单的情况出发，然后将定理条件放宽，得到更加 general 的形式，在此 cite 张恭庆老师的《泛函分析讲义》中有关线性泛函的延拓定理的部分内容供增进理解和参考

!!! info "实Hahn-Banach定理"
    为了统一记号做了一些修改，$E$ 是实线性空间，$p$ 是 $E$ 上的次线性泛函，$M$ 是 $E$ 的实线性子空间，$f$ 是 $M$ 的实线性泛函且 $f\leqslant p,\forall x\in M$，那么在 $E$ 上一定存在一个实线性泛函 $g$ 使得：
    (1)$g\leqslant p,\forall x\in E$
    (2)$g(x)=f(x),\forall x\in M$

`Proof.`

$\forall y\in E\setminus M$，记 $M'=\left\{ x+\alpha y,x\in M,\alpha\in \mathbb{R} \right\}$，我们的证明目标是将 $M$ 上的函数 $f$ 延拓到 $E$ 上，我们知道 $E$ 可以由若干个 $M'$ 构成，我们可以先尝试延拓到 $M'$ 上

将延拓后的函数记为 $f_{1}$ 那么有：

$$
f_{1}(x+\alpha y)=f(x)+\alpha f_{1}(y),\forall x\in M,\alpha\in \mathbb{R}
$$

根据题目要求的受到控制条件，我们有 $f_{1}(x+\alpha y)\leqslant p(x+\alpha y)$，可以通过上式两边同时除以 $\lvert \alpha \rvert$，从而推出如下结论（对 $\alpha$ 的正负性进行讨论）：

$$
\begin{aligned}
\frac{1}{\lvert \alpha \rvert } f_{1}(x+\alpha y)&=f_{1}(x'+y)\leqslant p(x'+y),\forall x'\in M\\
\frac{1}{\lvert \alpha \rvert } f_{1}(x+\alpha y)&=f_{1}(x'-y)\leqslant p(x'-y),\forall x'\in M
\end{aligned}
$$

结合上述两个不等式可以推出：

$$
f(x')-p(x'-y) \leqslant f_{1}(y)\leqslant p(x'+y)-f(x')=p(-x''+y)+f(x'')
$$

要想使得结论成立，必须要有：

$$
\sup\limits_{x'\in M}\left\{ f(x')-p(x'-y) \right\} \leqslant \inf\limits_{x''\in M}\left\{ f(x'')+p(-x''+y) \right\} 
$$

这实际是必然成立的，因为 $\forall x',x''\in M$ 有：

$$
\begin{aligned}
f(x')-f(x'')&=f(x'-x'')\\
&\leqslant p(x'-x'')\\
& \leqslant p(x'-y)+p(-x''+y)
\end{aligned}
$$

因此这种延拓是存在的，且不唯一（如果不等式不取等号的话），剩下的问题就是如何从 $M'$ 过度到 $E$，需要利用 Zorn 引理

我们先构造一个半序集：

$$
\mathscr{F}=\left\{ (M_{\Delta},f_{\Delta})|M\subset M_{\Delta}\subset E;f_{\Delta}=f,x\in M;f_{\Delta}\leqslant p,x\in M_{\Delta} \right\} 
$$

序关系按照一般的定义：

$$
(M_{\Delta_{1}},f_{\Delta_{1}})\prec (M_{\Delta_{2}},f_{\Delta_{2}})\implies M_{\Delta_{1}}\subset M_{\Delta_{2}},f_{\Delta_{1}}=f_{\Delta_{2}},x\in M_{\Delta_{1}}
$$

设 $K$ 是 $\mathscr{F}$ 中的任一个全序子集，那么令 $M_{K}=\bigcup\limits_{(M_{\Delta},f_{\Delta})\in K}\left\{ M_{\Delta} \right\}$

所以 $M_{K}$ 是 $E$ 中包含 $M$ 的子空间，且 $f_{K}$ 唯一确定 ($f_{K}=f_{\Delta}$)，$f_{K}\leqslant p$，根据 Zorn 引理 $\mathscr{F}$ 本身存在极大元，下面只需要说明那个极大元就是 $E$ 即可，使用反证法，如若不然，可以构造出另一个 $\mathscr{F}$ 中元素使得出现更大元，由此证毕

!!! note "Riesz representation theorem"
    Every bounded linear functional $F\in C[a,b]^{*}$ if given by a unique normalized function $f\in BV[a,b]$ such that

    $$F(x)=\int_{a}^{b} x(t)df(t),\forall x\in C[a,b] $$

    Moreover, $\lVert F \rVert=V(f)$

`Proof.`

这个定理将泛函分析中的线性泛函和实分析中的有界变差函数联系起来，我个人理解这个定理的含义就是说：任何线性泛函 $F(x)$ 都可以表示为对 $x(t)$ 的加权积分，而 $df(t)$ 需要使用到 $Riemann-Stieltijes$ 积分

## Continuous linear functionals of a TVS

## Exercise 5.2

**(1)** Show that the convex hull of a balanced set is balanced. Give a counter example that the balanced hull of a convex set might not be convex.

**(2)** Show that $0 \in A$ if $A$ is an absorbing set or a balanced set of a vector space $X$.

(3)

Show that every neighborhood $V$ of zero in a TVS $X$ is an absorbing set.

`Proof.`

>先回顾定义然后再完成证明

**1. 定义回顾**

*   **拓扑向量空间 (TVS)**：在这类空间中，向量加法和**标量乘法**都是连续映射。特别是，标量乘法映射 $\Phi: \mathbb{K} \times X \to X$ 定义为 $(\lambda, x) \mapsto \lambda x$ 是连续的。
*   **吸收集 (Absorbing Set)**：集合 $A \subseteq X$ 被称为吸收集，如果对于空间中的任意向量 $x \in X$，都**存在**一个实数 $\delta > 0$，使得当标量 $\lambda$ 满足 $|\lambda| \le \delta$ 时，都有 $\lambda x \in A$。

**2. 详细证明**

只需要根据定义验证即可：

首先任取 $X$ 中的向量 $x$，我们希望对于这个 $x$ 能够找到一个常数 $\delta$ 使得 $\delta x$ 被 $V$ 所吸收，考虑连续性，构造一个映射 $f:\mathbb{K}\to X$，$f(\lambda)=\lambda x$，其中有 $\lambda\in \mathbb{K},x\in X$，显然在 TVS 中这是一个连续函数，那么考虑 $\lambda=0$ 时有 $f(0)=0$，根据邻域和连续函数的定义可知 $f^{-1}(V)$ 必然是 $0$ 的一个邻域，而关于 0 的任何邻域一定存在一个以 0 为中心的开球，因此我们可以知道存在 $\delta>0$，使得$\lvert \lambda \rvert<\delta$的情况下，$\lambda x\in V$，由此即证

**(4)** Let $A = \{x = (x_1, x_2) \in \mathbb{R}^2 : |x_1| \le x_2^2, \text{ or } x_1 = 0, |x_2| \le 1\}$. Show that $A$ is absorbing. Let $\rho_A$ be the sublinear functional of $\mathbb{R}^2$ associated with $A$. Draw the sets $\{x \in \mathbb{R}^2 : \rho_A(x) < 1\}$, $\{x \in \mathbb{R}^2 : \rho_A(x) \le 1\}$ and the interior $\text{int } A$ of $A$. Is $\text{int } A$ an absorbing set in $\mathbb{R}^2$?

**(5)** Let $A = \{x = (x_1, x_2) \in \mathbb{R}^2 : \|x\|_2 \le 1/2 \text{ or } \|x\|_2 = 1\}$. Show that the gauge $\rho_A$ of the non-convex set $A$ agrees with the norm $\|\cdot\|_2$ of $\mathbb{R}^2$.

`Proof.`

首先考虑集合 $A$ 的几何形状：它是以原点为中心半径小于等于$\frac{1}{2}$的闭球与以原点为中心半径等于$1$的单位圆周的并集

仍然是根据定义证明，闵可夫斯基泛函（Gauge）的定义为：

$$ \rho_A(x) = \inf \{ \lambda > 0 : x \in \lambda A \} = \inf \{ \lambda > 0 : \frac{x}{\lambda} \in A \} $$

我们需要证明对于任意 $x \in \mathbb{R}^2$，有 $\rho_A(x) = \|x\|_2$。

$x=0$时显然，根据定义 $\rho_A(0) = 0$，且范数 $\|0\|_2 = 0$。$x \neq 0$，令 $r = \|x\|_2 > 0$。我们需要考察使得 $\frac{x}{\lambda} \in A$ 成立的 $\lambda > 0$ 的集合。

$$
\left\| \frac{x}{\lambda} \right\|_2 \le \frac{1}{2} \quad \text{or} \quad \left\| \frac{x}{\lambda} \right\|_2 = 1 \iff
\frac{r}{\lambda} \le \frac{1}{2} \quad \text{or} \quad \frac{r}{\lambda} = 1
$$

因此，使得 $x \in \lambda A$ 成立的 $\lambda$ 的集合为：

$$ S = \{ \lambda : \lambda = r \} \cup [2r, +\infty) $$

显然：

$$ \inf S = \min \{ r, 2r \} = r $$

因为 $r = \|x\|_2$，所以我们得到：

$$ \rho_A(x) = \|x\|_2 $$

!!! quote "Ans."
    PROOF. For any $0 \neq x_0 \in \mathbb{R}^2$, we have that $x_0 \in \|x_0\|_2 A$, which shows that $\rho_A(x_0) \le \|x\|_2$. On the other hand, if $\lambda < \|x_0\|$, we have that $\|\lambda a\| \le \lambda < \|x_0\|$ for each $a \in A$, which implies that $x_0 \notin \lambda A$. Therefore, $\rho_A(x_0) = \|x_0\|_2$. $\square$

    尽管集合 $A$ 缺失了半径在 $(1/2, 1)$ 之间的部分，导致它不是凸集，但由于它包含了单位圆周（$\|x\|_2=1$），使得 $\lambda = \|x\|_2$ 始终是一个合法的缩放因子。这个因子比将向量压缩进内部小球（$B[0, 1/2]$）所需的缩放因子（$\lambda \ge 2\|x\|_2$）要小。因此，下确界由外部边界决定，正好等于欧几里得范数

**(6)** Let $h$ be a sublinear functional of a real vector space $X$. Prove that $\rho(x) = \max \{h(x), h(-x)\}$ is a seminorm of $X$.

**(7)** Let $c_{00}$ be the vector space of scalar sequences $(x_n)_n$ in which at most finitely many terms $x_n$'s are nonzero. Equip $c_{00}$ with the supnorm $\|(x_n)_n\|_\infty = \sup_n |x_n|$. Let $A = \{(x_n)_n \in c_{00} : |x_n| < 1/n \text{ for } n = 1, 2, \dots\}$. Show that $A$ is an absolutely convex and absorbing set in $c_{00}$, but it is not a norm neighborhood of zero.

**(8)** Show that (5.7) holds for any absorbing set $V$ in a TVS $X$. Give examples such that both inclusions can be strict. Show that if $q$ is a seminorm of $X$ such that

$$ \{x \in X : q(x) < 1\} \subseteq V \subseteq \{x \in X : q(x) \le 1\} $$

then $q = \rho_V$.

**(9)** Prove Lemma 5.2.4.

## Seperation Theorems

## Uniform Boundness Principle

先给出一致有界定理(有时也被称作是$Banach-Steinhaus$定理)的内容：

!!! tip "Uniform Boundness Principle"
    Let $E$ be a Banach space and $F$ a normed space. Let $\left\{ T_{\lambda} \right\}_{\lambda\in\Lambda}\subseteq B(E,F)$ be a family of bounded continuous linear operators. Then the following are equivalent:

    (1) $\left\{ T_{\lambda}:\lambda\in\Lambda \right\}$ is uniformly bounded;
    (2) $\left\{ T_{\lambda}:\lambda\in\Lambda \right\}$ is pointwise bounded

     In other words, if for each $x$ in $E$, there is an $M(x)> 0$ such that

    $$\lVert T_{\lambda}x \rVert \leqslant M(x),\forall\lambda\in\Lambda$$

     then there is a constant $0<M <+\infty$ such that

    $$\lVert T_{\lambda} \rVert \leqslant M,\forall\lambda\in\Lambda$$

让我们听听`Gemini3`如何零基础讲解这个定理：

---

这个定理叫**一致有界性原理 (Uniform Boundedness Principle, UBP)**，也被称为 **Banach-Steinhaus 定理**。它是泛函分析中“三大定理”之一（另外两个是开映射定理和Hahn-Banach定理），非常核心。

通俗地说，这个定理告诉我们：**“如果你能对每一个单独的点都保持有界，那么在某种条件下，你整体上就是有界的。”**

下面我为你拆解里面的重要名词，然后再解释定理在说什么。

(1) Normed Space (赋范空间) $F$
*   **通俗理解**：给向量空间装了一把“尺子”。
*   **定义**：在这个空间里，每一个向量 $x$ 都有一个对应的非负实数，叫**范数 (Norm)**，记作 $\|x\|$。你可以把它理解为向量的“长度”。有了范数，我们就可以讨论收敛、极限和距离了。

(2) Banach Space (巴拿赫空间) $E$
*   **通俗理解**：一个没有“漏洞”的赋范空间。
*   **定义**：它首先是一个赋范空间，其次它是**完备的 (Complete)**。
    *   **什么是完备？** 意思是如果你有一个柯西序列（一串越来越靠近彼此的向量），那么它们的极限点**一定还在这个空间里**，不会跑出去。
    *   *例子*：实数集 $\mathbb{R}$ 是完备的（Banach空间），但有理数集 $\mathbb{Q}$ 就不是（因为有理数序列可以收敛到 $\sqrt{2}$，而 $\sqrt{2}$ 不在 $\mathbb{Q}$ 里）。
    *   **为什么重要？** 这个定理成立的关键就在于 $E$ 必须是 Banach 空间。如果是普通赋范空间，定理不一定成立。

(3) **Linear Operator (线性算子)** $T_\lambda$
*   **通俗理解**：一个保持结构的函数。
*   **定义**：从空间 $E$ 射到空间 $F$ 的映射 $T$。它满足 $T(x+y) = T(x)+T(y)$ 和 $T(\alpha x) = \alpha T(x)$。简单说就是：输入的叠加等于输出的叠加。

(4) **Bounded Operator (有界算子)**
*   **通俗理解**：不会把输入“无限放大”的算子。
*   **定义**：存在一个常数 $C$，使得对于所有向量 $x$，都有 $\|Tx\| \le C\|x\|$。
*   **算子范数 $\|T\|$**：这个 $C$ 的最小值就是算子的范数 $\|T\|$。它代表了这个算子的“最大放大倍率”。在泛函分析中，**线性算子的“连续性”和“有界性”是等价的**。

这个定理最精彩的地方在于区分并联系了两种不同的有界性：

**概念 A：逐点有界 (Pointwise Bounded)**
*   **对应原文**：Condition (2) 和 "$M(x) > 0$" 那部分。
*   **含义**：**固定住一个向量 $x$**。
    当我们用这一堆算子 $\{T_\lambda\}$ 去作用于同一个 $x$ 时，得到的输出结果 $\|T_\lambda x\|$ 不会趋向于无穷大。
    *   注意：对于不同的 $x$，这个界限 $M(x)$ 可以不一样。比如对于 $x_1$，所有算子输出都不超过 10；对于 $x_2$，所有算子输出都不超过 10000。只要是有限的就行。

**概念 B：一致有界 (Uniformly Bounded)**
*   **对应原文**：Condition (1) 和 "$M < +\infty$" 那部分。
*   **含义**：**不看具体的 $x$，只看算子本身**。
    这堆算子 $\{T_\lambda\}$ 每一个都有一个“最大放大倍率” $\|T_\lambda\|$。一致有界是指，这些放大倍率**有一个共同的天花板** $M$。
    *   这意味着，不管你取哪个算子，它的范数都不会超过 $M$。

**一致有界性原理在说什么？**

它说：只要你的定义域 $E$ 是一个 **Banach 空间**（这很重要，空间不能有漏洞），那么：

> **如果你这帮算子，在每一个单独的向量 $x$ 上产生的效果都是有限的（逐点有界），那么这帮算子整体的“放大能力”一定有一个共同的上限（一致有界）。**

**为什么要专门提这个定理？**

因为从直觉上讲，(2) 推不出 (1) 似乎是很正常的。

*   **直觉陷阱**：想象一堆算子，第 1 个把 $x$ 放大 1 倍，第 2 个把 $x$ 放大 2 倍……第 $n$ 个把 $x$ 放大 $n$ 倍。对于任何固定的 $x$，这似乎都是有限数值，但算子的倍率 $n$ 却趋向无穷大。
*   **定理的反转**：UBP 告诉我们，在 Banach 空间里，**上述这种“坏情况”是不可能发生的**。如果每一个点 $x$ 都没有被无限放大，那么算子序列的范数就不可能趋于无穷。

---

## Exercise 5.4

(1) Let $X$ be a Banach space, $Y$ a normed space, and $T_n : X \to Y$ ($n \in \mathbb{N}$) a sequence of linear continuous operators. Prove that the following conditions are equivalent:

(a) If $\sum_{n=1}^\infty x_n$ converges in norm, then $T_n(x_n) \to 0$ in norm;
(b) $\sup_{n\in\mathbb{N}} \|T_n\| < \infty$.

`Proof.`

$(b) \Rightarrow (a)$

假设条件 (b) 成立，即存在常数 $M > 0$ 使得对于所有 $n \in \mathbb{N}$，都有 $\|T_n\| \le M$。假设级数 $\sum_{n=1}^\infty x_n$ 在 $X$ 中收敛。根据级数收敛的必要条件，通项趋于零，并且由于 $T_n$ 是线性的且受范数控制，我们有：

$$ \|T_n(x_n)\| \le \|T_n\| \cdot \|x_n\| \le M \|x_n\| $$

因为当 $n \to \infty$ 时 $\|x_n\| \to 0$，所以 $M\|x_n\| \to 0$。

根据夹逼定理，$\|T_n(x_n)\| \to 0$，即 $T_n(x_n) \to 0$ 在范数下成立。

$(a) \Rightarrow (b)$

我们将使用反证法。假设 (b) 不成立，即算子序列不是一致有界的：

$$ \sup_{n\in\mathbb{N}} \|T_n\| = \infty $$

这意味着我们可以选取一个子序列 $\{T_{n_k}\}$，使得 $\|T_{n_k}\|$ 增长得足够快。具体来说，我们可以归纳地选取下标 $n_k$，使得 $\|T_{n_k}\| > k^3$。

对于每个 $k$，根据算子范数的定义，存在单位向量 $u_k \in X$（即 $\|u_k\|=1$）使得：

$$ \|T_{n_k}(u_k)\| \ge \frac{1}{2} \|T_{n_k}\| > \frac{k^3}{2} $$

现在，我们构造一个序列 $(x_n)$ 如下：

*   当 $n = n_k$ 时，令 $x_{n_k} = \frac{1}{k^2} u_k$；
*   当 $n \neq n_k$（即 $n$ 不在子序列下标中）时，令 $x_n = 0$。

首先检查 $\sum x_n$ 是否收敛。考察其范数和：

$$ \sum_{n=1}^\infty \|x_n\| = \sum_{k=1}^\infty \|x_{n_k}\| = \sum_{k=1}^\infty \left\| \frac{1}{k^2} u_k \right\| = \sum_{k=1}^\infty \frac{1}{k^2} $$

由于级数 $\sum \frac{1}{k^2}$ 收敛，且 $X$ 是Banach 空间，因此级数 $\sum_{n=1}^\infty x_n$ 在 $X$ 中收敛。这满足了条件(a)。

然而，考察像序列 $T_n(x_n)$ 在 $n=n_k$ 时的行为：

$$ \|T_{n_k}(x_{n_k})\| = \left\| T_{n_k}\left(\frac{1}{k^2} u_k\right) \right\| = \frac{1}{k^2} \|T_{n_k}(u_k)\| > \frac{1}{k^2} \cdot \frac{k^3}{2} = \frac{k}{2} $$

当 $k \to \infty$ 时，$\frac{k}{2} \to \infty$，因此 $\|T_{n_k}(x_{n_k})\| \to \infty$。

这就意味着序列 $T_n(x_n)$ 甚至不是有界的，更不可能收敛到 0。

这与条件 (a) 矛盾。因此假设不成立，即证

(2) Let $X$ be a normed space, and $(x_n)_{n\in\mathbb{N}} \subseteq X$ with the property that

$$ \sum_{n=1}^\infty |x^*(x_n)| < \infty, \quad \forall x^* \in X^*. $$

Prove that

$$ \sup_{\|x^*\|\le 1} \sum_{n=1}^\infty |x^*(x_n)| < \infty. $$

`Proof.`

>这道题是一致有界性原理 (Uniform Boundedness Principle, Banach-Steinhaus Theorem) 的一个经典应用。

我们要证明的是对偶空间单位球上级数和的一致有界性。观察题目中给出的条件，对于任意固定的线性泛函，其作用在序列上得到的数值序列是绝对收敛的，这提示我们可以利用序列空间 $\ell_1$ 的性质来处理。

首先定义一个从对偶空间 $X^*$ 到序列空间 $\ell_1$ 的映射 $T$，将每一个泛函 $x^*$ 映射为数列 $(x^*(x_n))$。由题目假设可知，对于任意的 $x^*$，该数列的各项绝对值之和是有限的，因此 $T$ 的像确实落在 $\ell_1$ 空间内。

为了证明 $T$ 的有界性，我们引入一列截断算子 $T_k$。对于每个正整数 $k$，定义 $T_k$ 为只取前 $k$ 项数值、后续项均为零的映射。由于 $T_k(x^*)$ 只是有限项的线性组合，且每个 $x_n$ 在赋范空间中都是固定的向量，因此每一个 $T_k$ 显然都是从 $X^*$ 到 $\ell_1$ 的连续线性算子。

接下来考察这一列算子的收敛性。根据已知条件，对于任意固定的 $x^*$，级数 $\sum |x^*(x_n)|$ 是收敛的。这意味着当截断项数 $k$ 趋于无穷大时，序列 $T_k(x^*)$ 在 $\ell_1$ 的范数意义下收敛于 $T(x^*)$。既然序列逐点收敛，那么对于每一个 $x^*$，算子序列 $\{T_k(x^*)\}$ 都是有界的。

此时我们满足了应用一致有界性原理的所有条件：$X^*$ 作为赋范空间的对偶空间必然是 Banach 空间，且我们有一列定义在 $X^*$ 上的连续线性算子 $\{T_k\}$ 逐点收敛。根据一致有界性原理（Banach-Steinhaus 定理），这列算子的极限算子 $T$ 必然也是有界线性算子。

最后，算子 $T$ 的范数定义为单位球上像的范数的上确界，即 $\sup_{\|x^*\| \le 1} \sum |x^*(x_n)|$。既然我们已经证明了 $T$ 是有界算子，那么这个上确界必然是有限的，从而得证。

!!! quote "Ans."
     令 $T : X^* \to \ell_1$ 定义为

    $$ T(x^*) = (x^*(x_n))_{n\in\mathbb{N}}. $$

假设条件保证了 $T(x^*) \in \ell_1$。令 $T_n : X^* \to \ell_1$ 定义为
>
> $$ T_n(x^*) = (x^*(x_1), \dots, x^*(x_n), 0, \dots). $$
>
那么对于每一个 $x^* \in X^*$，由于级数 $\sum_{n=1}^\infty |x^*(x_n)|$ 收敛，推得 $\sum_{k=n+1}^\infty |x^*(x_k)| \to 0$，即对于每一个 $x^* \in X^*$ 都有 $T_n(x^*) \to T(x^*)$。
$T_n$ 是线性连续的（因为 $\|T_n\| \le \sum_{k=1}^n \|x_k\|$），且 $X^*$ 是一个 Banach 空间，由一致有界性原理可知 $T$ 是线性且连续的。我们有
>
> $$ \|T\| = \sup_{\|x^*\|\le 1} \|T(x^*)\|_{\ell_1} = \sup_{\|x^*\|\le 1} \sum_{n=1}^\infty |x^*(x_n)| $$
>
并且 $\|T\| < \infty$。 $\square$

(3) Let $1 < p < \infty$, and $1 < q < \infty$ be the conjugate of $p$, that is, $\frac{1}{p} + \frac{1}{q} = 1$. Let $X = (C[0, 1], \|\cdot\|_p)$, where

$$ \|f\|_p = (\int_0^1 |f(x)|^p dx)^{\frac{1}{p}}, \quad \forall f \in C[0, 1]. $$

Let $(b_n)_{n\in\mathbb{N}} \subseteq [0, 1], (c_n)_{n\in\mathbb{N}} \subseteq [0, 1]$ with $b_n \le c_n$ for each $n \in \mathbb{N}$. Let $(a_n)_{n\in\mathbb{N}} \subseteq \mathbb{K}$. For any $n \in \mathbb{N}$, define $x_n^* : X \to \mathbb{K}$ by

$$ x_n^*(f) = a_n \int_{b_n}^{c_n} f(x)dx, \quad \forall f \in C[0, 1]. $$

(a) Prove that $x_n^* \in X^*$ for each $n \in \mathbb{N}$.
(b) Prove that the sequence $(x_n^*)_{n\in\mathbb{N}} \subseteq X^*$ is pointwise bounded if and only if $(a_n(c_n - b_n))_{n\in\mathbb{N}}$ is bounded.
(c) Prove that the sequence $(x_n^*)_{n\in\mathbb{N}} \subseteq X^*$ is uniformly bounded if and only if $(a_n(c_n - b_n)^{1/q})_{n\in\mathbb{N}}$ is bounded.
(d) Prove that we can find $(z_n^*)_{n\in\mathbb{N}} \subseteq X^*$ pointwise bounded which is not uniformly bounded.

## Open Mapping Theorem and Closed Graph Theorem























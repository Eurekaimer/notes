# 绪论

!!! tldr "Outline"
    + Zorn's lemma
    + Vector spaces
    + Metric spaces
    + Topological spaces
    + Topological Vector Spaces

声明：关于本书中所采用的 $\mathbb{K}$，指代 $\mathbb{R}$ 或 $\mathbb{C}$

## Zorn's lemma

我们先给出二元关系的定义：

假设我们有一个非空集合 $I$，那么将 $I$ 上的二元关系 $\preceq$ 定义为 $I\times I$ 的一个子集，如果 $(x,y)\in\preceq$，那么记作 $x\preceq y$

在二元关系的基础上满足额外的三条性质则称其偏序，给出偏序的定义：

二元关系满足：

+ Reflexive $\forall x.x\preceq x$
+ Antisymmetry if $x\preceq y, y\preceq x$，then $x=y$
+ Transitivity if $x\preceq y, y\preceq z$, then $x\preceq z$

则称其为偏序，显然集合的包含关系是一个偏序，额外补充 Direct Partial Ordering（定向偏序）的定义，这是一个具有特定性质的偏序关系：对于 $I$ 中任意两个元素 $x,y$，存在 $I$ 中元素 $z$ 使得 $x\preceq z,y\preceq z$


!!! example "字典序，lexicographical order"
    对于 $\mathbb{R}^{2}$ 上的一个偏序定义如下：

    如果$x_{1}<x_{2}$或者在$x_{1}=x_{2},y_{1}\leqslant y_{2}$，那么称为$(x_{1},y_{1})\preceq (x_{2},y_{2})$

为了下面阐述Zorn引理，我们还需要一些特殊概念：

+ 上界(Upper bound) $\forall y\in Y,y\preceq b(b\in X)$记作$Y\preceq b$，$b$称为$Y$的上界
+ 上确界(Supremum) 参考数学分析
+ 极大元(Maximal element) 如果$z\preceq a\implies z=a$，即$X$中不存在严格大于$z$的元素
+ 链(Chain) $X$的子集$C$如果满足其中任何两个元素均可比较($a\preceq b,b\preceq a$)，称为链(或者全序子集)

下面就是本节最重要的内容：

!!! tip "Zorn's Lemma"
     Let $(X, \preceq)$ be a partially ordered set such that every nonempty chain $C \subseteq X$ admits an upper bound (in $X$). Then $X$ has a maximal element.

等价形式：

!!! tip "Axiom of Choice"
     Let $I$ and $X$ be two nonempty sets and, for each element $i \in I$, let $X_i \subseteq X$ be a nonempty subset. Then there exists a map $g : I \to X$ such that $g(i) \in X_i$ for every $i \in I$.


Note that both Theorems 1.1.8 and 1.1.9 are axioms in the ZFC set theory system. One cannot prove or disprove any one of them (by other axioms in ZFC). However, they are equivalent.


$\mathbf{Remark:}$The Axiom of Choice is equivalent to Zorn's Lemma. In other words, we can derive either one from the other.

>实际上并不只有 Zorn 引理和选择公理等价，还有良序原理 (Well-Ordering Principle)，豪斯多夫极大性原理 (Hausdorff Maximality Principle)，具体的证明链参考 Folland, Real Analysis

## Vector spaces

基本上是照抄了一下高代的定义，大多数正常的数学系/统计系学生都不会忘记向量空间的定义，在此不赘述（加法和数乘运算的 8 条性质）

给出一些例子（很多记号后续也会使用）


!!! example "elementary examples"
    (a) $\mathbb{K}^{n}$，$n$ 元的向量空间
    (b) $\mathbb{K}^{\mathbb{N}}=\left\{ (x_{1},\dots,x_{n},\dots): x_{i}\in \mathbb{K},\forall i\in \mathbb{N} \right\}$ 无穷维向量空间
    (c) $\mathbb{C}[0,1]$：所有的定义在 $[0,1]$ 上的 $\mathbb{K}-valued$ 函数
    (d) 定义在矩阵上的向量空间 $M_{n}(\mathbb{K})$

如果向量空间内部非空子集仍然满足加法和数乘的封闭，称其为子空间

本节唯一新的定义就是 $Hamel$ 基：

A subset $B$ of a vector space $X$ is called a Hamel basis for $X$ if $B$ is linearly independent and spans $X$. In this case, every element $x\in X$ can be written uniquely as a finite linear combination $x=\sum\limits_{i=1}^{k}\lambda_{i}b_{i}$ for some scalars $\lambda_{1},\dots,\lambda_{k}$ and some basic vectors $b_{1},\dots,b_{k}$ from $B$

我们需要思考 $Hamel$ 基与我们在高等代数中学习的基有什么不同？实际上就是没有区别，之所以记为 $Hamel$ 基只是因为在泛函分析中还存在 Schauder 基/Hilbert 基（拓扑基/Topological Basis），可以应用于无限维空间，而 $Hamel$ 基只适用于有限维空间

$\mathbf{R emark:}$ 任何非零向量空间 $X$ 都有 $Hamel$ 基（对于无穷维仍然成立）

## Exercises 1.2

(1) If $X$ is a vector space over $\mathbb{K}$ and $M$ is a subspace of $X$ define an equivalent relation on $X$ by

$$ x \sim y \iff x - y \in M. $$

The quotient space $X/M$ is the set of all equivalent classes

$$ [x] = \{x + m : m \in M\} $$

for $x \in X$. Show that this is a vector space over $\mathbb{K}$ if we define

$$ [x] + [y] = [x + y], \quad \lambda[x] = [\lambda x], \quad \forall x, y \in X, \lambda \in \mathbb{K}, $$

and the quotient $Q : x \in V \mapsto [x] \in X/M$ is linear.

`Proof.`

我们可以利用 $M$ 是子空间，所以有：

$$
\begin{aligned}
{[x]}+[y]&=x+M+y+M=x+y+M=[x+y]\\
\lambda[x]&=\lambda x+\lambda M=\lambda x+M=[\lambda x]
\end{aligned}
$$

所以是向量空间

商映射的线性性：

对于任意 $x, y \in X$

$$
\begin{aligned}
Q(x + y) &= [x + y]  \\
&= [x] + [y]   \\
&= Q(x) + Q(y) 
\end{aligned}
$$


对于任意 $x \in X$ 和 $\lambda \in \mathbb{K}$

$$
\begin{aligned}
Q(\lambda x) &= [\lambda x]  \\
&= \lambda [x]  \\
&= \lambda Q(x) 
\end{aligned}
$$


(2) Let $Z$ be a linearly independent subset of a vector space $X$. Show that $X$ has a Hamel basis containing $Z$.

`Proof.`

由于 $Z$ 是 $X$ 上线性独立子集，令 $P$ 作为 $X$ 上所有包含 $Z$ 的线性独立子集的集合，使用集合包含关系定义 $P$ 上的一个偏序关系，那么显而易见的 $P$ 内任意全序子集一定有上界，根据 Zorn 引理可知 $P$ 有最大元，记为 $M$，也就是有最大的线性独立子集包含 $Z$，并且它的基可以生成整个空间，否则可以找到 $x_{0} \not\in M$，与 $M$ 组合出额外的线性独立子集，与 $M$ 是最大元矛盾，即证一定有 $X$ 上一组 $Hamel$ 基包含 $Z$

(3) In Example 1.2.2, show that if $\mathbb{K} = \mathbb{R}$ then every continuous real-valued function $f$ with $\int_0^1 f(x) \, dx = 0$ vanishes somewhere in $[0, 1]$.


!!! example "Example 1.2.2"
    The set

    $$\left\{ f\in C[0,1]:\int_{0}^{1} f(t) \, dt =0 \right\} $$

    is a linear subspace of $C[0,1]$

`Proof.`

直接使用积分中值定理可知 $f\in C[a,b]$，$\exists c\in(a,b)$ 使得：

$$
\int_{a}^{b} f(x) \, dx=f(c)(1-0)=0\implies f(c)=0
$$

## Metric spaces

度量空间是一种很宽泛的定义，只需要定义一个集合上的距离函数，满足非负性，对称性，三角不等式即可，然后我们就可以将配备这种距离函数的集合称为度量空间


## Exercises 1.3

!!! question "(1)"
    Show that if $d$ is a metric on$X$, then so is $\widetilde{d}$, where

    $$
    \widetilde{d}(x,y) = \frac{d(x,y)}{1+d(x,y)}, \quad \forall x,y \in X.
    $$


`Proof.`

我们需要验证 $\widetilde{d}$ 满足度量的三个性质：非负性与恒等性、对称性、三角不等式

**1. 非负性与恒等性**

由于 $d$ 是度量，对于任意 $x,y \in X$，有 $d(x,y) \ge 0$。因此 $\widetilde{d}(x,y) = \frac{d(x,y)}{1+d(x,y)} \ge 0$

此外，$\widetilde{d}(x,y) = 0 \iff \frac{d(x,y)}{1+d(x,y)} = 0 \iff d(x,y) = 0$

因为 $d$ 是度量，所以 $d(x,y)=0 \iff x=y$。故 $\widetilde{d}(x,y)=0 \iff x=y$

**2. 对称性**

由于 $d(x,y) = d(y,x)$，直接可得：

$$
\widetilde{d}(x,y) = \frac{d(x,y)}{1+d(x,y)} = \frac{d(y,x)}{1+d(y,x)} = \widetilde{d}(y,x).
$$

**3. 三角不等式**

考虑函数 $f(t) = \frac{t}{1+t} = 1 - \frac{1}{1+t}$。因为 $f'(t) = \frac{1}{(1+t)^2} > 0$，所以 $f(t)$ 在 $[0, \infty)$ 上是单调递增函数，对于任意 $x, y, z \in X$，由 $d$ 的三角不等式知 $d(x,y) \le d(x,z) + d(z,y)$

利用 $f(t)$ 的单调性：

$$
\widetilde{d}(x,y) = f(d(x,y)) \le f(d(x,z) + d(z,y)) = \frac{d(x,z) + d(z,y)}{1 + d(x,z) + d(z,y)}
$$

将上式右边拆分：

$$
\frac{d(x,z) + d(z,y)}{1 + d(x,z) + d(z,y)} = \frac{d(x,z)}{1 + d(x,z) + d(z,y)} + \frac{d(z,y)}{1 + d(x,z) + d(z,y)}
$$

由于分母变小分数值变大有：

$$
\frac{d(x,z)}{1 + d(x,z) + d(z,y)} \le \frac{d(x,z)}{1 + d(x,z)} = \widetilde{d}(x,z)
$$

同理：
$$
\frac{d(z,y)}{1 + d(x,z) + d(z,y)} \le \frac{d(z,y)}{1 + d(z,y)} = \widetilde{d}(z,y)
$$

综上所述，$\widetilde{d}(x,y) \le \widetilde{d}(x,z) + \widetilde{d}(z,y)$

因此，$\widetilde{d}$ 是 $X$ 上的度量


!!! question "(2)"
    If $(X, d_X)$ and $(Y, d_Y)$ are metric spaces, show that $(X \times Y, \rho_s)$ is a metric space, where $\rho_s$ is any one of the metrics defined by

    $$
    \rho_s((x_1, y_1), (x_2, y_2))
    = \begin{cases}
    [d_X(x_1, x_2)^s + d_Y(y_1, y_2)^s]^{\frac{1}{s}}, & \text{if } 1 \le s < \infty, \\
    \\
    \max \{d_1(x_1, x_2), d_2(y_1, y_2)\}, & \text{if } s = \infty.
    \end{cases}
    $$

    Furthermore, if $X, Y$ are separable, show that $(X \times Y, \rho_s)$ is separable.

`Proof.`

根据题意我们的目标是证明$(X \times Y, \rho_s)$是度量空间及可分性

**第一部分：证明它是度量空间**

需要证明$\rho_s$满足三角不等式（非负性和对称性由$d_X, d_Y$的性质及范数定义显然成立）：

令$u = (x_1, y_1)$, $v = (x_2, y_2)$, $w = (x_3, y_3)$为$X \times Y$中的点。

**情形 1: $1 \le s < \infty$**
$\rho_s$的形式类似于$\mathbb{R}^2$上的$l_s$范数。
根据$d_X$和$d_Y$的三角不等式：
$$
d_X(x_1, x_3) \le d_X(x_1, x_2) + d_X(x_2, x_3)
$$
$$
d_Y(y_1, y_3) \le d_Y(y_1, y_2) + d_Y(y_2, y_3)
$$
我们需要证明$\rho_s(u, w) \le \rho_s(u, v) + \rho_s(v, w)$。
令$A = (d_X(x_1, x_2), d_Y(y_1, y_2))$，$B = (d_X(x_2, x_3), d_Y(y_2, y_3))$。
根据闵可夫斯基不等式（Minkowski inequality）对于$\mathbb{R}^2$上的$s$-范数$\|(a,b)\|_s = (a^s+b^s)^{1/s}$：
$$
\|A + B\|_s \le \|A\|_s + \|B\|_s
$$
这即是三角不等式成立的保证。

**情形 2: $s = \infty$**
$\rho_\infty(u, w) = \max\{d_X(x_1, x_3), d_Y(y_1, y_3)\}$。
利用$d_X(x_1, x_3) \le d_X(x_1, x_2) + d_X(x_2, x_3) \le \rho_\infty(u, v) + \rho_\infty(v, w)$。
同理$d_Y(y_1, y_3) \le \rho_\infty(u, v) + \rho_\infty(v, w)$。
两者的最大值自然也满足该不等式。

**第二部分：证明可分性**

**定义：** 一个度量空间是可分的，如果它包含一个可数的稠密子集。

**证明：**
设$X$和$Y$是可分的。
令$A = \{a_1, a_2, \dots\}$是$X$中的可数稠密子集。
令$B = \{b_1, b_2, \dots\}$是$Y$中的可数稠密子集。
考虑乘积集合$S = A \times B = \{(a_i, b_j) : a_i \in A, b_j \in B\}$。
由于$A, B$可数，它们的笛卡尔积$S$也是可数的。

我们需要证明$S$在$(X \times Y, \rho_s)$中稠密。

对于任意$(x, y) \in X \times Y$和任意$\epsilon > 0$：

1.  因为$A$稠密，存在$a_i \in A$使得$d_X(x, a_i) < \delta$。
2.  因为$B$稠密，存在$b_j \in B$使得$d_Y(y, b_j) < \delta$。


我们来选取合适的$\delta$。
**当$1 \le s < \infty$时：**
$$
\rho_s((x,y), (a_i, b_j)) = [d_X(x, a_i)^s + d_Y(y, b_j)^s]^{1/s} < [\delta^s + \delta^s]^{1/s} = \delta \cdot 2^{1/s}
$$
取$\delta = \frac{\epsilon}{2^{1/s}}$，则$\rho_s < \epsilon$。

**当$s = \infty$时：**
$$
\rho_\infty((x,y), (a_i, b_j)) = \max\{d_X(x, a_i), d_Y(y, b_j)\} < \max\{\delta, \delta\} = \delta
$$
取$\delta = \epsilon$，则$\rho_\infty < \epsilon$。

由此可见，对于任意$(x, y)$和$\epsilon$，都能在$S$中找到点使其距离小于$\epsilon$。故$S$是稠密的。
因为$S$是可数稠密子集，所以$(X \times Y, \rho_s)$是可分的。


## Topological spaces


关于Box topology和Product topology的问题可以参考MSE上的一个回答：[Why are box topology and product topology different on infinite products of topological spaces?](https://math.stackexchange.com/questions/871610/why-are-box-topology-and-product-topology-different-on-infinite-products-of-topo)

我们需要知道的仅仅是乘积拓扑是能够相容的最弱的拓扑，而与之相对应的是商拓扑是最强的拓扑



## Exercise 1.4



!!! question "(1)"
    Suppose that $(F_\lambda)_{\lambda \in \Lambda}$ is a family of closed subsets of a compact metric space $X$ with the property that the intersection of any finite number of the sets has non-empty intersection. Show that $\bigcap_{\lambda \in \Lambda} F_\lambda$ is non-empty.

    一个比较简单的利用反证法证明的逻辑训练

`Proof.`

Suppose on the contrary that $\bigcap_{\lambda \in \Lambda} F_\lambda$ is empty. Then

$$X = X \setminus \bigcap_{\lambda \in \Lambda} F_\lambda = \bigcup_{\lambda \in \Lambda} X \setminus F_\lambda.$$

So $\{X \setminus F_\alpha\}_{\alpha \in \Lambda}$ is an open cover of $X$. Since $X$ is compact, there is finite subcover,

$$X = \bigcup_{j=1}^n X \setminus F_{\lambda_j} = X \setminus \bigcap_{j=1}^n F_{\lambda_j};$$

this implies that $\bigcap_{j=1}^n F_{\lambda_j} = \emptyset$, but this contradicts the assumption that such an intersection is always non-empty. 


!!! question "(2)"
    Give an example in which non-equivalent metrics define the same topology.

`Sol.`

考虑实数集 $X = \mathbb{R}$。

*   **度量 $d_1$ (标准欧几里得度量):**
    $$d_1(x, y) = |x - y|$$
*   **度量 $d_2$ (有界度量):**
    $$d_2(x, y) = \frac{|x - y|}{1 + |x - y|}$$
    （或者简单的 $d_2(x, y) = \min\{1, |x - y|\}$）

为什么它们定义了相同的拓扑？因为拓扑只关心“局部”发生了什么，当 $|x - y| \to 0$ 时，分母 $1 + |x - y| \approx 1$，所以 $d_2(x, y) \approx |x - y| = d_1(x, y)$。

这意味着：

1.  如果在 $d_1$ 意义下 $x_n \to x$，那么在 $d_2$ 意义下也有 $x_n \to x$。
2.  反之亦然。

收敛性一样，开集也就一样。

为什么它们“不等价”（非强等价）？

*   **$d_1$ 是无界的**：两点间距离可以无限大（比如 $1$ 和 $10000$）。
*   **$d_2$ 是有界的**：任意两点间距离永远小于 1。
*   你无法找到一个常数 $C$，使得 $|x - y| \le C \cdot \frac{|x - y|}{1 + |x - y|}$ 对所有 $x, y$ 成立（当 $|x-y|$ 很大时，左边趋向无穷，右边趋向 $C$）。




## Topological Vector Spaces

这部分比较重要，我将额外开一个小文章记录（这类在大多数教科书中总是提及的基本概念都会采取这种形式，以便于在其他文章中直接援引）

[[拓扑向量空间 (TVS)]]

实际上就是一个向量空间赋予一个向量拓扑，构成一个二元组 $(X,\mathcal{T})$ 即可


## Exercises 1.5












# Lecture 5 - Classification of States

!!! tldr "Syllabus"
    + 可约性
    + 周期性
    + 常返性

## 可约性与周期性


!!! note "Definition 5.1(可达)"
    设 $i,j\in E$ 是 Markov 链中的两个状态，如果 $\exists n\geqslant 0$ 使得从 $i$ 出发经过 $n$ 步转移可以到达 $j$($P_{ij}>0$)，则称状态 $i$ 可达 (accessible)$j$，记作 $i\to j$，如果 $i$ 不可达 $j$，即 $\forall n>0,P_{ij}^{n}=0$,记作 $i\not\to j$


注：可达具有传递性，设 $i,j,k\in E，n,m \geqslant 0$，使得 $P_{ij}^{(n)}>0,P_{jk}^{(m)}>0$，则

$$
P_{ik}^{(n+m)}=\sum\limits_{j\in E}P_{ij}^{(n)}P_{jk}^{(m)}\geqslant P_{ij}^{(n)}P_{jk}^{(m)}>0
$$

即若 $i\to j,j\to k$，那么 $i\to k$


!!! note "Definition 5.2(互通)"
    设 $i,j\in E$ 是 Markov 链中两个状态，如果 $\exists n,m \geqslant 0$ 使得

    $$P_{ij}^{(n)}>0,P_{ji}^{m}>0$$

    就称 $i$ 和 $j$ 互通 (communicate),记作 $i \leftrightarrow j$


!!! note "命题 5.3"
    互通是状态空间 $E$ 上的一个等价关系，即
    + 自反性
    + 对称性
    + 传递性 (Proved by CK-Equation)

因此所有互通的状态构成等价类，称这样的等价类为互通类 (Communication Class)


!!! note "Definition 5.4(不可约性 irreducible)"
    一个 Markov 链称为不可约的 (irreducible)，如果它的互通类只有一个，即所有状态都是互通的

注 1. 矩阵的不可约性

设 $A\in \mathbb{R}^{n\times n}$ 为一个 $n$ 阶方阵，称 $A$ 可约 (reducible),如果存在置换矩阵 $B$,使得

$$
B^{T}AB=\begin{vmatrix}
C & D \\
O & E
\end{vmatrix}
$$

称这个矩阵是可约的，否则称 $A$ 不可约

!!! note "推论"
    一个 Markov 链不可约 $\iff$ 它的转移矩阵不可约



!!! note "Definition 5.5(周期性)"
    状态 $i\in E$ 的周期 (period) 定义为

    $$ d_{i} \overset{\Delta}{=} gcd\left\{  {n,P_{ii}^{(n)}>0}\right\}$$

    若 $d_{i}=1$，则称状态 $i$ 是非周期的


!!! note "命题 5.6"
    若 $i \leftrightarrow j$，则 $d_{i}=d_{j}$

`Proof.`

由于 $i \leftrightarrow j$，故 $\exists n,m \geqslant 0$,使得 $P_{ij}^{(n)}>0,P_{ij}^{(m)}>0$

又 $d_{j}$ 为状态 $j$ 的周期，所以 $\exists k$，$P_{jj}^{(kd_{j})}>0,P_{jj}^{((k+1)d_{j})}>0$

那么

$$\begin{aligned}
P_{ii}^{(m+kd_{j}+n)}&\geqslant P_{ij}^{(m)}P_{jj}^{(kd_{j})}P_{ji}^{(n)}>0\\
P_{ii}^{(m+(k+1)d_{j}+n)}&\geqslant P_{ij}^{(m)}P_{jj}^{((k+1)d_{j})}P_{ji}^{(n)}>0
\end{aligned}$$

即 $d_{i} \mid(m+kd_{j}+n),d_{i}\mid(m+(k+1)d_{j}+n)$

故 $d_{i}\mid d_{j}$，同理可证 $d_{j}\mid d_{i}$,故 $d_{i}=d_{j}$

利用周期性，可以利用互通性对状态进行进一步分类，下面不妨先考虑只有一个互通类的 Markov 链也就是不可约的 Markov 链

由不可约性，由命题 5.6，每个状态周期相同，不妨记为 $d$，给定某个状态之后 $i_{0}$，我们定义下面集合

$$
\begin{aligned}
C_{0}&\overset{\Delta}{=}\left\{ j\in E,P_{ij}^{(n)}>0,n\equiv 0 (mod\ d) \right\} \\
C_{1}&\overset{\Delta}{=}\left\{ j\in E,P_{ij}^{(n)}>0,n\equiv 1 (mod\ d) \right\} \\
\dots&\\
C_{d-1}&\overset{\Delta}{=}\left\{ j\in E,P_{ij}^{(n)}>0,n\equiv d-1 (mod\ d) \right\} 
\end{aligned}
$$

根据模的余数分类构成了一个最小剩余

那么状态集合 $E=C_{0}\bigcup C_{1}\bigcup\dots \bigcup C_{d-1}$


!!! note "命题 5.7"
    若状态 $i\in C_{p}$，且 $P_{ij}>0$，那么 $j\in C_{p+1}$

`Proof.`

由于 $i\in C_{p}$,则存在 $a=kd+p$，其中 $k\in N$ 使得 $P_{i_{0}i}^{(a)}>0$

对 $a+1=kd+p+1$

$$
P_{i_{0}i}^{(n+1)}\geqslant P_{i_{0}i}^{(a)}P_{ij}>0
$$

即 $j\in C_{p+1}$

注：当 $0\leqslant k \leqslant d-1$ 时，从 $C_{k}$ 中的状态转移到 $C_{k+1}$，然后从 $C_{d-1}$ 回到 $C_{0}$，即经过适当的行列置换，它的转移矩阵可以表示为：


$$
P=\begin{pmatrix}
0 & A_{0,1} & \dots & 0 & 0 \\
0 & 0 & A_{1,2} & \dots & 0 \\
\dots \\
A_{d-1,0} & \dots & \dots & \dots & 0
\end{pmatrix}
$$


!!! question "思考"
    一步转移矩阵如上，那么 n 步转移矩阵 ($P^{2},P^{3},\dots$)？


## 常返性

George Polyo

!!! note "Definition 5.8(首达时)"
    设 $\left\{ X_{n} \right\}$ 为一个状态空间为 $E$ 的 Markov 链，从 $n=0$ 出发首次达到状态 $j$ 的时刻，我们记为

$$\tau_{j}\overset{\Delta}{=}\inf \left\{ n \geqslant 1: X_{n}=j \right\} $$
>若 $\left\{ n \geqslant 1,X_{n}=j \right\}=\emptyset$,则 $\tau_{j}\overset{\Delta}{=}\infty$


!!! note "Definition 5.9(首达概率)"
    设 $\left\{ X_{n} \right\}$ 为一个状态空间为 $E$ 的 Markov 链，则经过 $n$ 步从状态 $i$ 到 $j$ 的首达概率为

    $$\begin{aligned}
    f_{ij}^{(n)}&\overset{\Delta}{=}P\left( \tau_{j}=n\mid X_{0}=i \right) \\
    &=P\left(  X_{n}=j,X_{n-1}\neq j \dots ,X_{1}\neq j \mid X_{0}=i\right)
    \end{aligned}$$


注：定义事件 $A_{n}\overset{\Delta}{=}\left\{ X_{n}=j,X_{n-1}\neq j \dots ,X_{1}\neq j \mid X_{0}=i \right\}$

则 $\left\{ A_{n} \right\}$ 互不相容的，即 $A_{n}\bigcap A_{m}=\emptyset,\forall n,m$,那么从状态 $i$ 出发迟早到达 $j$ 的概率为

$$\begin{aligned}
f_{ij}^{(n)}&\overset{\Delta}{=}P\left( \tau_{j}< \infty\mid X_{0}=i \right)\\
&=P\left( \bigcup\limits_{k=1}^{\infty}A_{k}\mid X_{0}=i \right)\\
&=\sum\limits_{n=1}^{\infty} f_{ij}^{(n)}\leqslant 1
\end{aligned}$$


!!! note "Definition 5.10(常返性)"
    如果$f_{ii}=\sum\limits_{n=1}^{\infty}f_{ii}^{(n)}=1$，则称状态$i$是常返的(Recurrent)，否则称$i$为暂留的(Transient)，或者非常返的(Nonrecurrent)).


虽然我们通过$f_{ij}$ 来定义常返性，但$f_{ij}^{(n)}$ 的计算并不容易，所以我们想要通过n步转移概率$P_{ij}^{(n)}$ 来计算，通过$P_{ij}^{(n)}$ 来获得状态是否是常返的判据，这即是下面的定理：



!!! tip "Theorem 5.11"
    状态$i$是常返态的充分必要条件是

    $$\begin{aligned}\sum_{n=0}^{\infty}P_{ii}^{(n)}=\infty\end{aligned}$$


`Proof.`

注意到事件

$$A_n\triangleq\{X_n=j,X_{n-1}\neq j,\cdots,X_1\neq j|X_0=i\}$$


互不相容，考虑基于此对样本轨道进行分解

$$\begin{aligned}
P_{ij}^{(n)}&=P(X_{n}=j|X_{0}=i) \\
&=\sum_{k=1}^nP(X_n=j,X_k=j,X_{k-1}\neq j,\cdots,X_1\neq j|X_0=i) \\
&=\sum_{k=1}^{n}P(X_{n}=j|X_{k}=j,X_{k-1}\neq j,\cdots,x_{1}\neq j,X_0=i)P(X_{k}=j,X_{k-1}\neq j,\cdots|X_0=i)  \\
&\overset{Markov}{=}\sum_{k=1}^{n}P(X_{n}=j|X_{k}=j)P(X_{k}=j,X_{k-1}\neq j,\cdots,X_{1}\neq j|X_{0}=i) \\
&=\sum_{k=1}^{n}f_{ij}^{(k)}P_{jj}^{(n-k)}
\end{aligned}$$

于是根据形式可以考虑卷积$\to$母函数方法(记号：$\delta_{ij}=1(i=j)$，否则为0)



$$\begin{aligned}
\sum_{n=0}^{\infty}P_{ij}^{(n)}z^{n}& =\delta_{ij}+\sum_{n=1}^{\infty}P_{ij}^{(n)}z^{n}  \\
&=\delta_{ij}+\sum_{n=1}^{\infty}\sum_{k=1}^{n}f_{ij}^{(k)}P_{jj}^{(n-k)}z^{n} \\
&=\delta_{ij}+\sum_{n=1}^{\infty}\sum_{k=1}^{n}(f_{ij}^{(k)}z^{k})(P_{jj}^{(n-k)}z^{n-k}) \\
&\overset{Abel}{=}\delta_{ij}+\sum_{k=1}^{\infty}(f_{ij}^{(k)}z^{k})\sum_{n=k}^{\infty}(P_{jj}^{(n-k)}z^{n-k}) \\
&=\delta_{ij}+\sum_{k=1}^\infty(f_{ij}^{(k)}z^k)\sum_{m=0}^\infty(P_{jj}^{(m)}z^m)
\end{aligned}$$


那么令$j=i$


$$\begin{aligned}\sum_{n=0}^\infty P_{ii}^{(n)}z^n=1+\sum_{k=1}^\infty(f_{ii}^{(k)}z^k)\sum_{n=0}^\infty(P_{ii}^{(n)}z^n)\end{aligned}$$




即

$$\begin{aligned}\sum_{n=0}^{\infty}P_{ii}^{(n)}z^n=\frac{1}{1-\sum_{k=1}^{\infty}f_{ii}^{(k)}z^k}\end{aligned}$$

令$z\to1^{-}$ ，由[Abel定理](https://en.wikipedia.org/wiki/Abel%27s_theorem)可得


$$\begin{aligned}\sum_{n=1}^{\infty}P_{ii}^{(n)}&=\frac{1}{1-f_{ii}}\end{aligned}$$


那么$f_{ii}=1$即等价于$\sum\limits_{n=0}^{\infty}P_{ii}^{(n)}=\infty$

注1．另一种概率方法的证明：

由$f_{ii}$的定义，Markov链$\{X_n\}$从状态出发，最终能回到的概率为$f_{ii}$，那么一直回不到的概率为$1-f_{ii}$

由于Markov性，所以在回到$i$之后，过程在概率意义下又重新开始，那么$X_{0}=i$ 开始，Markov链$\{X_n\}$ 恰有$n$ 次处于状态$i$服从几何分布，$P\{X_n$处于状态i的次数$=n\mid X_{0}=i\}=f_{ii}^{n-1}(1-f_{ii})$

所以，从$i$出发以后，处于$i$状态的期望为

$$\begin{aligned}\sum_{n=1}^{\infty}nf_{ii}^{n-1}(1-f_{ii})=\frac{1}{1-f_{ii}}\end{aligned}$$

那么$i$是常返态，当且仅当$E[X_{n}$处于状态i的次数$\left|\begin{array}{c}X_{0}=i\end{array}\right]=\infty$，下面证明期望与所求概率和相等：

记随机序列$I_{n}$为：当$X_{n}=i$时$I_{n}=1$，否则为0，那么$\sum_{n=0}^{\infty}I_{n}$表示$I_{n}$处于状态$i$的次数，则有

$$\mathbb{E}\left[\sum_{n=1}^\infty I_n|X_0=i\right]=\sum_{n=1}^\infty\mathbb{E}[I_n|X_0=i]=\sum_{n=1}^\infty P(X_n=i|X_0=i)=\sum_{n=1}^\infty P_{ii}^{(n)}$$

故状态是常返态的充分必要条件是$\sum_{n=0}^{\infty}P_{ii}^{(n)}=\infty$($n=0$时概率有界量不影响证明-无穷大)

注2．从注1的证明过程中，我们可以看出若状态$i$是暂留的，则Markov链只会有限次处于状态$i$ ，可以具体表述为下面推论。

!!! note "Corollary 5.12"
    如果状态$j$是暂留的，那么对任意状态$i$

    $$P_{ij}^{(n)}\to0,\quad n\to\infty $$


`Proof`

若$j=i$ 是暂留的，我们已经证明：

$$\begin{aligned}\sum_{n=1}^{\infty}P_{ii}^{(n)}=\frac{1}{1-f_{ii}}<\infty\end{aligned}$$

所以级数的通项$\lim\limits_{ n \to \infty }P_{ij}^{(n)}=0$(收敛的必要条件)

另一方面，若$j\neq i$ 是暂留的，我们已经证明：

$$\begin{aligned}\sum_{n=0}^\infty P_{ij}^{(n)}=\delta_{ij}+\sum_{k=1}^\infty f_{ij}^{(k)}\sum_{n=0}^\infty P_{jj}^{(n)}=\sum_{n=1}^\infty f_{ij}^{(n)}\sum_{n=0}^\infty P_{jj}^{(n)}<\infty\end{aligned}$$

所以级数的通项$\lim\limits_{ n \to \infty }P_{ij}^{(n)}=0$

注3．常返与非常返具有类的性质

!!! note "Corollary 5.13"
    若状态$i$是常返的，且$i\leftrightarrow j$ ，则$j$ 是常返的

`Proof`

由于$i\leftrightarrow j$ ，则存在$m$ 和$n$ 使得

$$P_{ij}^{(n)}>0,\quad P_{ji}^{(m)}>0$$

对任意 $s>0$ ，由 CK 方程有

$$P_{jj}^{(m+n+s)}\geq P_{ji}^{(m)}P_{ii}^{(s)}P_{ij}^{(n)}$$

由于状态是常返的，即 $\sum_{s=0}^{\infty}P_{ii}^{(s)}=\infty$ ，所以

$$\displaystyle\sum_{s=0}^{\infty}P_{jj}^{(m+n+s)}\geq P_{ji}^{(m)}P_{ij}^{(n)}\sum_{s=0}^{\infty}P_{ii}^{(s)}=\infty $$

由定理 5.11， $j$ 是常返的。

上面的推论表明常返性与非常返是互通类的性质，因此我们可以说一个状态的集合为一个常返类或非常返类。如果 Markov 链不可约，则所有状态或者都常返，或者都非常返。此时，我们也可说 Markov 链是常返的或非常返的。

注 4.有的文献也称 $\sum\limits_{n=0}^{\infty}P_{ij}^{(n)}$ 为格林函数，记为 $G_{ij}$

如果 Markov 链的状态是**有限的**，常返性的判定会更加简化，有下面结论：

!!! note "Proposition 5.14"
    有限状态 Markov 链必然存在常返态

`Proof`

反证法，若命题不成立。设状态空间 $E=\{1,2,\ldots,N\}$，则所有状态都是暂留的。固定状态 $i$，对任意 $j$，由推论 5.12

$$P_{ij}^{(k)}\to0,\quad k\to\infty $$

所以

$$\sum_{j=1}^NP_{ij}^{(k)}\to0,\quad k\to\infty $$

但是由转移概率的性质，对任意 k 有

$$\sum_{j=1}^NP_{ij}^{(k)}=1$$

矛盾！故命题成立。

注。结合推论 5.13，我们知道：对于状态有限**不可约**Markov 链，所有状态**都是常返态**。

!!! example "Example 5.15 ( $d$ 维简单随机游走的常返性）"
    设 $\xi_{1},\xi_{2},\ldots$ .是取值于 $E=\mathbb{Z}^{d}$ 独立同分布随机向量，满足

    $$P(\xi_1=e_i)=P(\xi_1=-e_i)=\frac{1}{2d},\quad i=1,\dots,d$$

    其中 $e_i$ 是第 $i$ 个坐标为 1，其余为 0 的方向向量。

    设 $S_{0}$ 独立于 $\xi_{1},\xi_{2},\ldots\xi _n$，令

    $$S_n:=S_0+\xi_1+\cdots+\xi_n=S_{n-1}+\xi_n.$$

    则 $S_{n}$ 为从 $S_{0}$ 出发的 d 维简单随机游走。

    当 $d=1,2$ 时，$S_{n}$ 是常返的，当 $d\geq3$ 时，$S_{n}$ 是非常返的。


`Proof`

不妨假设 $S_0=0$，由 $\xi_{i}$ 的定义，所有状态都是互通的，即 $S_{n}$ 不可约，所以所有状态的常返性一致，因此我们只考虑 0 状态的常返性。

容易注意到经过奇数步不可能回到状态 0，若经过 $2n$ 步回到 0，那么对任意方向 $i\in\{1,\ldots,d\}$ 必须在该方向前进和后退相同的步数，记为 $n_{i}$，于是

$$P_{00}^{(2n)}=\sum_{n_1+\cdots+n_d=n}\frac{(2n)!}{(n_1!\:)^2\cdots(n_d!\:)^2}\frac{1}{(2d)^{2n}}.$$

$d=1$ 时

$$\begin{aligned}\sum_{n=0}^{\infty}P_{00}^{(2n)}=\sum_{n=0}^{\infty}\frac{(2n)!}{(n!)^2}\frac{1}{2^{2n}}.\end{aligned}$$

由 Stirling 公式 $\lim\limits_{ n \to \infty }n! = \sqrt{ 2\pi n } \left( \frac{n}{e} \right)^{n}$，对任意的 $\varepsilon>0$ ，存在 $n_0$ ，当 $n>n_0$ 时

$$\left(1-\varepsilon\right)\frac{1}{\sqrt{\pi n}}\leqslant\frac{\left(2n\right)!}{\left(n!\right)^2}\frac{1}{2^{2n}}\leqslant\left(1+\varepsilon\right)\frac{1}{\sqrt{\pi n}}.$$

所以 $\sum\limits_{n=0}^{\infty}P_{00}^{(2n)}=\infty$，即 $S_{n}$ 常返。

$d=2$ 时，

$$\begin{aligned}
P_{00}^{(2n)}& =\sum_{n_{1}+n_{2}=n}\frac{\left(2n\right)!}{\left(n_{1}!\right)^{2}\left(n_{2}!\right)^{2}}\cdot\frac{1}{4^{2n}} \\
&=\frac{\left(2n\right)!}{n!\:n!}\cdot\frac{1}{4^{2n}}\sum_{n_{1}+n_{2}=n}\frac{n!}{n_{1}!\:n_{2}!}\cdot\frac{n!}{n_{2}!\:n_{1}!} \\
&=C_{2n}^{n}\cdot\frac{1}{4^{2n}}\sum_{n_{1}=0}^{n}C_{n}^{n_{1}}C_{n}^{n-n_{1}} \\
&=C_{2n}^{n}\cdot\frac{1}{4^{2n}}\cdot C_{2n}^{n}=\left(C_{2n}^{n}\frac{1}{2^{2n}}\right)^{2} \\
&\approx\frac{1}{\pi n}
\end{aligned}$$

所以 $\sum\limits_{n=0}^{\infty}P_{00}^{(2n)}=\infty$，即 $S_{n}$ 常返

当 $d\geq3$ 时，可以证明，当 $n$ 充分大时，有

$$P_{00}^{(2n)}\leqslant C_{d}\cdot n^{-d/2},$$

其中 $C_d$ 是依赖于 d 的常数。

（参考《应用随机过程》，陈大岳、章复熹，北京大学出版社 2023 P95-P99）

所以 $\sum\limits_{n=0}^{\infty}P_{00}^{(2n)}<\infty$ ，即 $S_{n}$ 非常返。


这表明一维或二维的简单随机游动一定能回到起点，但三维以上的简单随机游动却不一定。

日本学者角谷静夫 Kakutani 在加利福尼亚大学洛杉矶分校（UCLA）演讲时对此给出了一个有趣的注解：“A drunk man willfindhis wayhome,but a drunkbird may getlost forever."


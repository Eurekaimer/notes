
# Lecture 3 - Extensions of Poisson Process


!!! tldr "Syllabus"
    + 非时齐 Poisson 过程
    + 复合 Poisson 过程
    + 条件 Poisson 过程


## 非时齐 Poisson 过程


本小节放松平稳增量这一条件，也就是说过程的速率会依赖于时间，下面给出非时齐 Poisson 过程的定义

!!! note "Defnition 3.1 (非时齐 Poisson 过程)"
    若计数过程 $\{N(t),t\geq0\}$ 满足：

    (1) $N( 0) = 0;$
    (2) 具有独立增量；
    (3) $P\{ N( t+ h) - N( t) = 1\} = \lambda ( t) h+ o( h)$, $\lambda ( t) , t\geq 0$ 为连续函数
    (4) $P\{ N( t+ h) - N( t) \geq 2\} = o( h)$

    则称为具有强度函数 $\lambda(t)$ 的非时齐 (Nonhomogeneous)Poisson 过程。

与标准 Poisson 过程一样，我们接下来考察 $N(t)$ 的分布。

!!! note "Proposition 3.2"
     设 $\{N(t),t\geq0\}$ 为一个非时齐 Poisson 过程，记

    $$m(t)=\int_0^t\lambda(s)ds$$

    在区间 $[t+s]$ 中的事件数 $N(t+s)-N(t)$ 服从均值为 $m(t+s)-m(t)=\int_t^{t+s}\lambda(y)dy$ 的 Poisson 分布，即

    $$P(N(t+s)-N(s)=n)=\exp\{-[m(t+s)-m(s)]\}\frac{[m(t+s)-m(s)]^n}{n!}.$$



`Proof.`


与定理 2.5 的证明想法类似。对给定的 $t$,定义：

$$P_n(s)\triangleq P\{N(t+s)-N(t)=n\}$$

则有

$$
\begin{aligned}
P_{0}(s+h)=P\{N(t+s+h)-N(t)=0\}&=P\left\{(t,t+s)中有0个事件(t+s,t+s+h)中有0个事件\right\} \\
&=P\left\{(t,t+s)中有0个事件\right\}P\left\{(t+s,t+s+h)中有0个事件\right\}\\
&=P_0(s)[1-\lambda(t+s)h+o(h)],
\end{aligned}
$$

因此

$$\frac{P_0(s+h)-P_0(s)}h=-\lambda(t+s)P_0(s)+\frac{o(h)}h.$$

令 $h\to0$,得到微分方程

$$P_0'(s)=-\lambda(t+s)P_0(s)$$


















# 周性伟-Ch2

## 1-10

!!! question "Ch2 1"
    设 $E_{1}\subset E_{2}\subset \mathbb{R}$，求证：$m^{*}(E_{1})\leqslant m^{*}(E_{2})$

`Proof.`

只需要按照定义，我们找一个开区间列覆盖 $E_{2}$ 那么根据包含关系它们一定覆盖 $E_{1}$，而外测度的定义是在所有覆盖中的下确界，那么 $E_{2}$ 的所有覆盖一定能覆盖 $E_{1}$，也就是 $m^{*}(E_{1})\leqslant m^{*}(E_{2})$

!!! question "Ch2 2"
    求证：$m^{*}(E)=\inf\left\{ m(Q):E\subset Q,Q\text{是开集} \right\}$

`Proof.`

`一维情形`

不妨将右侧记为 $\lambda$ 方便后续书写

根据定义和外测度的单调性显然有 $m^{*}(E)\leqslant \lambda$，下面对 $m^{*}(E)$ 进行讨论，显然当 $m^{*}(E)=\infty$ 时结论成立，那么下面考虑$m^{*}(E)<\infty$时

对于任意的正数$\varepsilon>0$，存在开区间列$\left\{ I_{k} \right\}_{k \geqslant 1}s.t.E\subset \bigcup\limits_{k=1}^{\infty}I_{k},\sum\limits_{n=1}^{\infty}l(I_{n})<m^{*}(E)+\varepsilon$,而$Q=\bigcup\limits_{k=1}^{\infty}I_{k}$也是开集那么有

$$
\lambda \leqslant m(Q)<m^{*}(E)+\varepsilon
$$

再根据$\varepsilon$的任意性即可得到结论成立.

`n维情形`

根据$\mathbb{R}^{n}$中Lebesgue外测度的定义，开长方体的并集均为开集，所以

$$
\left\{ Q|E\subset Q,Q\text{是开集} \right\} \supseteq \left\{ \bigcup\limits_{i=1}^{\infty} Q|E\subseteq \bigcup\limits_{i=1}^{\infty} Q,Q\text{是开长方体} \right\} 
$$

所以我们有

$$
\begin{aligned}
m^{*}(E)&=\inf \left\{ \sum\limits_{i=1}^{\infty} m(Q_{i})|E\subseteq \bigcup\limits_{i=1}^{\infty} Q_{i},Q_{i}\text{是开长方体} \right\} \\
&\geqslant \inf \left\{ m\left( \bigcup\limits_{i=1}^{\infty} Q_{i} \right)|E \subseteq \bigcup\limits_{i=1}^{\infty} Q_{i} ,Q_{i}\text{是开长方体}\right\} \\
&\geqslant \inf \left\{ m\left( Q \right)|E \subseteq Q ,Q\text{是开集}\right\}
\end{aligned}
$$

另一侧仍然显然.

注：这种题目的做法是比较单一的：首先确认我们的目标，因为$E\subset Q$，所以利用外测度的单调性显然有$m^{*}(E)\leqslant \lambda$，再考虑另一方向，通常会采用增减一个$\varepsilon$利用它的任意性证明，而在这里我们可以考虑下确界的性质构造出$\varepsilon$

!!! question "Ch2 3"
    设$E\subset \mathbb{R},M>0.$求证：$m^{*}(E)=\inf\left\{ \sum\limits_{n=1}^{\infty}l(I_{n}):I_{n} \text{为开区间}，l(I_{n})<M,E\subset \bigcup\limits_{n=1}^{\infty}I_{n} \right\}$

`Proof.`

同2记号，有$m^{*}(E)\leqslant \lambda$，显然，另一边若是有$m^{*}(E)=\infty$结论成立

若是$m^{*}(E)<\infty$，则有$\forall\varepsilon>0,\exists \left\{ I_{n} \right\}_{n\geqslant 1}s.t. E\subset \bigcup\limits_{n=1}^{\infty}I_{n},\sum\limits_{n=1}^{\infty}l(I_{n})\leqslant m^{*}(E)+\varepsilon$，根据$m^{*}(E)$的有界性我们可以得到$l(I_{n})< \infty$，那么一定可以找到有限多个区间$I_{n}^{(k)}$使得$I_{n}\subset \bigcup\limits_{k=1}^{m_{n}}I_{n}^{(k)},l(I_{n}^{(k)})<M$并且为了后续的证明有$\sum\limits_{k=1}^{m_{n}}l(I_{n}^{(k)})<l(I_{n})+ \frac{\varepsilon}{2^{n}}$

$$
\lambda \leqslant \sum\limits_{n=1}^{\infty} \sum\limits_{k=1}^{m_{n}} l(I_{n}^{(k)})\leqslant\sum\limits_{n=1}^{\infty} \left( l(I_{n})+ \frac{\varepsilon}{2^{n}} \right)\leqslant m^{*}(E)+2\varepsilon
$$

令$\varepsilon \to 0$即可得到所需结论

!!! question "Ch2 4"
    设$G_{1}$和$G_{2}$是不相交开集，$E_{1}\subset G_{1},E_{2}\subset G_{2}$，求证：$m^{*}\left( E_{1}\bigcup E_{2} \right)=m^{*}(E_{1})+m^{*}(E_{2})$

`Proof`

由已知得两集合不交,那么$E_{1}\subset G_{1},E_{2}\subset G_{1}^{c}$，因为$G_{1}$可测，所以根据Caratheodory条件得

$$
\begin{aligned}
m^{*}\left( E_{1}\bigcup E_{2} \right)&\geqslant m^{*}\left( \left( E_{1}\bigcup E_{2} \right)\bigcap G_{1} \right)+m^{*}\left( \left( E_{1}\bigcup E_{2} \right)\bigcap G_{1}^{c} \right) \\
&=m^{*}(E_{1})+m^{*}(E_{2})
\end{aligned}
$$

反向由次可加性显然，从而得到$m^{*}\left( E_{1}\bigcup E_{2} \right)=m^{*}(E_{1})+m^{*}(E_{2})$

!!! question "Ch2 5"
    若$d(E_{1},E_{2})=\inf\left\{ d(x_{1},x_{2}):x_{1}\in E_{1},x_{2}\in E_{2} \right\}>0$，求证：$m^{*}\left( E_{1}\bigcup E_{2} \right)=m^{*}(E_{1})+m^{*}(E_{2})$

`Proof.`

考虑利用 2.4 结论，那么构造两个不相交的开集记为 $G_{1},G_{2}$,$G_{1}=\bigcup\limits_{x\in E_{1}}V\left( x, \frac{1}{2}d(E_{1},E_{2}) \right),G_{2}=\bigcup\limits_{x\in E_{2}}V\left( x, \frac{1}{2}d(E_{1},E_{2}) \right)$，可知 $E_{1}\subset G_{1},E_{2}\subset G_{2}$，利用 2.4 可知结论成立

!!! question "Ch2 6"
    设$m^{*}(A)<\infty,m^{*}(B)<\infty$，求证：$\lvert m^{*}(A) -m^{*}(B)\rvert \leqslant m^{*}(A\Delta B)$

`Proof`

只需要使用两个集合关系和次可加性，$A\subset (A\Delta B)\bigcup B\implies m^{*}(A)\leqslant m^{*}(A\Delta B)+m^{*}(B)$，同理可知$m^{*}(B)\leqslant m^{*}(A\Delta B)+m^{*}(A)$，综合两个不等式即证

注：仍然是集合表示的技巧

!!! question "Ch2 8(i)(ii)"
    设对每一$x\in I=(a,b)$，$A_{x}$是一个实数集，而且当$x_{1}<x_{2}$时$A_{x_{1}}\subset A_{x_{2}}$，求证：

    (i)$m^{*}\left( \bigcup\limits_{x\in I}A_{x} \right)=\lim\limits_{ x \to b^{-} }m^{*}(A_{x})$
    (ii)$m^{*}\left( \bigcap\limits_{x\in I}A_{x} \right)=\lim\limits_{ x \to a^{+} }m^{*}(A_{x})$

`Proof.`

(i)利用2.7的结论，构造一个单调递增的点列$\left\{ x_{n} \right\}\to b$，由题设单调性可知$\bigcup\limits_{x\in I}A_{x}=\bigcup\limits_{n=1}^{\infty}A_{x_{n}}$

$$
\begin{aligned}
m^{*}\left( \bigcup\limits_{x\in I}A_{x} \right)&=\lim\limits_{ n \to \infty } m^{*}(A_{x_{n}})=\lim\limits_{ x \to b^{-} }m^{*}(A_{x}) 
\end{aligned}
$$

(ii)

$$\begin{aligned}
\forall y\in(a,b),\bigcap\limits_{x\in I}A_{x}\subset A_{y}&\implies m^{*}\left( \bigcap\limits_{x\in I}A_{x} \right)\leqslant m^{*}(A_{y})\\
&\implies m^{*}\left( \bigcap\limits_{x\in I}A_{x} \right)\leqslant \lim\limits_{ x \to a^{+} }m^{*}(A_{x})
\end{aligned}$$

9.设 $E \subset \mathbf{R}, 0 < m^*(E) < \infty$, 求证: $f(x) = m^*((-\infty, x) \cap E)$ 是 $x$ 的连续函数. 由此证明 $I = \{m^*(F): F \subset E\}$ 是一个有界闭区间.

!!! question "Ch2 10"
    设$\left\{ E_{n} \right\}_{n\geqslant 1}$是可测集列
    (i)求证$m\left( \varliminf\limits_{ n \to \infty }E_{n} \right)\leqslant \varliminf\limits_{ n \to \infty }m(E_{n});$
    (ii)若有$k_{0}$使$m\left( \bigcup\limits_{k=k_{0}}^{\infty}E_{k} \right)<\infty$，求证：

    $$
    m\left( \varlimsup\limits_{ n \to \infty }E_{n} \right)\geqslant \varlimsup\limits_{ n \to \infty }m(E_{n});
    $$

    (iii) 若 $m\left(\bigcup_{k=1}^\infty E_k\right) < \infty$ 且 $\lim_{n \to \infty} E_n$ 存在, 求证:

$$m\left(\lim_{n \to \infty} E_n\right) = \lim_{n \to \infty} m(E_n).$$

`Proof.`

(i)

$\bigcap\limits_{m=n}^{\infty}E_{m}\subset E_{n}$且关于n单增可得

$$
\begin{aligned}
m\left( \varliminf\limits_{ n \to \infty }E_{n} \right)&=m\left( \bigcup\limits_{n=1}^{\infty} \bigcap\limits_{m=n}^{\infty} E_{m} \right) =m\left( \lim\limits_{ n \to \infty } \bigcap\limits_{m=n}^{\infty} E_{m} \right) \\
&=\lim\limits_{ n \to \infty } m\left( \bigcap\limits_{m=n}^{\infty} E_{m} \right) \\
&\leqslant \varliminf\limits_{ n \to \infty }m(E_{n})
\end{aligned}
$$

(ii)

$$
\begin{aligned}
m\left( \varlimsup\limits_{ n \to \infty }E_{n} \right)&=m\left( \bigcap\limits_{n=1}^{\infty} \bigcup\limits_{m=n}^{\infty} E_{m} \right) =m\left( \lim\limits_{ n \to \infty } \bigcup\limits_{m=n}^{\infty} E_{m} \right) \\
&=\lim\limits_{ n \to \infty } m\left( \bigcup\limits_{m=n}^{\infty} E_{m} \right) \left( \exists k_{0},s.t.m\left( \bigcup\limits_{k=k_{0}}^{\infty}E_{k} \right)<\infty \right) \\
&\geqslant \varlimsup\limits_{ n \to \infty }m(E_{n})
\end{aligned}
$$

(iii)

由(i)(ii)直接得出

## 11-20

!!! question "Ch2 11"
    设 $A$ 可测并且 $m(A \triangle B) = 0$, 求证: $B$ 可测.

`Proof.`

$m(A\Delta B)=m^{*}\left( (A-B)\bigcup(B-A) \right)=0$，所以$m^{*}(A-B)=m^{*}(B-A)=0$，为零测集，所以两集合可测，再利用$A$可测，得到$A\bigcap B=A-(A-B)$可测，$B=\left( A\bigcap B \right)\bigcup(B-A)$，所以$B$可测

!!! question "Ch1 12"
    设$0 < m(E) < \infty$. 求证: 有测度皆为 $m(E)$ 的开集列$\{G_n\}_{n \geqslant 1}$, 使$m(E \triangle G_n) \to 0(n \to \infty)$.

`Proof.`

!!! question "Ch2 13"
    设 $E_1$ 和 $E_2$ 都可测, 求证: $m(E_1) + m(E_2) = m(E_1 \cup E_2) + m(E_1 \cap E_2)$.

`Proof.`

利用集合关系构造两两不交的并可得

$$
\begin{aligned}
m(E_{2})&=m\left( E_{2}\bigcap E_{1} \right)+m\left( E_{2}\bigcap E_{1}^{c} \right)\\
m\left( E_{1}\bigcup E_{2} \right)&=m\left(  E_{1} \right)+m\left( E_{2}\bigcap E_{1}^{c} \right)\\
\implies m(E_1) + m(E_2) &= m(E_1 \cup E_2) + m(E_1 \cap E_2)
\end{aligned}
$$

注：简单的利用集合关系即可

!!! question "Ch2 14"
    求证: $\mathbb{R}$ 中可测集全体有基数 $2^{c}$.

`Proof.`

Step1. $\mathbb{R}$中子集全体的基数为$2^{c}$，那么可测集全体的基数小于等于$2^{c}$

Step2. 考虑Cantor集，测度为零(可测)但具有连续统势，它的子集全体的基数为$2^{c}$，那么可测集全体的基数大于等于$2^{c}$

!!! question "Ch2 15"
     (i) 若 $F$ 是 $[0, 1]$ 中闭集且 $m(F) = 1$. 试问是否一定 $F = [0, 1]$?
    (ii) 若 $G$ 是 $(0, 1)$ 中开集且 $m(G) = 1$. 试问是否一定 $G = (0, 1)$?

`Sol`

(i)一定

若是不然，必存在一点$x_{0}\in \left( [0,1]-F \right)$，再利用闭集的性质一定存在一个$\varepsilon > 0$，使得$V(x_{0},\varepsilon)\subset F^{c}\bigcap[0,1],m\left( [0,1]-F\right)>0$，由此导出矛盾：$m\left( [0,1] \right)=m\left( F \right)+m([0,1]-F)>1$

(ii) 不一定

只需要考虑 Cantor 集在 $[0,1]$ 的补集 $G=[0,1]\setminus C$，Cantor 集是零测集所以 G 的测度为 1，但是 $G\neq (0,1)$

!!! question "Ch2 16"
    若 $A \bigcup B$ 和 $A$ 都可测，试问 $B$ 是否一定可测？若其中 $m(A) = 0$, 结论如何？若 $A \cap B = \varnothing$, 结论又如何？

`Sol.`

第一个命题不一定，反例为 $A=[0,1],B$ 为 $[0,1]$ 中的不可测集（在课本中给出了构造方法），那么 $A\bigcup B,A$ 可测，$B$ 不可测

!!! question "Ch2 17"
    设 $E \subset \mathbf{R}, m(E) > 0, 0 < \alpha < 1$. 求证: 有开区间$I$使$m(I \cap E) > \alpha \cdot m(I)$.

`Proof.`

!!! question "Ch2 18"
    设可测集 $E \subset [0, 1]$. 若有 $\delta > 0$, 使对 $[0, 1]$ 中任何区间 $(a, b)$ 有 $m(E \cap (a, b)) \geqslant \delta(b - a)$
    求证： $m(E) = 1$.

`Proof.`

!!! question "Ch2 19"
    设 $E \subset \mathbf{R}, m(E) > 0, [a, b]$ 是有界区间， $\varepsilon > 0$. 求证：有有限个实数 $\{x_k\}_{1 \leq k \leq n}$, 使 $[a, b] - \bigcup_{k=1}^n E_{x_k}$ 的测度小于 $\varepsilon$, 其中 $E_{x_k} = \{x + x_k : x \in E\}$.

!!! question "Ch2 20"
    设 $\{E_k\}_{k \geq 1}$ 是 $[0, 1]$ 中测度皆为 1 的可测集列，求证：

    $$m\left(\bigcap_{k=1}^\infty E_k\right) = 1.$$

`Proof.`

考虑利用次可加性，转换为并集求补：

$$
\begin{aligned}
m\left(\bigcap_{k=1}^\infty E_k\right)& = m\left( [0,1] \right) -m\left( [0,1]-\bigcap_{k=1}^\infty E_k \right) \\
&=1-m\left(\bigcup\limits_{k=1}^{\infty} \left( E_{k}^{c}\bigcap[0,1] \right) \right) \\
&\geqslant 1-\sum\limits_{k=1}^{\infty} m\left( E_{k}^{c}\bigcap[0,1] \right)\\
&=1
\end{aligned}
$$

而 $\bigcap\limits_{k=1}^{\infty}E_{k}\subset[0,1],m\left( \bigcap\limits_{k=1}^{\infty}E_{k} \right)\leqslant 1$，综上可知：$m\left( \bigcap\limits_{k=1}^{\infty}E_{k} \right)=1$

注：在实变函数中我们更倾向于使用并运算来替代交运算，因此本题也应当采用取补的方法，方便进行测度的运算。

## 21-30

!!! question "Ch2 21"
    设 $\{E_k\}_{k \geq 1}$ 是 $[0, 1]$ 中的可测集列，使得 $m(E_k) \to 1 (k \to \infty)$.
    求证：对任何 $0 < \lambda < 1$, 有子列 $\{E_{k_n}\}_{n \geq 1}$ 使 $m\left(\bigcap\limits_{n=1}^\infty E_{k_n}\right) > \lambda$.

`Proof.`

同 20 题考虑证明并集：$m\left( (E_{k}^{c})\bigcap[0,1] \right)\to 0(k\to \infty)$，那么$\forall\varepsilon=\frac{1-\lambda}{2^{i}}>0.\exists N,n>N,m(E_{k_{n}})< \frac{1-\lambda}{2^{i}}(i\in Z^{+})$，

$$
\begin{aligned}
m\left(\left( \bigcap_{n=1}^\infty E_{k_{n}} \right)^{c}\bigcap[0,1]\right)& = m\left( \bigcup\limits_{n=1}^{\infty} \left( E_{k_{n}}^{c}\bigcap[0,1] \right)\right) \\
&\leqslant \sum\limits_{n=1}^{\infty} m\left( E_{k_{n}}^{c}\bigcap[0,1] \right)\\
&<\sum\limits_{n=1}^{\infty} \frac{1-\lambda}{2^{n}}=1-\lambda
\end{aligned}
$$

那么可知$m\left(\bigcap\limits_{n=1}^\infty E_{k_n}\right) > \lambda$

!!! question "Ch2 22"
    设 $\{E_k\}_{1 \leqslant k \leqslant n}$ 是 $[0, 1]$ 中的 $n$ 个可测集，满足 $\sum\limits_{k=1}^n m(E_k) > n - 1$.
    求证： $m\left(\bigcap\limits_{k=1}^n E_k\right) > 0$.

`Proof.`

仍然同上取补集

$$
\begin{aligned}
m\left(\bigcap_{k=1}^n E_k\right)& = m\left( [0,1] \right) -m\left( [0,1]-\bigcap_{k=1}^n E_k \right) \\
&=1-m\left(\bigcup\limits_{k=1}^{n} \left( E_{k}^{c}\bigcap[0,1] \right) \right) \\
&\geqslant 1-\sum\limits_{k=1}^{n} m\left( E_{k}^{c}\bigcap[0,1] \right)\\
&>1-\left[ n-\sum\limits_{k=1}^{n} m(E_{k}) \right]\\
&=0
\end{aligned}
$$

!!! question "Ch2 24"
    设 $m^*(E) < \infty$. 试证下列 3 件事等价:
    (i) $E$ 可测;
    (ii) 存在 $E$ 的闭子集列 $\{F_n\}$ 使 $m(F_n) \to m^*(E)$;
    (iii) 存在 $E$ 的可测子集列 $\{E_n\}$ 使 $m(E_n) \to m^*(E)$.

`Proof.`

$(i)\to(ii)$

利用Th2.5.1，由$E$可测可知对于任意给定的$\varepsilon>0，$存在一个含于$E$闭集$F$使得$m^{*}(E-F)<\varepsilon$，那么取$\varepsilon_{n}=\frac{1}{n}$，有$m^{*}(E-F_{n})< \frac{1}{n}$，又$E-F_{n}$可测，可得$0<m(E-F_{n})< \frac{1}{n}$，两边取极限$n\to \infty$，可证.

$(ii)\to(iii)$

闭集是可测的，所以取闭子集列即可.

$(iii)\to(i)$

由于$E_{n}\subset E,m(E_{n})\to m^{*}(E)$，那么有可测的定义有

$$\begin{aligned}
m^{*}(E)&=m^{*}\left( E\bigcap E_{n} \right)+m^{*}\left( E\bigcap E_{n}^{c} \right)\\
&=m^{*}(E_{n})+m^{*}(E-E_{n})
\end{aligned}$$

可知$m^{*}(E-E_{n})\to0,m^{*}\left( E-\bigcup\limits_{n=1}^{\infty}E_{n} \right)\leqslant m^{*}(E-E_{n})\to 0$，因为外测度为0所以可测，考虑原集合可以表示为两个可测集的并.

由于$E=\left( \bigcup\limits_{n=1}^{\infty}E_{n} \right)\bigcup \left( E-\bigcup\limits_{n=1}^{\infty}E_{n} \right)$，所以可测.

!!! question "Ch2 25"
    设 $m^*(E) < \infty$. 求证: 有 $G_\delta$ 集 $H$, 使 $H \supset E, m^*(E) = m(H)$.

`Proof`

根据外测度性质，对于任意$\frac{1}{n}$存在开集$G_{n}\supset E,m^{*}(G_{n}-E)< \frac{1}{n}$

构造$H=\bigcap\limits_{n=1}^{\infty}G_{n},E\subset H$，由外测度的单调性可知：

$$
m^{*}(E)\leqslant m^{*}(H)=m(H)\leqslant m^{*}(G_{n})<m^{*}(E)+ \frac{1}{n}
$$

两边取极限可得$m(H)=m^{*}(E)$

注：这是利用开集逼近的一个简单例子，并没有什么难度

!!! question "Ch2 26"
    设 $A \bigcup B$ 可测且 $m(A \cup B) = m^*(A) + m^*(B) < \infty$. 求证: $A$ 和 $B$ 都可测.

!!! tip "- Hint"
    取 $G_\delta$集$H$使$H \supset B, m(H) = m^*(B)$. 此时可证$(A \cup B) \cap H^c$ 是$A$的可测子集, 其测度为$m^*(A)$.

`Proof.`

直接利用2.25题的结论我们可以取一个$G_{\delta}$集$H$使得$H\supset B,m(H)=m^{*}(B)$，容易知道$\left( A\bigcup B \right)\bigcap H^{c}$也是可测的，而且它应当是$A$的子集，令$E=A\bigcap H^{c}$，下证$m(E)=m^{*}(A)$

我们知道$B\subset \left( A\bigcup B \right)\bigcap H,m^{*}(B)\leqslant m^{*}\left( \left( A\bigcup B \right)\bigcap H \right)\leqslant m(H)=m^{*}(B)$，那么有$m^{*}(B)=m^{*}\left( \left( A\bigcup B \right)\bigcap H \right)$

$$
\begin{aligned}
m^{*}(A)+m^{*}(B)&=m\left( A\bigcup B \right)\\
&=m\left( \left( A\bigcup B \right) \bigcap H\right)+m\left( \left( A\bigcup B \right)\bigcap H^{c} \right)\\
&=m^{*}(B)+m(E)
\end{aligned}
$$

即证$m^{*}(A)=m(E)$

然后再考虑利用可测的等价条件：

根据2.2我们可以找到一个开集$G$，使得$m(G)<m^{*}(A)+\varepsilon$

并且我们有$E\subset A\subset G$，且$m(G-E)=m(G)-m(E)<m^{*}(A)+\varepsilon-m^{*}(A)=\varepsilon$，可知$A$可测，同理可知$B$可测

!!! question "Ch2 27"
    构造不相交的集 $A$ 和 $B$ 使 $m^*(A \cup B) < m^*(A) + m^*(B)$.

`Sol.`

当集合可测且两两不交时这个不等式取等那么我们直接考虑不可测集合：

取$A$为$[0,1]$中的不可测集合，$B$为其在$[0,1]$中的补集，我们知道$A\bigcup B$可测，那么根据次可加性有$m^{*}\left( A\bigcup B \right)\leqslant m^{*}(A)+m^{*}(B)$

若是取等根据2.26可知$A,B$都可测，矛盾，所以只能取严格小于

注：本题给出了一个结论就是外测度不一定满足次可加性

!!! question "Ch2 28"
    设 $E \subset \mathbf{R}, m(E) > 0$. 令

    $$E^* = \{x \in E : \text{对任何 } \delta > 0 \text{ 有 } m(E \cap (x - \delta, x + \delta)) > 0\}.$$

    求证： $E^*$ 可测且 $m(E^*) = m(E)$.

`Proof.`

考虑证明 $m^{*}(E-E^{*})=0$，那么就说明 $E-E^{*}$ 是可测的

$\forall x \in E-E^{*},\exists\delta_{x},s.t.m\left( E\bigcap(x-\delta_{x},x+\delta_{x}) \right)=0$，利用选取有理点的技巧在 $(x-\delta_{x},x+\delta _{x})$ 中选取 $(r_{x},R_{x})\subset(x-\delta_{x},x+\delta _{x})$，然后有 $m\left( E\bigcap(r_{x},R_{x}) \right)=0$

并且容易知道 $E-E^{*}=\bigcup\limits_{x \in E-E^{*}}\left( E\bigcap(r_{x},R_{x}) \right)$，并且为至多可数并，那么可得 $\forall x \in E-E^{*},m\left( E\bigcap(r_{x},R_{x}) \right)=0\implies m(E-E^{*})=0$

这里注意零测集一定是可测的，那么 $E^{*}=E\bigcap(E-E^{*})^{c}$ 也可测

注：本题类似 Ch1 的 13 14 52 题，都使用到了在区间内取有理点构造至多可数并的技巧，可以看出这个技巧是相当重要的

!!! question "Ch2 29"
    设 $E \subset \mathbb{R}$ 可测， $a$ 和 $b$ 是两个实数。
    求证： $F = \{ax + b : x \in E\}$ 可测并且 $m(F) = |a| \cdot m(E)$.

`Proof.`

`法1`

若是 $a=0$，单点集结论显然，利用平移不变性也可以忽略 $b$，即令 $b=0$

不妨设 $a>0$，若是 $m(E)=\infty$,那么 $m(F)=\infty$，可知成立，那么取一开覆盖，不妨令$m(E)<\infty,\exists \left\{ I_{k} \right\}_{k\geqslant 1}\supset E，s.t.\sum\limits_{i=1}^{\infty}\lvert I_{i} \rvert<m^{*}(E)+\varepsilon$

此时$\bigcup\limits_{i=1}^{\infty}aI_{i}\supset F,m^{*}(F)<\sum\limits_{i=1}^{\infty}\lvert a \rvert\lvert I_{i} \rvert=\lvert a \rvert m^{*}(E)+\lvert a \rvert\varepsilon$

可知$m^{*}(F)\leqslant \lvert a \rvert m^{*}(E)$

同理可知$m^{*}(E)\leqslant \frac{1}{\lvert a \rvert}m^{*}(F)$，综上可知：$m^{*}(F)=\lvert a \rvert m^{*}(E)$

还需要说明$F$可测：

$$
\begin{aligned}
m^{*}\left( F\bigcap A \right)&=m^{*}\left( aE\bigcap A \right)=\lvert a \rvert m^{*}\left( E\bigcap \frac{A}{a} \right)\\
m^{*}\left( F^{c}\bigcap A \right)&=m^{*}\left( aE^{c}\bigcap A \right)=\lvert a \rvert m^{*}\left( E^{c}\bigcap \frac{A}{a} \right)\\
m^{*}\left( F\bigcap A \right)+m^{*}\left( F^{c}\bigcap A \right)&=\lvert a \rvert m^{*}\left( \frac{A}{a} \right)=m^{*}(A)
\end{aligned}
$$

由此可知可测，证毕

`法2`

由于$E$可测，取一个开集$G\supset E,m(G-E)< \frac{\varepsilon}{a}$

再利用上述外测度性质$m(aG-aE)<\varepsilon$，也就是$\forall\varepsilon>0,\exists aE+b$是开集，使得$m^{*}(aG+b-F)<\varepsilon$，那么可知$F$可测

注：这主要是将证明可测进行了一个修改，不使用定义而是使用开集的逼近性质

## 31-40

!!! question "Ch2 31"
    例 若 $E \subset \mathbf{R}, m(E) > 0$, 求证 0 是 $\{x - y : x, y \in E\}$ 的内点。

`Proof.`

由题 17, 存在开区间 $(a, b)$ 使 $m((a, b) \cap E) > \frac{3}{4}(b - a)$. 令 $F = (a, b) \cap E$. 可证 0 是 $H = \{x - y : x, y \in F\}$ 的内点。因为不然就有 $z_n \not\in H$ 使 $z_n \to 0$. 令 $F_n = \{x + z_n : x \in F\}$, 则 $F_n$ 可测， $m(F_n) = m(F) > \frac{3}{4}(b - a)$, 而且对一切 $n \geq 1$ 有 $F_n \cap F = \varnothing$. 于是 $m(F_n \cup F) > \frac{6}{4}(b - a)$. 但对任何 $\varepsilon > 0$, 当 $n$ 充分大 ($z_{n}\to 0$) 时 $F_n \cup F \subset (a - \varepsilon, b + \varepsilon)$. 由此得矛盾。

下面是助教的讲义（有一些记号没有说明）：

来自其他书的提示：

>Indeed, there exists an open interval I so that $m(E \cap I) \geq (9/10)m(I)$. If we denote $E \cap I$ by $E_0$, and suppose that the difference set of $E_0$ does not contain an open interval around the origin, then for arbitrarily small a the sets $E_0$ and $E_0 + a$ are disjoint. From the fact that $(E_0 \cup (E_0 + a)) \subseteq (I \cup (I + a))$ we get a contradiction, since the left-hand side has measure $2m(E_0)$, while the right-hand side has measure only slightly larger than $m(I)$.

有了提示这个题没什么必要做。取 $m(E \cap I) \geq (9/10)m(I)$ （课本 Ex17, 老师上课讲过）, 假设 0 不是 $E_0 - E_0$ 的内点，那么存在一列趋于 0 的数列 $y_n$ 使得 $y_n \notin E_0 - E_0$, 那么 $E_0 \cap y_n + E_0$ 是空的，根据可数可加性和平移不变性可得

$$
\begin{aligned}
\frac{9}{5}m(I) \leqslant 2m(E_n) &= m(E_n) + m(y_n + E_0) \\&= m(E_0 \cup y_n + E_0)\\ &\leqslant m(I \cup y_n + I) \\&= m(I) + |y_n|
\end{aligned}$$

令 $n$ 足够大使得$y_n < \frac{1}{5}m(I)$就能导出矛盾. 因此0是$E_0 - E_0$的内点, 后者含于 $E - E$, 证毕

!!! question "Ch2 32"
    设 $m(A) > 0, m(B) > 0$. 求证: $\{a - b : a \in A, b \in B\}$ 及 $\{a + b : a \in A, b \in B\}$ 都有内点。

!!! question "Ch2 33"
    设 $m(E)>0$,而且只要 $x,y\in E$,就有 $\frac x+y2\in E$,求证：$E$ 有内点。

!!! question "Ch2 34"
    (0,1) 中的数 $x$ 用十进制表示 $,x_n$ 是其第 $n$ 位小数。令 $A_9=\{x\in(0,1):\max\{x_n\}=9\}.$ 求证：$m(A_9)=1.$

!!! question "Ch2 35"
    在题 34 中，若 $A=\{x\in(0,1):\{x_n\}$ 中只有有限个 9$\}$,求证：$m(A)=0.$

!!! question "Ch2 36"
    设 $m(E)>0.$ 求证：$E$ 有不可测子集。

`Proof.`

`法一`

下面是助教给出的一个解答：

只证 $E\subset \mathbb{R}$，在实变函数中没有本质区别，考虑一个等价关系 $x\sim y\iff y-x \in \mathbb{Q}$，令 $\mathcal{N}$ 是 $E$ 中所有互不相同的等价类中只选取一个元素放入 $\mathcal{N}$ 形成的集合，那么容易知道其中任意两个元素的差要么为 0，要么为无理数（否则在同一个等价类中），下面证明这个集合不可测。

反证法，假设 $\mathcal{N}$ 可测，那么记所有的有理数为 $\left\{ r_{n} \right\}$ 那么 $\bigcup\limits_{n=1}^{\infty}\mathcal{N}+r_{n}\supseteq E$（这是显然的，根据定义即可得到），从而再利用测度的平移不变性，得到 $m(\mathcal{N})> 0$，再根据 2.31 的结论我们知道 0 是内点，则有 $r\in \left\{ x-y|x,y\in \mathcal{N} \right\}$，但是我们根据上面的讨论知道任意两个元素之差不可能为非 0 的有理数，矛盾，所以不可测。

`法二`

完全可以仿照书中构造不可测集的方式做：

Step 1 做截断

$m(E)>0,\exists n,s.t.m\left( E\bigcap[-n,n] \right)>0$，$\bigcup\limits_{n=1}^{\infty}\left( E\bigcap[-n,n] \right)=E$

记 $A=E\bigcap[-n,n],\forall x \in A,A(x)=\left\{ y \in A,y-x  \in \mathbb{Q}\right\}$，那么也存在一个集合 $F$ 使得 $A=\bigcup\limits_{x\in F}A(x)$

Step 2 仿照构造方式

就是选取等价类然后像上面那样构造集合就好了，我们知道这个 $A(x_{i})$ 两两不交，那么可以构造下面的 $F_{i}$，利用测度的平移不变性

令 $F_{i}=F_{r_{i}}$，其中 $\left\{ r_{k} \right\}=[-2n,2n]\bigcap \mathbb{Q}$，可以知道 $A\subset \bigcup\limits_{i=1}^{\infty}F_{i}\subset[-3n,3n]$

为什么选取 $2n$ 呢？是因为 $A=E\bigcap[-n,n]$ 的长度最大为 $2n$

Step 3 利用不等式约束

假设 $F$ 可测，$m(F_{i})=m(F)$，由可测集的可数并也可测我们知道 $\bigcup_{i}F_{i}$ 也可测，并且可以用两两不交得到 $m\left( \bigcup\limits_{i=1}^{\infty}F_{i} \right)=\sum\limits_{i=1}^{\infty}m(F_{i})$

$$
0<m(A)\leqslant m\left( \bigcup\limits_{n=1}^{\infty} \mathcal{N}+r_{n} \right)=\sum\limits_{n=1}^{\infty} m(\mathcal{N}+r_{n})\leqslant 6n
$$

注：我们可以凭借这个命题给出一个很有用的推论，如果$A\subset \mathbb{R}$且它的任意子集都可测那么它一定是零测集.这个命题本身也是一个相当重要的结论，它的适用性很广便于我们从它出发构造反例，导出矛盾等

!!! question "Ch2 37"
    设$F$是[0,1]中不可测集.求证：有$0<\varepsilon<1$,使对[0,1]中任何满足$m(E)\geqslant\varepsilon$的可测集 $E,F\bigcap E$ 也是不可测集.

`Proof.`

反证，对于任何的$0<\varepsilon<1$，总存在$[0,1]$中的可测集$A,m(A)\geqslant \varepsilon$，但是$F\bigcap A$是可测的，欲证$F$可测

利用这个条件，分别取$\varepsilon=1-\frac{1}{n}$即可构造$E_{n},m(E_{n})\geqslant 1- \frac{1}{n}$，对于零测集显然交集也可测，$F\bigcap E_{n}$可测，构造可测的并集$E=\bigcup\limits_{i=1}^{\infty}E_{i},m(E)\geqslant m(E_{n})=1-\frac{1}{n}$，那么可知$m(E)=1$

根据$\bigcup\limits_{n=1}^{\infty} \left( F\bigcap E_{n} \right)=F\bigcap E$，可知$F\bigcap E$可测，而$F\bigcap([0,1]-E)\subset[0,1]-E$，而$m([0,1]-E)=0$，零测集显然可测，那么根据集合关系$F=\left( F\bigcap E \right)\bigcup\left( F\left( \bigcap[0,1]-E \right) \right)$，那么$F$可测与题设矛盾

!!! question "Ch2 38"
    设$f(x)$定义在$\mathbb{R}$上，并且对任何可测集$E,f(E)$可测.求证：对任何零测集$Z,f(Z)$也是零测集.(提示：利用题 36.)

`Proof.`

反证，若是$m(f(Z))>0$，必可找到一个不可测子集$X\subset f(Z)$，那么$Z\bigcap f^{-1}(X)$也是零测集，那么$f\left( Z\bigcap f^{-1}(X) \right)=X$也是可测的，与题设矛盾

!!! question "Ch2 39"
    设$f(x)$在$\mathbb{R}$上连续.求证：为使$f$把任何可测集变为可测集，充要条件是$f$把任何零测集变为零测集

`Proof.`

根据38，必要性成立

充分性：

设$f$可将零测集变为零测集，对于任何的可测集$E$，可分解为$F_{\sigma}$集和零测集(记为$G$)的并，$F_{\sigma}=\bigcup\limits_{n=1}^{\infty}F_{n}$，其中$F_{n}$是闭集

$$
f(E)=f(F)\bigcup f(G)=\left( \bigcup\limits_{n=1}^{\infty}  f(F_{n}) \right)\bigcup f(G)
$$

根据条件$f(G)$也是零测集，是可测的，现在只需要证明$f(F_{n})$也是可测的，考虑利用$f$的连续性，证明$F_{n}$是紧的，构造$F_{n_{i}}=F_{n}\bigcap[i,i+1],F_{n}=\bigcup\limits_{i=-\infty}^{\infty}F_{n_{i}}$

可知$\bigcup\limits_{n=1}^{\infty}\bigcup\limits_{i=-\infty}^{\infty}F_{n_{i}}$可测(可数个闭集的并)，综上可知$f(E)$也是可测的

## 41-43

!!! question "Ch2 42"
    设$0<\varepsilon<1$，试构造$[0,1]$中测度为$\varepsilon$的完备疏集(提示：参考Cantor完备集的构造)

`Sol.`

仿照Cantor集的构造，在$[0,1]$区间的中间取走长度为$\frac{1-\varepsilon}{3}$的开区间，再在剩下的2个区间中间取走长度$\frac{1-\varepsilon}{3^{2}}$的开区间...在$2^{n-1}$个区间中间取走长度为$\frac{1-\varepsilon}{3^{n}}$的开区间

它的测度为$1-\sum\limits_{i=1}^{\infty}(1-\varepsilon)\left( \frac{1}{3} \right)^{i}2^{i-1}=\varepsilon$

下面证明它是完备疏集

由于可数多个闭集并仍然是闭集，只需要说明构造的集合(记为$C$)是稀疏的且没有孤立点(完备)

对于孤立点，考虑构造的集合中的每个区间端点都不会在构造过程中被取走，所以内部一定不含孤立点，对于端点则是必定有一侧稠密，显然不含有孤立点

证明稀疏性：

对于$\mathbb{R}$上的任意一个开集也就是一个开区间，由于构造过程中每个子区间长度为$\frac{1-\varepsilon}{3^{n}}\to 0$，无法容纳任何开区间(开集)，由外测度的单调性即可得到矛盾，所以等价的一定有某个非空开子集不于与$C$相交，即证稀疏.

10.设 $\{E_n\}_{n \geqslant 1}$ 是可测集列,

(i) 求证 $m\left(\underline{\lim}_{n \to \infty} E_n\right) \leqslant \overline{\lim}_{n \to \infty} m(E_n)$;

(ii) 若有 $k_0$ 使 $m\left(\bigcup_{k=k_0}^\infty E_k\right) < \infty$, 求证:

$$m\left(\overline{\lim}_{n \to \infty} E_n\right) \geqslant \overline{\lim}_{n \to \infty} m(E_n);$$

(iii) 若 $m\left(\bigcup_{k=1}^\infty E_k\right) < \infty$ 且 $\lim_{n \to \infty} E_n$ 存在, 求证:

$$m\left(\lim_{n \to \infty} E_n\right) = \lim_{n \to \infty} m(E_n).$$

21. 设 $\{E_k\}_{k \geq 1}$ 是 $[0, 1]$ 中的可测集列, 使得 $m(E_k) \to 1 (k \to \infty)$. 求证: 对任何 $0 < \lambda < 1$, 有子列 $\{E_{k_n}\}_{n \geq 1}$ 使 $m\left(\bigcap_{n=1}^\infty E_{k_n}\right) > \lambda$.

22. 设 $\{E_k\}_{1 \leq k \leq n}$ 是 $[0, 1]$ 中的 $n$ 个可测集, 满足 $\sum_{k=1}^n m(E_k) > n - 1$. 求证: $m\left(\bigcap_{k=1}^n E_k\right) > 0$.

23. 设 $\{\Lambda_\chi\}_{\lambda \in A}$ 是一族区间, 求证: $E = \bigcup_{\lambda \in A} I_\lambda$ 可测.

24. 设 $m^*(E) < \infty$. 试证下列 3 件事等价:

(i) $E$ 可测;

(ii) 存在 $E$ 的闭子集列 $\{F_n\}$ 使 $m(F_n) \to m^*(E)$;

(iii) 存在 $E$ 的可测子集列 $\{E_n\}$ 使 $m(E_n) \to m^*(E)$.

25. 设 $m^*(E) < \infty$. 求证: 有 $G_\delta$ 集 $H$, 使 $H \supset E, m^*(E) = m(H)$.

26. 设 $A \cup B$ 可测且 $m(A \cup B) = m^*(A) + m^*(B) < \infty$. 求证: $A$ 和 $B$ 都可测. (提示: 取 $G_\delta$ 集 $H$ 使 $H \supset B, m(H) = m^*(B)$. 此时可证 $(A \cup B) \cap H^c$ 是 $A$ 的可测子集, 其测度为 $m^*(A)$.)

27. 构造不相交的集 $A$ 和 $B$ 使 $m^*(A \cup B) < m^*(A) + m^*(B)$.

28. 设 $E \subset \mathbf{R}, m(E) > 0$. 令

$$E^* = \{x \in E : \text{对任何 } \delta > 0 \text{ 有 } m(E \cap (x - \delta, x + \delta)) > 0\}.$$

求证: $E^*$ 可测且 $m(E^*) = m(E)$.

29. 设 $E \subset \mathbf{R}$ 可测, $a$ 和 $b$ 是两个实数. 求证: $F = \{ax + b : x \in E\}$ 可测并且 $m(F) = |a| \cdot m(E)$.

30. 设可测集 $E \subset [0, \infty), \lambda > 0$. 求证: $E^\lambda$ 可测, 其中 $E^\lambda = \{x^\lambda : x \in E\}$.

31. 例 若 $E \subset \mathbf{R}, m(E) > 0$, 求证 0 是 $\{x - y : x, y \in E\}$ 的内点.

证明 由题 17, 存在开区间 $(a, b)$ 使 $m((a, b) \cap E) > \frac{3}{4}(b - a)$. 令 $F = (a, b) \cap E$. 可证 0 是 $H = \{x - y : x, y \in F\}$ 的内点. 因为不然就有 $z_n \not\in H$ 使 $z_n \to 0$. 令 $F_n = \{x + z_n : x \in F\}$, 则 $F_n$ 可测, $m(F_n) = m(F) > \frac{3}{4}(b - a)$, 而且对一切 $n \geq 1$ 有 $F_n \cap F = \varnothing$. 于是 $m(F_n \cup F) > \frac{6}{4}(b - a)$. 但对任何 $\varepsilon > 0$, 当 $n$ 充分大时 $F_n \cup F \subset (a - \varepsilon, b + \varepsilon)$. 由此得矛盾.

32. 设 $m(A) > 0, m(B) > 0$. 求证: $\{a - b : a \in A, b \in B\}$ 及 $\{a + b : a \in A, b \in B\}$ 都有内点.

33.设$m(E)>0$,而且只要$x,y\in E$,就有$\frac x+y2\in E$,求证：$E$有内点.

34.(0,1)中的数$x$用十进制表示$,x_n$是其第$n$位小数.令$A_9=\{x\in(0,1):\max\{x_n\}=9\}.$求证：$m(A_9)=1.$

35.在题 34 中，若$A=\{x\in(0,1):\{x_n\}$中只有有限个 9$\}$,求证：$m(A)=0.$

36.设$m(E)>0.$求证：$E$有不可测子集.

37.设$F$是[0,1]中不可测集.求证：有$0<\varepsilon<1$,使对[0,1]中任何满足$m(E)\geqslant\varepsilon$的可测集 $E,F\bigcap E$ 也是不可测集.

38 设$f(x)$定义在 R 上，并且对任何可测集$E,f(E)$可测.求证：对任何零测集$Z,f(Z)$也是零测集.(提示：利用题 36.)

39.设$f(x)$在 R 上连续.求证：为使$f$把任何可测集变为可测集，充要条件是$f$把任何零测集变为零测集

40.设$f(x)$在 R 上连续可微且$f^\prime(x)>0.$求证：当$E$可测时$,f^-1(E)$也可测.
41. 例 设$E\subset[a,b]$可测$,\{I_k\}_1\leqslant k\leqslant n$ 是$[a,b]$ 中 $n$ 个开区间，并且 $m(I_k\bigcap E)\geqslant\frac23m(I_k),1\leqslant$

$k\leqslant n.$ 求证：$m\left(E\bigcap\left(\bigcup_{k=1}^{n}I_{k}\right)\right)\geqslant\frac13m\left(\bigcup_{k=1}^{n}I_{k}\right).$

证明 不失一般性，设$I_k=(a_k,b_k)$满足下列三条件：(i) $a_1<a_2<\cdots<a_n;$
(ii)$\bigcup_k=1^nI_k=(a_1,b_n);($iii)对任何$1<k<n,\bigcup_s\neq kI_s$不是开区间.
此时$I_1$仅与$I_2$有非空交，$I_n$仅与$I_n-1$有非空交，而对任何$1<k<n,I_k$仅与
$I_{k-1}$及$I_{k+1}$有非空交.下面对$n=3$来证，但其证法有一般性.此时

$I_1=(I_1-I_2)\bigcup(I_1\bigcap I_2)\triangleq A_1\bigcup A_2$,
$I_2=(I_1\bigcap I_2)\bigcup(I_2-I_1-I_3)\bigcup(I_2\bigcap I_3)\triangleq A_2\bigcup A_3\bigcup A_4$,
$I_3=(I_2\bigcap I_3)\bigcup(I_3-I_2)\triangleq A_4\bigcup A_5.$
其中$\{A_k\}_{1\leqslant k\leqslant5}$两两不相交且$\bigcup_k=1^5A_k=\bigcup_{k=1}^3I_k.$令

$$a_k=m(A_k),\quad a_k^*=m(A_k\bigcap E),\quad1\leqslant k\leqslant5.$$

由于$m(I_{k}\bigcap E)\geqslant\frac{2}{3}m(I_{k})$,从而由上面 3 个恒等式得

$$a_1^*+a_2^*=m(I_1\bigcap E)\geqslant\frac{2}{3}m(I_1)=\frac{2}{3}(a_1+a_2),$$

$$a_2^*+a_3^*+a_4^*=m(I_2\bigcap E)\geqslant\frac{2}{3}m(I_2)=\frac{2}{3}(a_2+a_3+a_4),$$

$$a_4^*+a_5^*=m(I_3\bigcap E)\geqslant\frac{2}{3}m(I_3)=\frac{2}{3}(a_4+a_5).$$

由此易知 $2\sum _{k= 1}^{5}a_{k}^{* }\geqslant \frac 23\sum _{k= 1}^{5}a_{k}$,即 $m\left(E\bigcap\bigcup_{k=1}^{3}I_{k}\right)\geqslant\frac{1}{3}m\left(\bigcup_{k=1}^{3}I_{k}\right).$


















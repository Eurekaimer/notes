# 周性伟-Ch1


## 1-10

!!! question "Ch1 1"
    证明定理 1.1.1、1.1.3、1.1.4

`Proof.`

定理 1.1.1 (i)$A\subset A$,(ii)$A\subset B,B\subset C\implies A\subset C$

按照集合包含的定义 $x\in A\implies x\in A,x\in A\implies x\in B\implies x\in C$

定理 1.1.3 $\left\{ A_{\lambda},\lambda\in\Lambda \right\},\left( \bigcup A_{\lambda} \right)^{c}=\bigcap A_{\lambda}^{c},\left( \bigcap A_{\lambda} \right)^{c}=\bigcup A_{\lambda}^{c}$

$$
\begin{aligned}
x\in\left( \bigcup A_{\lambda} \right)^{c}&\iff x\not\in \bigcup A_{\lambda}\\
&\iff\forall\lambda,x\not\in A_{\lambda}(x\in A_{\lambda}^{c})\\
&\iff x\in \bigcap A_{\lambda}^{c}
\end{aligned}
$$

定理 1.1.4 (i)$A\Delta B=\left( A\bigcup B \right)-\left( A\bigcap B \right)$

$$
\begin{aligned}
A\Delta B=(A-B)\bigcup(B-A)&\iff x\in A,x\not\in B;x\in B,x\not\in A\\
&\iff x\not\in A\bigcap B,x \in A\bigcup B
\end{aligned}
$$

(ii)$A\Delta B=B\Delta A$ 根据定义是显然的

!!! question "Ch1 2"
    求证：
    (i) $A-B=A\bigcap B^{c}=B^{c}-A^{c}$
    (ii) $\bigcup\limits_{n=1}^{\infty}A_{n}-\bigcup\limits_{n=1}^{\infty}B_{n}\subset \bigcup\limits_{n=1}^{\infty}(A_{n}-B_{n})$
    (iii)$\bigcup\limits_{n=1}^{\infty}\left( A-A_{n} \right)=A-\bigcap\limits_{n=1}^{\infty}A_{n}$
    (iv)$A_{1}\times B_{1}-A_{2}\times B_{2}=\left[ \left( A_{1}-A_{2} \right)\times B_{1} \right]\bigcup\left[  A_{1}\times\left( B_{1}-B_{2} \right) \right]$


`Proof.`

(i):

$$x\in A-B\implies x \in A,x\not\in B\iff x\in A,x \in B^{c}\iff x \in A\bigcap B^{c}$$

剩余同理

(ii):

$$
\begin{aligned}
x \in \bigcup\limits_{n=1}^{\infty} A_{n}-\bigcup\limits_{n=1}^{\infty} B_{n}&\iff x\in \bigcup\limits_{n=1}^{\infty} A_{n} ,x\not\in \bigcup\limits_{n=1}^{\infty} B_{n}\\
&\iff \exists m,x\in A_{m},\forall n,x\not\in B_{n}\\
&\iff x\in A_{m}-B_{m}\\
&\iff x\in \bigcup\limits_{n=1}^{\infty} (A_{n}-B_{n})
\end{aligned}
$$


(iii):

$\forall x\in A-\bigcap\limits_{n=1}^{\infty}A_{n}$，$x \not\in \bigcap\limits_{n=1}^{\infty}A_{n}\implies\exists k,x \not\in A_{k,} s.t.x\in A-A_{k}$，得 $x\in \bigcup\limits_{n=1}^{\infty}\left( A-A_{n} \right)$,$LHS\supset RHS$

$\forall x\in \bigcup\limits_{n=1}^{\infty}\left( A-A_{n} \right)\implies\exists k,x\in A-A_{k}$，而 $\left( A-A_{k} \right)\subset A-\bigcap\limits_{n=1}^{\infty}A_{n}$，$LHS\subset RHS$

综上所述：$\bigcup\limits_{n=1}^{\infty}\left( A-A_{n} \right)=A-\bigcap\limits_{n=1}^{\infty}A_{n}$

(iv):

$(x,y)\in(A_{1}-A_{2})\times B_{1}\subset A_{1}\times B_{1},x \not\in A_{2},(x,y) \not\in A_{2}\times B_{2},(x,y)\in A_{1}\times B_{1}-A_{2}\times B_{2}$，同理可知另一侧也成立，即得 $LHS \supset RHS$

若是 $(x,y)\in A_{1}\times B_{1}-A_{2}\times B_{2}$，选择对 $x$ 进行讨论：
假设若是 $x\in A_{2}\implies y \not\in B_{2}$，相应的有 $(x,y)\in A_{1}\times \left( B_{1}-B_{2} \right)$，反之 $x \not\in A_{2}$，则也有 $x \in \left( A_{1}-A_{2} \right)\times B_{1}$，可以得出：$LHS \subset RHS$

综上所述：$A_{1}\times B_{1}-A_{2}\times B_{2}=\left[ \left( A_{1}-A_{2} \right)\times B_{1} \right]\bigcup\left[  A_{1}\times\left( B_{1}-B_{2} \right) \right]$


!!! question "Ch1 3"
    设 $f(x)$ 和 $f_{n}(x)(n\geqslant 1)$ 都是 $\mathbb{R}$ 上的实函数，求证：

    $$\left\{ x:\lim\limits_{ n \to \infty } f_{n}(x)=f(x) \right\}=\bigcap\limits_{r=1}^{\infty} \bigcup\limits_{n=1}^{\infty} \bigcap\limits_{k=n}^{\infty} \left\{ x:\lvert f_{k}(x)-f(x) \rvert < \frac{1}{r} \right\}
    $$


`Proof.`

根据连续的定义书写即可：将交翻译为任意，将并翻译为存在

$\forall r,\exists n\geqslant 1,\forall k \geqslant n, \lvert f_{k}(x)-f(x) \rvert< \frac{1}{r}$

而对于连续的定义$\varepsilon>0,\exists r,s.t. \frac{1}{r}<\varepsilon$

注：这个题目实际是相当重要的，蕴含了集合分解和集合表示的思想，还给出了并和交隐含的存在与任意的技巧.


!!! question "Ch1 4"
    证明：
    (i)对任何集$A$和$B$，必有集$C$，使$A\Delta C=B$
    (ii)$A\Delta(B\Delta C)=(A\Delta B)\Delta C$
    (iii)$A_{1}\Delta A_{2}\Delta\dots\Delta A_{n}=\left\{ x:x\text{属于且仅属于}\left\{ A_{k} \right\}_{1\leqslant k \leqslant n}\text{中奇数个}A_{k} \right\}$

`Proof.`

(i)这个构造实际上可以通过Venn图分析得到

注意到$A\Delta A=\emptyset,\emptyset\Delta A=A\implies C=A\Delta B$

(ii)这个只需要集合表示一下就行

$$
\begin{aligned}
x\in(A\Delta B)\Delta C&\iff x\in A\Delta B-C,x\in C-A\Delta B\\
&\iff x\in A,x\not\in B,x\not\in C;x \in B,x\not\in A,x\not\in C;\\
&+x\in C-A\Delta B\left( x\in C,x\not\in A,x\not\in B;x\in \bigcap A \right)\\
&\iff x\in A\Delta(B\Delta C)
\end{aligned}
$$

(iii)可以使用归纳法

$n=1,n=2$，可以将目标转变为$x\in(A_{1}\Delta\dots\Delta A_{n-1})\Delta A_{n}$，这样我们就可以运用归纳的结果了，若$x\in(A_{1}\Delta\dots\Delta A_{n-1}),x\not\in A_{n}$，由归纳假设只属于前面的奇数个项，而另一种情况只属于$A_{n}$和前面的偶数个项相加知道也是奇数情况，由此可得结论成立.



!!! question "Ch1 5"
    设$\left\{ A_{n} \right\}_{n\geq_{1}}$是一个集列，令$B_{1}=A_{1},B_{n}=A_{n}-\bigcup\limits_{k=1}^{n-1}A_{k},n\geq 2$
    求证：$\left\{ B_{n} \right\}_{n\geq{1}}$两两不相交且$\bigcup\limits_{n=1}^{\infty}B_{n}=\bigcup\limits_{n=1}^{\infty}A_{n}$

`Proof.`

先证明两两不相交，假设$B_{m},B_{n},m<n$，若其中$m=1$，显然有$x\in B_{n}(n \geq 2),x \not\in A_{1}=B_{1}$

若$m \neq 1$，对于$B_{m}=A_{m}-\bigcup\limits_{k=1}^{m-1}A_{k},B_{n}=A_{n}-\bigcup\limits_{k=1}^{n-1}A_{k},\bigcup\limits_{k=1}^{m-1}A_{k}\subset \bigcup\limits_{k=1}^{n-1}A_{k}$，假设存在$y\in B_{m}\bigcap B_{n},y\in B_{n},y \not\in \bigcup\limits_{k=1}^{n-1}A_{k},y \not\in A_{m}(m<n)\implies y \not\in B_{m}$，矛盾，所以两两不相交，这是极其显然的.

再证明$\bigcup\limits_{n=1}^{\infty}B_{n}=\bigcup\limits_{n=1}^{\infty}A_{n}$

首先根据$B_{n}\subset A_{n}\implies \bigcup\limits_{n=1}^{\infty}B_{n}\subset \bigcup\limits_{n=1}^{\infty}A_{n}$


$$\begin{aligned}
x\in \bigcup\limits_{n=1}^{\infty}B_{n},\exists k,x\in B_{k}&=A_{k}-\bigcup\limits_{n=1}^{k-1}A_{n} \\
&\implies x\in A_{k}\subset \bigcup\limits_{n=1}^{\infty}A_{n}\\
&\implies\bigcup\limits_{n=1}^{\infty}B_{n}\subset\bigcup\limits_{n=1}^{\infty}A_{n}
\end{aligned}$$


同理若是$x\in \bigcup\limits_{n=1}^{\infty}A_{n},\exists k,x\in A_{k}$，构造一个集合$S=\left\{ n:x\in A_{n} \right\}$，已知该集合非空，那么根据非空集合必有最小元素的性质，将最小元素记为$m$，


那么$x\in B_{m}=A_{m}-\bigcup\limits_{n=1}^{m-1}A_{n}\implies x\in \bigcup\limits_{n=1}^{\infty}B_{n}\implies\bigcup\limits_{n=1}^{\infty}B_{n}\supset\bigcup\limits_{n=1}^{\infty}A_{n}$

或者也可以用下面这种写法


$$
\begin{aligned}
\bigcup\limits_{k=1}^{n} A_{k}&=A_{1}\bigcup A_{2}\bigcup\dots \bigcup A_{n}\\
&=A_{1}\bigcup(A_{2}-A_{1})\bigcup\dots \bigcup\left( A_{n}-\bigcup\limits_{k=1}^{n-1} A_{k} \right)\\
&=\bigcup\limits_{k=1}^{n} B_{k}
\end{aligned}
$$

两边$n$同时取无穷也可以得到

综上所述：$\bigcup\limits_{n=1}^{\infty}B_{n}=\bigcup\limits_{n=1}^{\infty}A_{n}$


!!! question "Ch1 6"
    设$\left\{ A_{n} \right\}$是一列集合.求证：
    (i)$\chi_{\varlimsup\limits_{n\to \infty}A_{n}}(x)=\varlimsup\limits_{ n \to \infty }\chi_{A_{n}}(x)$
    (ii)$\chi_{\varliminf\limits_{n\to \infty}A_{n}}(x)=\varliminf\limits_{ n \to \infty }\chi_{A_{n}}(x)$

`Proof.`

(i):

根据上极限的定义可知，$\varlimsup\limits_{ n \to \infty }A_{n}=\bigcap\limits_{i=1}^{\infty}\bigcup\limits_{n=i}^{\infty}A_{n}$，无穷多个集合含有其中元素.
若$x\in \varlimsup\limits_{ n \to \infty }A_{n}(\chi_{\varlimsup\limits_{ n \to \infty }A_{n}}(x)=1),\forall N,\exists n,n>N\implies \chi_{A_{n}}(x)=1，\varlimsup\limits_{ n \to \infty }\chi_{A_{n}}(x)=1=\chi_{\varlimsup\limits_{ n \to \infty }A_{n}}(x)$
若$x\notin \varlimsup\limits_{ n \to \infty }A_{n}(\chi_{\varlimsup\limits_{ n \to \infty }A_{n}}(x)=0)$，只有有限多个集合含有$x$,那么$\varliminf\limits_{ n \to \infty }\chi_{A_{n}}(x)=0=\chi_{\varlimsup\limits_{ n \to \infty }A_{n}}(x)$
综上所述：证得$\chi_{\varlimsup\limits_{n\to \infty}A_{n}}(x)=\varlimsup\limits_{ n \to \infty }\chi_{A_{n}}(x)$

(ii):

根据下极限的定义可知，$\varliminf\limits_{ n \to \infty }A_{n}=\bigcup\limits_{i=1}^{\infty}\bigcap\limits_{n=i}^{\infty}A_{n}$，只有有限个集合不含有其中元素.
若$x\in \varliminf\limits_{ n \to \infty }A_{n}(\chi_{\varliminf\limits_{ n \to \infty }A_{n}}(x)=1),\exists N,n>N\implies \chi_{A_{n}}(x)=1，\varliminf\limits_{ n \to \infty }\chi_{A_{n}}(x)=1=\chi_{\varliminf\limits_{ n \to \infty }A_{n}}(x)$
若$x\notin \varliminf\limits_{ n \to \infty }A_{n}(\chi_{\varliminf\limits_{ n \to \infty }A_{n}}(x)=0)$，有无穷多个集合不含有$x$，那么$\varliminf\limits_{ n \to \infty }\chi_{A_{n}}(x)=0=\chi_{\varliminf\limits_{ n \to \infty }A_{n}}(x)$
综上所述：证得$\chi_{\varliminf\limits_{n\to \infty}A_{n}}(x)=\varliminf\limits_{ n \to \infty }\chi_{A_{n}}(x)$

!!! question "Ch1 7"
    设映射$f:X\to Y$，求证：
    (i)若$A \subset X$, 则$A \subset f^{-1}[f(A)]$, 并且当$f$为一一映射时$A=f^{-1}[f(A)]$;
    (ii)若$B\subset Y$，则$f\left[ f^{-1}(B) \right]=B\bigcap f(X)$且$f^{-1}(B^{c})=\left[ f^{-1}(B) \right]^{c}$
    (iii)当且仅当$f$为一一映射时，对任何$A,B\subset X$有$f\left( A\bigcap B \right)=f(A)\bigcap f(B)$
    (iv)当且仅当$f$为完全一一映射时, 对任何$A \subset X$有$f\left(A^{c}\right)=\left[f(A)\right]^{c}$.

`Proof.`

(i):

$x\in A,f(x)\in f(A)\implies x\in f^{-1}\left( f(A) \right)\implies A\subset f^{-1}[f(A)]$

反证若是$A\subset f^{-1}[f(A)],A\neq f^{-1}[f(A)],\exists y\in f^{-1}[f(A)]-A$

从而有$f(y) \in f(A)\implies \exists x\in A,f(x)\in f(A)\implies y=x$即得矛盾

(ii):

先证明$f\left[ f^{-1}(B) \right]=B\bigcap f(X)$:

取任意$y\in f\left[ f^{-1}(B) \right]$，存在$x\in f^{-1}(B),f(x)=y\implies f(x)\in B ,y\in B$

同时有$x\in X,y\in f(X)$,那么得到$f\left[ f^{-1}(B) \right]\subset B\bigcap f(X)$

相应的，$y\in B \bigcap f(X) \implies \exists x\in X,f(x)=y\in B,x=f^{-1}(B)$，因此$y=f(x)\in\left[ f^{-1}(B) \right]$

那么得到$f\left[ f^{-1}(B) \right]\supset B\bigcap f(X)$

综上所述：$f\left[ f^{-1}(B) \right]=B\bigcap f(X)$

再证明$f^{-1}(B^{c})=\left[ f^{-1}(B) \right]^{c}$:

取任意$x\in f^{-1}(B^{c}),f(x)\in B^{c}(f(x)\not\in B)\implies x\not\in f^{-1}(B),x\in \left[ f^{-1}(B) \right]^{c}$，即$f^{-1}(B^{c})\subset\left[ f^{-1}(B) \right]^{c}$，相应的取$x\in \left[ f^{-1}(B) \right]^{c},x \not\in f^{-1}(B),f(x)\not\in B\implies f(x)\in B^{c},x\in f^{-1}(B^{c})$，即$f^{-1}(B^{c})\supset\left[ f^{-1}(B) \right]^{c}$

综上所述：$f^{-1}(B^{c})=\left[ f^{-1}(B) \right]^{c}$

(iii):

必要性证明：

已知$f$为一一映射,当$x\in A\bigcap B,f(x)\in f(A),f(x)\in f(B),f\left( A\bigcap B \right)\subset f(A)\bigcap f(B)$.

任取$y\in f(A)\bigcap f(B),\exists a\in A,b\in B,s.t.f(a)=y,f(b)=y$，又根据单射的定义，得$a=b\in A\bigcap B$

综上所述：$f\left( A\bigcap B \right)=f(A)\bigcap f(B)$

充分性证明：

反证法，若不是一一映射假设存在$x_{1}\neq x_{2}$,使得$f(x_{1})=f(x_{2})=C$，
构造$A=\left\{ x_{1} \right\},B=\left\{ x_{2} \right\}$，根据题设$f\left( A\bigcap B \right)=f(\emptyset)=\emptyset\neq f(A)\bigcap f(B)=C$，矛盾，$f$为单射

综上所述:当且仅当$f$为一一映射时，对任何$A,B\subset X$有$f\left( A\bigcap B \right)=f(A)\bigcap f(B)$

(iv):

$x\in A^{c},f(x)\not\in f(A)$，否则有$y\in A,f(x)=f(y)\implies x=y$矛盾，也就是$f(A^{c})\subset[f(A)]^{c}$，由于是双射可以考虑$f^{-1}$，$f(x)\not\in f(A),x\not\in A^{c}$即得$f(A^{c})\supset[f(A)]^{c}$

再证明另一侧，取$A=X,f(A)^{c}=\emptyset,f(A)=Y$，这步证明了满性，取$y\neq x,A=\left\{ x \right\},y\in A^{c}$，因此由$f(A^{c})=f(A)^{c}\implies f(y)\in f(A)^{c}\implies f(y)\neq f(x)$，这就证明了单性，综上所述可知双射.


注：很容易把自己绕晕，可以多看看，尤其是对于任意的条件通过取不同集合证明不同的条件可以积累取特殊集合的技巧.

!!! question "Ch1 8"
    设$f$ 是 $\mathbb{R}$上的实函数.若有 $M >0$，使对任何有限个两两不等的实数 $x_1,\dots,x_{n}$有$\left\lvert  \sum\limits_{k=1}^{n}f(x_{k})  \right\rvert\le M$.
    求证:$\left\{ x:f(x) \neq 0 \right\}$是至多可数集.


`Proof.`

反证法，假设$\left\{ x:f(x) \neq 0 \right\}$并非至多可数，那么根据$\left\{ x:f(x) \neq 0 \right\}=\bigcup\limits_{n=1}^{\infty}\left\{ x:\lvert f(x) \rvert > \frac{1}{n} \right\}$

其中必有一个不可数集，否则可数个至多可数集的并仍是至多可数集，与假设矛盾


不妨设$\left\{ x:\lvert f(x) \rvert> \frac{1}{k} \right\}$是不可数集，那么再将集合分解为$\left\{ x: f(x)> \frac{1}{k} \right\}\bigcup\left\{ x: f(x) < -\frac{1}{k} \right\}$，其中一定有一个不可数集，否则两个至多可数集的并仍是至多可数集，矛盾.

不妨设$\left\{ x: f(x) > \frac{1}{k} \right\}$是不可数集，从中选取出一个可数子集记为$A$，再从$A$中选择$[kM]+1$个元素，$\left\lvert  \sum\limits_{i=1}^{[kM]+1}f(x_{i})  \right\rvert>kM \cdot \frac{1}{k}=M$

得到矛盾，那么得证$\left\{ x:f(x)\neq 0 \right\}$是至多可数集


注：这里也运用了集合分解的技术，导出矛盾的思路是，固定一个$\frac{1}{k}$然后才能通过题目给出的有限个条件制造出一个大于$M$的数


!!! question "Ch1 9"
    求证:$\mathbb{R}$上单调函数的间断点是至多可数的.

`Proof.`

由于是$\mathbb{R}$上单调函数$f$应当是单射，那么不妨先设单调递增，由此可知两边极限存在，任意选择$\mathbb{R}$上的一个间断点记为$x_{0}$，那么根据函数的单调性知道$f(x_{0}^{-})\le f(x_{0}^{+})$，如果不等那么取$(f(x_{0}^{-}),f(x_{0}^{+}))$中的一个有理点$q_{x_{0}}$，如果相等也就是可去间断点取$f(x_{0}^{-})$的小邻域内的有理数，这样就构成了间断点和有理数的一个单射，而全体有理数是至多可数的，那么间断点也一定是至多可数的.


!!! question "Ch1 10"
    设$f$是$[a,b]$上单增实值函数，$f([a,b])$是区间$[f(a),f(b)]$的稠子集，求证：$f$连续.

`Proof.`

反证法，假设$f$有不连续点，那么设存在不连续点$x_{0}(x_{0}\in [a,b])$，使得$f(x_{0}^{-})<f(x_{0}^{+})$,若是端点则选取单侧极限。
由于$f([a,b])$是区间$[f(a),f(b)]$的稠子集，$\forall I\subset f([a,b]),I\bigcap [f(a),f(b)]\neq \emptyset$，然而取$\left( f(x_{0}^{-}),f(x_{0}^{+}) \right)$，有$\left( f(x_{0}^{-}),f(x_{0}^{+}) \right)\subset \left[ f(a),f(b) \right]$，因为单调递增有$f(a)\leqslant f(x_{0}^{-})\leqslant f(x_{0}^{+})\leqslant f(b)$.但是$f([a,b])\bigcap(f(x_{0}^{-}),f(x_{0}^{+}))=\emptyset$，所以矛盾，得知假设不成立，$f$连续


## 11-20

!!! question "Ch1 11"
    若$A_{2} \subset A_{1}, B_{2} \subset B_{1}, A_{2} \sim B_{2}, A_{1} \sim B_{1}$, 试问是否必有 $A_{1}-A_{2} \sim B_{1}-B_{2}$ ?

`Sol.`

构造思路：可以考虑$A_{1}=A_{2}$这样就可以使$A_{1}-A_{2}=\emptyset$，然后使得$B_{1}-B_{2}\neq \emptyset$即可

令$A_{1}=A_{2}=\mathbb{Q},B_{2}=\mathbb{Z},B_{1}=\mathbb{Q}$



注：经典的反例题，可以适当积累一下

!!! question "Ch1 12"
    求证: 有限个可数集的直积是可数集. (无限个可数集呢?)

`Proof.`

不妨设可数集为$\mathbb{Q}$，只需要证明$\mathbb{Q}^{2}$后续使用归纳法，$\mathbb{Q}^{n}=\mathbb{Q}^{n-1}\times \mathbb{Q}$

我们知道$\mathbb{Q}\times \mathbb{Q}=\bigcup\limits_{k=1}^{\infty}\mathbb{Q}\times \left\{ r_{k} \right\},\mathbb{Q}=\left\{ r_{1},r_{2},\dots,r_{n}\dots \right\}$

这样可以得到一个至多可数集，而可数集的可数并是可数的

至于无限个可数集，反例是容易举的，例如可数个整数集就相当于是$n$元数列全体的一个超集，而$n$元数列全体是具有连续统势的，所以应当不可数(即便是可数无穷也无法可数)



!!! question "Ch1 13"
    例 设实数集$E$不可数. 求证: 有$x$, 使对任何$\delta>0, E \cap(x-\delta, x+\delta)$不可数.

`Proof.`

用反证法. 不然对任何 $x \in E$, 必有 $\delta_{x}>0$ 使 $E \cap\left(x-\delta_{x}, x+\delta_{x}\right)$ 至多可数. 从而对每一 $x \in E$, 必有满足 $r_{x}<x<r_{x}$ 的有理数 $r_{x}$ 和 $R_{x}$, 使 $E \cap\left(r_{x}, R_{x}\right)$ 至多可数. 由题 12, $\left\{\left(r_{x}, R_{x}\right)\right\}_{x \in E}$ 中至多只有可数个开区间. 从而 $E=\bigcup_{x \in E}\left[E \cap\left(r_{x}, R_{x}\right)\right]$ 是一个至多可数集, 此与题设矛盾.


注：很重要的题目，需要掌握取有理数这种证明手法，与之相关的题可以结合起来看如14，


!!! question "Ch1 14"
    求证：$E$中满足题13中条件的点$x$的全体是不可数集


`Proof.`


反证法，假设满足条件的全体为至多可数集，记为$A$

那么对于$x\in E-A$，利用条件，存在$\delta_{x}>0,s.t.E\bigcap \left( x-\delta_{x},x+\delta_{x} \right)$至多可数，可以找到有理数$r_{x}$和$R_{x}$使得$r_{x}<x<R_{x}$，并且$E\bigcap \left( r_{x},R_{x} \right)$至多可数，并且区间端点为有理数的区间只有至多可数个

那么利用$E=A\bigcup \left( E-A \right)$，并且$E-A=\bigcup\limits_{x\in E-A}E\bigcap \left( r_{x},R_{x} \right)$是至多可数集(至多可数个至多可数集的并还是至多可数集)，由假设得$A$是可数集，因此$E$也是至多可数集，与原题设矛盾

综上：$A$是不可数集


!!! question "Ch1 15"
    设$\{x_{n}\}_{n\geqslant 1}$是可数个实数. 试具体写出一个单增函数$f$, 它以$\{x_{n}\}_{n\geqslant 1}$为其间断点全体.

`Sol.`


考虑收敛级数$\sum\limits \frac{1}{n^{2}}$，那么定义$f(x)=\sum\limits_{n:x_{n}<x} \frac{1}{n^{2}}$

显然的有$f(x_{n_{0}}^{+})-f(x_{n_{0}})= \frac{1}{n_{0}^{2}}$

注1：这个构造比较巧妙，但是我想应当也可以给出一个解释，要想构造单增函数并且还需要以$x_{n}$为间断点，很自然会想到阶梯函数(经验分布函数！)所以下面这种构造实际是有道理的，并且为了避免溢出我们最好选择收敛的级数.

注2：显然的构造方式不止这一种，但是需要注意的是不太能做到为$x_{n}$排序并且选取最小的那个，因为很有可能涉及无穷操作，这种证明是危险的.

!!! question "Ch1 16"
    证明:$\mathbb{R}$上的实函数$f$的第一类间断点(即左右极限存在有限的间断点)是至多可数的.


!!! tip "+ Hint"
    证明$\left\{ x:\lvert f(x)-f(x^{+}) \rvert> \frac{1}{n} \right\}$是至多可数集

`Proof.`

先明确研究目标：$\left\{ x:\lvert f(x)-f(x+0) \rvert>0 \right\}\bigcup \left\{ x:\lvert f(x)-f(x-0) \rvert>0 \right\}$，我们很自然会考虑进行集合表示(常用的一个分解式)

$$
\left\{ x:\lvert f(x)-f(x+0) \rvert>0 \right\}=\bigcup\limits_{n=1}^{\infty} \left\{ x:\lvert f(x^{+})-f(x) \rvert> \frac{1}{n} \right\}
$$

下面开始正式的证明：


先定义$E=\left\{ x:f(x^{-}),f(x^{+})都存在 \right\}$不妨讨论右极限，左极限同理

设右极限为$f(x^{+})$，那么定义$A=\left\{ x\in E:\lvert f(x^{+})-f(x) \rvert> 0 \right\}$，

将集合进行分解$A=\bigcup\limits_{k=1}^{\infty}A_{k},A_{k}=\left\{ x\in E:\lvert f(x^{+})-f(x) \rvert> \frac{1}{k} \right\}$

再证明$A_{k}$至多可数


根据右极限定义，对于任意的$x\in A_{k}$，$\exists\delta_{x}>0,x<y<x+\delta_{x}$都有$\lvert f(y)-f(x^{+}) \rvert< \frac{1}{4k}$ ，对于任意的$x_{1},x_{2}\in \left( x,x+\delta _{x} \right)$，事实上可以直接由柯西收敛定理结合右极限的存在性直接得到下面的式子而不用通过三角不等式，$\lvert f(x_{1})-f(x_{2}) \rvert\leq\lvert f(x_{1})-f(x^{+}) \rvert+\lvert f(x_{2})-f(x^{+}) \rvert< \frac{1}{2k}$


再来说明$A_{k}\bigcap \left( x,x+\delta_{x} \right)=\emptyset$.这事实上是显然的，右极限的存在性保证了$x$右端的弱连续性由此可知不可能出现符合$A_{k}$条件的点

反证法，如果存在$x_{0}\in A_{k}\bigcap \left( x,x+\delta_{x} \right)$,有$\lvert f(x_{0}^{+})-f(x_{0}) \rvert> \frac{1}{k}$，那么也存在$\delta_{0},s.t.y_{0}\in \left( x_{0},x_{0}+\delta_{0} \right),x_{0}+\delta_{0}<x+\delta_{x}$,$\lvert f(y_{0})-f(x_{0}^{+}) \rvert< \frac{1}{2k}$


$$
\lvert f(x_{0})-f(y_{0}) \rvert \geq \lvert \lvert f(x_{0}^{+})-f(x_{0}) \rvert - \lvert f(x_{0}^{+})-f(y_{0}) \rvert \rvert > \frac{1}{2k}
$$

与原本条件的任取 $x_{1},x_{2}\in \left( x,x+\delta _{x} \right)$，都有绝对值小于 $\frac{1}{2k}$ 矛盾，由此可得 $A_{k}\bigcap \left( x,x+\delta_{x} \right)=\emptyset$

因此 $\left\{ (x,x+\delta_{x}) ,x\in A_{k}\right\}$ 是两两不交的开区间，那么 $A_{k}$ 是至多可数的，由于可数个至多可数集的并仍是至多可数的，我们得出 $A$ 是至多可数集，那么左极限情形同理可证，综上可得，第一类间断点是至多可数的。


!!! question "Ch1 17"
    设 $E\subset \mathbb{R}^{3}$,$E$ 中任何两点的距离是有理数，求证 $E$ 至多可数


!!! tip "+ Hint"
    空间中两个圆，或是重合，或是至多相交两个点

`Proof.`

思考：$E$ 与 $Q$ 应当是对等的，所以应该基数相同至多可数

法一：

选取 $P_{1},P_{2},P_{3}\in E$，$X=\left\{ x \in \mathbb{R}^{3}:d(x,P_{i}) \in \mathbb{Q},i=1,2,3\right\}$

那么根据题意我们有 $d(x,P_{i})=r_{i} \in \mathbb{Q}$，三个点可以确定一个平面了，其中任意两个点形成的以有理数为半径的球的交至多为一个圆，圆与球的交相当于两个圆的交，至多有两个交点，那么我们知道 $\mathbb{Q}^{3}$ 是至多可数的，那么得到 $E$ 也至多可数（子集乘两倍仍然至多可数）.


法二：

在 $E$ 中任选一点 $x_{0}$，根据条件得 $E=\bigcup\limits_{r\in Q^{+}}E\bigcap S(x_{0},r)$，$S(x_{0},r)$ 是以 $x_{0}$ 为圆心，$r$ 为半径的球面，只要证明 $E\bigcap S(x_{0},r)$ 至多可数即可证得 $E$ 至多可数


在 $E\bigcap S(x_{0},r)$ 中额外选取一点 $x_{1}$（总可以选取到，否则该集合只有一个点，直接至多可数得到平凡），可以得到

$$E\bigcap S(x_{0},r)=\bigcup\limits_{r_{1}\in Q^{+}}E\bigcap S(x_{0},r)\bigcap S(x_{1},r_{1})$$

而 $S(x_{0},r)\bigcap S(x_{1},r_{1})$ 是一个空间中的圆，可以仿照前面的步骤在其上再次选取一点 $x_{2}$，并且选取有理数为半径，

$$E\bigcap S(x_{0},r)\bigcap S(x_{1},r_{1})=\bigcup\limits_{r_{2}\in Q^{+}}E\bigcap S(x_{0},r)\bigcap S(x_{1},r_{1})\bigcap S(x_{2},r_{2})$$

由于圆与球的交相当于两个圆的交，或是重合，或是至多相交两个点，根据选取过程知无法重合，那么至多相交两个点也就是至多可数，可数个至多可数集的并仍至多可数，则 $E\bigcap S(x_{0},r)\bigcap S(x_{1},r_{1})$ 可数，一直运用可数个至多可数集的并为至多可数集，得到 $E$ 至多可数。

注：可以推广到 $n$ 维，具体做法可以参考知乎上的一篇文章

!!! question "Ch1 18"
    求证：有限 $n$ 元数列全体及有理系数多项式全体都是可数集。

`Proof.`

首先有限 $n$ 元数列，$(a_{1},a_{2},\dots,a_{k},\dots)$ 存在一个 $N$ 使得 $\forall n\geqslant N,a_{n}=0$，然后我们可以考虑一个 $n$ 进制的分解 $\sum\limits_{k=1}^{\infty} \frac{a_{k}}{n^{k}}$，这显然是一个 $[0,1]$ 上有理数的 $n$ 进制分解，所以显然是可数集。


再考虑有理系数多项式全体显然可以将多项式 $\sum\limits_{k=0}^{n}a_{k}x^{k}$ 映到 $(a_{0},a_{1},\dots,a_{n},0\dots)$ 上，那么也就是 $\mathbb{Q}^{n}\times \left\{ \mathbb{Q}-\left\{ 0 \right\} \right\}$ 显然是至多可数的记为 $A_{n}$ 那么 $A=\bigcup\limits_{n=0}^{\infty}A_{n}$ 也是至多可数集


!!! question "Ch1 19"
    若 $\mathbb{R}$ 中的集 $A$ 不可数，求证：必有 $x\in A$,使对任何 $\delta>0$,$(x-\delta,x)$ 和 $(x,x+\delta)$ 中都有 $A$ 中的点，而且这种 $x$ 全体也是不可数的。

`Proof.`

思考：由于条件比较少我们考虑反证法，只需要证明与题设相反的两个集合都是至多可数集即可

反证法，构造逆否命题，$\exists\delta>0,s.t.(x-\delta,x),(x,x+\delta)$ 中没有 $A$ 的点，


先讨论 $A_{+}:=\left\{  x\in A,A\bigcap(x,x+\delta)=\emptyset \right\}$,任取 $x_{1},x_{2}\in A_{+}$,$x_{2}\not\in(x_{1},x_{1}+\delta_{x_{1}}),x_{1}\not\in(x_{2},x_{2}+\delta_{x_{2}})$，容易知道这样可以得到两两不交的开区间族，同理可证 $A_{-}:=\left\{  x\in A,A\bigcap(x-\delta,x)=\emptyset \right\}$


那么 $A_{+},A_{-}$ 至多可数，与题设中的不可数矛盾，所以这种点必然存在而且这种点的全体 ($A-A_{-}-A_{+}$) 也是不可数的。



!!! question "Ch1 20"
    例 设 $\overline{\overline{A \cup B}}=c$ （连续统势）. 求证： $A$ 和 $B$ 中至少有一个的基数为 $c$.

`Proof.`

我们不妨设 $A \cup B=\mathbf{R}^{2}, A$ 和 $B$ 是 $\mathbf{R}^{2}$ （平面）中的两个子集， $\mathbf{R}^{2}$ 中的点用 $(x, y)$ 来表示。现显然有 $\bar{A} \leqslant c$ 及 $\bar{B} \leqslant c$. 今假设 $\bar{A}<c$ 及 $\bar{B}<c$. 于是有 $x_{0} \in \mathbf{R}$,使对一切 $y \in \mathbf{R}$ 有 $(x_{0}, y) \notin A$;

注：可以考虑反面，$\forall x\in \mathbb{R},\exists y_{0}\in \mathbb{R},(x,y_{0})\in A$，那么可以将这些点都映射到$x$轴上使得$A$有连续统势与假设矛盾.

同样有 $y_{0} \in \mathbf{R}$, 使对一切 $x \in \mathbf{R}$ 有 $(x, y_{0}) \notin B$. 这样 $(x_{0}, y_{0}) \notin A \cup B=\mathbf{R}^{2}$, 矛盾.


## 21-30

!!! question "Ch1 21"
    设 $\bigcup\limits_{n=1}^{\infty} A_{n}$ 有连续统势. 求证: 至少有一个 $A_{n}$ 有连续统势.

`Proof.`

注：这里需要知道$\overline{\overline{\mathbb{R}^{\infty}}}=c$，然后就可以仿照上面的了

直接利用20题的结论，仿照上面的证明即可，每个$A_{n}$都没有连续统势


!!! example "$\mathbb{R}^{\infty}$"
    $\forall x\in \mathbb{R}^{\infty},x=(x_{1},x_{2},\dots,x_{k}\dots)$

    $$f(x)=\left\{ \left\{ (k,r) \right\} ,k\to x_{k},r\in \mathbb{Q},r<x_{k} \right\} $$

    这样定义了一个从$\mathbb{R}^{\infty}\to P(N\times \mathbb{Q})$的单射，另一边显然有它的势大于$\mathbb{R}$那么可得它有连续统势





!!! question "Ch1 22"
    具体构造下列集之间的一个完全一一映射
    (i)$\left[ 0,1 \right]$与$\left( 0,1 \right)$
    (ii)$(0,1]$与$(0,1]\times(0,1]$
    (iii)正整数列全体与严格单增正整数列全体

`Proof.`

注：构造方式均为无理点不动、有理点平移

(i):

我们将$\left[ 0,1 \right]$分为$0,1$和$(0,1)$内的有理数和无理数，

对无理数部分构造一个无理数的恒等映射也就是当$x\in (0,1),x\not\in Q$时，$f(x)\equiv x$ 

对有理数部分先证明它是可数集，首先全体有理数是可数集，而开区间内的有理数有无限个，根据可数集的无限子集也是可数集，我们知道$(0,1)$内的有理数一定也是可数集.这样就可以进行排列:对于所有的$x\in(0,1),x\in Q$都可以用$\left\{ x_{n} \right\}_{n \geq 1}$表示.

然后构造有理数部分的映射$f(x_{1})=0,f(x_{2})=1,f(x_{n})=x_{n-2},n \geq 3$

这样就得到了$\left( 0,1 \right)\to[0,1]$的完全一一映射，下面进行分别验证.

从构造过程中可以知道$\forall x\in[0,1]$，都有$y\in(0,1)$使得$f(y)=x$($x=0,y=x_{1};x=1,y=x_{2}$).

$x \not\in Q,y=x;x \in Q-\left\{ 0,1 \right\} ,\exists k \geq 1,s.t.x=x_{k},y=x_{k+2}$所以$f$是满射

根据构造过程，若是$x_{1} \neq x_{2}$，必有$f(x_{1}) \neq f(x_{2})$，所以得到$f$是单射，综上所述：$f$是完全一一映射.

(ii):

这是一位学长的解答：

考虑$\forall x\in(0,1]$，无限小数不允许某位后全为0，做十进制分解

例如$0.100100234\dots\implies 1,001,002,3,4\dots\implies 0.10024\dots ,0.0013\dots$

这样按照0出现的位置进行一个拆分将奇数段和偶数段分别映射到不同的集合中，相反则是拼接，容易知道这就是一种双射.

注：应该也可以仿照$\mathbb{R}\to \mathbb{R}^{2}$，例如下面这种方式：

对于$x=0.a_{1}b_{1}a_{2}b_{2}\dots\implies x_{1}=0.a_{1}a_{2}\dots,x_{2}=0.b_{1}b_{2}\dots$


(iii):

直接考虑一阶差分即可$a_{1}=b_{1},b_{n+1}=b_{n}+a_{n}$




!!! question "Ch1 23"
    求证：$\mathbb{R}$上实函数全体有基数$2^{c}$

`Proof.`

思考：显然我们可以考虑使用Berstein定理，而$\mathbb{R}$有连续统势那么可以考虑构造$\mathbb{R}$上实函数与$\mathbb{R}^{2}$之间的单射

容易看出$\mathbb{R}$上的任一实函数可以由$\mathbb{R}^{2}$的一个子集表示$(x,f(x))$，而$\mathbb{R}^{2}$和$\mathbb{R}$都有连续统势，那么可以得到$\mathbb{R}$上实函数全体的势一定小于等于$2^{c}$

另一方面，对于$\mathbb{R}$的任一子集$A$，构造特征函数$\chi_{A}(x)=1(x \in A)$，即得是一个单射，那么$2^{c}=\overline{\overline{P(A)}}\leqslant \mathbb{R}$上实函数的势

综上可证.

!!! question "Ch1 24"
    若$A \cap B=\varnothing$，求证：$\bar{A} \cap B^{\circ }=\varnothing$。

`Proof.`

反证法，假设$\exists x_{0}\in \overline{A}\bigcap B^{\circ}$，那么根据内部的定义，$x_{0}\in B^{\circ}\implies \exists\epsilon, V(x_{0},\epsilon)\subset B$，再根据闭包的定义$x_{0}\in \overline{A} \implies  V(x_{0},\epsilon)\bigcap A \neq \emptyset$，综上$\exists x_{1}\in V(x_{0},\epsilon)\bigcap A,x_{1}\in B,x_{1}\in A\bigcap B$，与题设矛盾，即证$\bar{A} \cap B^{\circ }=\varnothing$


!!! question "25"
    求证：
    (i) $(A^c)^{\circ}=(\overline{A})^{c}$;
    (ii) $\overline{A^{c}}=(A^{\circ})^{c}$
    (iii) $\overline{A \cup B}=\overline{A} \cup \overline{B}$;
    (iv) $\overline{A \cap B} \subset  \overline{A} \cap \overline{B}$;
    (v) $A^{\circ}\bigcup B^{\circ}\subset\left( A\bigcup B \right)^{\circ}$
    (vi) $\left( A\bigcap B \right)^{\circ}=A^{\circ}\bigcap B^{\circ}$


`Proof.`

(i)

$$
\begin{aligned}
x\in(A^{c})^{\circ}&\iff \exists\delta>0,V(x,\delta)\subset A^{c}\\
&\iff \exists\delta>0,V(x,\delta)\bigcap A=\emptyset\\
&\iff x\not\in \overline{A}\iff x\in(\overline{A})^{c}
\end{aligned}
$$

(ii)

$$
\begin{aligned}
x\in \overline{A^{c}}&\iff \forall\delta>0,V(x,\delta)\bigcap A^{c}\neq \emptyset\\
&\iff \forall\delta>0,V(x,\delta)\not\subset A\\
&\iff x\in (A^{\circ})^{c}
\end{aligned}
$$


(iii)

$$
\begin{aligned}
x\in \overline{A\bigcup B} & \iff  \forall\epsilon,V(x,\epsilon)\bigcap \left( {A\bigcup B} \right) \neq \emptyset \\
 & \iff V(x,\epsilon)\bigcap A \neq \emptyset \bigvee V(x,\epsilon)\bigcap B\neq \emptyset \\
 & \iff x\in \overline{A} \bigvee x\in \overline{B} \\
 & \iff x\in \left(  \overline{A}\bigcup  \overline{B}  \right)
\end{aligned}
$$

(iv)

$$
\begin{aligned}
x\in \overline{A\bigcap B} & \iff  \forall\epsilon,V(x,\epsilon)\bigcap \left( {A\bigcap B} \right) \neq \emptyset \\
 & \implies V(x,\epsilon)\bigcap A \neq \emptyset \bigwedge V(x,\epsilon)\bigcap B\neq \emptyset \\
 & \iff x\in \overline{A} \bigwedge x\in \overline{B} \\
 & \iff x\in \left(  \overline{A}\bigcap  \overline{B}  \right)
\end{aligned}
$$

(v)

显然可以依据定义$x\in A^{\circ}\bigcup B^{\circ}$，那么$x\in A^{\circ}$或$x\in B^{\circ}$，不妨设是$x\in A^{\circ}$另一种情况同理可得，$\exists\delta,V(x,\delta)\subset A\subset \left( A\bigcup B \right)\implies x\in\left( A\bigcup B \right)^{\circ}$

(vi)

显然也可以按照定义：

$$
\begin{aligned}
x\in\left( A\bigcap B \right)^{\circ}&\iff \exists\delta>0,V(x,\delta)\subset\left( A\bigcap B \right)\\
&\iff \exists\delta>0,V(x,\delta)\subset A(B)\\
&\iff x\in A^{\circ}\bigcap B^{\circ}
\end{aligned}
$$


!!! question "Ch1 26"
    设A为开集。求证：为使$A \subset \overline{B}$，充要条件是A的任一非空开子集与B有非空交。

`Proof.`

$\implies$

必要性是显然的，对于任一A的非空开子集C，$C \subset A\subset  \overline{B}$，根据闭包的定义C的每一点的任意邻域都与B与非空交，从而得证

$\impliedby$


反证法，假设存在$x_{1}$，使得$x_{1}\in A,x_{1}\not\in  \overline{B}$，那么有$x_{1}\in (\overline{B})^{c}$，因为$( \overline{B} )^{c}$是一个开集，可知$\exists\delta,V(x_{1},\delta)\bigcap  \overline{B}=\emptyset,B\subset  \overline{B},V(x_{1},\delta)\bigcap B=\emptyset$，因为$A$为开集，$\exists\delta',V(x_{1},\delta')\subset A$，它是$A$的非空开子集


取$\delta''=min(\delta,\delta'),V(x_{1},\delta'')\bigcap B=\emptyset$与题设矛盾

!!! question "Ch1 27"
    设 $A$ 为开集. 求证: $A \cap \overline{B} \subset \overline{A \cap B}$.

`Proof.`


$$
\begin{aligned}
x\in A\bigcap  \overline{B}&\iff x\in A ,x\in  \overline{B}\\
&\iff \forall\delta>0,V(x,\delta)\bigcap B\neq \emptyset;\exists\delta_{1}>0,V(x,\delta_{1})\subset A\\
&\iff x_{0}\in V(x,\delta)\bigcap B,x_{0}\in A\bigcap B\\
&\implies x\in \overline{A\bigcap B}
\end{aligned}
$$

注：其实只需要说明$x_{0}$一定属于$A$即可(讨论半径即可)，也可以直接将$\delta_{1}$作为一个固定的数处理，当半径大于$\delta_{1}$时，选取在$\delta_{1}$内的一个点$x_{1}\in A\bigcap B$，如果半径小于$\delta_{1}$那么也显然.


!!! question "Ch1 28"
    (i) 若 $A$ 为开集, 求证: $A \subset(\bar{A})^{\circ}$;
    (ii) 若 $A$ 为闭集, 求证: $\overline{A^{\circ}}\subset A$.

`Proof.`

(i)利用开集的性质即可

$x \in A,\exists\delta>0,\bigcup(x,\delta)\subset A\subset  \overline{A}\implies x \in(\overline{A})^{\circ}$，那么肯定有$A\subset(\overline{A})^{\circ}$

(ii)


$$
\begin{aligned}
\forall x\in \overline{A^{\circ}},\forall\delta>0,V(x,\delta)\bigcap A^{\circ}\neq \emptyset&\implies \forall\delta >0,V(x,\delta)\bigcap A\neq \emptyset \\ &\implies x\in \overline{A}=A
\end{aligned}
$$

!!! question "Ch1 29"
    求证：$R^{n}$中任一集的导集是闭集

`Proof.`

根据$\overline{A'}=A'\bigcup (A')'$，得如果能证明$(A')'\subset A'$，即可证明$A'$是闭集($\overline{A'}=A'$)

因此我们考虑$(A')'\subset A'$，即可证明导集为闭，如果$x_{0}\in(A')',(V(x_{0},\epsilon)\setminus \left\{ x_{0} \right\})\bigcap A'\neq \emptyset$

在$V(x_{0},\epsilon)$中取异于$x_{0}$的一点$x_{1}\in A'$，那么再根据导集的定义有，$(V(x_{1},\epsilon')\setminus \left\{ x_{1} \right\})\bigcap A\neq \emptyset$

注意令$\epsilon'=min(d(x_{0},x_{1}),\epsilon-d(x_{0},x_{1}))$，仍然有$(V(x_{1},\epsilon')\setminus \left\{ x_{1} \right\})\bigcap A\neq \emptyset$，再找出一个$x_{2}$异于$x_{1}$,且$x_{2}\in A$

$d(x_{0},x_{2})\leqslant d(x_{0},x_{1})+d(x_{1},x_{2})\leqslant d(x_{0},x_{1})+\epsilon-d(x_{0},x_{1})=\epsilon$，根据选取方式可知，$x_{2}$异于点$x_{0},x_{1}$，且在$x_{0}$的非空邻域中，得$x_{0}\in A',(A')'\subset A'$

证毕

!!! question "Ch1 30"
    (i) 若 $A \subset B$, 求证: $A^{\prime} \subset B^{\prime}$;
    (ii) 若 $A^{\prime} \subset B \subset A$, 求证: $B$ 是闭集.

`Proof.`

注：简单的定义题，过于显然了

(i)

$$x \in A',\exists \left\{ x_{n} \right\}\subset A\subset B,x_{n}\neq x,x_{n}\to x\implies x\in B'$$

(ii)


$$
B\subset A\implies B'\subset A'\implies B'\subset A'\subset B
$$


根据一个非常基础的集合拆分式：$\overline{A}=A'\bigcup A$

那么一下得到$\overline{B}=B'\bigcup B=B$


## 31-40


!!! question "Ch1 31"
    求证: $(A \cup B)^{\prime}=A^{\prime} \cup B^{\prime},(A \cap B)^{\prime} \subset A^{\prime} \cap B^{\prime}$.

`Proof`


$$
\begin{aligned}
x_{0} \in\left( A\bigcup B \right)'&\iff \forall\delta>0,V(x_{0},\delta)\bigcap\left( A\bigcup B \right)\setminus \left\{ x_{0} \right\}\neq \emptyset\\
&\iff \left( V(x_{0},\delta) \bigcap A\right)\bigcup\left( V(x_{0},\delta)\bigcap B \right)-\left\{ x_{0} \right\} \neq \emptyset\\
&\iff\left( V(x_{0},\delta) \bigcap A-\left\{ x_{0} \right\} \right)\bigcup\left( V(x_{0},\delta)\bigcap B -\left\{ x_{0} \right\} \right)\neq \emptyset\\
&\iff x_{0}\in A'\bigcup B'
\end{aligned}
$$


$$
\begin{aligned}
x_{0} \in\left( A\bigcap B \right)'&\iff \forall\delta>0,V(x_{0},\delta)\bigcap\left( A\bigcap B \right)\setminus \left\{ x_{0} \right\}\neq \emptyset\\
&\implies\left( V(x_{0},\delta) \bigcap A\right)\bigcap\left( V(x_{0},\delta)\bigcap B \right)-\left\{ x_{0} \right\} \neq \emptyset\\
&\iff\left( V(x_{0},\delta) \bigcap A-\left\{ x_{0} \right\} \right)\bigcap\left( V(x_{0},\delta)\bigcap B -\left\{ x_{0} \right\} \right)\neq \emptyset\\
&\iff x_{0}\in A'\bigcap B'
\end{aligned}
$$

由于$A\bigcap B$有可能是空集，所以$x_{0}$实际上可能不存在所以是单边的



!!! question "Ch1 32"
    求证: $R^n$中任一集的孤立点是至多可数的.

`Proof.`

由孤立点的定义可知，可以构造一个半径为$\epsilon$的开球，使得开球内除了孤立点外与原集合无交，又由于$Q^n$的稠密性，可在每个开球内选取一个有理点，又由于两两不交，有理点互不相同，这样就建立起了全体孤立点到$R^{n}$中$Q^n$的一个单射，全体孤立点势一定小于$Q^n$，又由于$R^{n}$中的$Q^n$是至多可数集，得证命题成立.

注：需要check两两孤立点的开球之间不交

!!! question "Ch1 33"
    若 $A$ 不可数, 求证: $A^{\prime}$ 也不可数.

`Proof.`

利用32，孤立点集是至多可数集，$A=A'\bigcup(A-A')$，其中孤立点集为$A-A'$

那么显然有$A'$是不可数的


!!! question "Ch1 34"
    设对每一整数$n,F_n$是$[n,n+1)$中的闭集.求证：$\bigcup\limits_{n=-\infty}^{\infty}F_n$是 $\mathbb{R}$ 中的闭集.

`Proof.`

思考：利用闭集的充要条件，如果$F_{n}$是闭集那么有$\forall \left\{ x_{n} \right\}\in F_{n},x_{n}\to x,x\in F_{n}$


任取$\left\{ x_{n} \right\}\in\bigcup\limits_{n=-\infty}^{\infty}F_{n},x_{n}\to x(n\to \infty)$,取$\epsilon=\frac{1}{2},\exists N,\forall n>N,\lvert x_{n}-x \rvert< \frac{1}{2}=\epsilon$，由于$R=\bigcup\limits_{n=-\infty}^{\infty}[n,n+1),\exists !k,s.t. x\in[k,k+1)$，那么可以得出$n>N$的$\left\{ x_{n} \right\}\in \bigcup\limits_{i=k-1}^{k+1} F_{i}$，因为有限个闭集的并仍然为闭集则$\bigcup\limits_{i=k-1}^{k+1} F_{i}$为闭集，再根据闭集充要条件得出$x\in\bigcup\limits_{i=k-1}^{k+1} F_{i}\subset \bigcup\limits_{n=-\infty}^{\infty}F_n$

综上所述：$\bigcup\limits_{n=-\infty}^{\infty}F_n$是 $\mathbb{R}$ 中的闭集.


!!! question "Ch1 35"
    设$A\subset \mathbb{R}^{n}$，若对任何$x\in \mathbb{R}^{n}$，必有$a_{x}\in A$使$d(x,a_{x})=d(x,A)$
    求证：$A$是闭集.

`Proof.`

反证，若$A$不是闭集，那么一定有$x\in A'-A$，$\left\{ x_{n} \right\}\subset A,x_{n}\to x$


$$
\begin{aligned}
d(x,A)&=\inf \left\{ d(x,y),y\in A \right\} \leqslant\left\{ d(x,x_{n}) \right\} \to 0\\0&=d(x,a_{x})\iff x=a_{x}\in A,A'\subset A
\end{aligned}
$$

注：这是闭集一个非常重要的性质，仍然是利用$A'\subset A$

!!! question "Ch1 36"
    设$f$在$\mathbb{R}$ 上单增.求证:$E=\{x:$对任何$\varepsilon>0$有$f(x+\varepsilon)-f(x-\varepsilon)>0\}$是闭集.

`Proof.`

考虑证明$E^{c}$是开集，对于任意点$x$属于$E^{c},\exists\epsilon>0,s.t.f(x+\epsilon)\leqslant f(x-\epsilon)$.

又因为函数是单调递增的有$f(x+\epsilon)\geqslant f(x-\epsilon)\to f(x+\epsilon)=f(x-\epsilon)=A\to \forall x\in(x-\epsilon,x+\epsilon),f(x)\equiv A$

根据开集的定义选取$\delta=\frac{\epsilon}{2},V(x,\delta)\subset (x-\epsilon,x+\epsilon)$，又因为$\forall x'\in V(x,\delta),\delta'= \frac{\epsilon}{4},V(x',\delta')\subset(x-\epsilon,x+\epsilon)$，易知$x'\in E^{c}$，那么有$V(x,\delta)\subset E^{c}$,由$x$的任意性知$E^{c}$为开集，$E$为闭集.


!!! question "Ch1 37"
    设$F\subset\mathbf{R}^n$是一个无限集.求证；为使$F$是有界闭集，充要条件是对$F$的任一无限子集$E$有$E^\prime\bigcap F\neq\emptyset.$

`Proof.`

$\implies$
假设有界闭集，那么$E\subset F,F'\subset F,E'\subset F'\subset F\to E'\bigcap F\neq \emptyset$(或者根据聚点定理)

$\impliedby$
Step 1
假设无界，那么可以取$\left\{ x_{n} \right\}_{n\geqslant 1},s.t.\lvert x_{n} \rvert>n,\lvert x_{n}-x_{n'} \rvert>1(n\neq n')$，否则有界，那么可以知道该无限子集导集为空(全为孤立点)，那么与条件$E'\bigcap F\neq \emptyset$矛盾

Step 2
选取一个收敛点列$\left\{ x_{n} \right\}_{n\geqslant {1}}\subset F,x_{n}\to x$，那么设$E=\left\{ x_{n} \right\}_{n\geqslant 1}，E'=\left\{ x \right\},x\in F\left( E'\bigcap F \neq \emptyset \right)$


!!! question "Ch1 38"
    设 $E \subset \mathbf{R}$. 若 $E$ 被一个区间族 $\left\{I_{\lambda}\right\}_{\lambda \in \Lambda}$ 所覆盖, 求证: $E$ 可被 $\left\{I_{\lambda}\right\}_{\lambda \in \Lambda}$ 的一个可数子族所覆盖.


!!! tip "- Hint"
    提示: 令 $a_{\lambda}$ 和 $b_{\lambda}$ 分别是 $I_{\lambda}$ 的左、右端点
    $A=\left\{a_{\lambda}\right\}_{\lambda \in \Lambda}, B=\left\{b_{\lambda}\right\}_{\lambda \in \Lambda}, C=$ $\bigcup_{\lambda \in \Lambda}\left(a_{\lambda}, b_{\lambda}\right)$. 证明 $A-C$ 和 $B-C$ 都是至多可数集, 从而问题化为 $I_{\lambda}$ 都是开区间的情形.


`Proof.`

令 $a_{\lambda}$ 和 $b_{\lambda}$ 分别是 $I_{\lambda}$ 的左、右端点,$A=\left\{a_{\lambda}\right\}_{\lambda \in \Lambda}, B=\left\{b_{\lambda}\right\}_{\lambda \in \Lambda}, C=\bigcup\limits_{\lambda \in \Lambda}\left(a_{\lambda}, b_{\lambda}\right)$. 

Step 1 证明 $A-C$ 和 $B-C$ 都是至多可数集, 从而问题化为 $I_{\lambda}$ 都是开区间的情形.

对于任意不同的两个指标$\lambda_{1},\lambda_{2}\in A,a_{\lambda_{1}}=a_{\lambda_{2}}=x$，由于不属于$C$那么这种情况下，区间两两不相交




注：点集拓扑中的一个很重要的定理叫做$Lind elof$定理，可以抽象出一个$Lind elof$空间，答案可以在任何一本点集拓扑书中找到.

!!! question "Ch1 39"
    设$F_1$和$F_2$是两个闭集，其中一个有界. 求证：必有$x_1\in F_1$及$x_2\in F_2$使$d(x_1,x_2)=\inf\{d(y_1,y_2):y_1\in F_1,y_2\in F_2\}.$

`Proof.`

不妨设$F_{1}$有界，利用下确界性质，$\exists x_{n}',y_{n}',s.t.d(F_{1},F_{2})\leqslant d(x_{n}',y_{n}')\leqslant d(F_{1},F_{2})+\frac{1}{n}$，按照这种选取方式构造无穷点集

利用Bolzano-Weierstrass定理，取$\left\{ x_{n}' \right\}$的收敛子列$\left\{ x_{n_{k}}' \right\},x_{n_{k}}'\to x_{1},k\to \infty$,又由于闭集性质$x_{1}\in F_{1}$
那么有$d(x_{1},y_{n_{k}}')\to d(F_{1},F_{2})$，再利用三角不等式，$d(y_{n_{k}}',0)\leqslant d(x_{n_{k}}',y_{n_{k}}')+d(x_{n_{k}}',0)$也有界(其中一个是有界闭集)，那么仿照$F_{1}$中子列的证明，即可证得$F_{2}$存在收敛子列使得$k\to \infty,y_{n_{k}}'\to x_{2},d(x_{1},x_{2})=d(F_{1},F_{2})$，

!!! question "Ch1 40"
    求证: 闭区间不能表示成两个不相交非空闭集的并.




## 41-50



!!! question "Ch1 41"
    例 求证开区间 $(a, b)$ 不能表示成可数个两两不相交的闭集 $\left\{F_n\right\}_{n \geqslant 1}$ 的并.

`Proof.`


假设 $(a, b)=\bigcup_{n=1}^{\infty} F_n$. 由题 39 , 存在 $a_1$ 和 $b_1$ 使 $a<a_1<b_1<b$, 并且 $\left\{a_1, b_1\right\} \subset F_1 \cup F_2, \left(a_1, b_1\right) \cap\left(F_1 \cup F_2\right)=\varnothing$. 此时 $\left(a_1, b_1\right)=\bigcup_{n=3}^{\infty} F_n^{(1)}$, 其中 $F_n^{(1)}=$ $F_n \cap\left(a_1, b_1\right)$ 是闭集而且 $\left\{F_n^{(1)}\right\}_{n \geqslant 3}$ 两两不相交 (不妨设它们都非空).

同理存在 $a_2$ 和 $b_2$ 使 $a_1<a_2<b_2<b_1$, 并且 $\left\{a_2, b_2\right\} \subset F_3^{(1)} \cup F_4^{(1)},\left(a_2, b_2\right) \cap\left(F_3^{(1}\right.$ $\left.\bigcup F_4^{(1)}\right)=\varnothing$. 此时 $\left(a_2, b_2\right)=\bigcup_{n=5}^{\infty} F_n^{(2)}$, 其中 $F_n^{(2)}=F_n^{(1)} \cap\left(a_2, b_2\right)$ 是闭集而且 $\left\{F_n^{(2)}\right\}_{n \geqslant 5}$ 两两不相交 (不妨设它们都非空).

如此做下去, 可以证明 $E=\bigcap_{n=1}^{\infty}\left(a_n, b_n\right)$ 非空, 而且 $E \cap\left(\bigcup_{n=1}^{\infty} F_n\right)=\varnothing$. 此与 $(a, b)=\bigcup_{n=1}^{\infty} F_n$ 矛盾.



42. 平面上的开圆盘或空间中的开球能表示成可数个两两不相交的闭集的并吗? (提示: 令 $D=\{(x, y) \in \mathbf{R}^2: x^2+y^2<1\}$ 是 $\mathbf{R}^2$ 中的开圆盘, 并假设 $D=\bigcup F_n$, 其中 $\left\{F_n\right\}$ 是两两不相交闭集列. 令 $F_n^{\ast}=\{x \in(-1,1):(x, 0) \in F_n\}$, 然后研究 $\left\{F_n^{\ast}\right\}$.)



43. 证明定理 1.5.15.








!!! question "Ch1 44"
    设$\left\{f_k\right\}_{k \geqslant 1}$是R上一列连续函数。求证：$\left\{\underline\lim\limits_{k\to\infty}f_k(x)>0\right\}$是可数个闭集的并，$\left\{\overline\lim\limits_{k\to\infty}f_k(x)=\infty\right\}$是可数个开集的交。

`Proof.`

考虑构造:

$$\begin{aligned}
\left\{\varliminf\limits_{k\to\infty}f_k(x)>0\right\}=\bigcup\limits_{n=1}^{\infty}\left\{  \varliminf\limits_{k\to\infty}f_k(x)\geqslant\frac{1}{n}\right\}\\
\left\{\varlimsup\limits_{k\to\infty}f_k(x)=\infty\right\}=\bigcap\limits_{n=1}^{\infty}\left\{  \varliminf\limits_{k\to\infty}f_k(x)> n\right\}
\end{aligned}$$

那么有：

$$
    \begin{aligned}
    \left\{\varliminf\limits_{k\to\infty}f_k(x)>0\right\} & =\bigcup\limits_{n=1}^{\infty}\left\{  \varliminf\limits_{k\to\infty}f_k(x)\geqslant\frac{1}{n}\right\} \\
     & =\bigcup\limits_{n=1}^{\infty} \bigcup\limits_{m=1}^{\infty} \bigcap\limits_{k=m}^{\infty} \left\{  f_k(x)\geqslant\frac{1}{n}\right\}
    \end{aligned}
$$

由于$\left\{  f_k(x)\geqslant\frac{1}{n}\right\}$是闭集，交后仍为闭集，再进行可数并故原式为可数个闭集的并


$$
\begin{aligned}
\left\{\varlimsup\limits_{k\to\infty}f_k(x)=\infty\right\} & =\bigcap\limits_{n=1}^{\infty}\left\{ \varlimsup\limits_{k\to\infty}f_k(x)> n\right\} \\
& =\bigcap\limits_{n=1}^{\infty} \bigcap\limits_{m=1}^{\infty} \bigcup\limits_{k=m}^{\infty} \left\{  f_k(x)>n\right\}
\end{aligned}
$$


同理可知，原式为可数个开集的交


!!! question "Ch1 45"
    求证：$\mathbb{R}$ 上任一实函数的连续点全体是可数个开集的交

`Proof.`

注：**相当重要的一个结论**，可以使用振幅考虑

定义一个振幅 $w_{f(x_{0})}=\lim\limits_{ \delta \to 0 }\sup\left\{  \lvert f(x')-f(x'') \rvert|:x',x'' \in B_{\delta}(x_{0})\right\}$，如果 $f$ 在 $x_{0}$ 连续显然有振幅为 0，那么$x_{0}\in \bigcap\limits_{n=1}^{\infty}\left\{ x\in \mathbb{R}:w_{f(x)}< \frac{1}{n} \right\}$

$$\begin{aligned}
&\forall x_{1}\in \left\{ x\in \mathbb{R},w_{f(x)}< \frac{1}{n} \right\},w_{f(x_{1})}< \frac{1}{n}\\&\implies \exists\delta_{1}>0,\lvert f(x_{1}')-f(x_{1}'') \rvert< \frac{1}{n}(x',x''\in(x_{1}-\delta_{1},x_{1}+\delta_{1}))\\
&\implies \forall x\in(x_{1}-\delta_{1},x_{1}+\delta_{1}),w_{f(x)}\leqslant w_{f(x_{1})}< \frac{1}{n}\\
&\implies(x_{1}-\delta_{1},x_{1}+\delta_{1})\subset \left\{ x\in \mathbb{R}:w_{f(x)}< \frac{1}{n} \right\} 
\end{aligned}$$

从而可知$\left\{ x\in \mathbb{R},w_{f(x)}< \frac{1}{n} \right\}$是一个开集，那么可以得到它是可数个开集的交


!!! question "Ch1 46"
    求证: 闭集是可数个开集的交, 开集是可数个闭集的并.

`Proof.`

注：只需要证前半部分,后面可以用De Morgan公式得出，构造如下$E$是闭集


$$
E=\bigcap\limits_{n=1}^{\infty} E_{n}=\bigcap\limits_{n=1}^{\infty} \left\{ x:d(x,E) < \frac{1}{n}\right\} 
$$


首先我们证明距离函数是一个连续函数，那么令$f(x)=d(x,E)$我们有：

$\forall z\in E,f(x)\leqslant d(x,z)\leqslant d(x,y)+d(y,z)$那么有$f(x)-d(x,y)\leqslant d(y,z)\leqslant d(y,E)+\varepsilon$

可以得到$f(x)-f(y)\leqslant d(x,y)+\varepsilon\implies \lvert f(x)-f(y) \rvert\leqslant d(x,y)$

$\forall x\in E,d(x,E)=0$属于交集显然成立，$E\subset \bigcap\limits_{n=1}^{\infty}E_{n}$

若是有$d(x,E)< \frac{1}{n},n\to \infty,d(x,E)=0$



!!! question "Ch1 47"
    设$F_1$和$F_2$是两个不相交的闭集. 求证: 有不相交开集$G_1$和$G_2$, 使 $F_1\subset G_1, F_2\subset G_2$.

`Proof.`

令$f(x)=d(x,F_{1})-d(x,F_{2})$

$\forall x\in F_{1},f(x)=-d(x,F_{2})<0,\forall x\in F_{2},f(x)=d(x,F_{1})>0$

取 $G_{1}=f^{-1}(<0),G_{2}=f^{-1}(>0)$ 根据上面有 $F_{1}\subset G_{1},F_{2}\subset G_{2}$，连续函数保证两个集合均为开集，那么证毕

注：在点集拓扑中有相关的背景，这是 $T_{4}$ 的空间，两个不相交的闭集，可以通过两个不相交的开集来分离，实际上任何一个度量空间都是 $T_{4}$ 的


!!! question "Ch1 48"
    若有界闭集族 $\{F_\lambda\}_{\lambda\in\Lambda}$ 中任何有限个元的交非空，求证 $\bigcap\limits_{\lambda\in\Lambda} F_\lambda\neq\varnothing.$ 上述命题中若把“有界闭集”改成“闭集”,命题是否还成立？

`Proof.`

根据条件有限个元交非空，考虑有限覆盖定理，考虑利用紧性构造有限个子覆盖（有界闭集族），再利用反证法，假设 $\bigcap\limits_{\lambda\in\Lambda} F_\lambda=\emptyset$,那么存在一个元素不妨记为 $F_{\lambda_{1}}$ 使得 $F_{\lambda_{1}}\bigcap \left( \bigcap\limits_{\lambda \in\Lambda,\lambda\neq\lambda_{1}} F_{\lambda}\right)=\emptyset$，那么有 $F_{\lambda_{1}}\subset \bigcup\limits_{\lambda \in\Lambda,\lambda\neq\lambda_{1}}F_{\lambda}^{c}$，而 $F_{\lambda}^{c}$ 是开集，所以构成了一个开覆盖，由于有界闭集有紧性（一般的 $\mathbb{R}^{n}$ 空间中），可以选取有限个子覆盖（为方便从 2 开始记），那么 $F_{\lambda_{1}}\subset \bigcup\limits_{n=2}^{m}F_{\lambda_{n}}^{c},\bigcup\limits_{n=2}^{m}F_{\lambda_{n}}\subset F_{\lambda_{1}}^{c},\bigcap\limits_{n=1}^{m}F_{\lambda _{n}}=\emptyset$

所以导出矛盾，得证

如果是闭集，构造反例选取有界开球的补：$F_{n}=\left\{ (x,y),x^{2}+y^{2}\geqslant n \right\}$，不难看出有限个元的交非空但是 $n$ 从 1 到无穷的交为空集，故命题不成立


!!! question "Ch1 49"
    设 $G$ 是开集，$\left\{ F_{\lambda} \right\}_{\lambda\in\Lambda}$ 是有界闭集族并且 $\bigcap\limits_{\lambda\in\Lambda}F_{\lambda }\subset G$.求证：$\left\{ F_{\lambda} \right\}_{\lambda\in\Lambda}$ 中有有限个元，它们的交是 $G$ 的子集

`Proof.`

考虑使用 Heine-Borel 定理，那么需要一个开覆盖，考虑对原本的交取补

由于 $\bigcap\limits_{\lambda\in\Lambda}F_{\lambda }\subset G\implies\bigcup\limits_{\lambda\in\Lambda}F_{\lambda }^{c}\supset G^{c}$，并且由于定理条件的有界性再做截断，选取 $F_{\lambda_{0}}\in\left\{ F_{\lambda} \right\}_{\lambda\in\Lambda}$，可知 $\bigcup\limits_{\lambda\in\Lambda}F_{\lambda }^{c}\supset G^{c}\bigcap F_{\lambda_{0}}$，右边是有界闭集也就是紧的（$\mathbb{R}^{n}$ 空间），利用 Heine-Borel 定理，有 $m>0,m\in \mathbb{Z}^{+},s.t.\bigcup\limits_{i=1}^{m}F^{c}_{\lambda}\supset \left( F_{\lambda_{0}} \bigcap G^{c}\right)$，

取补可得，$\bigcap\limits_{i=1}^{m}F_{\lambda}\subset \left( F_{\lambda_{0}} ^{c}\bigcup G\right)$，再将右侧限制在 $G$ 内，$\left( \bigcap\limits_{i=1}^{m}F_{\lambda} \right)\bigcap F_{\lambda_{0}}\subset \left( F_{\lambda_{0}}^{c} \bigcup G\right)\bigcap F_{\lambda_{0}}=G\bigcap F_{\lambda_{0}}\subset G$

综上可证，有有限个元的交是 $G$ 的子集

!!! question "Ch1 50"
    设 $f$ 在 $\mathbf{R}$ 上可微，而且对任何 $\alpha \in \mathbf{R},\left\{x: f^{\prime}(x)=\alpha\right\}$ 是闭集。求证： $f^{\prime}(x)$ 连续。

`Proof.`





## 51-60


!!! question "Ch1 51"
    求证：用十进制小数表示 $[0,1]$ 中的数时，其用不着数字 7 的一切数构成一完备集。

`Proof.`








!!! question "Ch1 52"
    求证：满足题 13 中条件的点 $x$ 全体是一个完备集

`Proof.`

令满足 13 中条件的点构成的集合为 $Y$，欲证 $Y$ 是完备集即证 $Y$ 是闭集且无孤立点，根据 14 可以知道这个集合是不可数集

$1^{\circ}$ 闭集：证明 $Y^{c}$ 是开集，取 $y\in Y^{c}$ 那么有 $\delta_{y},s.t.(y-\delta_{y},y+\delta_{y})\bigcap E$ 至多可数，于是有 $(y-\delta_{y},y+\delta_{y})\in Y^{c}$ 即开集，得到原集合闭集

$2^{\circ}$ 无孤立点：任取 $Y$ 中的点记为 $x_{0},\forall\delta$,$(x_{0}-\delta,x_{0}+\delta)\bigcap E$ 不可数，再构造两个新的集合 $E_{1}=\left\{ \left[ (x_{0}-\delta,x_{0})\bigcup(x_{0},x_{0}+\delta) \right]\bigcap E \right\}$，容易知道 $E_{1}$ 不可数且含于 $E$，利用 13 的结论构造类似 $Y$ 的集合 $Y_{1}:=\left\{ x:\forall\delta>0,(x-\delta,x+\delta)\bigcap E_{1}\text{不可数} \right\}$，集合 $Y_{1}\bigcap E_{1}$ 非空 (13)，那么其中假设有一点$x_{1},\lvert x_{1}-x_{0} \rvert<\delta$，且$x_{1}\in Y$，与假设矛盾，所以无孤立点.

证法2：利用Lindelof性，可以找到一个可数覆盖



53. 求证: $\mathbf{R}$ 中任一不可数闭集必是一个完备集与一个至多可数集的并.

!!! question "Ch1 53"
    求证: $\mathbf{R}$ 中任一非空完备集有连续统势.


5554.  其中 $C$ 是 Cantor 完备集, $C+C=\left\{x+y: x, y \in C\right\}$, 并且对每一 $x \in[0,2]$, 具体描述 $C$ 中的 $y$ 和 $z$ 使 $x=y+z$. (提示: 仅取 0 和 2 的二元数列 $\left\{a_{n}\right\}$ 所对应的实数 $x=\sum_{n=1}^{\infty} \frac{a_{n}}{3^{n}}$ 都在 $C$ 中.)

5555. 集的并, 则 $A$ 称为第一纲集; 非第一纲集称为第二纲集. 求证:

(i) 至多可数集是第一纲集;

(ii) 区间是第二纲集;

(iii) $[a, b]$ 中能表示为可数个开集的交的稠子集是第二纲集.

57. 若 $\mathbf{R}$ 上的连续函数列 $\left\{f_{k}\right\}_{k \geqslant 1}$ 使对每一 $x \in \mathbf{R}$, 数列 $\left\{f_{k}(x)\right\}_{k \geqslant 1}$ 有界, 求证: $\left\{f_{k}\right\}$ 必在一个区间上一致有界.

!!! question "Ch1 58"
    若 $f$ 在 $[0,1]$ 中所有有理点处连续. 求证: $f$ 至少在一个无理点处连续.

`Proof.`

利用45题的结论：


!!! question "Ch1 59"
    例 设对任何 $x, y \in \mathbf{R}, f(x+y)=f(x)+f(y)$. 现若 $f$ 不是连续函数
    求证: $\{(x, f(x)): x \in \mathbf{R}\}$ 在 $\mathbf{R}^{2}$ 中稠.

`Proof.`

思考：这个条件是很熟悉的一个柯西方程，我们很容易应用相关的方法

此时由条件可得三个结论: $f$ 在 $x=0$ 不连续; $f(0)=0$; 对每一有理数 $r$ 有 $f(r x)=r f(x)$. 因此不妨设有 $x_{k}>0, x_{k} \rightarrow 0, f\left(x_{k}\right) \geqslant \varepsilon$, 其中 $\varepsilon$ 是与 $k$ 无关的正数。

现在首先可证明对任何实数 $y$, 必有实数列 $\left\{b_{p}\right\}_{p \geqslant 1}$ 使 $\left(b_{p}, f\left(b_{p}\right)\right) \rightarrow(0, y)$. 事实上对每一 $p \geqslant 1$, 取 $k_{p}$ 使 $x_{k_{p}}<\frac{1}{p}$. 取有理数列 $\left\{r_{p}\right\}$ 使 $r_{p} f\left(x_{k_{p}}\right) \rightarrow y(p \rightarrow \infty)$.此时易证 $\left\{r_{p}\right\}$ 是有界的，从而 $r_{p} x_{k_{p}} \rightarrow 0(p \rightarrow \infty)$. 取 $b_{p}=r_{p} x_{k_{p}}$ 即可。现对任何 $(x, y) \in \mathbf{R}^{2}$, 由上述，存在 $\left\{b_{p}\right\}_{p \geqslant 1}$ 使 $\left(b_{p}, f\left(b_{p}\right)\right) \rightarrow(0, y-f(x))(p \rightarrow \infty)$. 从而得知 $\left(b_{p}+x, f\left(b_{p}+x\right)\right) \rightarrow(x, y)$.

!!! question "Ch1 60"
    把 $[0,1)$ 表示成 $c$ 个两两不相交的完备集的并。












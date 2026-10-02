# Chapter 9 判别分析


!!! tldr "Outline"
    + 垂直平分分类器
    + 判别分析准则
    + 两总体的判别
    + 多总体的判别

先给出下面关于线性分类器的基础知识，再过度到垂直平分分类器

## 线性分类器

所谓判别分析就是基于分类问题的一种方法

我们先来看最为简单的线性分类器，它的使用依赖于一个线性决策边界，将数据分为不同的类别

决策边界公式如下：

$$
w^{T}x+b=0
$$

其中 $w$ 是权重向量，$b$ 是偏置

判别规则就是 $w^{T}x+b$ 与 $0$ 的大小关系，大于 0 即为 1，小于 0 即为-1，这种判别规则也应用于支持向量机 (SVM)、感知机、逻辑回归等

## 垂直平分分类器

通过划分两类样本中心的垂直平面实现分类，做法相当简单：

先计算得到两类样本的均值：

$$
\mu_{1}= \frac{1}{n_{1}}\sum\limits_{i\in C_{1}}x_{i},\mu_{2}= \frac{1}{n_{2}}\sum\limits_{i\in C_{2}}x_{i}
$$

决策边界为（实际上这里看出与线性分类器的联系）：

$$
w=\mu_{1}-\mu_{2},b=- \frac{1}{2}(\mu_{1}^{T}\mu_{1}-\mu_{2}^{T}\mu_{2})
$$

决策函数：

$$
g(x)=w^{T}x+b
$$

分类的规则仍然是判断与 0 的关系分为 $\pm 1$，实际上本质是比较 $\lVert x-\mu_{1} \rVert^{2},\lVert x-\mu_{2} \rVert^{2}$ 的距离远近


!!! quote "垂直平分分类器的主要特点"
    别名：最小距离分类器，是可以解决两类分类问题的线性分类器，本质上对于样本集无特殊要求。没有采用准则函数求极值解（非最佳的决策），它假设两类数据的分布形状（协方差）是圆形的且相等的，如果数据是椭圆分布或两类分布松散程度不同，效果很差。算法简单，实现容易

## 判别分析准则

### 判别分析

!!! quote "判别分析(discriminant analysis)"
    使用具有类别信息的观测数据建立一个分类器或分类法则，其能够最大可能区分事先定义的类，需要注意它是一种有监督的统计学习方法，应用时经常将判别分析与分类结合起来

先给出一些基本的记号和假设：

对于两个总体的情况，存在两个总体 $\pi_{1},\pi_{2}$ 给定一个个体的测量值向量 $x=(x_{1},\dots,x_{p})^{T}$，判断该个体是来自总体 $\pi_{1},\pi_{2}$? 判别分析的做法是找到一种判别方法，将 $\mathbb{R}^{p}$ 空间分为两个区域 $R_{1},R_{2}$，记为 $R=(R_{1},R_{2})$，如果个体的观测值向量 $x\in R_{1}$，归为 $\pi_{1}$

那么显然根据假设会知道可能会有两种错误发生：

+ $C(2| 1)$: 个体来自 $\pi_{1}$，却被误判为 $\pi_{2}$ 的损失
+ $C(1| 2)$: 个体来自 $\pi_{2}$，却被误判为 $\pi_{1}$ 的损失

很自然的我们会将错判带来的损失最小作为好的判别方法的评判标准

一些记号：

+ 先验概率：$q_{1},q_{2}$ 是来自 $\pi_{1},\pi_{2}$ 的观测值的先验概率，满足 $q_{1}+q_{2}=1$
+ 密度函数：$\pi_{1}\sim f_{1}(x),\pi_{2}\sim f_{2}(x)$
+ 正确判别概率：$\mathbb{P}(1|1,R)=\int_{R_{1}}f_{1}(x)dx,dx=dx_{1}\dots dx_{p}$
+ 错判概率：$\mathbb{P}(2|1,R)=\int_{R_{2}}f_{1}(x)dx$

### Bayes 判别准则

这里需要用到一个很重要的准则 ECM(Expected Cost of Misclassification)

$$
ECM(R_{1},R_{2})=C(2| 1)\mathbb{P}(2|1,R)q_{1}+C(1| 2)\mathbb{P}(1|2,R)q_{2}
$$

对于给定先验概率 $q_{1},q_{2}$ 使得错判的平均损失 ECM 达到最小的方法称为 Bayes 判别方法

理论上，能够使得 $ECM(R_{1},R_{2})$ 最小的 Bayes 判别准则是一个最优的黄金准则，在实际应用中，需要给定密度函数、错判损失、先验概率，如果密度函数未知可以通过训练样本进行估计然后应用判别分析的方法

根据 ECM 的目的是使得平均损失最小，我们很自然会想不同的错判损失是否相同，显然在大多数应用场景下损失是完全不同的，例如关于假阳性的判别和忽略阳性患者所带来的负面影响是完全不同的，因此对于原本的定义式推导如下：

$$
\begin{aligned}
ECM(R_{1},R_{2})&=C(2| 1)\mathbb{P}(2|1,R)q_{1}+C(1| 2)\mathbb{P}(1|2,R)q_{2}\\
&=q_{1}C(2|1)\int_{R_{2}}f_{1}dx+q_{2}C(1|2)\int_{R_{1}}f_{2}dx\\
&=q_{1}C(2|1)\left( 1-\int_{R_{1}}f_{1}dx \right)+q_{2}C(1|2)\int_{R_{1}}f_{2}dx\\
&=q_{1}C(2|1)+\int_{R_{1}}q_{2}C(1|2)f_{2}-q_{1}C(2|1)f_{1}dx
\end{aligned}
$$

因此我们想要使得积分部分尽量小，也就是内部函数小于 0 时，应该划入 $R_{1}$：

$$
q_{2}C(1|2)f_{2}-q_{1}C(2|1)f_{1}<0\implies \frac{f_{1}}{f_{2}}> \frac{q_{2}}{q_{1}} \frac{C(1|2)}{C(2|1)}
$$

实质就是做似然比检验


### Fisher 判别分析

对于[[#两个多元正态总体-同方差]]的情况，我们先考虑协方差矩阵的无偏估计：

$$
\begin{aligned}
\hat{\Sigma}&=S= \frac{V^{(1)}+V^{(2)}}{n_{1}+n_{2}-2}\\
V^{(1)}&=\sum\limits_{i=1}^{n_{1}} (x_{i}^{(1)}-\overline{x}^{(1)})(x_{i}^{(1)}-\overline{x}^{(1)})^{T}\\
V^{(2)}&=\sum\limits_{i=1}^{n_{2}} (x_{i}^{(2)}-\overline{x}^{(2)})(x_{i}^{(2)}-\overline{x}^{(2)})^{T}
\end{aligned}
$$

$V^{(1)},V^{(2)}$ 为两组训练样本的样本离差矩阵

把参数估计的结果代入线性判别函数可以得到下面的 $Fisher$ 线性判别函数：

$$
W(x)=x^{T}S^{-1}(\overline{x}^{(1)}-\overline{x}^{(2)})- \frac{1}{2}( \overline{x}^{(1)}+ \overline{x}^{(2)})^{T}S^{-1}(\overline{x}^{(1)}- \overline{x}^{(2)})
$$

如果先验概率给定，我们得到 Fisher 线性判别准则为：

$$
R_{1}=\left\{ x:W(x)\geqslant \log k \right\},k = \frac{q_{2}C(1|2)}{q_{1}C(2|1)}
$$

需要注意，Fisher 线性判别函数仅仅是估计的最优准则，无法保证 $ECM(R_{1},R_{2})$ 最小，在大样本情形下，$\overline{x}^{(1)}, \overline{x}^{(2)},S$ 为 $\mu_{1},\mu_{2},\Sigma$ 的强相合估计，此时判别准则渐近最优

!!! tip "Fisher判别的思路和方法"
    将一个 $p$ 维向量 $X=(X_{1},\dots,X_{p})^{T}$ 投影到某个方向，使得其最容易判别

    考虑 $Y=\xi^{T}X$，使得

    $$
    \frac{[E_{1}(\xi^{T}X)-E_{2}(\xi^{T}X)]^{2}}{Var(\xi^{T}X)}= \frac{\xi^{T}(\mu_{1}-\mu_{2})(\mu_{1}-\mu_{2})^{T}\xi}{\xi^{T}\Sigma \xi}
    $$

    达到最大

我们的目标是使得上方分式最大，使用代换 $\beta=\Sigma^{1/2}\xi$，运用 Cauchy-Schwarz 不等式，可以知道分子最大时必须存在比例关系，$\beta=a\Sigma^{-1/2}(\mu_{1}-\mu_{2})$，由此我们可以得到 $\xi=a\Sigma^{-1}(\mu_{1}-\mu_{2}):= a\theta$

其中 $a$ 只是尺度参数，不影响判别方向，且 Fisher 判别不要求假设 $\pi_{1},\pi_{2}$ 来自正态分布，只需要有相同的协方差矩阵即可


下面的内容主要是利用 Bayes 判别准则、Fisher 判别准则的不同情形下的结果

## 两总体的判别

### 两个多元正态总体-同方差

$$
f_{j}(x)= \frac{1}{(2\pi)^{p /2}\lvert \Sigma_{j} \rvert ^{1 / 2}}\exp \left[ - \frac{1}{2}(x-\mu_{j})^{T}\Sigma_{j}^{-1}(x-\mu_{j}) \right] 
$$

则似然比可以显然得到，利用同方差即 $\Sigma_{1}=\Sigma_{2}=\Sigma$：

$$
\begin{aligned}
\frac{f_{1}}{f_{2}}&=\exp \left\{  - \frac{1}{2}[(x-\mu_{1})^{T}\Sigma^{-1}(x-\mu_{1})-(x-\mu_{2})^{T}\Sigma^{-1}(x-\mu_{2})] \right\} \\
\frac{f_{1}}{f_{2}}&\geqslant k,R_{1}\in \pi_{1}\\
&\implies x^{T}\Sigma^{-1}(\mu_{1}-\mu_{2})- \frac{1}{2}(\mu_{1}+\mu_{2})^{T}\Sigma^{-1}(\mu_{1}-\mu_{2}) \geqslant \log k
\end{aligned}
$$

仍然令 $k= \frac{q_{2}C(1|2)}{q_{1}C(2|1)}$ 即可（先验概率已知的情况）

### 两个多元正态总体-异方差

使用似然比检验方法简单计算后得到：

$$
R_{1}=\left\{ x: -\frac{1}{2}x^{T}(\Sigma_{1}^{-1}- \Sigma_{2}^{-1})x+(\mu_{1}^{T}\Sigma^{-1}_{1}-\mu_{2}^{T}\Sigma_{2}^{-1})x- \zeta \geqslant \log k\right\} 
$$

其中 $k= \frac{q_{2}C(1|2)}{q_{1}C(2|1)}$，$\zeta= \frac{1}{2}\log\left(  \frac{\lvert \Sigma_{1} \rvert}{\lvert \Sigma_{2} \rvert} \right)+ \frac{1}{2}(\mu_{1}^{T}\Sigma_{1}^{-1}\mu_{1}-\mu_{2}^{T}\Sigma_{2}^{-1}\mu_{2})$

将整体记为 $\delta(x)$

$$
\delta(x)= -\frac{1}{2}x^{T}(\Sigma_{1}^{-1}- \Sigma_{2}^{-1})x+(\mu_{1}^{T}\Sigma^{-1}_{1}-\mu_{2}^{T}\Sigma_{2}^{-1})x- \zeta
$$

由于函数中含有二次项，因此记为二次判别函数

### 先验概率不存在的情形

重点讨论协方差矩阵相等的情形，$\Sigma_{1}=\Sigma_{2}=\Sigma$

先验概率未知带来的最大问题就是 $\log k=c$ 未知，为了进行判别分析，我们应当想办法确定 $c$，定义一个随机变量 $U$

$$
U=X^{T}\Sigma^{-1}(\mu_{1}-\mu_{2})- \frac{1}{2}(\mu_{1}+\mu_{2})^{T} \Sigma^{-1}(\mu_{1}-\mu_{2})
$$
如果 $X\sim N_{p}(\mu_{1},\Sigma)$，那么有 $E_{1}(U)= \frac{1}{2}(\mu_{1}-\mu_{2})^{T}\Sigma^{-1}(\mu_{1}-\mu_{2})$，同理可知方差（$N_{p}(\mu_{1},\Sigma)$ 和 $N_{p}(\mu_{2},\Sigma)$ 之间的马氏距离）

$$Var_{1}(U)=(\mu_{1}-\mu_{2})^{T}\Sigma^{-1}(\mu_{1}-\mu_{2})=\Delta^{2}$$

此时关于 $c$ 的给定可以使用 Neyman-Pearson 准则

## 多总体的判别

应用前面的记号和方法，容易得到：

$$
\begin{aligned}
ECM(R_{1},\dots,R_{J})&=\sum\limits_{j=1}^{J} q_{j}\left\{ \sum\limits_{k=1,k\neq j}^{J}C(k|j)\mathbb{P}(k|j,R) \right\} 
\end{aligned}
$$

若是有 $q_{i}f_{i}>q_{k}f_{k},k\neq i$，那么将 $x$ 划归为 $\pi_{i}$

基本上方法和思想是雷同的，不想赘述，只给出一些结论

+ 多正态总体 异方差
+ 多正态总体 同方差
+ Fisher 判别分析 多总体


!!! tip "Fisher判别分析-多总体，最优投影方向$\hat{\xi}$："
    当 $W$ 可逆时，有

    $$\hat{\xi}=arg \sup\limits_{\lVert \xi \rVert _{2}=1} \frac{\xi^{T}B\xi}{\xi^{T}W\xi}= \hat{e}_{1}$$

    其中 $\hat{e}_{1}$ 为矩阵 $W^{-1}B$ 的最大特征值对应的单位正交特征向量，$B$ 为样本的类间离差矩阵，$W$ 为类内离差矩阵

记 $W^{-1}B$ 的所有非零特征值分别为 $\hat{\lambda}_{1}\geqslant \hat{\lambda}_{2}\geqslant \dots \geqslant \hat{\lambda}_{s}> 0$，其中 $s\leqslant \min(J-1,p)$，当 $\hat{\xi}_{1}= \hat{e}_{1}$，把 $\hat{\xi}_{1}^{T}x$ 称为样本第一判别函数，其判别效率为 $\hat{\lambda}_{1}$，以此类推，最多有 $\min(J-1,p)$ 个样本判别函数

$\mathbf{Fisher判别准则}:\forall i\neq j$

$$
\sum\limits_{k=1}^{r} (\hat{y}_{k}- \overline{y}_{k}^{(j)})^{2}=\sum\limits_{k=1}^{r} [\hat{\xi}_{k}^{T}(x- \overline{x}^{(j)})]^{2} \leqslant \sum\limits_{k=1}^{r}[\hat{\xi}_{k}^{T}(x- \overline{x}^{(i)})]^{2} 
$$

成立，那么把观测样本 $x$ 划归为 $\pi_{j}$

给出一个例子：

!!! example "使用Fisher判别准则"
    $$
    X^{(1)}=\begin{pmatrix}
    -2 & 5 \\
    0 & 3  \\
    -1 & 1
    \end{pmatrix},X^{(2)}= \begin{pmatrix}
    0 & 6 \\
    2 & 4 \\
     1 & 2
    \end{pmatrix},X^{(3)}=\begin{pmatrix}
    1 & -2 \\
    0 & 0 \\
    -1 & -4
    \end{pmatrix}
    $$

    试建立 Fisher 样本判别函数，并对新的观测样本 $x_{0}=(1,3)^{T}$，用建立的判别函数分类

$$
\overline{x}^{(1)}=\begin{pmatrix}
-1 \\
3
\end{pmatrix}, \overline{x}^{(2)} = \begin{pmatrix}
1 \\
4
\end{pmatrix}, \overline{x}^{(3)}= \begin{pmatrix}
0 \\
-2 
\end{pmatrix}, \overline{x}= \begin{pmatrix}
0 \\
\frac{5}{3}
\end{pmatrix}
$$

计算样本的类内/类间离差矩阵：

$$
\begin{aligned}
B&=\sum\limits_{j=1}^{3} (\overline{x}^{(j)}-\overline{x})(\overline{x}^{(j)}-\overline{x})^{T}=\begin{pmatrix}
2 & 1  \\
1 & \frac{62}{3}
\end{pmatrix}\\
W&= \sum\limits_{j=1}^{3} \sum\limits_{i=1}^{n_{j}} (x_{i}^{(j)}- \overline{x}^{(j)})(x_{i}^{(j)}- \overline{x}^{(j)})^{T}=(9-3)S= \begin{pmatrix}
6 & -2 \\
-2 & 24
\end{pmatrix}
\end{aligned}
$$

那么我们计算：

$$
\lvert W^{-1}B -\lambda I_{2}\rvert = \begin{vmatrix}
0.3571-\lambda & 0.4667 \\
0.0714 & 0.9000-\lambda
\end{vmatrix} =0 \implies \hat{\lambda}_{1}=0.9556, \hat{\lambda}_{2}=0.3015
$$

在约束条件 $\hat{\xi}_{j}^{T}S \hat{\xi}_{j}=1$，求解 $(W^{-1}B- \hat{\lambda}_{j}I_{2}) \hat{\xi}_{j}=0$，得到相应特征向量：

$$\hat{\xi}_{1}=(0.386,0.495)^{T}, \hat{\xi}_{2}=(0.938,-0.112)^{T}$$

可以得到 $\hat{y}_{1}=\hat{\xi}_{1}^{T}x=0.386x_{1}+0.495x_{2},\hat{y}_{2}=\hat{\xi}_{2}^{T}x=0.938x_{1}-0.112x_{2}$

再代入 $x_{0}=(1,3)^{T}$，然后就可以得到相应的一系列数值，最后得到划归为 $\pi_{2}$












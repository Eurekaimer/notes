#回归分析
# 回归分析 (Lecture)


!!! tldr "课程简介"
    所属大学：南开大学
    主讲教师：刘民千 (Liu Minqian)
    先修要求：数学分析+高等代数+初等概率论+初等数理统计
    课程难度：⭐⭐⭐
    预计学时：200h
    给分情况：70%的期末+30%平时成绩
    考试难度：
    修读时间：Fall 25



+ References
	+ 线性模型 王松桂
	+ Slides
+ Extensions
	+ 近代非线性回归分析 韦博成
	+ 矩阵论 詹兴致

## 前言

> 笔者于大二暑假时在此写下这篇笔记 (2025.8.4)

出于对于本人纯粹统计学科基础的补充和对于即将到来的科研学习的准备，我希望能在暑假期间学习完王松桂先生（卒于 2025.4.25）的回归分析一书，作为对于自己升上大三前的一个交代，也是对于老前辈的一个怀念（本书的撰写与立意都简洁深刻，不像其他书籍全是奇技淫巧或是满篇荒唐），关于老先生的事迹可在[北师大的这篇文章](http://math0.bnu.edu.cn/statprob/page/Anecdote/%E6%80%80%E5%BF%B5%E7%8E%8B%E6%9D%BE%E6%A1%82%E6%95%99%E6%8E%88.pdf)查询到， 在此不再赘述

此书的篇幅短小，但内容精悍，读完可以说对于回归分析（书名线性统计模型）有一个初步的认知，笔记内容陈述如下

## 章节内容

本笔记旨在记录笔者在暑假期间自学王松桂先生的回归分析一书所遇到的困难和心得体会，权且当作一本初学者的手册或是一些参考，由于笔者也是初学这一课程，所记述内容大概率有瑕疵，需要辩证看待。众所周知，习题是一本教材的重要组成部分，为了检验自己的学习成果，笔者也将把自己关于这本书的习题解答和相关思考记录在笔记中，以期掌握深刻，最后希望能汇总得到一份 $\LaTeX$ 版本的 PDF 笔记。

以下是书中内容的一个小目录，根据目录来回顾内容是我喜欢的方法：

+ 前言
	+ 线性统计模型包含线性回归模型、方差分析模型等应用十分广泛的模型，并且线性模型的理论和方法也是学习和研究其他统计方法的基础，因此线性统计模型有其学习的价值
	+ Prequest：本书主要为需要学习线性统计模型基础知识的各专业学生提供一本教材，因此预备知识并不多，只需要掌握工科的微积分、线性代数、初等概率统计即可
	+ 大致结构是前两章为预备性知识，后三四五章对线性回归模型的估计和检验做了系统讨论，第六章介绍方差分析模型，第七章则是给出几类在其他领域颇为有用的线性回归模型
+ 引论
	+ 线性回归模型
	+ 方差分析模型
	+ 应用概述
+ 随机向量
	+ 均值向量与协方差阵
	+ 随机向量的二次型
	+ 正态随机向量
	+ $\chi^{2}$ 分布
+ 回归参数的估计
+ 假设检验与预测
+ 回归方程的选择
+ 方差分析模型
+ 其它线性回归模型

[[第一章-引论-王松桂]]

[[第二章-随机向量-王松桂]]

[[第三章-回归参数的估计-王松桂]]

[[第四章-假设检验与预测-王松桂]]

[[第五章-回归方程的选择-王松桂]]

[[第六章-方差分析模型-王松桂]]

[[第七章-含定性变量的回归模型-王松桂]]

下面这一章内容不考

[[第八章-非线性回归模型-王松桂]]


## 作业部分

下面的题号基本是参考王松桂老师的书，然后部分参考老师讲义的部分可以在我的笔记中找到标注


!!! question "HW1"
    1.4、2.3、2.8、2.10、2.17


!!! question "HW2"
    3.2、3.3、3.6、3.7、3.8


!!! question "HW3"
    3.9、3.10、3.11、3.12


!!! question "HW4"
    HW4-1、3.13、3.14、3.18



HW4-1

设 $X=\left(\begin{array}{c}x_1^{\prime}\\\vdots\\x_n^{\prime}\end{array}\right).$ 其中 $\boldsymbol{x}_{i}=(1,x_{i1},\ldots,x_{i\:p-1})^{\prime}$ 并记 $h_{ii}=\boldsymbol{x}_{i}^{\prime}\left(\boldsymbol{X}^{\prime}\boldsymbol{X}\right)^{-1}x_{i}$

试利用分块矩阵的逆矩阵公式证明：

$$h_{ii}=\frac{1}{n}+(\widetilde{\boldsymbol{x}}_{i}-\bar{\boldsymbol{x}})'(\boldsymbol{X}_{c}'\boldsymbol{X}_{c})^{-1}(\widetilde{\boldsymbol{x}}_{i}-\bar{\boldsymbol{x}}),$$

其中 $\left.\widetilde{\boldsymbol{x}}_{i}=(x_{i1},\ldots,x_{i\:p-1})^{\prime},\:\bar{\boldsymbol{x}}=(\bar{x}_{1},\ldots,\bar{x}_{p-1})^{\prime},\boldsymbol{X}_{c}=\left(\begin{array}{cccc}{{x_{11}-\bar{x}_{1}}}&{\ldots}&{{x_{1\:p-1}-\bar{x}_{p-1}}}\\{\ldots}&{\ldots}&{\ldots}\\{{x_{n1}-\bar{x}_{1}}}&{\ldots}&{{x_{n\:p-1}-\bar{x}_{p-1}}}\end{array}\right.\right)$

`Proof.`

由题意可知：

$$
X=\begin{pmatrix}
1_{n \times 1}  & X_{0}
\end{pmatrix}\implies(X'X)^{-1}= \begin{pmatrix}
n & 1'X_{0} \\
X_{0}'1 & X_{0}'X_{0}
\end{pmatrix}^{-1}=\begin{pmatrix}
n & n \overline{x}' \\
n \overline{x} & X_{0}'X_{0}
\end{pmatrix}^{-1}
$$

利用分块矩阵的逆矩阵公式 (Schur) 得到右下角逆为 $X_{0}'X_{0}-n \overline{x} \ \overline{x}'$，并且有：

$$
X_{c}'X_{c}=(X_{0}-1 \overline{x}')'(X_{0}-1 \overline{x}')=X_{0}'X_{0}- n \overline{x}\ \overline{x}'
$$

由此可知：

$$
(X'X)^{-1}= \begin{pmatrix}
 \frac{1}{n}+\overline{x}'(X_{c}'X_{c})^{-1} \overline{x} & - \overline{x}' (X_{c}'X_{c})^{-1} \\
-(X_{c}'X_{c})^{-1} \overline{x} & (X_{c}'X_{c})^{-1}
\end{pmatrix}
$$


再令 $x_{i}=\begin{pmatrix}1\\ \widetilde{x_{i}}\end{pmatrix}$，代入即得

$$
\begin{aligned}
h_{ii}&= x_{i}'(X'X)^{-1}x_{i}\\
&=[ \frac{1}{n}+\overline{x}'(X_{c}'X_{c})^{-1} \overline{x}]- \overline{x}' (X_{c}'X_{c})^{-1}\widetilde{x_{i}}-\widetilde{x_{i}}'(X_{c}'X_{c})^{-1} \overline{x}+\widetilde{x_{i}}' (X'_{c}X_{c})^{-1}\widetilde{x_{i}}\\
&=\frac{1}{n}+(\widetilde{\boldsymbol{x}}_{i}-\bar{\boldsymbol{x}})'(\boldsymbol{X}_{c}'\boldsymbol{X}_{c})^{-1}(\widetilde{\boldsymbol{x}}_{i}-\bar{\boldsymbol{x}})
\end{aligned}
$$




!!! question "HW5"
    4.1、4.4、4.6


!!! question "HW6"
    4.7、4.9


!!! question "HW7"
    5.2、定理 5.1.4



定理 5.1.4(Slides): 假设全模型正确，证明：当 $\operatorname{Cov}(\hat{\boldsymbol{\beta}}_{t}) \geq \beta_{t} \boldsymbol{\beta}_{t}^{\prime}$ 时，有  

$$
M S E P ( \hat { y } _ { 0 } ) \geq M S E P ( \tilde { y } _ { 0 } ) .
$$  

根据 Slides 上的记号，将 $X,\beta$ 分块表示：

$$
X_{n\times p}=\begin{pmatrix}
X_{q} & X_{t}
\end{pmatrix},\beta'=\begin{pmatrix}
\beta_{q}' & \beta_{t}'
\end{pmatrix}
$$

`Proof.`

先考虑全模型 $MSEP(\hat{y}_{0})$：

$$
\begin{aligned}
\tilde{y}_{0}&=x_{0}'\hat{\beta},y_{0}=x_{0}'\beta+\varepsilon_{0}\\
\tilde{e}&=\tilde{y}_{0}-y_{0}=x_{0}'(\tilde{\beta}-\beta)-\varepsilon_{0}\\
MSEP(\hat{y}_{0})&=\operatorname{Var}(\hat{e})\\ &=\operatorname{Var}(\mathbf{x}_{0}'(\hat{\boldsymbol{\beta}}-\boldsymbol{\beta})-\varepsilon_{0})\\ &=\operatorname{Var}(\mathbf{x}_{0}'\hat{\boldsymbol{\beta}})+\operatorname{Var}(\varepsilon_{0})\\ &=\mathbf{x}_{0}'\operatorname{Cov}(\hat{\boldsymbol{\beta}})\mathbf{x}_{0}+\sigma^{2}\\ &=\sigma^{2}\mathbf{x}_{0}'(X'X)^{-1}\mathbf{x}_{0}+\sigma^{2}\\ &=\sigma^{2}\left( 1+ \begin{pmatrix} \mathbf{x}_{0q}'  & \mathbf{x}_{0t}'\\ \end{pmatrix}\begin{pmatrix} X_{q}'X_{q} & X_{q}'X_{t} \\ X_{t}'X_{q} & X_{t}'X_{t} \end{pmatrix}^{-1} \begin{pmatrix} \mathbf{x}_{0q} \\ \mathbf{x}_{0t} \end{pmatrix} \right)
\end{aligned}
$$


再考虑选模型 $MSEP(\tilde{y}_{0})$：

$$
\begin{aligned} \tilde{y}_{0} - y_{0} &= (\tilde{y}_{0} - E[\tilde{y}_{0}]) + (E[\tilde{y}_{0}] - E[y_{0}]) + (E[y_{0}] - y_{0}) \\ &= (\tilde{y}_{0} - E[\tilde{y}_{0}]) + (E[\tilde{y}_{0}] - \eta_{0}) - (y_{0} - \eta_{0}) \\ &= (\tilde{y}_{0} - E[\tilde{y}_{0}]) + \operatorname{Bias}(\tilde{y}_{0}) - \varepsilon_{0} \end{aligned}
$$

$$
\begin{aligned}
MSEP(\tilde{y}_{0})&=E[\tilde{y}_{0}-y_{0}]^{2}\\
&=Var(\tilde{y}_{0})+\sigma^{2}+(Bias(\tilde{y}_{0}))^{2}
\end{aligned}
$$

$$
\begin{aligned}
MSEP(\hat{y}_{0})-MSEP(\tilde{y}_{0})&=x_{0}'Cov(\hat{\beta})x_{0}+\sigma^{2}-\sigma^{2}-Var(\tilde{y}_{0})-(Bias(\tilde{y}_{0}))^{2}\\
&=[\sigma^{2}x_{0}'(X'X)^{-1}x_{0}]-\sigma^{2}x_{0q}'(X_{q}'X_{q})^{-1}x_{0q}-\beta_{t}'cc'\beta_{t}\\
c'&=x_{0q}'(X'_{q}X_{q})^{-1}X_{q}'X_{t}-x_{0t}'
\end{aligned}
$$

不妨令

$$
(X'X)^{-1}= \begin{pmatrix}
C_{qq} & C_{qt} \\
C_{tq} & C_{tt}
\end{pmatrix}
$$

那么我们可以得到

$$
\begin{aligned}
x_{0}'(X'X)^{-1}x_{0}&=\begin{pmatrix}
x_{0q}' & x_{0t}'
\end{pmatrix} \begin{pmatrix}
C_{qq} & C_{qt} \\
C_{tq} & C_{tt}
\end{pmatrix}\begin{pmatrix}
x_{0q} \\
x_{0t}
\end{pmatrix}\\&=x'_{0q}C_{qq}x_{0q}+x'_{0q}C_{qt}x_{0t}+x'_{0t}C_{tq}x_{0q}+x'_{0t}C_{tt}x_{0t}
\end{aligned}
$$


代入即可得到：

$$
\begin{aligned}
MSEP(\hat{y}_{0})-MSEP(\tilde{y}_{0})&=c'Cov(\hat{\beta}_{t})c-\beta'_{t}cc'\beta_{t}\\
&=c'(Cov(\hat{\beta}_{t})-\beta_{t}\beta_{t}')c\\
&\geqslant 0
\end{aligned}
$$




!!! question "HW8"
    5.1



!!! question "HW9"
    HW9-1、6.3



!!! question "HW10"
    Contents


!!! question "HW11"
    Contents

## 往年试卷



## 附注

为了完整起见，我将完成本书所有习题并发布相应的解答在博客上，其他平台暂未有计划



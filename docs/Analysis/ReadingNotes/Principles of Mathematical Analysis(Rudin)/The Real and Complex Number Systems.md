---
comments: true
tags:
  - Mathematical Analysis
---
# Introduction

**A satisfied discussion of the main concepts of analysis** must be based on **an accurately defined number concept.**
																												——WalterRudin

We first **assume familiarity with the rational numbers**(the numbers of the form $\frac{m}{n}$,where m and n are integers and $n\neq 0$)

The rational number system is **inadequate** for many purposes,both as a field and an ordered set.(These terms will be defined in Secs.1.6 and 1.12)

**Motivation**
**Instance**:there is no rational $p$ such that $p^{2} =2$.

We can use a sequence that is made of infinite decimal expansions to approximate the **irrational numbers** "actually $\sqrt{ 2 }$"

$$
1,1.4,1.41,1.414,1.4142,\dots
$$

it "tends to $\sqrt{ 2 }$" if we know the irrational number.

But without the definition of irrational number, we can't answer the question : What is it that this sequence "tends to"?

**Statement:** There is no rational $p$ satisfied the equation $p^{2}=2$

`Proof`
If there were such a $p$,we could write $p= \frac{m}{n}$ where m and n are integers that are not both even.If not, we eliminate the 2.
We can get $m^{2}=2n^{2}$,this shows that $m^{2}$ is even and $m^{2}$ is divisble by 4 (m is divisble by 2).Such that n is also divisble by 2(n is even).Hence the equation is impossible for rational $p$.

Now we can use this instance to make two subsets of $\mathbb{Q+}$ denote it **example 1.1**
Let A be the set of all positive rational $p$ such that $p^{2}<2$,let B be the set of all positive rational $p$ such that $p^{2}>2$ .We shall show that A *contains no largest* number and B *contains no smallest*.

More explicity,for every $p$ in A we can find a rational $q$ in A such that $p<q$ (B is the same)

A structure quite elegant:

$$
\begin{align}
q=p- \frac{p^{2}-2}{p+2}= \frac{2p+2}{p+2} \\
q^{2}-2= \frac{2(p^{2}-2)}{(p+2)^{2}}
\end{align}
$$

If $p$ is in A then $p^{2}-2<0$ ,shows that $q>p$,and shows that $q^{2}<2$.

**Thinking:** How to construct this $q$ looks difficult?

**Answer:**
We can use $\sqrt{ 2 }$ (or any other symbol) to approximate the number $q$.
To make an appropriate approximation, we should clearify our goal first(what conditions the number q should satisfy)

1. it must bigger than p(only think about the situation $p^{2}<2$).
2. $q^{2}<2$,too.

$$
\begin{align}
q & <p+\sqrt{ 2 }-p=\sqrt{ 2 } \\
q & <p+ \frac{2-p^{2}}{\sqrt{ 2 }+p}
\end{align}
$$

that's a draft and the other situation is the same. $q>p-(p-\sqrt{ 2 })=p+ \frac{2-p^{2}}{\sqrt{ 2 }+p}$ ,you will find the numerator be control by (2-$p^{2}$) ,and we actually can use any number bigger than $\sqrt{ 2 }$ to displace the 2 in the Rudin's book.

**Remark:**
The rational number system has certain gaps,if $r<s$ then $r< \frac{r+s}{2}<s$,the real number system fills these gaps.

In order to elucidate its structure, as well as that of the complex numbers,we start with a discussion of the general concepts of *ordered set and field*

Some **definition** of the ordered set and field:
$\not\in \emptyset \subset \supset$

**Definition**
Throughout Chap.1,the set of all rational numbers will be denoted by $\mathbb{Q}$

# Ordered sets
**Definition**
Let $S$ be a set.An *order* on $S$ is a relation,denoted by <,with the following two properties:
(1) If $x\in S$ and $y \in S$ then only one of the statements is true.

$$
x<y,x=y,y<x
$$

(2) If $x,y,z\in S$ , if $x<y$ and $y<z$ ,then $x<z$.
"$x<y$" may be read as "x is less than y" or "x is smaller than y" or "x precedes y".
Or we can use y>x replace the "x<y".The notation $x\le y$ indicates that "x<y" or "x=y"

**Definition**
An *ordered set* is a set $S$ in which an order is defined.

Assume $S$ is an ordered set and $E \subset S$.(Used in following definitions)

**Definition**
If there exists a $\beta \in S$ such that $x\le \beta$ for every $x\in E$,we say that $\mathbb{E}$ is *bounded above*,and call $\beta$ an *upper bound* of $E$
*Lower bounds* are defined in the same way.

**Definition**
 $\alpha$ is called *the least upper bound*(or *the supremum*) of $E$ if exists the $\alpha$ with the following properties (there is at most one such $\alpha$, we can get it from (2))
(1) $\alpha$ is an upper bound of $E$
(2) If $\gamma <\alpha$ then $\gamma$ is not an upper bound of $E$
and we write $\alpha=sup\ E$
Like it,we can define the *greatest lower bound*,or *infimum*.We write (in convenient we use a letter different from the $\alpha$) $\beta=inf\ E$

**Examples**
**(a)** The set A is bounded above and has no least upper bound in $\mathbb{Q}$
Back to the example 1.1 and consider A and B as subsets of the ordered set $\mathbb{Q}$,we may get (a) in the following three conclusions.

**(b)** If $\alpha=sup\ E$ exists,then $\alpha$ may or may not be a member of $E$.
For instance,let $E_{1}$ be the set of all $r\in \mathbb{Q}$ with $r<0$ .Let $E_{2}$ be the set of all $r\in \mathbb{Q}$ with $r\le 0$.Then $sup\ E_{1}=sup \ E_{2}=0$ and $0\not\in E_{1},0\in E_{2}$.

**(c)** $E$ is an ordered set,$sup\ E$ and $inf\ E$ have one in $E$
Let $E$ be a consist of all numbers $\frac{1}{n}$ ,where $n=1,2,\dots$ ,Then $sup\ E=1$ ,which is in $E$ ,but on the other hand $inf\ E=0$ ,which is not in $E$.

**Definition**
An ordered set $S$ is said to have the **least-upper-bound** property if the following is true
If $E \subset S$,$E$ is not empty,and E is bounded above,then $sup\ E$ exists in $S$.
The example in (a) shows that $\mathbb{Q}$ does not have the least-upper-bound property.

*The close relation* between greatest lower bounds and least upper bounds:
every ordered set with the least-upper-bound property also has the greatest-lower-bound property.
We can summary it as a theorem.(**We should discuss the set with least-upper-bound property**)

**Theorem**
Suppose $S$ is an ordered set with the least-upper-bound property,$B\subset S$,B is not empty,and B is bounded below.Let L be the set of all lower bounds of B.Then $\alpha=sup\ L$ exists in $S$ ,and $\alpha=inf\ B$.In particular,$inf\ B$ exists in $S$.

`Proof`

**Step 1:**
Since B is bounded below, L is not empty.
Since L consits of exactly all of the y which satisfy the inequality $y\le x$ for every $x\in B$ ,then every $x\in B$ is an upper bound of L.(B is not empty)
Thus L is bounded above.Our hypothsis about $S$ implies therefore that L has **supremum** in $S$ ; call it $\alpha$.
**Step 2:**
Due to the definition of supremum,think about two situations(left and right):
	if $\gamma<\alpha$ then $\gamma$ is not an upper bound of L,hence $\gamma \not\in B$(every elements of B is an upper bound of L). It shows that $\alpha\le x$ for every $x\in B$ .(Because every $x\in B$ should greater or equal to the $\alpha$ so we can get **the $\alpha$ is the lower bound of B**)Thus $\alpha\in L$.
	if $\alpha<\beta$ then $\beta \not\in L$ ,since $\alpha$ is an upper bound of L. In my words, they mean **the number is bigger than $\alpha$ is not belong to L then is not the lower bound of B.**
 From these we can get the conclusion that $\alpha=inf\ B$ (In definition)

Some words:I think I should not write the definitions in my note or write very simplely, they waste the time!
Another some words: the author skip one or two logical explaination sentence in one conclusion.

# Fields

Q&A
Q: Straightly, the first question, what is a *field* ?
A: a set F with two operations, "**addition** and **multiplication**" , precisely is satisfy the following "field axioms" (A), (M) and (D) explained below.
(A) and (M) both have 5 subaxioms
1. 封闭性
2. 交换律
3. 结合律
4. 幺元律
5. 逆元存在
(D) 乘法分配律

Use the filed axioms to prove some familiar properties of $\mathbb{Q}$ , such that we won't prove them again for real number and complex number.

Give one example for each axioms.(Others can found in the book)

# The Real Field

**Remark:**
This chapter's notes is too long and like copy the rudin's book. I will change the way in next chapters (but on the other word,is it a proof for the book is good?)


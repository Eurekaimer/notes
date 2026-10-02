---
comments: true
tags:
  - Probability Theory
---
# Chapter 1 :Combinatorial Analysis

OK,this is the first chapter in the probability theory, we will review some definition and theorems we have learned in our high school. To make a good preparition for the future, I suggest you can find some not so easy problems to solve and test yourself(like the question in the Ross or any others).

The first part is about counting. We only give a quick look.

## Counting

### Basic Counting Principles

**Theorem 1.1 (Pigeonhole principle  Dirichllet, 1834)**
If $n$ items are to be put into $m$ containers, with $n > m$, then at least one container must contain more than one item.

**Remark 1.1.1**
More general Pigeonhole principle is $\left\{ 1,2,\dots n \right\}$ can't equiponent with $\left\{ 1,2\dots n+m \right\}$
More explainations you can find in *Real Analysis* by *Royden*.

**Corollary 1.2**
If $n$ items are to be put into $m$ containers with $n > m$, then at least one container must contain at least $⌈n/m⌉$ items.

**Remark 1.2.1**
Recall that ⌈·⌉ is a ceiling function, meaning that for any $x ∈ \mathbb{R}$,
⌈x⌉ = inf{$n ∈ \mathbb{Z}|n ≥ x$}.
⌊x⌋ = sup{$n ∈ \mathbb{Z}|n ≤ x$} is a floor function.

`Proof`

use the contradiction, and we also use this function in mathematical analysis.

 We first argue that for any $x ∈ \mathbb{R}$, $⌈x⌉ < x + 1$. If not, there exists $x_0 ∈ \mathbb{R}$ with $⌈x_0⌉ ≥ x_0 + 1$, then $⌈x_0⌉ − 1$ is a smaller integer satisfying the definition of ceiling function, which is a contradiction.

We prove the corollary by contradiction. Assume that all containers contain at most $⌈n/m⌉ − 1$ items. Then the total number of items is at most $m(⌈n/m⌉ − 1) < m(n/m) = n$, which contradicts with the fact that there are n items.

**Proposition 1.3**
If r experiments are to be performed sequentially and the first experiment can be performed in $n_1$ ways,...    the $r^{th}$ experiment in $n_r$ ways, then there are $\prod\limits_{i=1}^r  n_i$ ways to perform the *$r$* experiments.

The second part is Permutions.

## Permutations

**Definition 1.4 (Permutation)**
An ordered ranking of $n \in \mathbb{N}$ distinct elements is called a **permutation**.

**Proposition 1.5**
There are $n(n − 1)· · · 1$ permutations of $n \in \mathbb{N}$ distinct elements.

`Proof`

Just by **Basic Counting Principles**

**Remark 1.6**
We use the notation $n!$ (read as “**n factorial**") to represent $n(n−1)···1$.
By convention, **0! = 1**.

### Permutations(with indistinguishable items)

**Motivation example**
*How many different letter arrangements can be formed from the letters PEPPER?*

`Solution`

There are $6!$ permutations if $P’s$ and $E’s$ are distinguished from one another, that is, doing permutation for $P_1E_1P_2P_3E_2R$. However, for one arrangement, say $P_1P_2E_1E_2P_3R$, one can permute P’s among themselves and E’s among themselves, and obtain the same arrangement. Hence, $3!2!$ permutations have the same form. Therefore, there are $\frac{6!}{(3!2!)}$ letter arrangements.

**Generalization:**
In general, for n objects, out of which $n_1$ are alike, $n_2$ are alike,. . . , n~r~ are
alike. Then there are $\dfrac{n!}{n_1!n_2!···n_r!}$ different permutations.

After permutation, we can talk combinations more easily.

## Combinations

**Definition 1.7 (Combination)**
A **combination** is an unordered collection of *k* items among  $n\in \mathbb{N}$ elements ($k ≤ n$).

**Proposition 1.8**
The number of combinations of k items among  $n\in \mathbb{N}$ elements ($k ≤ n$) is denoted by $\binom{n}{k}$  (read as "n choose k") and it is equal to $\binom{n}{k}=\frac{n!}{(n-k)!k!}$

**An example used often**
Consider a set of $n$ antennas of which m are defective, and $n − m$ are functional. Assume that all of the defectives and all of the functionals are considered indistinguishable. How many linear orderings are there in which no two defectives are consecutive?

`Solution`

*We can line up n-m functional antennas.*

*(use 1 stands fo the functional and 0 stands for the space between the next to)*

*like this 0 1 0 1 0 1 0 1 0 1 0 1 0*

*So obviously, there are $\binom{n-m+1}{m}$ possible orderings.*

### Combinatorial identities

**Identity I**
$\binom{n}{k}=\binom{n}{n-k}$ ,for any $n$, $k$ $\in$ $\mathbb{N}$ and $k\le n$.

**Identity II**
$\binom{n+1}{k+1}=\binom{n}{k}+\binom{n}{k+1}$ ,for any $n, k$ $\in$ $\mathbb{N}$ and $k\le n$.

`Proof`

***Algebraic verification is OK.***

We will use a combinatorial argument.

Consider a set **S = {s~1~, . . . , s~n+1~ }** , combinations of **k+1** elements among **n+1** can be divided as follows:

**(1)** combinations containg $s_1$, there are $\binom{n}{k}$ such combinations;

**(2)** there are $\binom{n}{k+1}$ combinations without $s_1$.

## Multinomials

### Binomials

**Theorem 1.9 ([[The Binomial theorem]])**
For all $x, y$ $\in$ $\mathbb{R}$ and  $n\in \mathbb{N}$,
$(x+y)^n=\sum\limits_{k=0}^{n}\binom{n}{k}x^ky^{n-k}$

`Proof is easy`

May be we can use a selection from {$x_1,y_1$}  {$x_2,y_2$} ...{$x_n,y_n$}

The term $x^ky^{n-k}$ corresponds to a choice of a group of $k$ from n values $x_1, x_2,...,x_n$, there are $\binom{n}{k}$ such terms.

**The generalization of binomia.**
Consider the expansion of $(x_1+x_2+···+x_r)^n$
From the basic counting rule, the coefficient for $x_1^{n_1}···x_r^{n_r}$ is $\binom{n}{n-n_1}\binom{n-n_1}{n_2}···\binom{n-n_1-···n_{r-1}}{n_r}=\dfrac{n!}{n_!!n_2!···n_r!}$

**Remark 1.10**
One hidden fact is that $n_1,...,n_r$  satisfies $n_1+···+n_r=n$

**Theorem 1.11 (The multinomial theorem)**
We define $\binom{n}{n_1,n_2,···,n_r}:=\frac{n!}{n_1!n_2!···n_r!}$,then we have the multinomial expansion

$$
(x_1+x_2+···+x_r)^n=\sum_{(n_1,...,n_r):n_1+···n_r=n}^{}\binom{n}{n_1,n_2,...,n_r} x_1^{n_1}x_2^{n_2}···x_r^{n_r}
$$

**Proposition 1.12**
There are $\binom{n+r-1}{r-1}$ distinct nonnegative integer-valued vectors $(n_1, n_2, . . . , n_r)$ satisfying $n_1 + · · · + n_r= n$

`Proof`

Instead,we discuss the number of positive solutions of $y_1+···+y_r=n+r$

**(by letting $y_i=n_i+1$)**

Choose $r-1$ out of $n+r-1$ spaces.

**Remark 1.12.1**
If we exchage the word "nonnegative" to the "positive"
What's the answer?
Obviously, the answer is $\binom{n-1}{r-1}$

**Remark 1.13**
In the Chapter 1, I don't write the motivations wholely , because this chapter we have learn quite a lot in the senior high school , but in the chapters after that ,I will write some useful motivations and cases which I think is helpful.


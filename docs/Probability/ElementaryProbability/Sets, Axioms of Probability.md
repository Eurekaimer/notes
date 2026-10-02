---
comments: true
tags:
  - Probability Theory
---
# Chapter 2 :Sets, Axioms of Probability

Now, let's begin the formal elementary probability theory's study.
Normally, we will establish the fundamental framework by showing the axioms of probability. Before doing this, We must ensure that you have a certain understanding of basic sets and set operations.

##  Sets

 **Motivations**

+ the sex of a newborn child

+ flipping two coins

+ tossing two coins

+ etc

We can't answer the above questions but know **all the possibilities**——
In other word , it called **Sample Space**

**Definition 2.1 (Sample Space)**
A **random experiment** is a phenomenon whose outcome is not predictable with certainty, but the set of all possible coutcomes is known. The set of all possible outcomes is known as the **sample space** of the experiment and is denoted by $\mathcal{S}$. Any item $ω ∈ \mathcal{S}$ is called a **sample point**.

 **Remark 2.2**
$\mathcal{S}$ can be finite,countably infinite,uncountably infinite`

We may think deeper after  learning more **Real Analysis**.

**Cases(previous experiments)**

+ S={boy,girl} finite
+ S={(head, head), (head, tail), (tail, head), (tail,tail)} finite
+ S={(i, j) : i, j = 1, 2, 3, 4, 5, 6} finite

Every course seems to give an introduce to **naive set theory** as an begining? This course isn't a expectation.

### Subset/Superset

**Definition 2.3**
If every point of A belongs to B, then A is contained or included in B and A is a subset of B, while B is a superset of A.

**Symbolically**,$A\subset B,B \supset A$

### Event

**Definition 2.4**
An **event** $E$ is a set consisting of possible outcomes of the experiment that satisfy a given property. Thus, $E$ is a subset of $\mathcal{S}$. If the outcome of the experiment is contained in $E$, then we say that $E$ has been realized or that $E$ has occurred.

**Remark 2.5**

+ $S:$ the sure event
+ $\emptyset :$ the impossible event

Still use the cases mentioned before, the newborn child is a girl means $E$={girl}.

### Operations, Relations and Notations

#### **Union**
The union $E ∪ F$ of two sets $E, F$ is the set of points that belong to at least one of them.
Symbolically,$E\cup F$={ $\omega | \omega\in E \ or \ \omega \in F$ }
$E\cup F$ is realized if either $E$ or $F$ occurs.

#### **Intersection**

The intersection $E ∩ F( or EF)$ of two sets $E, F$ is the set of points that belong to both of them.
Symbolically,$EF$={$\omega | \omega\in E \ and \ \omega \in F$ }
$EF$ is realized if $E$ and $F$ both occur.

#### **Countable union/intersection**
$\{E_i\}_{i\ge 1}$ is a countable sequence of events.

+ The union of these events denoted $\bigcup\limits_{i=1}^{\infty}E_i$ is defined to be the  event which consists of all outcomes that are in at least one event $E_i$ ,$i=1,2...,\infty$
   $\omega \in \bigcup\limits_{1}^{\infty}E_i\Longleftrightarrow \exists i \ s.t. \omega \in E_i$ 
+ The intersection of these events denoted $\bigcap\limits_{i=1}^{\infty}E_i$ is defined to be the  event which consists of all outcomes that are in all of  the events $E_i$ ,$i=1,2...,\infty$
  $\omega \in \bigcap\limits_{1}^{\infty}E_i\Longleftrightarrow  \omega \in E_i \ \forall \ i$ 

#### **Mutually exclusive**
$E,F$ are mutually exclusive if  $E\cap  F= \emptyset$
$E$ and $F$ can not both occur at the same time.

#### **Complement**
For a set $E \subset S$ ,the complement of $E$ is denoted by $E^c$ and is the set of points that do not belong to $E$.  
Symbolically,$E^c=\{ \omega \in S|\omega \notin E\}$
$E\cup E^c=S,E \cap E^c=\emptyset,(E^c)^c=E$ 

#### **Difference**
For events E, F, $E\setminus F$ is the set of points that belong to E but not to F.
Symbolically,$E\setminus F=\{\omega| \omega \in E\ and \ \omega \notin F\}$  
$E\setminus F =E\setminus(E\cap F),E^c=S\setminus E$  

#### **Symmetric difference**
$E \bigtriangleup F$ is  the set of points that belong to exactly one of them.
Symbolically,$E \bigtriangleup F =\{  \omega| \omega \in E\setminus F \ or \ \omega \in F\setminus E\}$

#### **Venn diagram**
$\mathcal{S}$:a large rectangle
events $E,F$... :represented by circles
events of interests: shading the appropriate regions of the diagram`

### Laws on sets

#### **Commutativity**
$E\cup F=F \cup E \  and \ E \cap F=F \cap E$ 

#### **Associativity**
$E \cup(F\cup G)=(E\cup F)\cup G \ and \ E\cap(F \cap G)=(E\cap F) \cap G$ 

#### **Distributivity**
$E \cup(F\cap G)=(E\cup F)\cap (E\cup G) \ and \ E\cap(F \cup G)=(E\cap F) \cup (E \cap G)$  

#### **Transitivity**
If $E \subset F \ and\ F \subset G$ ,then $E \subset G$

After them, there is also a very important law in the theory operations.

**Proposition 2.5 (De Morgan’s laws)**
$(1)(\bigcup\limits_{i=1}^{n}E_i)^c=\bigcap\limits_{i=1}^{n}E_i^c$ 
$(2)(\bigcap\limits_{i=1}^{n}E_i)^c=\bigcup\limits_{i=1}^{n}E_i^c$ 

`Proof`

It suffices to show (1) since if (1) holds , then we consider $(\bigcup\limits_{i=1}^{n}E_i^c)^c=\bigcap\limits_{i=1}^{n}(E_i^c)^c=\bigcap\limits_{i=1}^{n}E_i$

We get (2) by applying complement to both sides.

`So we only need to proof (1)`

$\subset$

$\omega \notin \bigcup_{i=1}^{n}E_i$  , For any $\omega \notin E_i \to\omega \in E_i^c \  for \ all \ i$

 $s.t. \ \omega \in \bigcap_{i=1}^{n}E_i^c$

$\supset$

$\omega \in \bigcap_{i=1}^{n}E_i^c$ , For any i , $\omega \notin E_i \to \omega \notin \bigcup_{i=1}^{n}E_i$,$\omega \in (\bigcup_{i=1}^{n}E_i)^c \  \forall \ i$

 $s.t. \ \omega \in (\bigcup_{i=1}^{n}E_i)^c$

## Axioms of Probability

**Remark 2.6**
This part is not the content in this class, just to know,you can read more about this in **Real Analysis(Royden)** if you want.

### σ-algebra and Measurable space

**Definition 2.7 (σ-algebra)**
A σ-algebra A ⊂ P(S) is a family of sets over S satisfying the following properties:
+  $\emptyset \in \mathcal{A}$
+ $\mathcal{A}$ is closed under complementation: If $E \in \mathcal{A}$ , then $E^c \in \mathcal{A}$ , $\mathcal{A}$ is closed under countable union:if $(E_i)_{i\ge1}$is a countable sequence of sets in $\mathcal{A}$ ( $E_i\in \mathcal{A}\ for \ i\in N^*)$,
then $\bigcup_{i=1}^{\infty}E_i\in \mathcal{A}$

**Definition 2.8 (Measurable space)**
Let us consider a random experiment with sample space $S$ endowed with $\sigma - algebra \ \mathcal{A}$, $(S,\mathcal{A})$ is called a measurable space and elements of $\mathcal{A}$ are called events.

Under this is the most important part in this chapter——**Axioms of Probability**

### Axioms

**Definition 2.9 (Probability, Kolmogorov, 1933)**
Let $(S, \mathcal{A})$ be a measurable space of events. A **probability measure** is a real-valued function mapping  $\mathcal{P} : \mathcal{A} → \mathcal{R}$ satisfying:

+ for any event $E\in \mathcal{A},\mathcal{P}\in(E)\ge0$ (nonnegativity)
+ $\mathcal{P}(S)=1$
+ for any countably infinite sequence of events $(E_i)_{i\ge1}$ that are mutually exclusive,

$$
\mathcal{P}(\bigcup_{i=1}^{\infty}E_i)=\sum_{i=1}^{\infty}\mathcal{P}(E_i)\notag 
$$

($\sigma$-additivity or countable addtivity)
Then $(S,\mathcal{A},\mathcal{P})$ is called a **probability space**.

## Properties of probability

### Some properties

**Remark 2.10**
We write down all the proofs because we first learn the rigorous parts of probability theory, in the chapters after this, I will omit some.

**Property 1  (Probability of the impossible event)**

$$
P(\emptyset)=0\notag
$$

`Proof`

Let$\ E_1=S$ ,$E_i=\emptyset \ for\ all \ i\ge2$, $\{ E_i\}_{i=1}^{\infty} \ is \ a \ mutually \ exclusive \ sequence$

$$
\begin{aligned} 
\ P\left( \bigcup_{i=1}^{\infty}E_i \right)&=P(S) \notag  \\
&\overset{(3)}{=}\sum_{i=1}^{\infty}P(E_i)=P(S)+\sum_{i=2}^{\infty}P(\emptyset)\notag 
\end{aligned}
$$

$$
\sum_{i=2}^{\infty}P(\emptyset)=0 \overset{(1)}{\to} \   P(\emptyset)=0\notag 
$$

**Property 2  (Probability of a finite union of mutually exclusive events)**
For any finite sequence of events $E_1,...,E_n\in \mathcal{A}$ that are mutually exclusive
(that is, $E_i\cap E_j=\emptyset \ if \ i \neq j$),

$$
P(\bigcup_{i=1}^{n}E_i)=\sum_{i=1}^{n}P(E_i)\notag 
$$

`Proof`

**Let $E_k=\emptyset$  for all $k>n$   $\{E_i\}_{i=1}^{\infty}$ countable, mutually exclusive**

$$
\begin{align}
P(\bigcup_{i=1}^{\infty}E_i)=P(\bigcup_{i=1}^{n}E_i) &\overset{(3)}\notag {=}\sum_{i=1}^{\infty}P(E_i)\notag 
\\&=\sum_{i=1}^{n}P(E_i)+\sum_{i=n+1}^{\infty}P(\emptyset)\notag 
\\&=\sum_{i=1}^{n}P(E_i)\notag 
\end{align}
$$

**Property 3  (Probability of included events)**

For any two events $E, F \in A$,

$$
E \subset F \Rightarrow P(E)\le  P(F).\notag 
$$

`Proof`

$$
E\subset F \ F=E\cup (F\setminus E)\notag 
\\P(F)=P(E)+{\color{Blue}P(F\setminus E)\overset{(1)}{\ge}0}\notag 
\\P(F)\ge P(E)\notag 
$$

**Property 4**
For any event $E\in \mathcal{A}$,

$$
P(E)\le 1\notag 
$$

`Proof`

$$
E\subset S \ \overset{Property\ 3}{\Rightarrow}P(E)\le 1\notag 
$$

**Property 5  (Law of total probability)**
Let $F\in \mathcal{A}$ be an event and $(E_i)_{i\ge 1}$ be a countable partition of the sample space $S$ (that is, $\bigcup_{i=1}^{\infty}E_i=S\  and \ E_i\cap E_j=\emptyset \ for \ i \neq j$),

$$
P(F)=\sum_{i=1}^{\infty}P(F\cap E_i)\notag 
$$

`Proof`

$$
\begin{align}
P(F)&=P(F\cap S)\notag 
\\&=P(F\cap (\bigcup_{i=1}^{\infty}E_i))\notag 
\\&=P(\bigcup_{i=1}^{\infty}F\cap E_i)\notag 
\\&\overset{(3)}{=}\sum_{i=1}^{\infty}P(F\cap E_i)\notag 
\end{align}
$$

$$
because \ \{ F\cap E_i\}_{i=1}^{\infty}\ is \ mutually \ exclusive \ sequence\notag 
$$

**Property 6  (Probability of the complement)**
For any event $E\in \mathcal{A}$,

$$
P(E^c)=1-P(E)\notag 
$$

`Proof`

$$
1\overset{(2)}{=}P(S)=P(E\cup E^c)\overset{property 2}{=}P(E)+P(E^c)\notag 
$$

**Property 7 (Probability of the union of 2 events)**
For any two events $E,F\in \mathcal{A}$,

$$
P(E\cup F)=P(E)+P(F)-P(E\cap F)\notag
$$

`Proof`

$$
\begin{align}
F&=(F\cap E)\cup(F\cap E^c)\notag 
\\(F\cap E)\cup(F\cap E^c) \ &is \ mutually \ exclusive\notag \\
P(F)&=P(F\cap E)+{\color{Red}P(F\cap E^c)}\notag 
\\from \ E\cup F&=E\cup (F\cap E^c)\notag 
\\P(E\cup F)&=P(E)+{\color{Red}P(F\cap E^c)}\notag \\ 
&=P(E)+P(F)-P(E\cap F)\notag 
\end{align}
$$

The identity below is a very famous trick(when I'm in high school, I am amazed by it).

**Property 8  (Inclusion-Exclusion Identity/Poincaré’s formula)**
For any two events $E,F\in \mathcal{A}$,

$$
P(\bigcup_{i=1}^{n}E_i)=\sum_{k=1}^{n}(-1)^{k-1}\sum_{1\le i_1 < ...< i_k\le n}P(E_{i_1}\cap...\cap E_{i_k})\notag 
$$

where $\sum\limits_{1\le i_1<...<i_k\le n}$ means the sum for all subsets of $(1,...,n)$ of size k.

`Proof`

By induction is easy.

**Property 9**
For events $E,F$

$$
P(E\cup F)\le P(E)+P(F)\notag 
$$

`Proof`

$$
\begin{align}
P(E\cup F)&=P(E)+P(F)-P(E\cap F)\notag 
\\&\le P(E)+P(F)\notag 
\end{align}
$$

**Property 10  (A generalization)**

For a finite sequence of events $E_1,...,E_n,$

$$
P(\bigcup_{i=1}^{n}E_i)\le \sum_{i=1}^{n}P(E_i)=P(E_i)+...+P(E_n)\notag 
$$

`Proof`

$$
\begin{align}
P(\bigcup_{i=1}^{\infty}E_i)&=P(E_1\cup(\bigcup_{i=2}^{\infty}E_i))\notag 
\\&\le P(E_1)+P(\bigcup_{i=2}^{\infty}E_i)\notag 
\end{align}
$$

**Property 11  (Boole’s Inequality)**
For a countable infinite sequence of events $\{E_i\}_{i\ge1}$

$$
P(\bigcup_{i=1}^{\infty}E_i)\le\sum_{i=1}^{\infty}P(E_i)\notag
$$

`Proof`

We construct a new sequence of events $\{F_i\}_{i=1}^{\infty}$ mutually exclusive.

$$
\begin{align}
Make \ F_1=E_1 \ \ F_2=E_2 \setminus E_1\notag 
\ & \ F_k=E_k \setminus \bigcup_{i=1}^{k-1}E_i \ (k\ge2)\notag 
\\\bigcup_{i=1}^{n}E_i=\bigcup_{i=1}^{n}F_i,& \notag \bigcup_{i=1}^{\infty}E_i=\bigcup_{i=1}^{\infty}F_i\notag 
\\Obviously,the \ \{ F_i\}_{i=1}^{\infty}\ &are\ mutually \ exclusive\notag \\ 
P(\bigcup_{i=1}^{\infty}E_i)&=P(\bigcup_{i=1}^{\infty}F_i)\notag 
\\&=\sum_{i=1}^{\infty}P(F_i)\notag 
\\&\overset{F_k \subset E_k}{\le}\sum_{i=1}^{\infty}P(E_i)\notag 
\end{align}
$$

$$ \color{Blue}Motivation \  example:Infinitely \ large \ urn \ and\ infinite\ balls $$

 Suppose we have an infinitely large urn, and an infinite collection of balls labeled
  as number 1, 2, 3, and so on. Consider an experiment as follows:

+ At 1 minute to 12pm, balls numbered 1 through 10 are placed in the urn
   and ball number 1 is withdrawn;
+ At $\frac{1}{2}$ to 12pm, balls numbered 11 through 20 are placed in the urn and
   ball number 2 withdrawn;
+ At $\frac{1}{4}$ to 12pm, balls numbered 21 through 30 are placed in the urn and
   ball number 3 withdrawn;
+ ...

and so on.How many balls are there in the urn at 12pm ?
(the answer is 0 and why?)
 If we place the 1 to 10 balls and withdraw 10,place the 11 to 20 balls and withdraw 20,there are infinite balls(contrast two situations).

### Continuity property

**Definition 2.11 (Increasing/Decreasing sequences)**
A sequence of events $\{E_n,n\ge1\}$ is said to be an *increasing sequence* if

$$
E_1\subset E_2...\subset E_n\subset ...,\notag 
$$

and we define a new event { $\lim\limits_{n\to \infty}E_n \ by \ \lim\limits_{n\to \infty}E_n=\bigcup\limits_{n=1}^{\infty}E_n$ } 
A sequence of events $\{E_n,n\ge1\}$ is said to be an *increasing sequence* if

$$
E_1\supset E_2...\supset E_n\supset ...,\notag 
$$

and we define a new event ${\lim\limits_{n\to \infty}}E_n \ by \ \lim\limits_{n\to \infty}E_n=\bigcap\limits_{n=1}^{\infty}E_n$

**Proposition 2.12 (Continuity property)**
If $\{E_n,n\ge1\}$ is either an increasing or a decreasing sequence, then

$$
\lim_{n\to\infty}P(E_n)=P(\lim_{n\to\infty }E_n)\notag 
$$

`Proof`

It suffices to discuss the increasing case since if ,

$\{E_n \ n\ge1\}$is decreasing the $\{E_n^c \ n\ge1 \}$ is increasing.

$$
\begin{align}
\lim_{n\to\infty}P(E_n^c)\overset{increasing}{=}P(\lim_{n\to\infty}E_n^c)=P(\bigcup_{n=1}^{\infty}E_n^c)=P((\bigcap_{n=1}^{\infty}E_n)^c)=1-P(\bigcap_{n=1}^{\infty}E_n)\notag 
\\\lim_{n\to\infty}P(E_n^c)=1-\lim_{n\to\infty}P(E_n)=1-P(\lim_{n\to\infty}E_n)=1-P(\bigcap_{n=1}^{\infty}E_n)\notag 
\\\lim_{n\to\infty}P(E_n)=P(\lim_{n\to\infty}E_n) \notag \\
\end{align}
$$

Now we prove the result for increasing $E_n$ ,we do the same construction before.

$$
\begin{align}
F_n&=E_n\setminus\bigcup_{i=1}^{n-1}E_i=E_n\setminus E_{n-1}\notag \\
RHS&=P(\lim_{n\to\infty}E_n)=P(\bigcup_{i=1}^{\infty}E_i)=P(\bigcup_{i=1}^\infty F_i)\notag 
\\&=\sum_{i=1}^{\infty}P(F_i)=\lim_{n\to\infty}\sum_{i=1}^{n}P(F_i)\notag 
\\&=\lim_{n\to\infty}P(\bigcup_{i=1}^{n}F_i)=\lim_{n\to\infty}P(\bigcup_{i=1}^{n}E_i)=\lim_{n\to\infty}P(E_n)\notag 
\end{align}
$$

Now let's focus on original example. We change the ball withdrawn to randomly.

We consider the ball number 1. Let $E_n$ be the event that ball 1 is still in the urn after the $n^{th}$ withdraw.

$$
\begin{align} 
E_1\subset E_2\subset E_3\ &is \ decreasing\notag  \\
P(ball \ 1 \ is\ in \ the \ urn\ at\ 12pm)&=P(\bigcap_{n=1}^{\infty}E_n)\notag 
\\&=\lim_{n\to\infty}P(E_n)\notag 
\\&=\lim_{n\to\infty}\frac{9}{10}·\frac{18}{19}\notag ···=\lim_{n\to\infty}\prod_{k=1}^{n}\frac{9k}{9k+1}\notag 
\\&=\lim_{n\to\infty}exp(\sum_{k=1}^{n}ln\frac{9k}{9k+1})\notag 
\\&=0\ \ \ \notag 
(ln\frac{9k}{9k+1}\sim-\frac{1}{9k+1})\notag 
\end{align}
$$

The discussion for other balls is the same . So we can get the conclusion.

$$
\begin{align}
&\ \ \ \ \ P(the\ urn \ is\ not\ empty\ at \ 12pm)\notag 
\\&=P(there\ is \ at\ least\ one\ ball\ in\ the\ urn\ at\ 12pm)\notag 
\\&=P(\bigcup_{n=1}^{\infty}F_n)\ \ (where\ F_n ={ball\ number\ n \ is\ in\ the\ urn\ at\ 12pm)}\notag 
\\&\overset{Boole's\ Inequality}{\le}\sum_{n=1}^{\infty}P(F_n)\notag 
\\&\overset{Axiom \ 1}{=}0\notag 
\end{align}
$$

## Uniform probability measure

`We first study finite sample space `

**Definition 2.9 (uniform probability measure)** 
Let $S$ be a finite sample space $S = \{\omega_1,...,\omega_n\}$ with $|S|=n\in N,n\ge1$ and $(S,P(S),P)$ be a probability space. Probability measure $P$ is said to be uniform if all outcomes $\omega_i$ in the sample space are equally likely to occur,that is,$P(\{\omega_i\})=\alpha$ for $i=1,...,n,$ with $\alpha\ge 0$ .

**Properties**

Let $(S,P(S),P)$ be a probability space with uniform probability measure $P$ on a finite sample space $S=\{ \omega_1,...,\omega _n\}$. Then

$$
\begin{align}
  &(1)P(\{\omega_i\})=\frac{1}{n},for \ i =1,...,n.\notag 
  \\&(2)For\ any\ event\ E,P(E)=\frac{|E|}{|S|}\notag 
  \end{align}
$$

`Proof`

$$
\begin{align}
&(1)S=\{\omega_1\}\cup\{\omega_2\}···\cup\{\omega_n\}\notag \\
&1=P(S)=P(\bigcup_{i=1}^{n}\omega_i)=\sum_{i=1}^{n}P(\omega_i)=n\alpha&\notag
\\
&\alpha=\frac{1}{n}\notag \\
&(2)P(E)=P(\bigcup_{i\in(1,...,n)\ \omega_i\in E}\{\omega_i\})=\sum_{i\in(1,2...n)\ \omega_i\in E} P(\{\omega_i\})\notag 
\\&=\frac{|E|\frac{1}{n}}{n·\frac{1}{n}}=\frac{|E|}{n}\notag 
\end{align}
$$

## Interesting Examples

### **Poker Problem**

In the game of bridge, the entire deck of 52 cards is dealt out to 4 players. What is the probability that
+ one of the players receives all 13 spades;
+ each player receives 1 ace?

`Solution`

$S=\{all \ possibel\ distribution\ to \ 4\ players\}$ $|S|=\binom{52}{13,13,13,13}$

$$
\begin{align}
1.E&=\{one\ of\ the\ players\ get\ all\ 13\ spades\}\notag 
\\&=\bigcup_{i=1}^{4}\{player\ i \ gets\ all\ 13\ spades\}\notag 
\\&=\sum_{i=1}^{4}P(player\ i\ gets\ 13 \ spades)\notag 
\\&=4\frac{\binom{39}{13,13,13}}{\binom{52}{13,13,13,13}}\notag 
\\2.F&=\{each\ player\ gets\ one\ ace\}\notag 
\\&P(F)=\frac{|F|}{|S|}=\frac{4\binom{48}{12,12,12,12}}{\binom{52}{13,13,13,13}}\notag \\
\end{align}
$$

### **Birthday Problem**

Recall that Pigeonhole principle tells us that among 366 people, there are at least 2 people celebrating their birthday on the same day (we ignore the Feb. 29 case).
Now we want to study for n people, what is the probability that no two of them celebrate their birthday on the same day? How large need n be so that this probability is less than $\frac{1}{2}$ ?

`Solution`

For n people,$S=\{all \ possibel\ birthday\ of  \ n\ people\}$ 

$|S|=365^n$

$$
\begin{align}
&\ \ \ \ \ \  P(no\ two\ of\ them\ have\ the\ same\ birthday)\notag 
\\&=\frac{365·364···(365-n+)}{365^n}<\frac{1}{2}\ \ when \ n\ge23\notag 
\\&when\ n=100,the \ probability>\frac{3\times10^6}{3\times10^6+1}\notag 
\end{align}
$$

### **Matching Problem**

Suppose that each of N men at a party throw his hat into the center of the room. The hats are first mixed up, and then each man randomly selects a hat. What is the probability that none of the men selects his own hat?

`Solution`

We analysis the complement event at least one man selects his own hats

Let $E_i=the \ i^{th}\ man\ selects\ his\ own\ hats$

$$
\begin{align}
P(\bigcup_{i}^{N}E_i)&=\sum_{i=1}^{N}P(E_i)-\sum_{1\le i_1\le i_2...\le \notag N}P(E_{i_1}E_{i_2}...)+...+(-1)^{N+1}P(E_1..E_N)\notag 
\end{align}
$$

Note that  $E_{i_1}E_{i_2}..E_{i_n}$ represents the event that $i_1^{th}...i_{n}^{th}$ men get their own hats

$$
\begin{align}
P(E_{i_1}E_{i_2}..E_{i_n})&=\frac{(N-n)!}{N!}\notag 
\\\sum_{1\le i_1<i_2...<i_N\le N }P(E_{i_1}E_{i_2}..E_{i_n})&=\binom{N}{n}\frac{(N-n)!}\notag {N!}\frac{1}{N!}=\frac{1}{n!}\notag 
\\P(\bigcup_{i=1}^{N}E_i)&=1-\frac{1}{2!}+\frac{1}{3!}+...+(-1)^{N+1}\frac{1}{N!}\notag 
\\&=\sum_{k=1}^{N}(-1)^{k+1}\frac{1}{k!}\notag 
\end{align}
$$

the probability that no one selects his own hat is

$$
\begin{align}
1-P(\bigcup_{i=1}^{N}E_i)&=1-\sum_{k=1}^{N}(-1)^{k+1}\frac{1}{k!}\notag \\ 
&=\sum_{k=0}^{N}(-1)^k\frac{1}{k!}\overset{N\to\infty}{\to}e^{-1} \notag 
\end{align}
$$

Recall the **Talor expansion** of  $e^x=\sum_{k=0}^{\infty}\frac{x^k}{k!}$
When N is large the probability is close to $e^{-1}\approx0.3679$






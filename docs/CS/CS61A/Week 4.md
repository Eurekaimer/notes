# Week 4

## Summary

大概需要 5 小时，本次的 HW 很有价值

一些小建议：

+ 不一定需要做笔记，理解>记录（优先于），可以先观看完后根据印象重写代码或是写一下随想
+ 最好定期复习，这时笔记发挥作用
+ 可以尝试修改一些课程的代码（实践促进理解）

## Videos(1h)

### Recursion

#### Self-Reference

```Python
def print_all(x):
	print(x)
	return print_all

print_all(1)(2)(3)
```

sum case:

```Python
def print_sums(x):
	print(x)
	def next_sum(y)
		return print_sums(x+y)
	return next_sum

print_sums(1)(3)(5)
```

#### Recursive Functions

Digit Sums

```Python
def split(n):
	return n // 10, n % 10

def sum_digits(n):
	if n < 10；
		return n
	else:
		all_but_last, last = split(n)
		return sum_digits(all_but_last) + last
```

#### Recursion in Environment Diagrams

```Python
def fact(n):
	if n == 0:
		return 1
	else:
		return n * fact(n-1)

fact(3)
```

Iteration is a special case of recursion.

#### Verifying Recursive Functions

#### Mutual Recursion

The Luhn Algorithm

Actually, I have seen this algorithm in CS50x before and it was the optional case in problem set.

Very Interesting!

#### Recursion and Iteration

some examples and we can change any iteration case to recursion type.

### Tree Recursion

#### Order of Recursive Calls

cascade case:

```Python
def cascade(n):
	print(n)
	if n >= 10:
		cascade(n // 10)
		print(n)

def cascade(n):
	if n < 10:
		print(n)
	else:
		print(n)
		cascade(n // 10)
		print(n)
```

write code for people!

#### Example: Inverse Cascade

```Python
def inverse_cascade(n):
	grow(n)
	print(n)
	shrink(n)

def f_then_g(f, g, n):
	if n:
		f(n)
		g(n)

grow = lambda n: f_then_g(grow, print, n // 10)
shrink = lambda n: f_then_g(print, shrink, n // 10)
```

#### Tree Recursion

```Python
def Fib(n):
	if n == 0:
		return 0
	elif n == 1:
		return 1
	else:
		 return Fib(n-1) + Fib(n-2)
```

## Reading(1h)

Chapter 1: Building Abstractions with Functions
+ 1.7 Recursive Functions

### Ch. 1.7

>A function is called _recursive_ if the body of the function calls the function itself, either directly or indirectly.

An example use recursion function to calculate sum of digits

#### The Anatomy of Recursive Functions

>Treating a recursive call as a functional abstraction has been called a _recursive leap of faith_.

#### Mutual Recursion

>When a recursive procedure is divided among two functions that call each other, the functions are said to be _mutually recursive_.

```Python
def is_even(n):
	if n== 0:
		return True
	else:
		return is_odd(n-1)

def is_odd(n):
	if n == 0:
		return False
	else:
		return is_even(n-1)

result = is_even(4)
```

No matter even or odd, the function will return iff n equals to 0.

>As such, mutual recursion is **no more mysterious or powerful** than simple recursion, and it provides a mechanism for maintaining abstraction within a complicated recursive program.

#### Printing in Recursive Functions

talk about the cascade function in videos, here is passed.

One another case:

>As another example of mutual recursion, consider a two-player game in which there are n initial pebbles on a table. The players take turns, removing either one or two pebbles from the table, and the player who removes the final pebble wins. Suppose that Alice and Bob play this game, each using a simple strategy:
>
> 1. Alice always removes a single pebble
> 2. Bob removes two pebbles if an even number of pebbles is on the table, and one otherwise

Use mutual recursion

```Python
def play_alice(n):
	if n == 0:
		print("Bob wins!")
	else:
		play_bob(n-1)

def play_bob(n):
	if n == 0:
		print("Alice wins!")
	elif is_even(n):
		play_alice(n-2)
	else:
		play_alice(n-1)
```

Remark: This code pattern can be used in any two-players game, and help dinner major in Math(Stat\OR\...) save a lot of time.

#### Tree Recursion

Classical Fibonacci computation and use recursion algorithm.

####  Example: Partitions

>The number of partitions of a positive integer n, using parts up to size m, is the number of ways in which n can be expressed as the sum of positive integer parts up to m in increasing order. For example, the number of partitions of 6 using parts up to 4 is 9.

Obviously, we can use recursion to solve the problem and code below.

The most important is get the recursion process, and the (n, m) can be devided two parts:

1. (n, m-1) no doubt one case
2. we use the m so remain n-m to devide: (n-m, m)

```Python
# The number of ways to partition n using integers up to m equals
def partitions(n, m):
	"""Count the ways to partition n using parts up to m"""
	# 1. There is one way to partition 0: include no parts.
	if n == 0:
		return 1
	#  There are 0 ways to partition a negative n.
	elif n < 0:
		return 0
	# There are 0 ways to partition any n greater than 0 using parts of size 0 or less.
	elif m <= 0: # the book use m == 0, but I think this is better.
		return 0
	# main recursion algorithm
	else:
		return partitions(n-m, m) + partitions(n, m-1)
```

## Disc 03(1h30min)

### Recursion

实现均可以参考仓库

#### Q1: Swipe

不太难

#### Q2: Skip Factorial

不太难

#### Q3: Is Prime

不太难

#### Q4: Recursive Hailstone

不太难

### Some interesting questions

#### Q5: Sevens

还是比较容易的，可能判断起来有点麻烦

#### Q6: Karel the Robot

卡在这里比较长时间，网上的答案大多也是错的

```Python
from karel.stanfordkarel import *


def main():
    if front_is_clear():
        move()
        if front_is_clear():
            move()
            if front_is_clear():
                main()
    if front_is_blocked(): 
       turn_left()
       turn_left()
    move()
```

## HW03(1h30min)

### Q1: Num Eights

不难
### Q2: Digit Distance

不难，答案写的略微复杂

### Q3: Interleaved Sum

编写过程中会很自然意识到需要倒序递归，其实编写一个反序的就可以，有点类似第二数学归纳法的感觉

### Q4: Count Coins

>此事在 CS50x 中亦有记载

类似之前例子中的 Partitions 吧（或者 Catlant 数?），经典 OJ 题了

不知道为什么官方写辅助函数不多写一个判断返回 0，自己编写完成后查看报错发现返回了错误类型（增加判断 None），如果发现和测试对不上可以自己找案例测试一下（比如 total 为 0 应该返回 1）

编写时可以思考各个判断之间的依赖关系（可能有冗余判断），笔者选择对特殊情况添加判断以在大数部分节约机时（但其实没有这个判断也可以跑通）

注：本次 HW 的选做题比较难也比较有意思，尤其是最后一道题确实有一定难度

### Q5: Towers of Hanoi

坏孩子原本想直接使用递推式 ($a_{n}=2a_{n-1}+1$)，后发现还需要打印步骤，那么只好老老实实写递归

这里有一个小技巧，如何判断除了 start 和 end 外剩余的柱子，只需要利用 label 做减法 (6 - start - end) 自然可以得到。

主要思想是逆向思维：将下层视为没有（因为是最大的所以一定是做底的），只需要考虑将剩余部分挪到辅助柱上，然后将最大的一层挪到 3，此时剩余所有的柱子一定在 2 上，剩下就是将原本的 1 作为辅助柱，循环下去。

编写出的代码也基本符合这一思想

```Python
if n == 1:  
    print_move(start, end)  
else:  
    other = 6 - start - end  
    move_stack(n-1, start, other)  
    print_move(start, end)  
    move_stack(n-1, other, end)
```

这个时候就体现了书中“信仰之跃”的重要性，不要管怎么实现的，假设已经实现了，然后只要把简单的 case 定好，能够覆盖所有的收敛情况即可。

### Q6: Anonymous Factorial

>This question demonstrates that it's possible to write recursive functions without assigning them a name in the global frame.

实际编写：

Step 1: 确认输入输出，输入一个数记为 k，返回一个高阶函数 F'以函数 F 为参数

T(F): lambda F: lambda k: F(F, k)

Step 2: 思考输入的 F 的构造，应当接受两个参量，k 为 1 返回 1，否则就进行一个类似递归的计算

F = lambda f, k: 1 if k == 1 else k * f(f, k - 1)

此处不妨假设 f(f, k - 1) 就是所需要的递归函数

实际最终函数是：

lambda k: (lambda f, k: 1 if k == 1 else k * f(f, k - 1))((lambda f, k: 1 if k == 1 else k * f(f, k - 1)), k)

---
下面是可能有用的推演过程

尝试：输入一个 f 直接代表递归函数，并且 f 只接受一个 k

lambda f: (lambda k: f(k))--(lambda k: 1 if k == 0 else k * f(k - 1)?)

发现无法调用 f,判断必须要求两个输入 f, k 以调用希望的 f(k - 1)，那么进行修改，仍然认为 f(k) 是我们需要的递归函数，但是需要两个输入，增加假定 f(f, k) 也是我们需要的阶乘函数

(lambda f: (lambda k: f(f, k)))--(lambda f, k: 1 if k == 0 else k * f(f, k - 1))

---
仍然是信仰之跃！


---
title: Week 1
---

# Week 1

## Summary

大致需要 3.5h 完成

1. 建议先看 Videos 再看 Reading，这样对 Reading 的内容有一个粗略的把握看书会更快
2. 一定要写 Lab 和 HW
3. 可以先写 Lab 00 再写 HW01

## Disc 00(5min)

- [x] Part 0 没有 Group pass
- [x] Part 1 没有 Discord 账号 pass
- [x] Part 2 破冰小游戏 pass
- [x] Part 3 唯一的问题 (30 min)

>Imagine you can call only the following three functions: - f(x): **Subtracts one** from an integer x - g(x): **Doubles** an integer x - h(x, y): **Concatenates the digits of two different positive integers** x and y. For example, h(789, 12) evaluates to 78912 and h(12, 789) evaluates to 12789.

>Definition: A small expression is a call expression that contains only f, g, h, the number 5, and parentheses. All of these can be repeated. For example, h(g(5), f(f(5))) is a small expression that evaluates to 103.

Q:What’s the shortest small expression you can find that evaluates to 2024?
A:h(g(g(5)),g(g(g(f(f(5))))))?

- [x] Part 4 拍合照/考勤/讨论 Part 3 的计算机实现

## Reading(2h)

Chapter 1: Building Abstractions with Functions

+ 1.1   Getting Started
+ 1.2   Elements of Programming
+ 1.3   Defining New Functions

### Ch. 1.1

>Computers are very **powerful**, looking at volumes of data very quickly. Computers can perform billions of operations per second, where each operation is pretty simple.
>Computers are also **shockingly stupid and fragile**. The operations that they can do are extremely rigid, simple, and mechanical. The computer lacks anything like real insight ... it's nothing like the HAL 9000 from the movies. If nothing else, you should not be intimidated by the computer as if it's some sort of brain. It's very mechanical underneath it all.
>Programming is about a person using their real insight to build something useful, constructed out of these teeny, simple little operations that the computer can do.

### Ch. 1.2

As videos and some addition

>The possibility of binding names to values and later retrieving those values by name means that the interpreter must maintain some sort of memory that keeps track of the names, values, and bindings. This memory is called an _environment_.

pure function:

Pure functions have the property that applying them has no effects beyond returning a value. Moreover, a pure function must always return the same value when called twice with the same arguments.

Non-pure function:

In addition to returning a value, applying a non-pure function can generate _side effects_, which make some change to the state of the interpreter or computer. A common side effect is to generate additional output beyond the return value, using the print function.

Remark: The value that print returns is always None, a special Python value that represents nothing. The interactive Python interpreter does not automatically print the value None. In the case of print, the function itself is printing output as a side effect of being called.

### Ch. 1.3

Defining New Functions

**Function Signatures.** Functions differ in the number of arguments that they are allowed to take. A description of the formal parameters of a function is called the function's signature.

## Videos(1h)

### Functions

#### Call expression

+ expresstion tree
+ recursion
#### Names, Assignment, and User-Defined Functions

Discussion Qustion 1

```python
f = min
f = max
g, h = min, max
max = g
max(f(2, g(h(1, 5), 3)), 4)
```

Answer: 3

![hint](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/61a-video-q1)

#### Environment Diagrams

给出了 Environment Diagrams 的概念，目前粗略感觉就是一个简单的可视化过程（类似单纯形表的东西）

#### Defining Functions

assignment is binding name to values and function can be more powerful to bind names to expressions.

Execution procedure for def statements:

+ create a function with signature
+ set the body
+ bind name to that function in the current frame

#### Print and None

Interesting case
```python
# input
print(print(2), print(3))
# output
2
3 
None  None
```

+ Pure function
+ Non-pure function

![print](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/non-pure-print)

## Lab 00(10min)

[UNIX tutorial](https://cs61a.org/articles/unix/)

纪念一下第一次使用[ok](https://cs61a.org/articles/using-ok/)的Lab

![lab00](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/CS61a-lab00)

## HW01(15min)

还是比较简单的，比较有趣的是 Q4 是冰雹猜想，不过确实也是很多 OJ 上的老题了

Remark:
+ Q1 注意返回的是 `f(a,b)`，所以你需要输入的是函数
+ Q4 冰雹猜想需要注意初始的数和迭代后的 1 也都需要 print
+ 61A 的 AIdebug 真的好玩，玩过头了

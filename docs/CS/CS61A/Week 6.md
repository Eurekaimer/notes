# Week 6

## Summary

大概需要六小时

本节总的来说出现了两个基本且重要的数据结构就是链表和树，从递归算法上说是自然的，还有 Mutable Data 这一在 Python 中非常重要的事情的讲述，很感动的是老师通过讲述 A History Stroy 去说明了这件事情，感觉正常学习过 Python 的人都会对这个部分有很深的共鸣，因为期末考老是喜欢考啊 (doge)。

## Lab 04(30min)

### Dictionaries

#### Q1: Dictionaries

#### Q2: Divide

#### Q3: Buying Fruit

经典买菜题

### Data Abstraction

>A _data abstraction_ is a set of functions that compose and decompose compound values. One function called the _constructor_ puts together two or more parts into a whole (such as a rational number; also known as a fraction), and other functions called _selectors_ return parts of that whole (such as the numerator or denominator).

#### Q4: Distance

#### Q5: Closer City

#### Q6: Don't violate the abstraction barrier!

所谓数据抽象，抽象屏障 (Abstraction Barrier) 就好像递归中的信仰之跃，我们初始时不关心函数的实现细节只是使用构造的函数进行操作，只要写的代码有合适的屏障，只需要更改上游部分下游自然会发生变化。实际上就是**通过函数来承载抽象**的功能，所操作和修改的对象也只是函数而不是具体的 values.

## Reading(2h30min)

Chapter 2: Building Abstractions with Data
+ 2.3   Sequences
+ 2.4   Mutable Data

### Ch. 2.3

>A tree has a root label and a sequence of branches. Each branch of a tree is a tree. A tree with no branches is called a leaf. Any tree contained within a tree is called a sub-tree of that tree (such as a branch of a branch). The root of each sub-tree of a tree is called a node in that tree.

树是一种非常基本的数据结构，这里只是做了简单的阐述，如果想要深入的了解树、二叉树、甚至线段树、红黑树最好还是学一下数据结构然后去手搓一些算法题。树本身就蕴含着 recursion 的思想，包括遍历的思想，学会用树应当是递归能力的一个提高节点。

>树这种东西在图论里面经常用，所以如果有 OI 训练的话确实有利于组合题能力提高……

为了方便起见，再这里将所有的数据抽象列出

```Python
# 基本的树抽象，要求root的值和分支也是树
def tree(root_label, branches=[]):
        for branch in branches:
            assert is_tree(branch), 'branches must be trees'
        return [root_label] + list(branches)

# 返回根节点的值
 def label(tree):
	return tree[0]
# 返回分支树
def branches(tree):
        return tree[1:]

def is_tree(tree):
        if type(tree) != list or len(tree) < 1:
            return False
        for branch in branches(tree):
            if not is_tree(branch):
                return False
        return True
def is_leaf(tree):
        return not branches(tree)
```

然后开始了基本的链表，又是一个基本的数据结构

>However, we can also develop sequence representations that are not built into Python. A common representation of a sequence constructed from nested pairs is called a _linked list_.

![linked-lists](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/linked-lists)

Linked lists have recursive structure: the rest of a linked list is a linked list or 'empty'. We can define an abstract data representation to validate, construct, and select the components of linked lists.

链表的第二位存储下一个链表的位置，显然也是一种递归的结构

**Recursive Construction.** Linked lists are particularly useful when constructing sequences incrementally, a situation that arises often in recursive computations.

Reference:

[洛谷-B3631 单向链表](https://www.luogu.com.cn/problem/B3631)

### Ch. 2.4

>One powerful technique for creating modular programs is to incorporate data that may change state over time. In this way, a single data object can represent something that evolves independently of the rest of the program. The behavior of a changing object may be influenced by its history, just like an entity in the world. Adding state to data is a central ingredient of a paradigm called object-oriented programming.

主要讲述了 Python 中 Non local 的一些问题，关于值的绑定 (Non-Local Assignment) 等等，尤其是 Non local 函数的好处进行了一些讲解

也讲解了一些基本的编程范式，可能需要对后面的 OOP 进行深入学习之后会有更深的理解。

## Videos(1h30min)

### Trees

#### Trees

terminologies:

+ root label
+ branch(each branch is a tree)

tree is a abstraction not a representation

```Python
def tree(label, branches= []):
	for branch in branches:
		assert is_tree(branch)
	return [label] + list(branches)
def label(tree):
	return tree[0]
def branches(tree):
	return tree[1]
```

#### Tree Processing

sum function doesn't remove any structures.

```Python
def leaves(tree):
if is_leaf(tree):
	return [label(tree)]
else:
	return sum([leaves(b) for b in branches(tree)], [])
```

#### Example: Printing Trees

```Python
def print_tree(t, indent = 0):
	print(' ' * indent + str(label(t)))
	for b in branches(t):
		print_tree(b, indent+1)
```

#### Example: Summing Paths

#### Example Counting Paths

```Python
def count_paths(t, total):
	if label(t) == total:
		found = 1
	else:
		found = 0
	return found + sum([count_paths(b, total - label(t)) for b in branches(t)])
```

### Mutability

#### Objects

Talked about basic concepts and OOP in Python.

#### Example: Strings

Show what is the Mutable Data and its usage.

#### Mutation Operations

some examples and questions.

#### Tuples

Give a tuple type to show the not mutable data in python.

#### Mutation

Core concepts.

#### Mutable Functions

A good application in functions used mutation.

## Disc 05(30min)

### Q1: Warm Up

简单的练习

Answer = 6

### Q2: Has Path

```Python
def has_path(t, p):
    """Return whether tree t has a path from the root with labels p.

    >>> t2 = tree(5, [tree(6), tree(7)])
    >>> t1 = tree(3, [tree(4), t2])
    >>> has_path(t1, [5, 6])        # This path is not from the root of t1
    False
    >>> has_path(t2, [5, 6])        # This path is from the root of t2
    True
    >>> has_path(t1, [3, 5])        # This path does not go to a leaf, but that's ok
    True
    >>> has_path(t1, [3, 5, 6])     # This path goes to a leaf
    True
    >>> has_path(t1, [3, 4, 5, 6])  # There is no path with these labels
    False
    """
    if p == [label(t)]:  # when len(p) is 1
        return True
    elif label(t) != p[0]:
        return False
    else:
        for b in branches(t): 
	        if has_path(b, p[1:]):
		         return True 
		return False
```

### Q3: Find Path

```Python
def find_path(t, x):
    """
    >>> t2 = tree(5, [tree(6), tree(7)])
    >>> t1 = tree(3, [tree(4), t2])
    >>> find_path(t1, 5)
    [3, 5]
    >>> find_path(t1, 4)
    [3, 4]
    >>> find_path(t1, 6)
    [3, 5, 6]
    >>> find_path(t2, 6)
    [5, 6]
    >>> print(find_path(t1, 2))
    None
    """
    if label(t) == x:
        return [label(t)]
    for b in branches(t):
        path = find_path(b, x)
        if path:
            return [label(t)] + path
    return None
```

## HW04(1h)

### Sequences

#### Q1: Deep Map

原地修改 (in-place modification)，不需要返回值 return value

### Data Abstraction

#### Q2: Mass

不知道有什么作用，感觉只是为了确认你的理解，但是又感觉有点多余了，不如让实现 total_mass function

#### Q3: Balanced

由定义可知：

+ 左右臂力矩相等
+ 左右臂子系统 Balanced -> Recursion

利用 Data Abstraction 即可，然后需要注意判断尾端 planet 情况（函数调用要求对象为 mobile 所以 planet 会报错）

### Trees

#### Q4: Maximum Path Sum
# Week 7

## Summary

大致需要 4h 的时间完成，该 Week 任务量不大，题目也比较简单，主要是刚入门 OOP，掌握 OOP 的设计思想和理念即可

>OOP 的设计理念核心是==通过将现实世界的实体抽象为具有数据（属性）和操作（方法）的对象来构建软件系统，并利用类、封装、继承、多态等概念来模拟现实世界的逻辑，从而达到代码的模块化、可重用性、灵活性和可维护性==。它强调将数据和行为绑定在一起，并允许对象通过消息传递来相互通信，以构建复杂且易于扩展的系统。

OOP 主要有以下核心理念与概念：

+ Object
+ Class
+ Encapsulation
+ Inheritance
+ Polymorphism
+ Message Passing

值得一提的是末尾附带了往年期末考试的相关试题，明显可以看出知识共享的普及（难度倒是不高），对比神秘打印店和祖传资料高级了不少

## Reading(2h)

Chapter 4: Data Processing
+ 4.2 Implicit Sequences

### Ch.4.2

A sequence can be represented without each element being stored explicitly in the memory of the computer. That is, we can construct an object that provides access to all of the elements of some sequential dataset without computing the value of each element in advance. Instead, we compute elements on demand.

We want to achive the *lazy computation* in cs.

#### Iterators

>Python and many other programming languages provide a unified way to process elements of a container value sequentially, called an iterator. An _iterator_ is an object that provides sequential access to values, one by one.

for example

```Python
r = range(3,13)
s = iter(r)
next(s)
t = iter(r) # not the same as s
u = t
# u and t have the same iterator
```

The usefulness of iterators is derived from the fact that **the underlying series of data for an iterator may not be represented explicitly in memory**. An iterator provides a mechanism for considering each of a series of values in turn, but all of those elements do not need to be stored simultaneously. Instead, when the next element is requested from an iterator, that element may be computed on demand instead of being retrieved from an existing memory source.

#### Iterables

Any value that can produce iterators is called an _iterable_ value.

Even unordered collections such as dictionaries must define an ordering over their contents when they produce iterators. **Dictionaries and sets** are unordered because the programmer has no control over the order of iteration, but Python does **guarantee certain properties about their order in its specification**.

If a dictionary changes in structure because a key is added or removed, then all iterators become invalid.

#### Built-in Iterators

Just know about *map* function and *filter, zip, reversed*

#### For Statements

```Python
for <name> in <expression>:
	<suite>
```

```Python
counts = [1, 2, 3]
items = counts.__iter__()
try:
	while True:
		item = items.__next__()
		print(item)
	except StopIteration:
		pass
```

Python 文档中的迭代器类型章节建议迭代器应具有一个返回迭代器本身的 ``__iter__`` 方法，因此所有迭代器都是可迭代的

#### Generators and Yield Statements

A _generator_ is an iterator returned by a special class of function called a _generator function_.

#### Iterable Interface

#### Creating Iterables with Yield

for example

```Python
def all_pairs(s):
	for item1 in s:
		for item2 in s:
			yield(item1, item2)

list(all_pairs([1, 2, 3]))
>>> [(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3)]
```

#### Iterator Interface

#### Streams

To Do（至 25Fall 该处仍然为空）

#### Python Streams

SICP 中叙述的有点抽象，我建议阅读[官方的文档](https://docs.python.org/3/library/asyncio-stream.html)

Chapter 2: Building Abstractions with Data
+ Ch.2.5 Object-Oriented Programming

### Ch.2.5

#### Objects and Classes

A class serves as a template for all objects whose type is that class. Every object is an instance of some particular class.

The attributes specific to a particular object, as opposed to all objects of a class, are called _instance attributes_

#### Defining Classes

You should know the example about bank and how to define your own classes in different situations.

The function value that is created by a def statement within a class statement is bound to the declared name, but bound locally within the class as an attribute. That value is invoked as a method using dot notation from an instance of the class.

#### Message Passing and Dot Expressions

The built-in function getattr also returns an attribute for an object by name. It is the function equivalent of dot notation. Using getattr, we can look up an attribute using a string, just as we did with a dispatch dictionary.

```Python
getattr(spock_account, 'balanced')
```

We can also test whether an object has a named attribute with hasattr.

```Python
hasattr(spock_account, 'deposit')
```

**Naming Conventions.** Class names are conventionally written using the CapWords convention (also called CamelCase because the capital letters in the middle of a name look like humps). Method names follow the standard convention of naming functions using lowercased words separated by underscores.

#### Class Attributes

Some attribute values are shared across all objects of a given class. Such attributes are associated with the class itself, rather than any individual instance of the class.

```Python
class Account:
	interest = 0.02 # A class attribute
	def __init__(self, account_holder):
		self.balance = 0
		self.holder = account_holder
	# Additional methods would be defined here
```

To evaluate a dot expression:

1. Evaluate the `<expression>` to the left of the dot, which yields the _object_ of the dot expression.
2.  `<name>` is matched against the instance attributes of that object; if an attribute with that name exists, its value is returned.
3. If `<name>` does not appear among instance attributes, then `<name>` is looked up in the class, which yields a class attribute value.
4. That value is returned unless it is a function, in which case a bound method is returned instead.

Changes to the class attribute interest will affect spock_account, but the instance attribute for kirk_account will be **unaffected**.

In this evaluation procedure, **instance attributes are found before class attributes**, just as local names have priority over global in an environment.

#### Inheritance

A subclass _inherits_ the attributes of its base class, but may _override_ certain attributes, including certain methods. **With inheritance, we only specify what is different between the subclass and the base class**. Anything that we leave unspecified in the subclass is automatically assumed to behave just as it would for the base class.

#### Using Inheritance

We can define this procedure recursively. To look up a name in a class.

1. If it names an attribute in the class, return the attribute value.
2. Otherwise, look up the name in the base class, if there is one.

>**Interfaces.** It is extremely common in object-oriented programs that different types of objects will share the same attribute names. An _object interface_ is a collection of attributes and conditions on those attributes. For example, all accounts must have deposit and withdraw methods that take numerical arguments, as well as a balance attribute. The classes Account and CheckingAccount both implement this interface. Inheritance specifically promotes name sharing in this way. In some programming languages such as Java, interface implementations must be explicitly declared. In others such as Python, Ruby, and Go, any object with the appropriate names implements an interface.

#### Multiple Inheritance

Python supports the concept of a subclass inheriting attributes from multiple base classes, a language feature called _multiple inheritance_.

**Further reading.** Python resolves this name using a recursive algorithm called the C3 Method Resolution Ordering. The method resolution order of any class can be queried using the mro method on all classes.

```Python
[c.__name__ for c in AsSeenOnTVAccount.mro()]
```

#### The Role of Objects

 Abstraction barriers enforce the boundaries between different aspects of a large program.

>Object-oriented programming is particularly well-suited to programs that model systems that have separate but interacting parts.

Learning to identify when to introduce a new class, as opposed to a new function, in order to simplify or modularize a program, is an important design skill in software engineering that deserves careful attention.

## Videos(30min)

### Iterators

复述课本

### Generators

复述课本

### Objects

简单介绍了 OOP 编程的基本概念和结构，建议去看 textbook 写的比较详细

## Lab 05(30min)

### Mutability

#### Q1: WWPD: List-Mutation

```Python
# 一个有趣的问题
# 已知s = [3, 4, 5]
>>> s.extend([s.append(9), s.append(10)])  
>>> s  
[3, 4, 5, 9, 10, None, None]
```

#### Q2: Insert Items

很容易，只需要记得如果满足条件使指针向前挪动，否则 `before == after` 时会发生死循环

#### Q3: Group By

如果对于 SQL 熟悉的话，这就相当于复现聚集函数了

### Iterators

#### Q4: WWPD: Iterators

#### Q5: Count Occurrences

#### Q6: Repeated

都比较容易

Q7: Sprout Leaves

利用树的数据抽象即可

Q8: Partial Reverse

比较容易

## Disc 06(30min)

### Generators

>A generator is an iterator that is returned by calling a generator function, which is a function that contains yield statements instead of return statements

Q1: Big Fib

主要是要对几个内置函数有认识（相关的代码在 Week 7 文件夹中）

>such as map, filter, list, any, all, etc.

```Python
def gen_fib2():  
    n, add = 0, 1  
    while True:  
        yield n  
        n, add = n + add, n  

next(filter(lambda n : n > 2024, gen_fib2()))
```

Q2: Something Different

Q3：Partitions

使用迭代器优化树结构的一个例子

```Python
def partition_gen(n, m):  
    """Yield the partitions of n using parts up to size m.  
    >>> for partition in sorted(partition_gen(6, 4)):    ...   print(partition)  
    1 + 1 + 1 + 1 + 1 + 1    1 + 1 + 1 + 1 + 2    1 + 1 + 1 + 3    1 + 1 + 2 + 2    1 + 1 + 4    1 + 2 + 3    2 + 2 + 2    2 + 4    3 + 3    """    assert n > 0 and m > 0  
    if n == m:  
        yield str(n)  
    if n - m > 0:  
        for p in partition_gen(n - m, m):  
            yield p + ' + ' + str(m)  
    if m > 1:  
       yield from partition_gen(n, m - 1)
```

## HW05(30min)

### Q1: Infinite Hailstone

练习 yield from

```Python
def hailstone(n):  
    """Q1: Yields the elements of the hailstone sequence starting at n.  
       At the end of the sequence, yield 1 infinitely.  
    >>> hail_gen = hailstone(10)    >>> [next(hail_gen) for _ in range(10)]  
    [10, 5, 16, 8, 4, 2, 1, 1, 1, 1]    >>> next(hail_gen)  
    1    """    yield n  
    if n == 1:  
        yield from hailstone(n)  
    if n % 2 == 1:  
        yield from hailstone(n * 3 + 1)  
    if n % 2 == 0:  
        yield from hailstone(n // 2)
```

### Q2: Merge

```Python
def merge(a, b):  
    """Q2:  
    >>> def sequence(start, step):    ...     while True:    ...         yield start    ...         start += step    >>> a = sequence(2, 3) # 2, 5, 8, 11, 14, ...    >>> b = sequence(3, 2) # 3, 5, 7, 9, 11, 13, 15, ...    >>> result = merge(a, b) # 2, 3, 5, 7, 8, 9, 11, 13, 14, 15    >>> [next(result) for _ in range(10)]  
    [2, 3, 5, 7, 8, 9, 11, 13, 14, 15]    """    next_a, next_b = next(a), next(b)  
    while True:  
        if next_a == next_b:  
            yield next_a  
            next_a, next_b = next(a), next(b)  
        elif next_a < next_b:  
            yield next_a  
            next_a = next(a)  
        else:  
            yield next_b  
            next_b = next(b)
```

### Q3: Yield Paths

不知道为什么代码注释写的是 Q4，合理怀疑之前还有一道题删除之后没有更改下一道题的注释

```Python
def yield_paths(t, value):  
    """Q4: Yields all possible paths from the root of t to a node with the label  
    value as a list.  
    >>> t1 = tree(1, [tree(2, [tree(3), tree(4, [tree(6)]), tree(5)]), tree(5)])    >>> print_tree(t1)  
    1      2        3        4          6        5      5    >>> next(yield_paths(t1, 6))  
    [1, 2, 4, 6]    >>> path_to_5 = yield_paths(t1, 5)    >>> sorted(list(path_to_5))  
    [[1, 2, 5], [1, 5]]  
    >>> t2 = tree(0, [tree(2, [t1])])    >>> print_tree(t2)  
    0      2        1          2            3            4              6            5          5    >>> path_to_2 = yield_paths(t2, 2)    >>> sorted(list(path_to_2))  
    [[0, 2], [0, 2, 1, 2]]    """    if label(t) == value:  
        yield [label(t)]  
    for b in branches(t):  
        for subpath in yield_paths(b, value):  
            yield [label(t)] + subpath
```


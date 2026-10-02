# Week 5

## Summary

大概需要 5h，不包括完成 Project 的时间，终于进入了 Python 比较核心的部分，有了 Lists, Slicing, Container 等概念，发现软件老师使用的例子与 61A 的例子一模一样。

总的来说，抽象化的教学还是有益的，虽然前期进展的很慢，但是培养了比较良好的习惯，比如 Absraction Barriers 方便后续维护的这种意识。

## Videos(2h)

### Sequences

#### Lists

Note that the begining index is 0 not 1, and elements of lists can be various

#### Containers

#### For Statements

```Python
>>> range(-2, 2)
-2 -1 0 1 
>>> range(4)
>>> 0 1 2 3
```

#### List Comprehensions

```Python
>>> odds = [1, 3, 5, 7, 9]
>>> [x + 1 for x in odds]
[2, 4, 6, 8, 10]
>>> [x for x in odds if 25 % x == 0]
[1, 5]
```

```Python
def divisions(n):
	return [1] + [x for x in range(2, n) if n % x == 0]
```

#### Lists, Slices, &Recursion

 ```Python
 # Recursion examples: sum
 def sum_list(s):
	 if len(s) == 0:
		 return 0
	 else:
		 return s[0] + sum_list(s[1:])
 ```

A case more complex but can be done.

```Python
def large(s, n):
	"""return the sublist of positive numbers s with the 
	largest sum that is less than or equal to n"""
	if s == []:
		return []
	elif s[0] > n:
		return large(s[1:], n)
	else:
		first = s[0]
		with_s0 = [first] + large(s[1:], n - first)
		without_s0 = large(s[1:], n)
		if sum_list(with_s0) > sum_list(without_s0):
			return with_s0
		else:
			return without_s0
```

Remark: Like conditional probability trick used in probability theory, we get complex situation easier by make proper condition or division events.

### Containers

#### Box-and-Pointer Notation

Just a way like environmental diagram to explain the list operations.

#### Slicing

Very important skill used in python and we can see some cases:

```Python
>>> odds = [3, 5, 7, 9, 11]
>>> odds[1:3]
[5, 7]
```

#### Processing Container Values

sum, max and all function, and these functions can be found in R also.

#### Strings

>The native data type for text in Python is called a string, and corresponds to the constructor str.

#### Dictionaries

mentioned **unhashable**(leave for 61b)

```Python
{<key exp>: <value exp> for <name> in <iter exp> if <filter exp>}
{x * x: x for x in [1, 2, 3, 4, 5] if x > 2} evaluates to {9: 3, 16: 4, 25: 5}
```

### Data Abstraction

#### Data Abstraction

Isolate two parts of data

+ How data are represented
+ How data are manipulated

#### Representing Rational Numbers

```Python
 pair = [1, 2]
 x, y = pair
 >>>x
 1
 >>>y
 2
>> >get item(pair, 0)
1
```

We have two ways to access the elements of list.

#### Abstraction Barriers

#### Data Representations

You can read Ch. 2.2 for more info about abstraction barriers.

## Reading(2h)

Chapter 2: Building Abstractions with Data
+ 2.1   Introduction
+ 2.2   Data Abstraction
+ 2.3   Sequences

### Ch. 2.1

>This chapter focuses on data. The techniques we investigate here will allow us to represent and manipulate information about many different domains. Due to the explosive growth of the Internet, a vast amount of structured information is freely available to all of us online, and computation can be applied to a vast range of different problems. Effective use of built-in and user-defined data types are fundamental to data processing applications.

Native data types have the following properties:

1. There are expressions that evaluate to values of native types, called _literals_.
2. There are built-in functions and operators to manipulate values of native types.

Python includes three native numeric types: integers (int), real numbers (float), and complex numbers (complex).

### Ch. 2.2

>We are using here a powerful strategy for designing programs: _wishful thinking_. We haven't yet said how a rational number is represented, or how the functions numer, denom, and rational should be implemented. Even so, if we did define these three functions, we could then add, multiply, print, and test equality of rational numbers:

>These functions are called by a higher level and implemented using a lower level of abstraction.

The fewer functions that depend on a particular representation, the fewer changes are required when one wants to change that representation.

### Ch. 2.3

>Python includes several native data types that are sequences, the most important of which is the list.

>For sequences, addition and multiplication do not add or multiply elements, but instead combine and replicate the sequences themselves.

This pattern of binding multiple names to multiple values in a fixed-length sequence is called _sequence unpacking_; it is the same pattern that we see in assignment statements that bind multiple names to multiple values.

```Python
for x, y in pairs:
	if x == y:
		same_count = same_count + 1
```

## Lab 03(30min)

Very Trivial

### Lists

#### Q1: WWPD: Lists & Ranges

#### Q2: Print If

#### Q3: Close

### List Comprehensions

#### Q4: WWPD: List Comprehensions

#### Q5: Close List

#### Q6: Squares Only

注意取整的问题

### Recursion

#### Q7: Double Eights

那个答案写的怪怪的，感觉还没我写的好

#### Q8: Making Onions

也很简单，真的很像概率论的构造技巧

## Disc 04(30min)

>Recursion takes practice. Please don't get discouraged if you're struggling to write recursive functions. Instead, every time you do solve one (even with help or in a group), make note of what you had to realize to make progress. **Students improve through practice and reflection**.

**Tree Recursion**

### Q1: Insect Combinatorics

```Python
def paths(m, n):  
    """Return the number of paths from one corner of an  
    M by N grid to the opposite corner.  
    >>> paths(2, 2)  
    2    >>> paths(5, 7)  
    210    >>> paths(117, 1)  
    1    >>> paths(1, 157)  
    1    """    if m == 1 or n == 1:  
        return 1  
    else:  
        return paths(m-1, n) + paths(m, n-1)
```

**Tree Recursion with Lists**

>The most important thing to remember about lists is that a non-empty list `s` can be split into its first element `s[0]` and the rest of the list `s[1:]`.

### Q2: Max Product

```Python
def max_product(s):  
    """Return the maximum product of non-consecutive elements of s.  

    >>> max_product([10, 3, 1, 9, 2])   # 10 * 9  
    90    >>> max_product([5, 10, 5, 10, 5])  # 5 * 5 * 5  
    125    >>> max_product([])                 # The product of no numbers is 1  
    1    # 下面是自己写的测试  
    >>> max_product([2])  
    2    """    if len(s) == 0:  
        return 1  
    else:  
        return max(s[0] * max_product(s[2:]), max_product(s[1:]))
```

### Q3: Sum Fun

```Python
def sums(n, m):  
    """Return lists that sum to n containing positive numbers up to m that  
    have no adjacent repeats.  
    >>> sums(5, 1)  
    []    >>> sums(5, 2)  
    [[2, 1, 2]]    >>> sums(5, 3)  
    [[1, 3, 1], [2, 1, 2], [2, 3], [3, 2]]    >>> sums(5, 5)  
    [[1, 3, 1], [1, 4], [2, 1, 2], [2, 3], [3, 2], [4, 1], [5]]    >>> sums(6, 3)  
    [[1, 2, 1, 2], [1, 2, 3], [1, 3, 2], [2, 1, 2, 1], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]    """    if n < 0:  
        return []  
    if n == 0:  
        sums_to_zero = []     # The only way to sum to zero using positives  
        return [sums_to_zero] # Return a list of all the ways to sum to zero  
    result = []  
    for k in range(1, m + 1):  
        result = result + [[k] + rest for rest in sums(n-k, m) if rest == [] or rest[0] != k ]  
    return result
```

Remark: Slicing 操作简直是为 Recursion 准备的，非常好用!
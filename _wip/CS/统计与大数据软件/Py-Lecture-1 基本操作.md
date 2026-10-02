#统计与大数据软件
# Py-Lecture-1 基本操作

!!! tldr "Goal"
    + 基本语法
    + 数据类型
    + 数据结构

## 基本语法

### 输出与表达式

#### print function

```python
# 输出字符串
print("Hello Python world!")  
name = "Alice"
# 拼接变量
print("Hello, " + name)       
```

    Hello Python world!
    Hello, Alice

#### 运算

```python
a = 10 
b = 5
```

```python
a + b
```

    15

```python
a - b
```

    5

```python
a * b
```

    50

```python
a / b
```

    2.0

```python
a ** b
```

    100000

```python
a //b
```

    2

### 变量与赋值

#### 变量名命名规则

1. 变量名只能包含字母、数字和下划线
2. 变量名不能包含空格，但可使用下划线来分隔其中的单词
3. 不要将 Python 关键字和函数名用作变量名，即不要使用 Python 保留用于特殊用途的单词
4. 变量名应既简短又具有描述性
5. 慎用小写字母 l 和大写字母 O，因为它们可能被人错看成数字 1 和 0

#### 动态类型重试重试

无需声明类型，直接赋值

```python
# 整数
a = 5        
print(a)
# 字符串（自动类型转换）
a = "string" 
print(a)
```

    5
    string

### 字符串 (str)

#### 定义方式

单引号、双引号或三引号包裹，支持多行字符串：

```python
str1 = '单引号字符串'
print(str1,"\n")
str2 = "包含'单引号'的字符串"
print(str2,"\n")
str3 = '''
多行字符串
支持换行
'''
print(str3)
```

    单引号字符串

    包含'单引号'的字符串


    多行字符串
    支持换行

#### 常用操作

name = "ada lovelace"
print(name.title())

```python
print(name.upper())
print(name.lower())
```

    ALICE
    alice

```python
# 利用\n换行
print("Languages:\n\tPython\n\tC\n\tJavaScript")
```

    Languages:
    	Python
    	C
    	JavaScript

```python
# 原生字符串
print(r"Languages:\n\tPython\n\tC\n\tJavaScript") 
```

    Languages:\n\tPython\n\tC\n\tJavaScript

#### 字符串拼接

```python
first_name = "ada"
last_name = "lovelace"
full_name = first_name + " " + last_name
print(full_name)
```

    ada lovelace

#### 索引与切片

可以将 string 类型视作是一个列表，根据 list 数据类型进行索引

```python
first_name[0]
```

    'a'

然后是切片 (Slicing) 操作

```python
first_name[0:2] 
```

    'ad'

```python
# 间隔切片
full_name[::2] 
```

    'aalvlc'

在 Python 中，切片（Slicing）是一种强大的序列操作，可用于提取或修改列表、元组、字符串等有序序列的部分元素。以下是切片操作的详细解析（个人总结）：

基本用法
sequence[start:stop:step]

+ start：起始索引（包含，默认为 0）
+ stop：结束索引（不包含，默认为序列长度）
+ step：步长（默认为 1，可为负数，表示反向切片）

正向切片（step 为正数）

```python
# 截取部分元素
lst = [10, 20, 30, 40, 50]
print("截取部分元素")
print(lst[1:3])   # 输出: [20, 30]（索引1到2）
print(lst[:3])    # 输出: [10, 20, 30]（从头开始到索引2）
print(lst[2:])    # 输出: [30, 40, 50]（从索引2到末尾）

# 使用负数索引
# 负数索引表示从序列末尾开始计数：
print("使用负数索引")
print(lst[-3:-1]) # 输出: [30, 40]（倒数第3到倒数第2）
print(lst[-2:])   # 输出: [40, 50]（最后两个元素）

# 步长的使用
# 步长决定了切片的间隔：
print("步长的使用")
print(lst[::2])   # 输出: [10, 30, 50]（每隔一个元素取一个）
print(lst[1::2])  # 输出: [20, 40]（从索引1开始，每隔一个取一个）
```

    截取部分元素
    [20, 30]
    [10, 20, 30]
    [30, 40, 50]
    使用负数索引
    [30, 40]
    [40, 50]
    步长的使用
    [10, 30, 50]
    [20, 40]

反向切片（step 为负数）

```python
# 反转序列
# 反向切片可以起到反转列表的效果
print(lst[::-1])  
# 反转后也可以间隔切片
print(lst[::-2])  
```

    [50, 40, 30, 20, 10]
    [50, 30, 10]

切片赋值（仅适用于可变序列）

```python
# 可通过切片修改列表的部分元素：
lst = [10, 20, 30, 40, 50]
lst[1:3] = [200, 300]  # 将索引1和2替换为新值
print(lst)  # 输出: [10, 200, 300, 40, 50]

lst[2:4] = []  # 删除索引2和3的元素
print(lst)  # 输出: [10, 200, 50]

lst[1:1] = [150, 170]  # 在索引1插入元素
print(lst)  # 输出: [10, 150, 170, 200, 50]
```

    [10, 200, 300, 40, 50]
    [10, 200, 50]
    [10, 150, 170, 200, 50]

字符串切片（字符串也支持切片，常用于提取子串）

```python
s = "HelloWorld"
print(s[2:5])    # 输出: "llo"
print(s[::-1])   # 输出: "dlroWolleH"（反转字符串）
print(s[1:7:2])  # 输出: "elW"（从索引1到6，步长2）
```

    llo
    dlroWolleH
    elW

切片操作是 Python 中最灵活的序列处理工具之一，通过合理组合 start、stop 和 step，可以高效完成元素提取、序列反转、子串截取等常见任务。熟练掌握切片能显著提升代码的简洁性和可读性。

注意：

+ 索引越界：切片不会因索引越界报错，超出范围的索引会自动处理
+ 步长方向与起止索引的一致性：若步长为正，start 必须小于 stop；若步长为负，start 必须大于 stop，否则返回空列表
+ **切片生成新对象**：切片操作返回原序列的副本，修改切片不会影响原序列（字符串、元组等不可变类型始终如此）

## 数据类型

### 数值类型

+ 整数（int）：如 5、-10，支持无限精度。
+ 浮点数（float）：如 4.5、3.14，注意浮点运算精度问题（如 3*0.2=0.6000000000000001）。

```python
pi = 3.14159
int(pi)   # → 3（向下取整）
print(pi)
str(pi)   # → "3.14159"（转为字符串）
```

    3.14159





    '3.14159'

```python
print(pi)
```

    3.14159

### 布尔值 (bool)

1. 取值：True（真）和 False（假），首字母必须大写。
2. 用途：条件判断、循环控制，如：

```python
a = True
if a:
    print("条件为真")
```

    条件为真

## 数据结构

Python 的基本数据结构包括：列表（list），元组（tuple），字典（dict），集合（set）

+ 列表是动态的，长度大小不固定，可以随意增/删/修元素
+ 元组是静态的，长度大小固定，无法增/删/修元素
+ 相对于列表和元组，字典的性能更优，特别是对于查找、添加和删除操作，字典都能在常数时间复杂度内完成
+ 集合和字典基本相同，区别是集合没有键和值的配对，是一系列无序的、唯一的元素集合

### 列表 (list)

可变序列，列表由一系列按特定顺序排列的元素组成，类似于 C++中的数组，由方括号包裹，元素可重复、可修改，支持混合类型，并且支持切片操作：

```python
mylist = ['a', 3, 'string', 4.5]
```

```python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[0]) #下标从0开始
```

    trek

常用操作有：

+ 添加元素
+ 删除元素
+ 排序
+ 反转
+ 复制列表

#### 添加元素

主要有两种方法 (method)：append、insert

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.append('ducati')
print(motorcycles)
```

    ['honda', 'yamaha', 'suzuki', 'ducati']

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.insert(1, 'ducati')
print(motorcycles)
```

    ['honda', 'ducati', 'yamaha', 'suzuki']

#### 删除元素

主要有三种方法：del、pop、remove

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
del motorcycles[0]
print(motorcycles)
```

    ['yamaha', 'suzuki']

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.pop(0)
print(motorcycles)
```

    ['yamaha', 'suzuki']

注意 pop 方法默认删除的是最后一个

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.pop()
print(motorcycles)
```

    ['honda', 'yamaha']

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.remove('honda') #方法remove()只删除第一个指定的值
print(motorcycles)
```

    ['yamaha', 'suzuki']

```python
# 一个综合例子
motorcycles = ['honda', 'yamaha', 'suzuki']
last_owned = motorcycles.pop()
print("The last motorcycle I owned was a " + last_owned.title() + ".")
```

    The last motorcycle I owned was a Suzuki.

#### 排序

主要是两种方法 sort、sorted 的辨别，sort 是永久排序，sorted 是返回一个修改过的列表，原列表不变

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort()
print(cars)
cars.sort(reverse=True)
print(cars)
print(sorted(cars))
print(cars)
# 打印列表时值变为None，因为该方法只做修改不返回值
print(cars.sort())
```

    ['audi', 'bmw', 'subaru', 'toyota']
    ['toyota', 'subaru', 'bmw', 'audi']
    ['audi', 'bmw', 'subaru', 'toyota']
    ['toyota', 'subaru', 'bmw', 'audi']
    None

```python
print(cars)
cars.reverse() #反转列表
print(cars)
len(cars) #列表长度
```

    ['audi', 'bmw', 'subaru', 'toyota']
    ['toyota', 'subaru', 'bmw', 'audi']





    4

#### 复制列表

```python
a = [1, 2, 3, 4, 5]
b = a.copy()
print(b)
c = a[:]
print(c)
b.append(6)
print(b)
```

    [1, 2, 3, 4, 5]
    [1, 2, 3, 4, 5]
    [1, 2, 3, 4, 5, 6]

```python
# 直接赋值b = a为引用赋值，修改a会影响b；需用.copy()或切片创建独立副本。
c = a
a.append(6)
print(a)
print(c)
```

    [1, 2, 3, 4, 5, 6]
    [1, 2, 3, 4, 5, 6]

### 元组 (tuple)

不可变序列，括号包裹，元素不可修改，但内部可变元素（如列表）可修改：

```python
dimensions = (200, 50)       # 不可变元组
test = (1, [2, 3], 5)        # 包含列表的元组，可修改列表：test[1].append(4)
print(test)
test[1].append(4)
print(test)
# test[0] = 20
# print(test)
# You will get 'tuple' object does not support item assignment
```

    (1, [2, 3], 5)
    (1, [2, 3, 4], 5)

#### 访问与解包

```python
a, b, c = (1, 2, 3)  # 解包元组
print(a, b, c)       # → 1 2 3
```

    1 2 3

元组整体不可修改，若需更新需重新赋值整个元组（如 dimensions = (400, 100)）

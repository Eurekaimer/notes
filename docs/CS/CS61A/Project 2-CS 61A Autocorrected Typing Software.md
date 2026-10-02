# Project 2-CS 61A Autocorrected Typing Software

>Programmers dream of Abstraction, recursion, and Typing really fast.

>In this project, you will write a program that measures typing speed. Additionally, you will implement typing autocorrect, which is a feature that attempts to correct the spelling of a word after a user types it. This project is inspired by [typeracer](https://play.typeracer.com/).

大约需要 4h

## Phase 1: Typing

### Problem 1 (1 pt)

Implement `pick`. This function selects which paragraph the user will type.

### Problem 2 (1 pt)

Implement `about`, which takes a list of `subject` words. It returns a function which takes a paragraph and returns a boolean indicating whether that paragraph contains any of the words in `subject`.

简单的字符串匹配问题

### Problem 3 (2 pts)

Implement `accuracy`, which takes a `typed` paragraph and a `source` paragraph. It returns the percentage of words in `typed` that exactly match the corresponding words in `source`. Case and punctuation must match as well. "Corresponding" here means that two words must occur at the same indices in `typed` and `source`; the first words of both must match, the second words of both must match, and so on.

### Problem 4 (1 pt)

Implement `wpm`, which computes the _words per minute_, a measure of typing speed, given a string `typed` and the amount of `elapsed` time in **seconds.** Despite its name, _words per minute_ is not based on the number of words typed, but instead the number of groups of 5 characters, so that a typing test is not biased by the length of words. The formula for _words per minute_ is the ratio of the number of characters (including spaces) typed divided by 5 (a typical word length) to the elapsed time in **minutes.**

实际上就是一个简单的算式

## Phase 2: Autocorrect

### Problem 5 (2 pts)

Implement `autocorrect`, which takes a `typed_word`, a `word_list`, a `diff_function`, and a `limit`. The goal of `autocorrect` is to return the word in `word_list` that is closest to the provided `typed_word`.

### Problem 6 (3 pts)

Implement `feline_fixes`, which is a diff function that takes two strings. It returns the minimum number of characters that must be changed in the `typed` word in order to transform it into the `source` word. If the strings are not of equal length, the difference in lengths is added to the total.

可能需要额外注意判断字符串为空的情况避免调用报错

### Problem 7 (3 pts)

Implement `minimum_mewtations`, which is a diff function that returns the minimum number of edit operations needed to transform the `typed` word into the `source` word.

实现**编辑距离（Edit Distance）算法**，也称为**莱文斯坦距离（Levenshtein Distance）**

以 `typed = "cats"`，`source = "scat"` 为例：

边界条件判断：

```plaintext
   ∅  s  c  a  t
∅  0  1  2  3  4
c  1  0  0  0  0
a  2  0  0  0  0
t  3  0  0  0  0
s  4  0  0  0  0
```

填充后得到

```plaintext
   ∅  s  c  a  t
 ∅ 0  1  2  3  4
 c 1  1  1  2  3
 a 2  2  2  1  2
 t 3  3  3  2  1
 s 4  3  4  3  2
```

实际上就是利用二维数组的思路，然后结合**递推公式**填充矩阵即可，动态规划类型。

关于这个算法的正确性证明我翻了很多中文平台都没有看到写的比较像人的，如果理解不了为什么这样做就是最小的还是看一下这篇[paper](https://dl.acm.org/doi/pdf/10.1145/321796.321811)，这里也贴一个本人的理解，首先我们需要对三种操作都进行分析，三种操作分别是替换，插入，删除权重相同，并且三种操作可选取的位置都是任意的，那么就会出现一个问题，采用**逆向思维**，再进行**最后一步操作**的时候恰好两个字符串对齐，那么String1和String2的大半部分一定已经相同了(一定存在一个特别大程度相似的公共字符串)

下面开始分类讨论：

+ 替换：只需要一步替换就可以完成的话，两个字符串的长度一定已经相同并且替换位点的后续已经对齐，前面也是对齐的，那么不妨假设前面有 $i$ 个，那么问题就是前面 $i$ 个对齐的最小次数+1
+ 插入、删除：长度相差 1，同样对位点考虑即可，后续问题即变为一个小矩阵，以那个位点为新的顶点进行递归

可以参考 Leetcode 72 虽然我觉得题解写的也不清楚

### (Optional) Extension: Final Diff (0 pts)

## Phase 3: Multiplayer

### Problem 8 (2 pts)

Implement `report_progress`, which is called every time the user finishes typing a word. It takes a list of the words `typed`, a list of the words in the `source`, the user's `user_id`, and a `upload` function that is used to upload a progress report to the multiplayer server. There will never be more words in `typed` than in `source`.

按照数据抽象使用即可

### Problem 9 (2 pts)

写之前看一眼

```Python
def match(words, times):
    """A data abstraction containing all words typed and their times.

    Arguments:
        words: A list of strings, each string representing a word typed.
        times: A list of lists for how long it took for each player to type
            each word.
            times[i][j] = time it took for player i to type words[j].

    Example input:
        words: ['Hello', 'world']
        times: [[5, 1], [4, 2]]
    """
    assert all([type(w) == str for w in words]), 'words should be a list of strings'
    assert all([type(t) == list for t in times]), 'times should be a list of lists'
    assert all([isinstance(i, (int, float)) for t in times for i in t]), 'times lists should contain numbers'
    assert all([len(t) == len(words) for t in times]), 'There should be one word per time.'
    return {"words": words, "times": times}

def get_word(match, word_index):
    """A utility function that gets the word with index word_index"""
    assert 0 <= word_index < len(get_all_words(match)), "word_index out of range of words"
    return get_all_words(match)[word_index]

def time(match, player_num, word_index):
    """A utility function for the time it took player_num to type the word at word_index"""
    assert word_index < len(get_all_words(match)), "word_index out of range of words"
    assert player_num < len(get_all_times(match)), "player_num out of range of players"
    return get_all_times(match)[player_num][word_index]

def get_all_words(match):
    """A selector function for all the words in the match"""
    return match["words"]

def get_all_times(match):
    """A selector function for all typing times for all players"""
    return match["times"]

def match_string(match):
    """A helper function that takes in a match data abstraction and returns a string representation of it"""
    return f"match({get_all_words(match)}, {get_all_times(match)})"
```

### Problem 10 (2 pts)

Implement `fastest_words`, which returns which words each player typed fastest. This function is called once all players have finished typing. It takes in a `match`.

很简单的比大小选择

![cats](https://cdn.jsdelivr.net/gh/Eurekaimer/MyIMGs@main/img/CS61A-Cats)





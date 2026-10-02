---
comments: true
title: Week 1 C
tags:
  - CS50x
---

# Week 1 C


## Syllabus

>C. Source Code. Machine Code. Compiler. Correctness, Design, Style. Visual Studio Code. Syntax Highlighting. Escape Sequences. Header Files. Libraries. Manual Pages. Types. Conditionals. Variables. Loops. Linux. Graphical User Interface (GUI). Command-Line Interface (CLI). Constants. Comments. Pseudocode. Operators. Integer Overflow. Floating-Point Imprecision.


## Notes

### Machine Code

```
#include<stdio.h> //standard io.h

int main(void) //void -no input
{
	printf("hello world\n")
}
```


The computer can onlrecy ognize the binary numbers so we need a compiler（编译器）to make the higher level language to a lower level language.

![[compiler.svg]]

use a cloud(best) [URL](https://cs50.dev) or you can use VS code in your computer

Some words you should know: GUI CLI


### Hello world

```
#include<stdio.h>
//pronounced "include standard io.h"

int main(void)
{
	printf("hello world\n")
}
```


Some little concepts:

`#include stdio.h` - include standard io.h
`curly braces` - 大括号{}
`printf` - F means formatted
`semicolon` - 分号；
`syntax` - 句法

In the terminal

```
$ code hello.c
$ make hello
// not need to input hello.c make can look the folder
// make to compile the file from source code to machine code
$ ./hello

and get the 
hello world$(\n)
```


### Library(Header Files)

We can use the code others write before via library and for example we can find the stdio.h
[Manual Pages](https://manual.cs50.io/#stdio.h)

```
printf("hello, %s\n", answer)
// %s means a place holder
```


Case 1

```
#include <stdio.h>

int main(void)
{
	string answer = get_string("What's your name?");
	printf("hello, &s\n", answer);
}
```

**Error:** get_string is not claimed.

Case 2

```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
	string answer = get_string("What's your name?");
	printf("hello, &s\n", answer);
}
```

Here gets so many cases and we can design the programs so that it can be more efficient.

### Terminal Commands

*We can know more about them by Google.*

In the terminal window, some common command-line arguments we may use include:

- `cd`, for changing our current directory (folder)
- `cp`, for copying files and directories
- `ls`, for listing files in a directory
- `mkdir`, for making a directory
- `mv`, for moving (renaming) files and directories
- `rm`, for removing (deleting) files
- `rmdir`, for removing (deleting) directories


### Types of the variablews

Types with which you might interact during this course include:

- `bool`, a Boolean expression of either true or false
- `char`, a single character like a or 2
- `double`, a floating-point value with more digits than a float
- `float`, a floating-point value, or a real number with a decimal value
- `int`, integers up to a certain size, or number of bits
- `long`, integers with more bits, so they can count higher than an int
- `string`, a string of characters

Followings are make the Scratch codes to C.

### Conditionals

Some tips:
	Don't make some unnecessary operations.
	Focus on how to design the better structure of codes.

```
if (x < y)
{
    printf("x is less than y\n");
}
else if (x > y)
{
    printf("x is greater than y\n");
}
else
{
    printf("x is equal to y\n");
}
```


But not make the three ifs because it will waste the time.

### Loop

Motivation: We want to let the vsc meows like the Scratch and how should we do?
Answer: We can make a loop to decrease our codes.

```
#include <cs50.h>
#include <stdio.h>

void meow(int n);

int main(void)
{
    int n;
    do
    {
        n = get_int("Number: ");
    }
    while (n < 1);
    meow(n);
}

// Meow some number of times
void meow(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}
```

>Comments
>Typically, each comment is a few words or more, providing the reader an opportunity to understand what is happening in a specific block of code. Further, such comments serve as a reminder for you later when you need to revise your code.

### Functions

An inspiring idea is to make the repeating parts a new role that we can use them by include or write the function's name.

Here's a example from Mario（循环嵌套）.
Notice how printing a row is accomplished through a new function.

```
// Helper function

#include <stdio.h>

void print_row(int width);

//void means no output , int width means we have one input

int main(void)
{
    const int n = 3;
    for (int i = 0; i < n; i++)
    {
        print_row(n);
    }
}

//Row function
void print_row(int width)
{
    for (int i = 0; i < width; i++)
    {
        printf("#");
    }
    printf("\n");
}
```

### Calculator

```
// int

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int dollars = 1;
    while (true)
    {
        char c = get_char("Here's $%i. Double it and give to next person? ", dollars);
        if (c == 'y')
        {
            dollars *= 2;
        }
        else
        {
            break;
        }
    }
    printf("Here's $%i.\n", dollars);
}
```

- Types are very important because each type has specific limits. For example, because of the limits in memory, the highest value of an `int` can be `4294967295`. If you attempt to count an `int` higher, an _integer overflow_ will result where an incorrect value will be stored in this variable.
- The number of bits limits how high and low we can count.
- This can have catastrophic, real-world impacts.
- We can correct this by using a data type called `long`.


```
// long

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long dollars = 1;
    while (true)
    {
        char c = get_char("Here's $%li. Double it and give to next person? ", dollars);
        if (c == 'y')
        {
            dollars *= 2;
        }
        else
        {
            break;
        }
    }
    printf("Here's $%li.\n", dollars);
}
```


### Truncation

```
// Division with ints, demonstrating truncation

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt user for x
    int x = get_int("x: ");

    // Prompt user for y
    int y = get_int("y: ");

    // Divide x by y
    printf("%i\n", x / y);
}
```

An integer divided by an integer will **always result in an integer** in C. Accordingly, the above code will often result in any digits after the decimal being thrown away.

```
// Floats

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt user for x
    float x = get_float("x: ");

    // Prompt user for y
    float y = get_float("y: ");

    // Divide x by y
    printf("%.50f\n", x / y);
}
```

- _Floating point imprecision_ illustrates that there are limits to how precise computers can calculate numbers.
- As you are coding, pay special attention to the types of variables you are using to avoid problems within your code.
- We examined some examples of disasters that can occur through type-related errors.

## Summing up

- How to create your first program in C.
- How to use the **command line**.
- About predefined **functions** that come natively with C.
- How to use variables, **conditionals**, and **loops**.
- How to create your own functions to simplify and improve your code.
- How to er codevaluate you on three axes: correctness, design, and style.
- How to integrate comments into your code.
- How to utilize types and operators and the implications of your choices.


## Problem Set 1


### [Hello, It’s Me](https://cs50.harvard.edu/x/2025/psets/1/me/)

```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string name = get_string("What's your name?");
    printf("hello, %s\n",name);
}
```



### [Mario-more](https://cs50.harvard.edu/x/2025/psets/1/mario/more/),

```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height;
    do
    {
        height = get_int("Height= ");
    }
    while (height < 1 || height > 8);
    int row = 0;
    while (row < height)
    {
        for (int i = 0; i < height - row - 1; i++)
        {
            printf(" ");
        }
        for (int j = 0; j < row + 1; j++)
        {
            printf("#");
        }
        printf("  ");
        for (int j = 0; j < row + 1; j++)
        {
            printf("#");
        }
        row++;
        printf("\n");
    }
}
```



### [Cash](https://cs50.harvard.edu/x/2025/psets/1/cash/),


```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int changeOwed;
    do
    {
        changeOwed = get_int("Change owed: ");
    }
    while (changeOwed < 0);

    int quarters;
    int dimes;
    int nickels;
    int pennies;

    quarters = changeOwed / 25;
    changeOwed = changeOwed - quarters * 25;
    dimes = changeOwed / 10;
    changeOwed = changeOwed - dimes * 10;
    nickels = changeOwed / 5;
    changeOwed = changeOwed - nickels * 5;
    pennies = changeOwed;

    int k = quarters + dimes + nickels + pennies;
    printf("%i\n", k);

}
```


### [Credit](https://cs50.harvard.edu/x/2025/psets/1/credit/),

```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long checknum;
    // get a number
    checknum = get_long("Number: ");
    // 最终求和变量
    int checksum = 0;
    // 指示变量
    int digit = 1;

    // checksum part
    int reminder;
    int save1 = 0;
    int save2 = 0;
    while (checknum > 0)
    {
        save2 = save1;
        save1 = 0;
        reminder = 0;
        if (digit % 2 == 0)
        {
            save1 = checknum % 10;
            reminder = checknum % 10 * 2;
            checknum /= 10;
            if (reminder >= 10)
            {
                reminder = reminder % 10 + 1;
                checksum += reminder;
            }
            else
            {
                checksum += reminder;
            }
        }
        else
        {
            save1 = checknum % 10;
            checksum += checknum % 10;
            checknum /= 10;
        }
        digit += 1;
    }
    digit -= 1;

    // claim
    if (checksum % 10 == 0)
    {
        if (save1 == 3 && digit == 15)
        {
            if (save2 ==4 || save2 == 7)
            {
                 printf("AMEX\n");
            }
            else
            {
                printf("INVALID\n");
            }
        }
        else if (save1 == 5 && digit == 16)
        {
            if (save2 >=1 && save2 <= 5)
            {
                 printf("MASTERCARD\n");
            }
            else
            {
                printf("INVALID\n");
            }
        }
        else if (save1 == 4 && (digit ==13 || digit == 16))
        {
            printf("VISA\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}
```







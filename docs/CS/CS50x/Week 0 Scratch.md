---
comments: true
title: Week 0 Scratch
---

# Week 0 Scratch

## Syllabus

>Computer Science. Computational Thinking. Problem Solving: Inputs, Outputs. Representation: Unary, Binary, Decimal, ASCII, Unicode, RGB. Abstraction. Algorithms. Running Times. Pseudocode. Scratch: Functions, Arguments, Return Values; Variables; Boolean Expressions, Conditionals; Loops; Events; Threads.


## Notes

### Binary


>Computer is a base-2 system we can use 0 and 1 to represent all of it.


Case: use the hand to count the number by control the finger up and down, how many can you count?

The answer is 31 if you start with the 0(we have $2^{5}$ outcomes)


#### bit

>For the computer, it is useful and simple because it imply the on and off.

binary digit-**BIT**!

we can make the 1 value means on and 0 means off. and use light bulb to represent the fingers' up and down.

#### decimal

$123=100*1+10*2+1*3$

And we can use this method to understand the bulbs' light and more far from it is the binary. WE can use the 0 and 1 represent the information in computer.

More often used than bit is byte, what is byte?
A byte is 8 bit(or 8 bulbs) it can represent the 255.


### ASCII


So how can we use them denote the number A?
Assign every letter a number -for some reasons the A strats with 65(64+1).


### Unicode

Unicode code point U+1F602

Remark:
The U+ is a conventional mark for unicode in computer science.


### Color

Zeros and ones can be used to represent color.

Red, green, and blue (called `RGB`) is a combination of three numbers.

One  pixel dot will ocuppy 3 bits of colors.

We will think more things can be represent by 0's and 1's so between the input and output is what?

It's algorithms!

### Algorithms

Case: Find John Harvard in the book and take three algorithms.

1. one step each
2. two steps each
3. half of the remainings

We can solve the problem correctly and more efficiently as well.

One graph can draw the efficientcy.


```text
Pick up phone book
Open to middle of phone book
look at page 
If person is on page
	call him
Else if person is ealier in book
	Open to middle of left half of book
	Go back to line 3
Else if person is later in book
	Open to middle of right half of book
	Go back to line 3
Else
	Quit 
```

They called functions and use conditions.

**Boolean expression** can give two types answers (0 and 1 or something else)

And above it's a loop can go and go.

### Artificial Intelligence

If use simple input the binary question each an answer, it will be difficult.

Large language models(LLMs)


```c
#include<stdio.h>

int main(void)
{
	printf("hello world\n")
}
```


### Scratch

Through dragging and dropping some puzzles to make a program.

Very interesting parts.

Ivy's Hardest Game --So difficult!(Can it passed?)


## Summing up

In this lesson, you learned how this course sits in the wide world of computer science and programming. You learned…

- Few students come to this class with prior programming experience!
- You are not alone! You are part of a community.
- Problem-solving is the essence of the work of computer scientists.
- This course is not simply about programming – this course will introduce you to a new way of learning that you can apply to almost every area of life.
- How numbers, text, images, music, and video are understood and represented by computers.
- The fundamental programming skill of pseudocoding.
- Reasonable and unreasonable ways to utilize AI in this course.
- How abstraction will play a role in your future work in this course.
- The basic building blocks of programming including functions, conditionals, loops, and variables.
- How to build a project in Scratch.

This was CS50! Welcome aboard! See you next time!


## Problem Set 0

>It’s time to choose your own adventure! Your assignment, quite simply, is to implement in Scratch, at [scratch.mit.edu](https://scratch.mit.edu/), any project of your choice, be it an interactive story, game, animation, or anything else, subject only to the following requirements:

+ Your project must use at least two sprites, at least one of which must not be a cat.
- Your project must have at least three scripts total (i.e., not necessarily three per sprite).
- Your project must use at least one conditional, at least one loop, and at least one variable.
- Your project must use at least one custom block that you have made yourself (via **Make a Block**), which must take at least one input.
- Your project should be more complex than most of those demonstrated in lecture (many of which, though instructive, were quite short) but it can be less complex than [Oscartime](https://scratch.mit.edu/projects/277537196) and [Ivy’s Hardest Game](https://scratch.mit.edu/projects/326129433).

Due the Scratch's high freedom property I pass the problem set(Or make an easy one?).




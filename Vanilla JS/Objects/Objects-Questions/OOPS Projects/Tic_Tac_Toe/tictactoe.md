# OOP Project - Tic Tac Toe

Prompt: "Build a working game of Tic Tac Toe from the command line."

The goal of this problem is to challenge you to build out a working version of Tic Tac Toe that takes user input from the command line and has a way of displaying to board.

You'll also need to know how to take input and output from the command line in your particular language. So you'll want to start there and get a working demo for that and then build your solution around it. If you've never done that before, a good place to start is by looking at how Hackerrank does it.

This problem was originally given on a tech screen where it was meant to be solved in 40 minutes.

# Objects

These are the objects/classes you should build out:

* `Game` class
* `Board` class

# User Stories

Users should be able to place a piece on the board.

Users should be able to see the board after making a move.

Users should be told who the current player is at any given time (X or O).

Users should be told who the winner is.

Users should be told when they make an invalid move.

The game should end after a win, loss or tie.


# General Approach

Don't start by trying to figure out what classes should exist where and what they should do.

Think about the whole system, and the **event** that take place.

Think of the **life-cycle** of playing one round of Tic Tac Toe.

Diagram out an example game, and list out **EXACTLY WHAT HAPPENS**. Be as granular as possible.

For example:

```

Start a New Game.
Display the Empty Board.
Announce current player is X.
Prompt user to place a piece.
Display the board after piece is placed.
Announce current player is O.
...

```

Once you've mapped out **WHAT** needs to happen, then you can start making decisions on **HOW** it needs to happen. The **ACTIONS** you describe will likely be your **METHODS** and the **STATE** changes you describe will be your **PROPERTIES** or **VARIABLES**.

**Don't** commit to a certain data structure or way of approaching the problem until you've figured out what it is you're trying to accomplish.

The difficulty of OOP problems usually doesn't lie in the use of a complex algorithm. It has more to do with there being a LOT of simple moving parts to account for. That's where the complexity comes from.

# Langton's Ant

Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior.  
It was invented by Chris Langton in 1986 and runs on a square lattice of black and white cells.  
[Wikipedia](https://en.wikipedia.org/wiki/Langton%27s_ant)

## Rules
The langton's ant has the following functions  
1. At a white square, turn 90° clockwise, flip the color of the square, move forward one unit
2. At a black square, turn 90° anti-clockwise, flip the color of the square, move forward one unit

## File details
1. index.html: Basic html to visualize the langton's ant.  
2. js/main.js: JS script to model the langton's ant movement.

## Objects
To solve the langton's ant problem, object oriented programming is used.  
1. Square
  - attribute:
    + color
  - methods
    + setColor
    + isColor
2. Grid
  - attributes:
    + squares
    + ant
    + width
    + height
  - methods:
    + init
    + move
3. Ant
  - attributes:
    + x  
    + y  
    + direction  
  - methods:
    + rotateClockwise
    + rotateAntiClockwise
    + moveForward

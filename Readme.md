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
\begin{table}[]
\begin{tabular}{lllll}
Object & Attribute(s)                                                                   & Method(s)                                                                                         &  &  \\
Square & color                                                                          & \begin{tabular}[c]{@{}l@{}}+ setColor\\ + is Color\end{tabular}                                   &  &  \\
Grid   & \begin{tabular}[c]{@{}l@{}}+ squares\\ + width\\ + height\\ + ant\end{tabular} & \begin{tabular}[c]{@{}l@{}}+ init\\ + move\end{tabular}                                           &  &  \\
Ant    & \begin{tabular}[c]{@{}l@{}}+ x\\ + y\\ + direction\end{tabular}                & \begin{tabular}[c]{@{}l@{}}+ rotateClockwise\\ + rotateAntiClockwise\\ + moveForward\end{tabular} &  &
\end{tabular}
\end{table}

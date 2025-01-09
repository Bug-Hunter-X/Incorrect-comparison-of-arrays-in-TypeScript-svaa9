# Incorrect Comparison of Arrays in TypeScript
This repository demonstrates a common error in TypeScript when comparing arrays for equality. The `compareArrays` function correctly compares arrays with the same length and elements. However, it has a flaw: it does not handle the case where the input arrays are empty or have different lengths.  This leads to unexpected results.

## Bug
The original `compareArrays` function throws an error when called with empty arrays because it attempts to access the `[0]` element of an empty array.

## Solution
The solution addresses this issue by first checking if the arrays have the same length before attempting to compare individual elements. This eliminates the potential for errors when dealing with empty arrays. 

## How to reproduce
1. Clone this repository.
2. Navigate to the repository directory.
3. Compile and run the TypeScript code using a TypeScript compiler (tsc) followed by a Node.js interpreter (node). 
4. Observe that the original code generates an error when given empty arrays while the corrected code handles this case gracefully.
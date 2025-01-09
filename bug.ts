function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // This line is the source of the bug
    }
  }

  return true;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];

console.log(compareArrays(array1, array2)); // true
console.log(compareArrays(array1, array3)); // false

//The bug is that if arr1 is an empty array, it will throw an error. Because it will try to access arr1[0] which doesn't exist
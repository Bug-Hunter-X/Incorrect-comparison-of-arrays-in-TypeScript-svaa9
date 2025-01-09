function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];
const array4: number[] = [];
const array5: number[] = [];

console.log(compareArrays(array1, array2)); // true
console.log(compareArrays(array1, array3)); // false
console.log(compareArrays(array4, array5)); // true
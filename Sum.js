function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// For Example
console.log(sumArray([1, 2, 3, 4])); 

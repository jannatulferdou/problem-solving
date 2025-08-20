function findEvenNumbers(arr) {
  const evenNum = [];
  for (let num of arr) {
    if (num % 2 === 0) 
        evenNum.push(num);
  }
  return evenNum;
}

// For Example
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 

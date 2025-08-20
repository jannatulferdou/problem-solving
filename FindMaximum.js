
// Problem 4: Find the Maximum Number

function findMax(arr) {
  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    }
  }

  return max;
}

// For Example
console.log(findMax([5, 1, 9, 3])); 
console.log(findMax([53, 21, 12, 39, 83, 119])); 

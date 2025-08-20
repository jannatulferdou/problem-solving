function factorial(num) {
  let result = 1;            
  for (let i = 1; i <= num; i++) {
    result *= i;             
  }
  return result;
}

// For Example
console.log(factorial(5));  
console.log(factorial(8));  

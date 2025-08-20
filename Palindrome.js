function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; 
    }
    left++;
    right--;
  }
  return true; 
}

// For Examples
console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello")); 
console.log(isPalindrome("Apple")); 

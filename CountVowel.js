function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU"; 

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// For Example
console.log(countVowels("programming")); 
console.log(countVowels("Umbralla")); 
console.log(countVowels("Education")); 

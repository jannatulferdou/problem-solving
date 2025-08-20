// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
  return str
    .split(" ")                        
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(" ");                         
}

// For Example
console.log(capitalizeWords("hello world")); 

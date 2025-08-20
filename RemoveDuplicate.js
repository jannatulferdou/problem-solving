function removeDuplicates(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

//For Example
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 

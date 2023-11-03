// it loop through each element of the array and return the match
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return `value found at index ${i}`;
    }
  }
  return 'Value not found';
};

console.log(linearSearch([7, 9, 5, 3, 1, 4, 2], 4));

function countChar(str, target, index = 0) {
  if (index === str.length) {
    return 0; // Base case: reached end of string
  }

  let count = (str[index] === target) ? 1 : 0;
  return count + countChar(str, target, index + 1); // Recursive call
}

console.log(countChar("hello world", "l")); // Output: 3

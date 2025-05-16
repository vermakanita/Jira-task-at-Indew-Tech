function printChars(str, index = 0) {
  if (index === str.length) {
    return; // base case
  }
  console.log(str[index]); // print current character
  printChars(str, index + 1); // recursive call to next character
}

printChars("Hello");

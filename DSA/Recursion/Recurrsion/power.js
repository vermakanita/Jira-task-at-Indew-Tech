function power(base, num) {
  if (num === 0) {
    return 1; // Base case: anything power 0 is 1
  }
  return base * power(base, num - 1); // Recursive call
}

console.log(power(2, 3)); // Output: 8

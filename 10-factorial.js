// Recursive function to compute factorial
function factorial(n) {
  if (isNaN(n)) {
    return 1; // Factorial of NaN is 1
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the first argument, cast it to integer
const num = parseInt(process.argv[2]);

// Print the factorial result
console.log(factorial(num));
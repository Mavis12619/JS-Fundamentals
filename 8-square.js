// Get the first argument and convert to integer
const size = parseInt(process.argv[2]);

// Check if size is a positive integer
if (!size || size <= 0) {
  console.log("Missing size");
} else {
  // Loop to print each line of the square
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
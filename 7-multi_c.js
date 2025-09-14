#!/usr/bin/node// Get the first argument
const x = parseInt(process.argv[2]);

// Check if x is a positive number
if (!x || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
// Array of strings
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Loop through the array and join each line with a newline character
let output = "";
for (let i = 0; i < languages.length; i++) {
  output += languages[i] + "\n";
}

// Print all lines at once
console.log(output.slice(0, -1)); // remove the last extra newline
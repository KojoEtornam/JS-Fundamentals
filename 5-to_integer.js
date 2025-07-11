// Get the first argument from the command line
const input = process.argv[2];

// Convert the input to a number
const number = Number(input);

// Check if the conversion gave a real number
if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log("My number: " + number);
}

const input = process.argv[2];
const count = Number(input);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
}

const input = process.argv[2];
const size = Number(input);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let row = 0;
  while (row < size) {
    let line = "";
    let col = 0;
    while (col < size) {
      line += "X";
      col++;
    }
    console.log(line);
    row++;
  }
}

//count total digits in numbers.

let num = 320;
if (num >= 100 && num <= 999) {
  console.log("Num is three digit no");
} else if (num >= 10 && num <= 99) {
  console.log("Num is two digit no");
} else if (num >= 0 && num <= 9) {
  console.log("Num is single digit no");
} else {
  console.log("Num is not in range");
}
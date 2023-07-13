// check whether a number is prime otr not.

let num = 31;
let isPrime = true;
if (num === 1)
  console.log("1 is neither prime nor composite number");
else if (num > 1) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      isPrime = false;
    }
  }
  if (isPrime == true)
    console.log("Number is prime");
  else
    console.log("Number is not prime");
}

// using function
// const checkprime = (num) => {
//     let isPrime = true;
//     if (num > 1) {
//       for (let i = 2; i <= num - 1; i++) {
//         if (num % i == 0) {
//           isPrime = false;
//         }
//       }
//       if (isPrime == true)
//         return true;
//       else
//         return false;
//     }
//   }
//   let number = 35;
//   console.log(" number is", checkprime(number));
  
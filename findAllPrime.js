//Check all prime numbers between 1 to 100

let num = 100;
let flag = true;
for (var i = 1; i <= num; i++) {
  let flag = true;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = false;
      break;
    }
  }
  if (i > 1 && flag == true) {
    console.log(i);
  }
}



// using function
// const checkprime = (num) => {
//     if (num == 1 || num == 0) return false;
//     for (let j = 2; j < num; j++) {
//       if (num % j == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   let number = 100;
//   for (var i = 1; i <= number; i++) {
//     if (checkprime(i)) {
//       console.log(i);
//     }
//   }
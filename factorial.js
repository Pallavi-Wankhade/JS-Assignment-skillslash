 // find factorial of number.
 
 const fact = (num) => {
    let f = 1;
    for (let i = 1; i <= num; i++) {
      f = f * i;
    }
    return f;
  }
  
  let number = 5;
  console.log("Factorial of a number is", fact(number));
  
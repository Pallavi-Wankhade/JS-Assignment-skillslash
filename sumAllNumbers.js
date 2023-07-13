const sum = (n) => {
    let i = 1;
    let s = 0;
    while (i < n) {
      i++;
      s = s + i;
    }
    return s;
  }
  
  let num = 25;
  console.log("Sum of all number is " + sum(num));
  
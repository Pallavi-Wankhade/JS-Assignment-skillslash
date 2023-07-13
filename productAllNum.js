const product = (num) => {
    let mul = 1;
    for (let i = 1; i < num; i++) {
      if (i % 2 == 0)
        mul = mul * i;
    }
    return mul;
  }
  
  let number = 10;
  console.log("Product of even number is", product(number));
  

//sum of all even number.
var N = 10;
var sum = 0;
for (i = 0; i < N; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log("Sum of even number is", sum);


//Sum of odd number.
var N = 10;
var sum = 0;
for (i = 1; i < N; i++) {
  if (i % 2 != 0) {
    sum = sum + i;
  }
}
console.log("Sum of odd number is", sum);

//Product of odd numbers.
var N=5;
var mul = 1;
for (i = 1; i < N; i++) {
  if (i % 2 != 0) {
  mul = mul * i;
  }
}
console.log("Product of odd number is", mul);

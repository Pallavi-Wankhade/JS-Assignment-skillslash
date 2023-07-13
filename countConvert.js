//Interchange upper and lower case and count converted numbers.

const convert = (str) => {
let countlower = 0;
let countupper = 0;
  let newstr = str.split("");
  for (let i = 0; i < newstr.length; i++) {
    if (newstr[i] >="A" && newstr[i] <= "Z" ){
      newstr[i] = newstr[i].toLowerCase();
      countlower++;
    }else {
      newstr[i] = newstr[i].toUpperCase();
      countupper++;
    }      
  }
  console.log("Lower converted characters are " +countlower);
  console.log("Upper converted characters are "+countupper);

  let res = newstr.join("");
  return res;
};

let string = "Hello World";
console.log(convert(string));


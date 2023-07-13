const reverseString = (str) => {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return revstr;
};

const palindrome = (str) => {
  let n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str[i] === str[n-1]) return "string is palindrome";
  }
  return "string is not palindrome";
};


let str1 = "Hello World";
let str2 =" madam";
console.log(reverseString(str1));
console.log(palindrome(str2));

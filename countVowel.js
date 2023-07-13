//count vowels present in string.

const countVowel = (str) => {
  let newstr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < newstr.length; i++) {
    if (
      newstr.charAt(i) == "a" ||
      newstr.charAt(i) == "e" ||
      newstr.charAt(i) == "i" ||
      newstr.charAt(i) == "o" ||
      newstr.charAt(i) == "u"
    )
      count++;
  }
  return count;
};

// using for--of(used in arrays)
const countVowel2 = (str) => {
    let newstr = str.toLowerCase();
    let count = 0;
  const vowel = ["a", "e", "i", "o", "u"];
  for (const char of newstr){
   if(vowel.includes(char))
  count++;
}
return count;
};

let string = "World Is beautiful";
console.log(countVowel(string));

console.log(countVowel2(string));

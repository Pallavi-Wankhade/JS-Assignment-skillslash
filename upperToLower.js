const convert = (str) => {
  let newst = str.toLowerCase();
  let newstr = newst.split("");
  for (let i = 0; i < newstr.length; i++) {
    if (
      newstr[i] == "a" ||
      newstr[i] == "e" ||
      newstr[i] == "i" ||
      newstr[i] == "o" ||
      newstr[i] == "u"
    ) {
      newstr[i] = newstr[i].toUpperCase();
    }
  }
  let res = newstr.join("");
  return res;
};

let string = "Hello World";
console.log(convert(string));

//   const convert = (str) => {
//     // let countvowel =0;
//     let newst = str.toLowerCase();
//     let newstr = newst.split("");
//     for (let i = 0; i < newstr.length; i++) {
//       if (
//         newstr[i] == "a" ||
//         newstr[i] == "e" ||
//         newstr[i] == "i" ||
//         newstr[i] == "o" ||
//         newstr[i] == "u"){
//             newstr[i] = newstr[i].toUpperCase();
//             // countvowel++;
//         }
//     }
//     let res= newstr.join("");
//     return res;
//   };

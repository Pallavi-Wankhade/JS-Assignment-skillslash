//Find unique elements in arrays.(Remove duplivates)


const check = (ar1) => {
  let ar2 = [];
  let count = 0;
  let flag = false;
  for (let i = 0; i < ar1.length; i++){
      for (let j = 0; j < ar1.length; j++){
           if (ar1[i] === ar1[j] && i != j) {
        flag = true;
      }
    }
  count++;
  if (count == 1 && flag == false){
    ar2.push(ar1[i]);
  }

flag = false;
count = 0;
  }
return ar2;

};

// function check(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len; j++) {
//         if (i !== j && arr[i] === arr[j]) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

let arr = [2, 5, 1, 9, 1, 2];
console.log("Unique elements are", check(arr));

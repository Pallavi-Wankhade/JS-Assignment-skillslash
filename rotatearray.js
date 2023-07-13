const rotate = (arr, num) => {
  let res = [];

  for (let i = num; i < arr.length; i++) {
    res.push(arr[i]);
  }
  for (let i = 0; i < num; i++) {
    res.push(arr[i]);
}
return res;
}

let array1 = [1, 2, 3, 4, 5, 6];
let num = 4;
console.log(rotate(array1, num));

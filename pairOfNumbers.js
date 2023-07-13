// find pair of numbers present in array equal to given sum.

const pairOfNum = (arr, value) =>{
let res=[];

for (let i=0 ; i< arr.length/2 ; i++){
    let n = value - arr[i];
    if(arr.includes(n)){
        res.push(arr[i]);
        res.push(n);
        // break;
    }
}
return res;
}


 let array1=[1,2,3,4,5,6];
 let sum = 7;
 console.log(pairOfNum(array1, sum));
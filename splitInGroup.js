const breakAndMake = (arr, size) =>{
let res=[];
for(let i=0; i<arr.length ;i+=size){
    res.push(arr.slice(i, i+size));
}
return res;
}

let array=[1,2,7,9,5,3,4,6];
const size =3;
console.log(breakAndMake(array, size));;
//find maximum value in array.


const maxval=(arr)=>{
    let  max= ar[0];
    let min = ar[0];
    for(let i=0; i<arr.length ;i++){
    if( arr[i] > max)
     max = arr[i];
     if(arr[i] < min)
     min= arr[i];
    } 
    
    return max;
    }
    
    let ar=[2,5,7,8,1,31,3];
    console.log("maximum value is " + maxval(ar));
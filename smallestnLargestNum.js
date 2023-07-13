//find second smallest amd largest num

var array1 = ['2', '5', '9', '1', '6', '8', '4'];
 var temp = 0;

 function sortAscending(ar) {
   for (i = 0; i < ar.length; i++) {
     for (j = i + 1; j < ar.length; j++) {
       if (ar[i] > ar[j]) {
         temp = ar[i];
         ar[i] = ar[j];
         ar[j] = temp;
       }
     }
   }
   for (i = 0; i < ar.length; i++) {
     console.log(ar[i]);
   }
 }
 console.log("Sorted array is ");
 console.log(sortAscending(array1));
 var ssm = array1[1];
 var slg = array1[array1.length - 2];
 console.log("Second smallest elemengt is " + ssm+ " and second largest element is " +slg);

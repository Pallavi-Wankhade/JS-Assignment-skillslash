//return position of number using indexOf().


function posInArray(ar1, n1) {
    for (i = 0; i < ar1.length; i++) {
      if (ar1[i] == n1) {
        var index = ar1.indexOf(n1);
        return index;
      }
    }
    return -1;
  }
 
  var ar = ['2', '5', '9', '1', '6', '8', '4'];
  console.log(posInArray(ar, '7'));
  console.log(posInArray(ar, '8'));


   //without indexOf()
  function checkNumber(ar1, n1) {
    for (i = 0; i < ar1.length; i++) {
      if (ar1[i] == n1) {
        return i;
      }
    }
    return -1;
  }

  var ar = ['2', '5', '9', '1', '6','8','4'];
  console.log(checkNumber(ar, '7'));
  console.log(checkNumber(ar, '9'));
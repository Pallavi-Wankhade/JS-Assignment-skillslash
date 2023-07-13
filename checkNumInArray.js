const checkNumInArray = (ar1, n1) => {
    for (let i = 0; i < ar1.length; i++) {
      if (ar1[i] === n1)
        return true;
    }
    return false;
  }
  
  let array = ['2', '5', '9', '1', '6'];
  console.log(checkNumInArray(array, '6'));
  console.log(checkNumInArray(array, '8'));
  
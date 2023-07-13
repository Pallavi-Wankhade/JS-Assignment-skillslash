const totaWords = () => {
    let wrd = str.split(" ").length;
    return wrd;
  }
  const totachar = () => {
    let chr = str.length;
    return chr;
  }
  let str = "hello how are u?"
  console.log("total words are " + totaWords() + " and characters are " + totachar());
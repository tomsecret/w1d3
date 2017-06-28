function countLetters(string) {
  var myObject = {};
  string = string.toLowerCase();


  function isAlpha(item){
    if (item.match(/^[A-Za-z]+$/)){
      return true
    }
  }

  for (i in string) {
    if (isAlpha(string[i])) {
      myObject[string[i]] = 0
    }
  }

  for (i in string) {
    if (isAlpha(string[i])) {
      myObject[string[i]] = myObject[string[i]] + 1;
    }
  }
  return myObject;
}

console.log(countLetters('Good morning!'));
function positionLetters(string) {
  var myObject = {};
  string = string.toLowerCase();

  function isAlpha(item){
    if (item.match(/^[A-Za-z]+$/)){
      return true
    }
  }

  for (i in string) {
    if (isAlpha(string[i])) {
      myObject[string[i]] = ""
    }
  }

  for (i in string) {
    if (isAlpha(string[i])) {
      var addString = i + ', '
      myObject[string[i]] = myObject[string[i]] + i + ', ';
    }
  }

  for (key in myObject) {
    myObject[key] = myObject[key].slice(0, myObject[key].length - 2)
  }
  return myObject
}

console.log(positionLetters('Good morning!'))
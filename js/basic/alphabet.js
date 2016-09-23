// write a functin that takes in a string, and returns that string with all
// its letters in alphabetal order. assume there will be no punctuation or
// numbers. example: `alphabet('hello')` // => 'ehllo'
function alphaOrder(str) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  str = str.split('');

  var newIndex = [];

  for(var i = 0; i < str.length; i++) {
    if(newIndex.length === 0) newIndex.push(str[i]);
    else if( alphabet.indexOf(newIndex[0]) > alphabet.indexOf(str[i]) ) {
      newIndex.unshift(str[i]);
    } else {
      newIndex.push(str[i]);
    }
  }

  newIndex = newIndex.join('');
  console.log(newIndex);
  return newIndex;
}

alphaOrder('James');

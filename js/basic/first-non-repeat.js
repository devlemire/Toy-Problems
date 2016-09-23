//Write a function that returns the first non repeated letter in a string
function noRepeat(str) {
  str = str.split('');

  for(var i in str) {
    var x = parseInt(i);
    if(str[i] !== str[x-1] && str[i] !== str[x+1]) {
      console.log(str[i]);
      return str[i];
    }
  }
}

noRepeat("aaabbbbbbbbdddddddfffffffffg");

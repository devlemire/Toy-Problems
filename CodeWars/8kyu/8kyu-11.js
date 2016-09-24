// Given an array of numbers (s), check if any of the numbers are the character codes for lower case vowels.
// If they are, change the array value to a string of that vowel.
// Return the resulting array.
// https://www.codewars.com/kata/57cff961eca260b71900008f

function isVow(a){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for(var i in a) {
    if(vowels.indexOf(String.fromCharCode(a[i])) !== -1) {
      a[i] = String.fromCharCode(a[i]);
    }
  }

  return a;
}

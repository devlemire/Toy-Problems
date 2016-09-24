// You will be given an array (s). You must sort it alphabetically (case-sensitive!!) and then return the first value.
// The returned value must be a string, and have '***' between each of its letters.
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

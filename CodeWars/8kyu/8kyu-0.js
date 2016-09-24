// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// (Only one element at each edge, even if there are more than one with the same value!)
// If array is empty, null or None, or if only 1 Element exists, return 0.
// https://www.codewars.com/kata/577b9960df78c19bca00007e
function sumArray(array) {
  if( !(array) || array.length === 1 ) {
    return 0;
  }

  array.splice(array.indexOf(Math.max.apply(null, array)), 1);
  array.splice(array.indexOf(Math.min.apply(null, array)), 1);

  var arr = array.reduce(function(total, nextNum) {
  	return total + nextNum
  }, 0);

  return array.reduce(function(total, nextNum) { return total + nextNum }, 0);
}

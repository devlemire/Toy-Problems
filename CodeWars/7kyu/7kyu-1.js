// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
// https://www.codewars.com/kata/55f2b110f61eb01779000053

function GetSum(min, max) {
  var sum = 0;
  if(min > max) {
  	var temp = min;
  	min = max;
  	max = temp;
  }

  for(var i = min; i <= max; i++) {
  	sum += i;
  }

  return sum;
}

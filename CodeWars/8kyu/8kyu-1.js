// The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).
// If num is negative, ignore its sign and treat it as a positive value.
// If nth is not positive, return -1.
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.
// https://www.codewars.com/kata/576b93db1129fcf2200001e6
function findDigit(num, nth){
  num += "";
  if(nth <= 0) {
    return -1;
  } else if(nth > num.length) {
    return 0;
  }

  return parseInt(num.split('').reverse().splice(nth - 1, 1));
}

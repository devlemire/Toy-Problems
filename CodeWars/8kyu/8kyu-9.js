// Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).
// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
  var powers = [];
  for(var i = 0; i <= n; i++) {
    powers.push(Math.pow(2, i));
  }

  return powers;
}

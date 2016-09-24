// Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime'
// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  var returnNums = []; //Create empty array to hold divisors
  for(var i = 2; i < integer; i++) { //Loop through numbers up to integer, while also excluding the integer and 1
    if(integer % i === 0) {  //If the interger divded by i has no remainder push it to returnNums array
      returnNums.push(i);
    }
  }
  
  if(returnNums.length === 0) {  //If returnNums array is empty after for loop, number has to be prime, return that
    return integer+' is prime';
  }

  return returnNums;
};

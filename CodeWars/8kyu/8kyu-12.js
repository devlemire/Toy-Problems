// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array:
// https://www.codewars.com/users/jameslemire/completed_solutions

function countPositivesSumNegatives(input) {
  return !input || input.length === 0 ? [] : [input.filter(e => e > 0).length, input.filter(e => e < 0).reduce((e, s) => e + s, 0)];
}

// Given an array of integers, remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min.apply(null, numbers)), 1);
  return numbers;
}

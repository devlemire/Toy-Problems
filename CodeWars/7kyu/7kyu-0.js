// https://www.codewars.com/kata/5390bac347d09b7da40006f6
// Camel Case passed in string

String.prototype.toJadenCase = function () {
  return this.replace( /\w\S*/g, function(word) { return word.charAt(0).toUpperCase() + word.substring(1); })
};

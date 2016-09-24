// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|.|$)/g, "\$2\$1ay\$3");
}

// RegEx explained: (\w) grabs the first word character | (\w*) grabs the rest word characters |
// (\s|.|$) stop grabing characters when you run into a white space or single character
// /g do for more tha one instance
// (\w) = $1, (\w*) = $2, (\s|.|$) = $3

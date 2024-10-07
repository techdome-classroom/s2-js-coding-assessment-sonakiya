/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const matchingBrackets = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let char of s) {
      if (char in matchingBrackets) {
          let topElement = stack.length === 0 ? '#' : stack.pop();
          if (topElement !== matchingBrackets[char]) {
              return false;
          }
      } else {
          stack.push(char);
      }
  }

  return stack.length === 0;
};

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // Stack to keep track of opening brackets
  let stack = [];
  
  // Hash map for keeping track of mappings between opening and closing brackets
  const matchingBrackets = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  // Iterate through each character in the string
  for (let char of s) {
      // If the character is a closing bracket
      if (char in matchingBrackets) {
          // Pop the top element from the stack
          // If the stack is empty, set topElement to a dummy value '#'
          let topElement = stack.length === 0 ? '#' : stack.pop();

          // If the top element doesn’t match the corresponding opening bracket
          if (topElement !== matchingBrackets[char]) {
              return false;
          }
      } else {
          // If it’s an opening bracket, push it to the stack
          stack.push(char);
      }
  }

  // If the stack is empty, then we have matched all brackets correctly
  return stack.length === 0;
};

module.exports = { isValid };




var isValid = function(s) {
  // Initialize an empty stack to hold open parentheses
  let stack = [];

  // Create a mapping of closing to opening brackets
  let map = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  // Traverse each character in the string
  for (let i = 0; i < s.length; i++) {
      let char = s[i];

      // If the character is a closing bracket
      if (char in map) {
          // Pop the top element from the stack if it exists, else assign a dummy value
          let topElement = stack.length ? stack.pop() : '#';

          // If the popped element doesn't match the corresponding opening bracket, return false
          if (topElement !== map[char]) {
              return false;
          }
      } 
      // If the character is an opening bracket, push it onto the stack
      else {
          stack.push(char);
      }
  }

  // If the stack is empty, all brackets were properly closed and nested
  return stack.length === 0;
};

module.exports = { isValid };

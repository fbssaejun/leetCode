/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/


const isValid = function(s) {
        
  if (s.length === 0 || s.length % 2 !== 0) {
      return false;
  }
  
  const closingParentheses = {
      "(": ")",
      "{": "}",
      "[": "]"
  };
  
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] in closingParentheses) {
          stack.push(s[i]);
      } else if( s[i] !== closingParentheses[stack.pop()]) {
          return false;
      }
  }    
  return stack.length === 0;
};

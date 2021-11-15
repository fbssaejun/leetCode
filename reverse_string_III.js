/*

QUESTION)

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"

*/

const reverseWords = (s) => {
  //Split string after each space, store it as an array into a variable
  let wordArr = s.split(' ')
  //Map through word array, reverse each string and return, store it into a variable as a new array
  let reverse = wordArr.map(word => {
    return word.split('').reverse().join('')
  })
  //Join reversed string word array, return array
  return reverse.join(' ')
};
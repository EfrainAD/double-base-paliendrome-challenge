/*
=============== Double Base Palindrome Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      Don't worry about capitalization.
*/

/*
Question 1
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/
const doubleBasePalindromeSum = function (x,y,upperLimit) {
      const start = upperLimit
      let palindromicSum = 0
      let base10 = 0
      let based2 = 0
      
      for (let i = 0; i < start; i++) {
            const based10Reversed = base10.toString().split('').reverse().join('')
            if (base10 == based10Reversed) {
                  based2 = base10.toString(2)
                  const based2Reversed = based2.toString().split('').reverse().join('')
                  if (based2 == based2Reversed) {
                        palindromicSum += base10
                  }
            }
            base10++
      }
      return(palindromicSum)
}

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}
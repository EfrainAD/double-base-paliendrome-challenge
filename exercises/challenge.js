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
const doubleBasePalindromeSum = function (/* base1, base2, upperLimit */) {
      const start = 1000000
      const palindromic = []
      let base10 = 0
      let based2 = 0

      for (let i = 0; i < start; i++) {

            //check if based 10 is palindromic
            // console.log(base10)
            const based10Reversed = base10.toString().split('').reverse().join('')
            // console.log(based10Reversed)
            if (base10 == based10Reversed) {
                  // IF yes, convert to 2 base
                  based2 = base10.toString(2)
                  // console.log(base10)
                  //check if palindromic
                  const based2Reversed = based2.toString().split('').reverse().join('')
                  if (based2 == based2Reversed) {
                        // IF yes, add to palindromic array
                        // console.log(based2)
                        palindromic.pop(base10)
                  }
            }
            base10++
      }
}


// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}
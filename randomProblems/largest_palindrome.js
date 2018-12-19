//Problem:
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
//Problem Source: https://projecteuler.net/problem=4

function largestPalindrome(digits){
    let numberOne = 1;
    let numberTwo = 1;
    let product;
    let largestPalindrome = 0;
    
    while (numberOne.toString().length <= digits){
        while (numberTwo.toString().length <= digits){
            product = numberOne * numberTwo;
            if(product.toFixed(0).split("").reverse().join("")  == product && product > largestPalindrome){
                largestPalindrome = product
            }
            numberTwo++;
        }
        numberTwo = 1;
        numberOne++;
    }
    return largestPalindrome;
}


let test = largestPalindrome(2);
console.log('Test (should equal 9009): ' + test);

let result = largestPalindrome(3);
console.log('Answer: ' + result); 

//Answer is 906609
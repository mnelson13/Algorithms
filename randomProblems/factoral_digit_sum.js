//Problem:
// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!
//Problem Source: https://projecteuler.net/problem=20

let BigFloat53 = require('bigfloat').BigFloat53;

function facDigitSum(n){
    let arr = [];

    while(n > 0){
        arr.push(n);
        n-- 
    }

    let total = new BigFloat53(arr.reduce((acc, x) => acc * x, 1)).toString().split('').map(Number);

    let sum = total.reduce((acc, y) => acc + y, 0);

    return sum

}

let test = facDigitSum(10);
console.log('Test (should equal 27): ' + test);

let result = facDigitSum(100);
console.log('Answer: ' + result); 

//Answer is 734
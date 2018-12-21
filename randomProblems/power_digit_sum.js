//Problem:
//21^5 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//What is the sum of the digits of the number 2^1000?
//Problem Source: https://projecteuler.net/problem=16

let BigFloat53 = require('bigfloat').BigFloat53;

function powerDigitSum(base, exponent){
    let sum = Math.pow(base, exponent)

    let sum2 = new BigFloat53(sum).toString()

    let arr = sum2.toString(10).replace(/\D/g, '0').split('').map(Number);

    let result = arr.reduce((acc, x) => acc + x, 0)
    
    return result;
}


let test = powerDigitSum(2, 15);
console.log('Test (should equal 26): ' + test);

let result = powerDigitSum(2, 1000);
console.log('Answer: ' + result); 

//Answer is 1366
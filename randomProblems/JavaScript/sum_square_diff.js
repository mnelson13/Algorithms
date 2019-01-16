//Problem:
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//Problem Source: https://projecteuler.net/problem=6

function sumSquareDiff(limit){
    let sumOfSquares = 0;
    let sum = 0;
    let i = 1;

    while (i <= limit) {
        sumOfSquares += Math.pow(i, 2);
        sum += i;
        i++;
    }

    // console.log(sumOfSquares);
    // console.log(sum);

    let squareOfSum = Math.pow(sum, 2)
    let result = squareOfSum - sumOfSquares
    return result;

}

let test = sumSquareDiff(10);
console.log('Test (should equal 2640): ' + test);

let result = sumSquareDiff(100);
console.log('Answer: ' + result); 

//Answer is 25164150
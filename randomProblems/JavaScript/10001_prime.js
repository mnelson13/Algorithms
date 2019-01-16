//Problem:
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?
//Problem Source: https://projecteuler.net/problem=7

function primeNumber(number, currentNumber = 1, count = 1){
    let placeholder1 = currentNumber - 1;
    let placeholder2 = currentNumber - 1;
    let currentNumber2 = currentNumber

    while(placeholder1 > 1){
        while(placeholder2 > 1){
            if(placeholder1 * placeholder2 === currentNumber2){
                // primeNumber(number, currentNumber + 1, count)
                // return;
                currentNumber2++
                placeholder1 = currentNumber2 - 1;
                placeholder2 = currentNumber2 - 1;

            } else {
                placeholder2--;
            }
        }
        placeholder2 = currentNumber2 -1;
        placeholder1--;
    }
    
    if(count === number){
        console.log("Prime Number #" + number + ": " + currentNumber2);
    } else {
        primeNumber(number, currentNumber2 + 2, count + 1)
    }
}

//Test:
primeNumber(6);
//Should console.log 13

primeNumber(1001);
//Answer is 104743
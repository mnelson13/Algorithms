//Problem:
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//Problem source: https://projecteuler.net/problem=5

function smallestMultiple (limit){
    let n = 1;
    let i = 1;

    while (i <= limit) {

        if (n % i === 0){
            i++;
        }
        else {
            n++;
            i = 1;
        }
    }
    return n
}

let test = smallestMultiple(10);
console.log('Test (should equal 2520): ' + test);

let result = smallestMultiple(20);
console.log('Answer: ' + result); 

//Answer is 232792560

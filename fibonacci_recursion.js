console.log("Hello World");

let array = [];

//to return an array of length n of fibonacci numbers
function fibonacci(n, currentNumber = 1){

    if(currentNumber === 1) {
        array.push(0);
    } else if (currentNumber === 2){
        array.push(1);
    } else {
        array.push(array[array.length-1]+array[array.length-2]);
    }

    if (currentNumber < n){
        fibonacci(n, currentNumber + 1)
    } else {
        console.log(array);
        array = [];
    }
}

fibonacci(2);
fibonacci(6);
fibonacci(20);


//to return the value of a given index in the fibonacci sequence 
function fibonacci2(i){
    if(i < 1) {
        return 0;
    } else if(i === 1) {
        return 1;
    }

    return fibonacci2(i-1) + fibonacci2(i-2);
}

//tests:
let result = fibonacci2(6)
console.log(result)
let result2 = fibonacci2(8)
console.log(result2)

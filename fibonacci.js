console.log("Hello World");

function fibonacci(n){
    let array = [];
    let i = 0;

    while (i < n) {
        if(i === 0) {
            array.push(0);
        } else if (i === 1){
            array.push(1);
        } else {
            array.push(array[array.length-1]+array[array.length-2]);
        }
        i++;
        
    }
    return array;
}

//tests:
let result = fibonacci(10)
console.log(result.length === 10)
let result2 = fibonacci(6)
console.log(result2)

let result3 = fibonacci(4000)
console.log(result3);
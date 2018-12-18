console.log("Hello World");

function fibonacci(n){
    let array = [];

    for (let index = 0; index < n; index++) {
        if(index === 0) {
            array.push(0)
        } else if (index === 1){
            array.push(1)
        } else {
            array.push(array[array.length-1]+array[array.length-2])
        }
    }
    return array;
}


let result = fibonacci(10)
console.log(result.length === 10)
let result2 = fibonacci(6)
console.log(result2)

let result3 = fibonacci(4000)
console.log(result3);
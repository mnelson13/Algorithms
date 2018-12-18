let array = [];
let length = 10000;
let n = 0

//creates array of random numbers of given length
while (n < length) {
    array.push(Math.ceil(Math.random() * length));
    n++
};

//picks a random number from the array
let randomNumber = array[Math.ceil(Math.random() * length)];


console.log(array);
console.log(randomNumber);


let i = 0;

while (i < array.length) {
    if(array[i] === randomNumber){
        console.log(array[i] + " at index " + i)
    }
    i++
};




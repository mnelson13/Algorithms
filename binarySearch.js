let sort = require("./selectionSort");

let array = [];
let length = 100;
let limit = 1000;
let n = 0

//creates array of random numbers of given length
while (n < length) {
    array.push(Math.ceil(Math.random() * limit));
    n++
};

//sorts array in order from smallest to largest
let sortedArray = sort(array);

console.log(sortedArray);

//picks a random number from the array
let randomNumber = array[Math.ceil(Math.random() * length)];

console.log(randomNumber);

//binary search function
function binarySearch(arr, num) {
    let currentElement;
    let currentIndex;
    let maxIndex = arr.length -1;
    let minIndex = 0;

    while (minIndex <= maxIndex){
        currentIndex = Math.floor((minIndex + maxIndex) /2);
        currentElement = arr[currentIndex];
        
        if(currentElement < num) {
            minIndex = currentIndex +1;
        }
        else if (currentElement > num) {
            maxIndex = currentIndex -1;
        }
        else {
            return currentIndex;
        }
    }

    return false;
}

let result = binarySearch(array, randomNumber);
console.log(result);
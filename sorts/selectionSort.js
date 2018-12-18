let array = [];
let length = 40;
let n = 0

//creates array of random numbers of given length
while (n < length) {
    array.push(Math.ceil(Math.random() * length));
    n++
};

//swaps numbers if a new smaller number is found
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function selectionSort(array) {
    let smallestNumber = array[0];
    let smallestIndex = 0;
    let pointer = 1;

    for(let currentPosition = 0; currentPosition < array.length -1; currentPosition++) {
        smallestNumber = array[currentPosition];
        smallestIndex = currentPosition;

        for(pointer = currentPosition + 1; pointer < array.length; pointer++) {
            if(array[pointer] < smallestNumber){
                smallestNumber = array[pointer];
                smallestIndex = pointer;
            }
        }
        if(pointer !== currentPosition) {
            swap(array, smallestIndex, currentPosition)
        }
    }
    return array;
}

// console.log("Pre-sort:");
// console.log(array.join(" "));
// console.log("Post-sort:");
// console.log(selectionSort(array).join(" "));

module.exports = selectionSort;



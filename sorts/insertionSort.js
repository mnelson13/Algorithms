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

//let pointer = 1;
function insertionSort(array){
    for (let pointer = 1; pointer < array.length; pointer++){
        let topPointer = pointer;
        let bottomPointer = pointer -1;
        while (true){
            if(array[topPointer] < array[bottomPointer]){
                swap(array, topPointer, bottomPointer)
                bottomPointer--;
                topPointer--;
            } else {
                break;
            }
        }
    }
    return array;
}


console.log("Pre-sort:");
console.log(array.join(" "));
console.log("Post-sort:");
console.log(insertionSort(array).join(" "));
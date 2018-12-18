function fizzbuzz(i, currentNumber = 1) {
    var string = '';
    if (currentNumber % 3 === 0) {
        string += 'fizz';
    }

    if (currentNumber % 5 === 0) {
        string += 'buzz';
    }

    if (string) {
        console.log(string)
    } else {
        console.log(currentNumber)
    }

    if (currentNumber < i) {
        fizzbuzz(i, currentNumber + 1)
    }
}

fizzbuzz(30)
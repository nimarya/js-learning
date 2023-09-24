//exersizes

function convertMinutesIntoSeconds(minutes) {
    return minutes * 60;
}

//console.log(convertMinutesIntoSeconds(4));

function ensureQuestion(str) {
    // if (str[str.length - 1] === '?') {
    //     return str;
    // } else {
    //     return str + '?';
    // }

    // OR:

    return str[str.length - 1] === '?' ? str : str + '?';
}

// console.log(ensureQuestion('there is no question mark'));

function maxOfNumbers(numbers) {
    return Math.max.apply(null, numbers);
}

let numbers = [1, 9, 4, 6, 8];
console.log(maxOfNumbers(numbers));
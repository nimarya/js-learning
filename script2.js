// callback function - functions that are passed to another functions as arguments
const button = document.querySelector('button');

const greeting = function() {
    console.log('hello there!');
}

button.addEventListener('click', greeting);
// greeting without brackets, because if you write greeting(), the func will be executed immediately, not
// only when the button is clicked on
// another option:

// button.addEventListener('click', function() {
//     console.log('anonimus function is called');
// })

// ternary operator
const age = 20;

if (age >= 18) {
    console.log('i can drink beer');
} else {
    console.log('i can not drink beer');
}

age >= 18 ? console.log('i can drink beer') : console.log('i can not drink beer');

// switch construction:

trafficlight = 'grexen';

switch (trafficlight) {
    case 'green':
        console.log('go');
        break;
    case 'yellow':
        console.log('slow down');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('broken')
}
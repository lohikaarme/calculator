
let storedValueA = 0;
let storedValueB = 0;
let input = '';
const screen = document.querySelector('.screen');
let displayValue = '';
let total = 0;
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (a, b, operator) => operator(a, b);

const keys = document.querySelectorAll('[data-key]');
const keyPress = keys.forEach((key) => { // keyPress accepts a button press and assigns data-key attribute to input
	key.addEventListener('click', () => {
		input = key.getAttribute('data-key');
		displayValue = displayValue.concat(input);
		screen.textContent = displayValue;
		console.log(input);
	});
});

let updateDisplay = (displayValue, input) => displayValue = displayValue.concat(input)

console.log(typeof keys)
console.log(keys)

console.log(operate(3,5,multiply));


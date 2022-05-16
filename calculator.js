
let storedValue = [];
let storedOperator = [];
let input = '';
let total = 0;
let displayValue = '';
const screen = document.querySelector('.screen');

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

const operators = document.querySelectorAll('[data-operator]');
const operatorPress = operators.forEach((operator) => { 
	operator.addEventListener('click', () => {
		storedValue.push(+displayValue);
		displayValue = '';
		input = operator.getAttribute('data-operator');
		storedOperator.push(input);
		screen.textContent = input;
		console.log(input);
	});
});

let updateDisplay = (displayValue, input) => displayValue = displayValue.concat(input)

console.log(typeof keys)
console.log(keys)

console.log(operate(3,5,multiply));



let storedValue = [];
let storedOperator = [];
let input = '';
let total = 0;
let displayValue = '0';
const screen = document.querySelector('.screen');

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let operate = (a, b, operator) => operator(a, b);

let updateDisplay = (displayValue, input) => displayValue = displayValue.concat(input)

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
		input = operator.getAttribute('data-operator');
		updateMemory(input);
		screen.textContent = input;
		console.log(input);
	});
});

let updateMemory = (input) => {
	storedOperator.push(input);
	storedValue.push(+displayValue);
	displayValue = '';
};

let clearMemory = () => {
	storedValue = [];
	storedOperator = [];
	input = '';
	total = 0;
	displayValue = '0';
	screen.textContent = displayValue;
};



console.log(typeof keys)
console.log(keys)

console.log(operate(3,5,multiply));



let storedValue = '';
let storedOperator = '';
let input = '';
let total = 0;
let displayValue = ' ';
const screen = document.querySelector('.screen');

let add = (a, b) => +a + +b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (a, b, operator) => {
	switch (operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case '*':
			return multiply(a, b);
		case '%':
			return divide(a, b);
		case '=':
			return total;
		default:
			break;
	}
};

const keys = document.querySelectorAll('[data-key]');
const keyPress = keys.forEach((key) => { // keyPress accepts a button press and assigns data-key attribute to input
	key.addEventListener('click', () => {
		input = key.getAttribute('data-key');
		displayValue = displayValue.concat(input);
		updateScreen();
		console.log(input);
	});
});

const operators = document.querySelectorAll('[data-operator]');
const operatorPress = operators.forEach((operator) => { 
	operator.addEventListener('click', () => {
		input = operator.getAttribute('data-operator');
		// updateMemory(input);
		if (!storedOperator) {
			total = displayValue;
			storedOperator = input;
			displayValue = ''
		} else {
			total = operate(total, displayValue, storedOperator);
			storedOperator = input;
			displayValue = ''
			updateScreen(total)
		};
	});
});

let updateScreen = (input) => {
	if (!input) input = displayValue;
	screen.textContent = input;
};

console.log(typeof keys)
console.log(keys)

console.log(operate(3,5,multiply));


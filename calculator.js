
let storedValue = [];
let storedOperator = [];
let input = '';
let total = 0;
let displayValue = ' ';
const screen = document.querySelector('.screen');

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (a, b, operator) => {
	switch (operator) {
		case '+':
			return add(a, b);
			break;
		case '-':
			return subtract(a, b);
			break;
		case '*':
			return multiply(a, b);
			break;
		case '%':
			return divide(a, b);
			break;
		case '=':
			break;
		case 'blank':
			return a;
			break;
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
		updateMemory(input);
		screen.textContent = input;
		console.log(input);
	});
});

let calculate = () => {
	total = storedValue[0];
	for (let i = 0; i < (storedOperator.length -1); i++) {
		total = operate(total, storedValue[i + 1], storedOperator[i]);
	let temp = total;
	clearMemory();
	displayValue = temp;
	updateScreen();
	updateMemory('blank');

	}
};

let updateScreen = (input) => {
	if (!input) input = displayValue;
	screen.textContent = input;
};

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


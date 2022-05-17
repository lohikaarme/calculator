
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
	if (operator == '+') return add(a, b);
	if (operator == '-') return subtract(a, b);
	if (operator == '*') return multiply(a, b);
	if (operator == '%') return divide(a, b);
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
	for (let i = 0; i <= storedOperator.length; i++) {
		let a = storedOperator[i],
				b = storedValue[i+1];
		switch (a) {
			case '+':
				total = add (total,b);
				break;
			case '-':
				total = subtract (total,b);
				break;
			case '*':
				total = multiply (total,b);
				break;
			case '%':
				total = divide (total,b);
				break;
			case '=':
				let temp = total;
				clearMemory();
				displayValue = temp;
				updateMemory();
				displayValue = temp;
				updateScreen();
				break;
			default:
				break;
		}
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



let storedValue = '';
let storedOperator = '';
let input = '';
let total = '';
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
		case '/':
			return divide(a, b);
		case 'Enter':
			return total;
		case 'Escape':
			total = '';
			storedValue = '';
			storedOperator = '';
			input = '';
			displayValue = ' ';
			updateScreen((0).toFixed(2));
			return total;
		default:
			break;
	}
};

const keys = document.querySelectorAll('[data-key]');
const keyPress = keys.forEach((key) => { // keyPress accepts a button press and assigns data-key attribute to input
	key.addEventListener('click', () => {
		input = key.getAttribute('data-key');
		if (input == '.' && displayValue.includes('.')) return;
		if (input == 'Backspace' ) return updateScreen(displayValue = displayValue.substr(0,displayValue.length-1));
		displayValue = displayValue.concat(input);
		updateScreen();
		console.log(input);
	});
});

const operators = document.querySelectorAll('[data-operator]');
const operatorPress = operators.forEach((operator) => { 
	operator.addEventListener('click', () => {
		input = operator.getAttribute('data-operator');
		if (input == 'Escape') operate(0,0,input);
		else if (storedOperator == 'Enter' && displayValue != '') {
			total = displayValue;
			displayValue = ''
			storedOperator = input;
		} else if (!storedOperator) {
			total = displayValue;
			storedOperator = input;
			displayValue = ''
		} else {
			total = (Math.round(operate(total, displayValue, storedOperator)*100) / 100).toFixed(2);
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

let boardPress = document.addEventListener('keydown', (e) => {
	let toClick = document.querySelector(`button[data-key="${e.key}"]`);
	if (!toClick) toClick = document.querySelector(`button[data-operator="${e.key}"]`);
	toClick.click();
})


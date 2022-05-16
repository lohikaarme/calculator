
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (a, b, operator) => operator(a, b);

const keys = document.querySelectorAll('[data-key]');
keys.forEach((key) => {
	key.addEventListener('click', () => console.log(key.getAttribute('data-key')));
});

console.log(typeof keys)
console.log(keys)

console.log(operate(3,5,multiply));


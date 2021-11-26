const defaultValue = 0;
let currentValue = defaultValue;

// HTML elements
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const mulBtn = document.getElementById('mul');
const divBtn = document.getElementById('div');
const description = document.getElementById('description');
const answer = document.getElementById('answer');
const userInput = document.getElementById('input-number');
const tax = document.getElementById('tax');

// Helper function

function getUserInput() {
  return parseInt(userInput.value);
}

function createDescription(operator, beforeResult, calcNumber) {
  const calcDescription = `${beforeResult} ${operator} ${calcNumber}`;
  outputResult(currentValue, calcDescription);
}

// calculte function
const add = function () {
  const enteredNumber = getUserInput();
  const initialResult = currentValue;
  currentValue += enteredNumber;
  createDescription('+', initialResult, currentValue);
};

const sub = function () {
  const enteredNumber = getUserInput();
  const initialResult = currentValue;
  currentValue -= enteredNumber;
  createDescription('-', initialResult, currentValue);
};

const mul = function () {
  const enteredNumber = getUserInput();
  const initialResult = currentValue;
  currentValue *= enteredNumber;
  createDescription('×', initialResult, currentValue);
};

const div = function () {
  const enteredNumber = getUserInput();
  const initialResult = currentValue;
  currentValue /= enteredNumber;
  createDescription('÷', initialResult, currentValue);
};

const taxCalc = function () {
  const initialResult = currentValue
  currentValue = currentValue * 1.08;
  createDescription('×', initialResult, 1.08);
};

// Output result
const outputResult = function (result, text) {
  answer.textContent = result;
  description.textContent = text;
};

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', sub);
mulBtn.addEventListener('click', mul);
divBtn.addEventListener('click', div);
tax.addEventListener('click', taxCalc);


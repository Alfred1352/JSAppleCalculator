let displayValue = '';
let operator = '';

function appendNumber(number) {
  let display = document.getElementById('display');
  display.value += number;
}

function setOperator(opButton) {
  let display = document.getElementById('display');
  displayValue = parseFloat(display.value);
  operator = opButton.value;
  display.value = display.value;

  let operatorButtons = document.getElementsByClassName('operator');
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].classList.remove('active');
  }

  opButton.classList.add('active');

  if (operator.toLowerCase() === 'x') {
    operator = '*';
  } else if (operator.toLowerCase() === '÷') {
    operator = '/';
  } else {
    operator = opButton.value;
  }
}

function calculate() {
  let display = document.getElementById('display');
  let currentValue = parseFloat(display.value);

  let result;

  if (operator === '+') {
    result = displayValue + currentValue;
  } else if (operator === '-') {
    result = displayValue - currentValue;
  } else if (operator === '*') {
    result = displayValue * currentValue;
  } else if (operator === '/') {
    result = displayValue / currentValue;
  }

  display.value = result;
}

function clearAll() {
  let display = document.getElementById('display');
  display.value = '';
  displayValue = '';
  operator = '';

  let operatorButtons = document.getElementsByClassName('operator');
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].classList.remove('active');
  }
}

function toggleSign() {
  let display = document.getElementById('display');
  let currentValue = parseFloat(display.value);

  let newValue = -currentValue;

  display.value = newValue;
}

function calculatePercentage() {
  let display = document.getElementById('display');
  let currentValue = parseFloat(display.value);

  let percentageValue = currentValue / 100;

  display.value = percentageValue;
}
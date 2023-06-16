let displayValue = '';
let operator = '';
let currentMode = 'normal';

function getDisplayElement() {
  return currentMode === 'normal' ? document.getElementById('display') : document.getElementById('scientific-display');
}

function appendNumber(number) {
  let display = getDisplayElement();
  
  display.value += number;
}

function setOperator(opButton) {
  let display = getDisplayElement();
  displayValue = parseFloat(display.value);
  operator = opButton;
  display.value = '';

  // let operatorButtons = document.getElementsByClassName('operator');
  // for (let i = 0; i < operatorButtons.length; i++) {
  //   operatorButtons[i].classList.remove('active');
  // }

  //operator = opButton.value;

  if (opButton === 'x') {
    operator = '*';
  } else if (opButton === '÷') {
    operator = '/';
  } else {
    operator = opButton
  }
  display.value = '';
  //opButton.classList.add('active');
}

function calculate() {
  let display = getDisplayElement();
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
  displayValue = result;
}

function clearAll() {
  let display = getDisplayElement();
  display.value = '';
  displayValue = '';
  operator = '';

  let operatorButtons = document.getElementsByClassName('operator');
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].classList.remove('active');
  }
}

function toggleSign() {
  let display = getDisplayElement();
  let currentValue = parseFloat(display.value);

  let newValue = -currentValue;

  display.value = newValue;
}

function calculatePercentage() {
  let display = getDisplayElement();
  let currentValue = parseFloat(display.value);

  let percentageValue = currentValue / 100;

  display.value = percentageValue;
}

function toggleMode() {
  let calculator = document.querySelector('.calculator');
  calculator.classList.toggle('normal-mode');
  calculator.classList.toggle('scientific-mode');

  let normalCalculator = document.querySelector('.normal-calculator');
  let scientificCalculator = document.querySelector('.scientific-calculator');

  if (calculator.classList.contains('normal-mode')) {
    normalCalculator.style.display = 'block';
    scientificCalculator.style.display = 'none';
  } else {
    normalCalculator.style.display = 'none';
    scientificCalculator.style.display = 'block';
  }
}


// function updateCalculatorDisplay() {
//   const calculatorContainer = document.getElementsByClassName('calculator');
//   calculatorContainer.innerHTML = '';

//   if (currentMode === 'normal') {
//     //create the normal calculator elements
//     const form = document.createElement('form');

//     const displayDiv = document.createElement('div');
//     const displayInput = document.createElement('input');
//     displayInput.type = 'text';
//     displayInput.name = 'display';
//     displayInput.id = 'display';
//     displayDiv.appendChild(displayInput);

//     //Append the normal calculator elements to the container
//     form.appendChild(displayDiv);
//     calculatorContainer.appendChild(form);
//   } else if (currentMode === 'scientific') {
//     //create the scientific calculator elements
//     const form = document.createElement('form');

//     const displayDiv = document.createElement('div');
//     const displayInput = document.createElement('input');
//     displayInput.type = 'text';
//     displayInput.name = 'display';
//     displayInput.id = 'display';
//     displayDiv.appendChild(displayInput);

//     //Append the scientific calculator elements to the container
//     form.appendChild(displayDiv);
//     calculatorContainer.appendChild(form);
//   }
// }

// updateCalculatorDisplay()
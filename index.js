function calculate() {
  let display = document.getElementById('display');
  display.value = eval(display.value);
}

function toggleSign() {
  let display = document.getElementById('display');
  let currentValue = parseFloat(display.value);

  let newValue = -currentValue

  display.value = newValue
}

function calculatePercentage() {
  let display = document.getElementById('display');
  let currentValue = parseFloat(display.value);

  let percentageValue = currentValue / 100;

  display.value = percentageValue; 
}

let isInputEntered = false;
let displayValue = '';

function updateDisplay(value) {
  let display = document.getElementById('display');
  display.value = value;
} 

function clearAll() {
  let display = document.getElementById('display');
  display.value = '';

  isInputEntered = false;
  document.getElementById('clearButton').value = 'AC';
}

function clearLastInput() {
  let display = document.getElementById('display');
  let currentValue = display.value;
  if (currentValue.length > 0) {
    let lastCharacter = currentValue[currentValue.length - 1];
    let regex = /[0-9+\-*/.%]/;
  
    if (regex.test(lastCharacter)) {
    display.value = currentValue.slice(0, -1);
    }
  }
}

function handleInput() {
  let display = document.getElementById('display');
  let currentValue = display.value;

  if (currentValue.length === 0) {
    document.getElementById('clearButton').value = 'AC';
  } else if (currentValue === displayValue) {
    clearAll();
  } else {
    document.getElementById('clearButton').value = 'C';
  }
}

document.addEventListener('click', handleInput)
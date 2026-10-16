const calcDisplay = document.getElementById("calc-display");
const calcKeys = document.getElementById("calc-keys");

let currentInput = "0";
let storedValue = null;
let pendingOperator = null;
let startNewInput = false;

function updateDisplay(text) {
  calcDisplay.textContent = text;
}

function formatNumber(value) {
  return String(Math.round(value * 1e10) / 1e10);
}

function inputDigit(digit) {
  if (startNewInput) {
    currentInput = digit;
    startNewInput = false;
  } else {
    currentInput = currentInput === "0" ? digit : currentInput + digit;
  }

  updateDisplay(currentInput);
}

function inputDot() {
  if (startNewInput) {
    currentInput = "0.";
    startNewInput = false;
  } else if (!currentInput.includes(".")) {
    currentInput = currentInput + ".";
  }

  updateDisplay(currentInput);
}

function removeLastCharacter() {
  if (startNewInput) {
    return;
  }

  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  updateDisplay(currentInput);
}

function compute(left, operator, right) {
  if (operator === "+") {
    return left + right;
  }

  if (operator === "-") {
    return left - right;
  }

  if (operator === "*") {
    return left * right;
  }

  if (operator === "/") {
    return right === 0 ? NaN : left / right;
  }

  return right;
}

function clearCalculator() {
  currentInput = "0";
  storedValue = null;
  pendingOperator = null;
  startNewInput = false;
  updateDisplay("0");
}

function showError(message) {
  currentInput = "0";
  storedValue = null;
  pendingOperator = null;
  startNewInput = true;
  updateDisplay(message);
  console.log(message);
}

function chooseOperator(operator) {
  if (pendingOperator !== null && startNewInput) {
    pendingOperator = operator;
    return;
  }

  const inputValue = parseFloat(currentInput);

  if (storedValue === null) {
    storedValue = inputValue;
  } else if (pendingOperator !== null) {
    const result = compute(storedValue, pendingOperator, inputValue);

    if (!Number.isFinite(result)) {
      showError("Cannot divide by zero");
      return;
    }

    storedValue = result;
    currentInput = formatNumber(result);
    updateDisplay(currentInput);
  }

  pendingOperator = operator;
  startNewInput = true;
}

function calculateResult() {
  if (pendingOperator === null || startNewInput) {
    return;
  }

  const inputValue = parseFloat(currentInput);
  const result = compute(storedValue, pendingOperator, inputValue);

  if (!Number.isFinite(result)) {
    showError("Cannot divide by zero");
    return;
  }

  console.log(storedValue + " " + pendingOperator + " " + inputValue + " = " + formatNumber(result));

  currentInput = formatNumber(result);
  storedValue = null;
  pendingOperator = null;
  startNewInput = true;
  updateDisplay(currentInput);
}

calcKeys.addEventListener("click", function (event) {
  const key = event.target.closest("button");

  if (key === null) {
    return;
  }

  const action = key.dataset.action;

  if (action === "digit") {
    inputDigit(key.dataset.value);
  } else if (action === "dot") {
    inputDot();
  } else if (action === "operator") {
    chooseOperator(key.dataset.value);
  } else if (action === "equals") {
    calculateResult();
  } else if (action === "clear") {
    clearCalculator();
  } else if (action === "backspace") {
    removeLastCharacter();
  }
});

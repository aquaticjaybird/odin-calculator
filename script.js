const keypadContainerDiv = document.querySelector(".keypad-container");
const displayDiv = document.querySelector(".display");

let display = "";
let operandA = null;
let operandB = null;
let operatorStored = "";

function add(a, b) {
    return +a + +b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            throw new Error("None/non-existent operator");
    }
}

function appendToDisplay(value) {
    display += value;
    displayDiv.textContent = display;
}
function hasPointInDisplay() {
    return display.includes(".");
}
function clearDisplay() {
    display = "";
    displayDiv.textContent = "";
}

function handleKeypadInput(e) {
    const firstClass = e.target.classList[0];
    switch (firstClass) {
        case "btn-num":
            const num = e.target.textContent;
            handleNumInput(num);
            return;
        case "btn-operator":
            const operatorData = e.target.dataset.operatorType;
            handleOperatorInput(operatorData);
            return;
        default:
            return;
    }
}
function handleNumInput(num) {
    if ((num !== ".") || (num === "." && !hasPointInDisplay())) {
        appendToDisplay(num);
    }
}
function handleOperatorInput(operator) {
    if (operandA === null) {
        operandA = display;
        clearDisplay();
    }
    operatorStored = operator;
}

keypadContainerDiv.addEventListener("click", handleKeypadInput);
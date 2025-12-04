const keypadContainerDiv = document.querySelector(".keypad-container");
const displayDiv = document.querySelector(".display");

let display = "";
let operandA = null;
let operandB = null;
let operatorStored = "";

function add(a, b) {
    return a + b;
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
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
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

function handleKeypadInput(e) {
    const firstClass = e.target.classList[0];
    switch (firstClass) {
        case "btn-num":
            const num = e.target.textContent;
            handleNumInput(num);
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

keypadContainerDiv.addEventListener("click", handleKeypadInput);
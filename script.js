const keypadNumRows = document.querySelectorAll(".keypad-numerical");
const displayDiv = document.querySelector(".display");

let display = "";
let operandA = 0;
let operandB = 0;
let operator = "";

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

function handleNumInput(e) {
    console.log(`${e.target.textContent}`);
}

keypadNumRows.forEach(element =>
    element.addEventListener("click", handleNumInput));
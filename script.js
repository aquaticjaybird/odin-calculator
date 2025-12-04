const keypadNumRows = document.querySelectorAll(".keypad-numerical");

let display;
let operandA;
let operandB;
let operator;

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

function handleNumInput(e) {
    console.log(`${e.target.textContent}`);
}

keypadNumRows.forEach(element =>
    element.addEventListener("click", handleNumInput));
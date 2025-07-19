let num1;
let num2;
let op;
let nums;

const display = document.querySelector(".screen");
const buttonsNode = document.querySelectorAll(".btn");
const arr = Array.from(buttonsNode);
buttonsNode.forEach(button => {
    if (button.textContent !== "=" && button.textContent !== "."){
        button.addEventListener ("click", () => {
            populateAndMakeVars(button);
        });
        button.addEventListener ("click", () => {
            console.log(finalString);
        });
    }
});

const clearButton = document.querySelector(".clearbtn");
clearButton.addEventListener("click", () => {
    finalString = "";
    op = "";
    num1 = "";
    num2 = "";
    countOps = 0;
});

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    nums = finalString.split(op);
    num1 = nums[0];
    num2 = nums[1];
    let result = operate(op, Number(num1), Number(num2));
    display.textContent = result;
    finalString = String(result);
    op = "";
    num1 = "";
    num2 = "";
    countOps = 0;
});

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num1){
    return num1 / num2;
}

function operate(op, num1, num2){
    switch(op){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

let finalString = "";
let ops = ['*', '/', '+', '-'];
let countOps = 0;
function populateAndMakeVars(btn){
    let btnText = btn.textContent;
    if (display.textContent === "" && !ops.includes(btnText)){
        display.textContent += btnText;
        finalString += btnText;
    }
    else if (display.textContent !== "" && ops.includes(btnText) && countOps === 0){
        display.textContent += btnText;
        countOps++;
        finalString += btnText;
        op = btnText;
    }
    else if (display.textContent !== "" && !ops.includes(btnText)){
        display.textContent += btnText;
        finalString += btnText;
    }
}

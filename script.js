let currentInput = '0';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = number.toString();
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function cleanInput() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function changeSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function operation(selectedOperator) {
    if (operator !== '' && previousInput !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    console.log(result)
    console.log(num1)
    console.log(num2)


    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Cannot divide by zero');
                cleanInput();
                return;
            }
            break;
        default:
            break;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('input').value = currentInput;
}

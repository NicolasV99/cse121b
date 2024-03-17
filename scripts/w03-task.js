/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}

function addNumbers(addNumber1, addNumber2){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);
}

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(subtractNumber1, subtractNumber2){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
}

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (factor1, factor2) => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

}

/* Open Function Use - Divide Numbers */

function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(dividend, divisor){
    let dividend = Number(document.querySelector('#dividend').value);
    let dividend = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
}

/* Decision Structure */

document.getElementById('#getTotal').addEventListener('click', function(){

    let subtotal = parseFloat(document.getElementById('#subtotal').value);
    let isMember = document.getElementById('#member').ariaChecked;

    if(isMember){
        subtotal *= 0.8;
    }

    let totalSpan = document.getElementById('#total');
    totalSpan.textContent = `$ ${subtotal.toFixed(2)}`;

});



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

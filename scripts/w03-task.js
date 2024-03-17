/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);



/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

function totalCalculation() {
    let checkBox = document.getElementById('member').checked;
    let subtotal = parseFloat(document.querySelector('#subtotal').value);

    if (checkBox) {
        let total = subtotal - (subtotal * 0.2);
        total = Number.parseFloat(total).toFixed(2);
        document.querySelector('#total').innerHTML = `$ ${total}`;
    } else {
        subtotal = Number.parseFloat(subtotal).toFixed(2);
        document.querySelector('#total').innerHTML = `$ ${subtotal}`;
    }
}

document.querySelector('#getTotal').addEventListener('click', totalCalculation);


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */

const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');

/* Output Evens Only Array */

const evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((sum, num) => sum + num);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */

const multipliedArray = numbersArray.map(num => num * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multipliedArray.reduce((sum, num) => sum + num, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;

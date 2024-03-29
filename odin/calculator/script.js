// initial values
let expression = ''
let operator = '';
let a = null;
let b = null;
let disVal = 0;
const buttonsArr = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '/', 'C', '='];
// const re = /(\d*)\.*(\d?).*([\+\-\/\*])\.*(\d*)\.*(\d?)/;


// functions
const clear = () => {
    expression = '';
    operator = '';
    a = null;
    b = null;
    sign = '';
    display.value = 0;
    // console.log([arr, a, b]);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? 'Err' : (a / b);
const operate = (oprtr, arr) => {
    switch (oprtr) {
        case '+':
            return arr.reduce(add);
        case '-':
            return arr.reduce(subtract);
        case '*':
            return arr.reduce(multiply);
        case '/':
            return arr.reduce(divide);
    }
}

// calculator interface
const buttons = document.querySelector('.buttons');
const display = document.getElementById('display');
display.value = disVal;
clear();


const displayCalc = () => {

    buttonsArr.forEach((element) => {
        const button = document.createElement('div');
        button.classList.add('button');
        button.id = `char_${element}`;
        button.innerHTML = `<span>${element}</span>`;
        button.style.cssText = ' \
        width: 23%; \
        height: 18%; \
        border-radius: 8px; \
        margin: auto; \
        text-align: center; \
        align-content: center; \
        font-size: 40px; \
        font-weight: bold; \
        background-color: #ffa533cc; \
        box-shadow: 2px 2px #bbbc \
        ';
        if (typeof element === 'string') {
            button.style.backgroundColor = 'rgba(151, 151, 203, 0.75)';
        }
        if (['=', 'C', 0].includes(element)) {
            button.style.width = '48%';
        }
        buttons.appendChild(button);

    })
}

displayCalc();

// interactive calculations


buttonsArr.forEach((element) => {

    const button = document.getElementById(`char_${element}`);
    button.addEventListener('click', () => {

        if (element === 'C') {
            return clear();
        }

        expression += element;
        if (['+', '-', '*', '/'].includes(element)) {
            if (!a) {
                a = b;
                b = null;
            }
            if (a && b) a = operate(operator, [a, b])
            if (a) operator = element;
            disVal = a;
            expression = '';
        } else {
            if (element != '=') b = parseFloat(expression);
            disVal = b;
        }
        
        if (element === '=') {
            if (b) {
                a = operate(operator, [a, b]);
                b = null;
            }
            disVal = a;
        }
        if(disVal > 999999999999){
            display.value = 'Err';
        } else {
            display.value = Math.round(disVal * 100) / 100;
        }
    })
})



// 12 + 7 - 5 * 3 = should yield 42

console.log(operate('+', [0, 4]));
console.log(operate('-', [0, 4]));
console.log(operate('*', [0, 4]));
console.log(operate('/', [0, 4]));

console.log(operate('+', [1, 4]));
console.log(operate('-', [1, 4]));
console.log(operate('*', [1, 4]));
console.log(operate('/', [1, 4]));

console.log(operate('+', [4, 1]));
console.log(operate('-', [4, 1]));
console.log(operate('*', [4, 1]));
console.log(operate('/', [4, 1]));

console.log(operate('+', [4, 0]));
console.log(operate('-', [4, 0]));
console.log(operate('*', [4, 0]));
console.log(operate('/', [4, 0]));


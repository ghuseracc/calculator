function add(a,b) {
    return parseInt(a + b);
};

function subtract(a,b) {
    return parseInt(a - b);
};

function multiply(a,b) {
    return parseInt(a * b);
};

function divide(a,b) {
    return parseInt(a / b);
};

function operate(operator,a,b) { 
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
    }
};

const container = document.querySelector('#container')

const content = document.querySelector('.content');
content.style.width = '600px'
content.style.height = '600px';

let num = 9;

for (i = 0 ; i < 3 ; i++) {
    for (j = 0 ; j < 3 ; j++) {
    const btn = document.createElement('button');
    btn.className = 'grid';
    btn.style.outline = '1px solid black';
    btn.style.width = '200px';
    btn.style.height = '200px';
    btn.style.backgroundColor = 'white';
    btn.textContent = num.toString();
    content.appendChild(btn);
    num--;
    }
}
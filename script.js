function add(num1, num2) {
    let answer = num1+num2
    return answer
}

function subtract(num1, num2) {
    let answer = num1-num2
    return answer
}

function multiply(num1, num2) {
    let answer = num1*num2
    return answer
}

function divide(num1, num2) {
    let answer = num1/num2
    return answer
}

let calculator = document.getElementById('calculator-main')
let thing = document.getElementById('true-number')
let display = document.getElementById('display')
let clear = document.querySelector('.clear')
let displayText = display.textContent
let operative = display.textContent
let operator = add()
for(let i = 0; i <= 9; i++) {
   let number = document.createElement('div')
   number.setAttribute('class', 'number')
   thing.appendChild(number)
   number.textContent = i
   number.addEventListener('click', (e) => {
       display.textContent += number.textContent
        operative = display.textContent
       return operative
   })
}

let multiplication = document.createElement('div')
multiplication.textContent = 'x'
multiplication.setAttribute('class', 'number')
thing.appendChild(multiplication)
multiplication.addEventListener('click', (e) => {
    display.textContent = 'x'
    operator = multiply()
    return operator
})


let division = document.createElement('div')
division.textContent = '/'
division.setAttribute('class', 'number')
thing.appendChild(division)
division.addEventListener('click', (e) => {
    display.textContent = '/'
    operator = divide()
    return operator
})

let subtraction = document.createElement('div')
subtraction.textContent = '-'
subtraction.setAttribute('class', 'number')
thing.appendChild(subtraction)
subtraction.addEventListener('click', (e) => {
    display.textContent = '-'
    operator = subtract()
    return operator
})

let addition = document.createElement('div')
addition.textContent = '+'
addition.setAttribute('class', 'number')
thing.appendChild(addition)
addition.addEventListener('click', (e) => {
    display.textContent  = '+'
    operator = add()
    return operator
})

function operate(num1, operator, num2) {
    let answer = operator(num1,num2)
    return answer
}

let equals = document.createElement('div')
equals.textContent = '='
equals.setAttribute('class', 'number')
thing.appendChild(equals)
equals.addEventListener('click', (e) => {
    display.textContent =  operate(operative, operator, operative )

})

clear.addEventListener('click', (e) => {
    display.textContent = ''
})








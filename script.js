function add(num1, num2) {
    let answer = num1+num2
    return answer
} // function for addition

function subtract(num1, num2) {
    let answer = num1-num2
    return answer
} // function for subtraction

function multiply(num1, num2) {
    let answer = num1*num2
    return answer
} // function for multiplication

function divide(num1, num2) {
    let answer = num1/num2
    return answer
} // function for division

let calculator = document.getElementById('calculator-main')
let thing = document.getElementById('true-number')
let display = document.getElementById('display')
let clear = document.querySelector('.clear')
let operator
let operative1
let operative2
// initialization of all html variables




for(let i = 0; i <= 9; i++) {
   let number = document.createElement('div')
   number.setAttribute('class', 'number')
   thing.appendChild(number)
   number.textContent = i
   number.addEventListener('click', (e) => {
       if (display.textContent == 'x'|| display.textContent == '/' ||display.textContent == '+' || display.textContent == '-') 
       { display.textContent = ''}
       display.textContent += number.textContent
       if (operative1 == undefined) {
       operative1 = display.textContent
       return operative1
       } else if (operative1 != undefined && display.textContent != 'x' 
       ||display.textContent != '/' || display.textContent != '+' || display.textContent != '-'
        )
        {
         operative2 = display.textContent
        return operative2
       }
   })
} /* creates all numbers and adds an event listener that changes the 
display when clicked */

let multiplication = document.createElement('div')
multiplication.textContent = 'x'
multiplication.setAttribute('class', 'number')
multiplication.setAttribute('id', 'multiplication')
thing.appendChild(multiplication)
multiplication.addEventListener('click', (e) => {
    display.textContent = 'x'
    operator = 'x'
    return operator
}) //multiplication attribute


let division = document.createElement('div')
division.textContent = '/'
division.setAttribute('class', 'number')
division.setAttribute('id', 'division')
thing.appendChild(division)
division.addEventListener('click', (e) => {
    display.textContent = '/'
   operator = '/'
    return operator
}) //division attribute

let subtraction = document.createElement('div')
subtraction.textContent = '-'
subtraction.setAttribute('class', 'number')
subtraction.setAttribute('id', 'subtraction')
thing.appendChild(subtraction)
subtraction.addEventListener('click', (e) => {
    display.textContent = '-'
    operator = '-'
    return operator
}) //subtraction attribute

let addition = document.createElement('div')
addition.textContent = '+'
addition.setAttribute('class', 'number')
addition.setAttribute('id', 'addition')
thing.appendChild(addition)
addition.addEventListener('click', (e) => {
    display.textContent  = '+'
    operator = '+'
    return operator
}) //addition attribute

function operate(num1, operator, num2) {
    let answer = operator(num1,num2)
    return answer
} //function that calls on previous operators

let equals = document.createElement('div')
equals.textContent = '='
equals.setAttribute('class', 'number')
thing.appendChild(equals)
equals.addEventListener('click', (e) => {
    if (operator == 'x') {
        display.textContent = multiply(operative1, operative2)
    } else if (operator == '/') {
        if (operative2 == 0) { alert('Cannot divide by zero')}
        else {
        display.textContent = divide(operative1,operative2)
        }

    } else if (operator == '-') {
        display.textContent = subtract(operative1,operative2)

    } else if (operator == '+') {
        Number(operative1)
        Number(operative2)
        display.textContent = add(operative1,operative2)

    }
    operative1 = display.textContent

})

clear.addEventListener('click', (e) => {
    display.textContent = ''
    operative1 = undefined
    operative2 = undefined
})








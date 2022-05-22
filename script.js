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
let thing = document.getElementById('true-number') // where the numbers and operations are displayed
let display = document.getElementById('display') // where the user inputs appear
let clear = document.querySelector('.clear')
// initialization of all html elements

let operator //(x,+,-,or /)
let operative1 /*(the first number inputted into the 
calculator before pressing an operator)*/
let operative2 // number inputted after operator
let finalAnswer // the computation of the first pair of numbers
//declaration of all variable to be used in computations




for(let i = 0; i <= 9; i++) {
   let number = document.createElement('div')
   number.setAttribute('class', 'number')
   thing.appendChild(number)
   number.textContent = i
   number.addEventListener('click', (e) => {
    if (finalAnswer != undefined && operator == undefined) {
        finalAnswer = undefined
        display.textContent = ''
    }
       if (display.textContent == 'x'|| display.textContent == '/' ||display.textContent == '+' || display.textContent == '-') 
       { display.textContent = ''}
       display.textContent += number.textContent
       if (operator == undefined) {
       operative1 = display.textContent
       return operative1 
       } else if (operative1 != undefined && display.textContent != 'x' 
       ||display.textContent != '/' || display.textContent != '+' || display.textContent != '-'
        )
        {
         operative2 = display.textContent
        return operative2
       }  //to differentiate between the two operatives
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
    if (operative1 != undefined && operative2 != undefined) {
        if (operator == 'x') {
            finalAnswer = multiply(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '/') {
            finalAnswer = divide(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '+') {
            finalAnswer = add(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '-') {
            finalAnswer = subtract(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
    } /*this code (which is repeated for all operations) allows the first pair
    of operatives to be computed before moving on to the following operation*/



})
multiplication.addEventListener('click', (e) => {
    if (finalAnswer != undefined) {
        operative1 = finalAnswer
        return operative1
    }
})
multiplication.addEventListener('click', (e) => {
    operator = 'x'
    return operator
})
//multiplication attribute


let division = document.createElement('div')
division.textContent = '/'
division.setAttribute('class', 'number')
division.setAttribute('id', 'division')
thing.appendChild(division)
division.addEventListener('click', (e) => {
    display.textContent = '/'
    if (operative1 != undefined && operative2 != undefined) {
        if (operator == 'x') {
            finalAnswer = multiply(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '/') {
            finalAnswer = divide(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '+') {
            finalAnswer = add(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '-') {
            finalAnswer = subtract(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
    }
})
division.addEventListener('click', (e) => {
    if (finalAnswer != undefined) {
        operative1 = finalAnswer
        return operative1
    }
})
division.addEventListener('click', (e) => {
    operator = '/'
    return operator
})
 //division attribute

let subtraction = document.createElement('div')
subtraction.textContent = '-'
subtraction.setAttribute('class', 'number')
subtraction.setAttribute('id', 'subtraction')
thing.appendChild(subtraction)
subtraction.addEventListener('click', (e) => {
    display.textContent = '-'
    if (operative1 != undefined && operative2 != undefined) {
        if (operator == 'x') {
            finalAnswer = multiply(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '/') {
            finalAnswer = divide(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '+') {
            finalAnswer = add(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '-') {
            finalAnswer = subtract(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
    }



})
subtraction.addEventListener('click', (e) => {
    if (finalAnswer != undefined) {
        operative1 = finalAnswer
        return operative1
    }
})
subtraction.addEventListener('click', (e) => {
    operator = '-'
    return operator
})
 //subtraction attribute

let addition = document.createElement('div')
addition.textContent = '+'
addition.setAttribute('class', 'number')
addition.setAttribute('id', 'addition')
thing.appendChild(addition)
addition.addEventListener('click', (e) => {
    display.textContent  = '+'
    if (operative1 != undefined && operative2 != undefined) {
        if (operator == 'x') {
            finalAnswer = multiply(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '/') {
            finalAnswer = divide(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '+') {
            finalAnswer = add(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
        if (operator == '-') {
            finalAnswer = subtract(operative1,operative2)
            operative1 = finalAnswer
            return operative1
        }
    }

})
addition.addEventListener('click', (e) => {
    if (finalAnswer != undefined) {
        operative1 = finalAnswer
        operative1 = finalAnswer
            return operative1
    }
})
addition.addEventListener('click', (e) => {
    operator = '+'
    return operator
})
 //addition attribute




let equals = document.createElement('div')
equals.textContent = '='
equals.setAttribute('class', 'number')
thing.appendChild(equals)
equals.addEventListener('click', (e) => {
    if (operator == 'x') {
        display.textContent = multiply(operative1, operative2)
        finalAnswer = multiply(operative1, operative2)
        operator = undefined
        return finalAnswer
    } else if (operator == '/') {
        if (operative2 == 0) { alert('Cannot divide by zero')}
        else {
        display.textContent = divide(operative1,operative2)
        finalAnswer = divide(operative1,operative2)
        operator = undefined
        return finalAnswer
        }

    } else if (operator == '-') {
        display.textContent = subtract(operative1,operative2)
        finalAnswer = subtract(operative1,operative2)
        operator = undefined
        return finalAnswer

    } else if (operator == '+') {
       operative1 = Number(operative1)
       operative2 = Number(operative2)
       finalAnswer = add(operative1,operative2)
        display.textContent = finalAnswer
        operator =  undefined
        return finalAnswer
    }
    operative1 = display.textContent

})

clear.addEventListener('click', (e) => {
    display.textContent = ''
    operative1 = undefined
    operative2 = undefined
    operator = undefined
})

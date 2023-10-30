


// 1. Write a function that multiplies a number by 2 and divides it by 3 -->

function thefunction (aNumber) {
    return aNumber * aNumber / aNumber

}

let equation = thefunction (5 * 3) / 3

console.log (equation)




// 2. Write the function from 1. as a fat arrow function

const numbers = [ "1","2","3","4","5", "6"]

numbers.forEach (number => {
    console.log (number)
})




// 3. Write a function that takes a name, age, and height and writes a console log using all of them

function nameAndAgeAndHeight (name, age, height) {
console.log ( ` My name is ${name} and I'm ${age} years old, standing ${height} in height.` )
}

nameAndAgeAndHeight ("Autumn" , 31, "5'2" )



// 4. Write two functions, add(a, b) and multiply(a, b) that each take two variables and returns the summed or multiplied value.

function firstFunction (number1, number2) {
    return number1 + number2
}
let problem = firstFunction (10 , 12)
console.log (problem)


//------------------------------

function secondFunction (Number1, Number2) {
 return Number1 * Number2 
}

let theAnswer = secondFunction (10 , 10)
console.log (theAnswer)






// BONUS:  Write a function that USES functions from 4. (add and multiply) to take a value and adds 2 and multiplies by 4.
// So addTwoMultiplyByFour(2) would return 16 ((2 + 2) x 4) -->
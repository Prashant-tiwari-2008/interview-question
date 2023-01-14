console.log("Reduce function")
//

//first example
const joinedString = (msg) => msg.reduce((acc, curV) => {
    return acc + curV
})

const message = ["JavaScript ", "is ", "fun."];
// console.log(joinedString(message))

//second example
const sum = (numbers) => numbers.reduce((ini, cur) => ini + cur)

const number = [1, 2, 3, 4, 5, 6, 7]
// console.log(sum(number))

// third example - substracting numbers in Array
// subtract all numbers from first number
const diff = (num) => num.reduce((acc, curr) => acc - curr)

// substract all numbers from given numbers -- Second argument is the initial value for the accumulator(Acc)
const diff1 = (num, salary) => num.reduce((acc, cur) => acc - cur, salary)
const numbers = [1800, 100, 300, 100];

// console.log((diff(numbers)))
// console.log((diff1(numbers,5000)))


//Fourth example -- Remove duplicate item from array
let rmvduplicate = (number) => number.reduce((accumulator, curr) => {
    if (accumulator.indexOf(curr) === -1) {
        accumulator.push(curr)
    }
    return accumulator
}, [])

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// console.log(rmvduplicate(ageGroup))


// Five Example --- Grouping Objects by a property
let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

const groupby = (objArr,property) =>{
    
}
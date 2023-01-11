// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

const sumAll = (num) => {
    if (num === 1){
        return 1;
    }
    return num + sumAll(num-1)
}

console.log(sumAll(6))
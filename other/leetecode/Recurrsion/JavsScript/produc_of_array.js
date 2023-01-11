// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

const productofArray = (array) => {
    if (array.length === 0) {
        return 1;
    }

    return array.pop() * productofArray(array); 
    return array.shift() * productofArray(array)
}


console.log(productofArray([1, 2, 3,4]))
console.log(productofArray([1, 2, 3, 10]))
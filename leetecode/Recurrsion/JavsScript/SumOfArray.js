const sumOfArray = (array) => {
    if(array.length === 1){
        return array[0]
    }
    return array.pop() + sumOfArray(array)
}

const data = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sumOfArray(data))
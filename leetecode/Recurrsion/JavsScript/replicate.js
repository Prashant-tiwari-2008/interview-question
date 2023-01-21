// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// first way 
const replicate_ = (a, b) => {
    if (a > 0) {
        return Array(a).fill(b)
    } else {
        return []
    }
}

//second way
const replicate = (times, number) => {
    if (times > 0) {
        return [number].concat(replicate(times -1,number))
    }
    return [];
}


console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // [] 
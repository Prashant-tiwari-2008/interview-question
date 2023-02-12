const compact = (array) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            newArray.push(array[i])
        }
    }
    return newArray
}


const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data))
const unique = (Array) => {
    const newArray = [];
    for (let i = 0; i < Array.length; i++) {
        if (!newArray.includes(Array[i])) {
            newArray.push(Array[i])
        }
    }
    return newArray
}

const data = [1, 2, 3, 4, 5, 1, 2]
console.log(unique(data))
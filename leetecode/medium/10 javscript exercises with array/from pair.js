
const fromPairs = (Array) => {
    let newObject = {};
    for (let i = 0; i < Array.length; i++) {
        newObject[Array[i][0]] = Array[i][1]
    }
    return newObject;
}

const data = [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
console.log(fromPairs(data))
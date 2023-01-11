console.log("Fill")
// 1.Fill. Write a function that creates a new array with given values

function newArray(lengthofArray, value) {
    const data = []
    for (let i = 0; i < lengthofArray; i++) {
        data.push(value)
    }
    return data;
}

console.log(newArray(3, 'a'));


//==With predefine method
const fill = (length, value) => new Array(length).fill(value);
console.log(fill(4,'b'))
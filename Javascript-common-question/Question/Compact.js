console.log("Compact string");
// Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null

function compact1(mixArray) {
    let trueArray = [];
    for (let i = 0; i < mixArray.length; i++) {
        if (mixArray[i]) {
            trueArray.push(mixArray[i])
        }
    }
    return trueArray;
}

function compact2(mixArray) {
    return mixArray.filter((ele) => ele)
}

const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data))
// console.log(compact1(data))
console.log(compact2(data))
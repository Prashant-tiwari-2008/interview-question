const isEqual = (firstArray, secondArray) => {
    let test = false;
    if (firstArray.length === secondArray.length) {
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] === secondArray[i]) {
                test = true;
            } else {
                test = false
                break;
            }
        }
    } else {
        return false
    }
    return test
}


const arr1 = [1, 2, 3, 4,6];
const arr2 = [1, 2, 3, 4, 6];
const arr3 = [1, 2, 3, 5, 6];
const arr4 = [1, 2, 3, 4, 5];

console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
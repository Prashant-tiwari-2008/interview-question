console.log("Is Equal");
// 7. IsEqual. Write a function that compares two arrays and returns true if they are identical.

//first solution ==>> simple solution 
function isEqual(arr, arr1) {
    if (arr.length !== arr1.length) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr1[i]) {
            return false
        }
    }
    return true;
}

//Second method ==>> with map
function isEqual1(arr, arr1) {
    let compare = arr.map((ele, index) => ele === arr1[index])

    return !compare.includes(false)
}

//third mothod ===>>> wiht stringfy
function isEqual2(arr, arr1) {
    return arr.toString() === arr1.toString()
}

//foutrht mthod ==>>> with every function
function isEqual3(arr, arr1) {
    return arr.every((ele, index) => ele === arr1[index])
}

//fivth way ==>> with some function ===>> wrong test again
//! need to test it again
function isEqual4(arr, arr1) {
    let data = arr.some((element, index) => {
        debugger
        element !== arr1[index]
    })
    console.log(data);
    return data
}

//six way ==>> with find method
function isEqual5(arr, arr1) {
    let compare = arr.find((ele, index) => ele !== arr1[index])

    if (compare !== undefined) {
        return false
    } else {
        return true
    }
}

//seven way ==>> with filter method
function isEqual6(arr, arr1) {
    let compare = arr.filter((ele, index) => ele !== arr1[index])
    if (compare.length) {
        return true
    } else {
        return false;
    }
}


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 3, 6, 5];
const arr4 = [1, 2, 3, 4, 8, 9];

// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

// console.log(isEqual1(arr1, arr2)); // true
// console.log(isEqual1(arr1, arr3)); // false
// console.log(isEqual1(arr1, arr4)); // false

// console.log(isEqual2(arr1, arr3)); // false
// console.log(isEqual2(arr1, arr2)); // true
// console.log(isEqual2(arr1, arr4)); // false

// console.log(isEqual3(arr1, arr2)); // true
// console.log(isEqual3(arr1, arr3)); // false
// console.log(isEqual3(arr1, arr4)); // false

// console.log(isEqual4(arr1, arr2)); // true
// console.log(isEqual4(arr1, arr3)); // false
// console.log(isEqual4(arr1, arr4)); // false

// console.log(isEqual5(arr1, arr2)); // true
// console.log(isEqual5(arr1, arr3)); // false
// console.log(isEqual5(arr1, arr4)); // false

// console.log(isEqual6(arr1, arr2)); // true
// console.log(isEqual6(arr1, arr3)); // false
// console.log(isEqual6(arr1, arr4)); // false

console.log("Intersection of Array")

// Normal method
function intersection(arr1, arr2) {
    let length = arr1.length > arr2.length ? arr1.length : arr2.length;
    let intersectionArray = []

    for (let i = 0; i < length; i++) {
        if (arr1.includes(arr2[i])) {
            intersectionArray.push(arr2[i])
        }
    }
    return intersectionArray
}

// second Array
const intersection1 = (...arrays) => {
    const result = arrays[0].filter((ele) => {
        const indexOfElement = arrays[1].indexOf(ele);
        if (indexOfElement >= 0) {
            return ele;
        }
    });
    if (arrays.length > 2) {
        intersection1(result, ...arrays.slice(2, arrays.length));
    }
    return Array.from(new Set(result));
}

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']

console.log(intersection1(arr1, arr2)) // [2]
console.log(intersection1(arr3, arr4, arr5)) // ['b']
console.log(intersection1(arr6, arr7, arr8)) // ['b', 'e']
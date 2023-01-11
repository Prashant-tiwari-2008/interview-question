console.log("Flatter")
// https://www.techiedelight.com/recursively-flatten-nested-array-javascript/
// 8. Flatten. Write a function that turns a deep array into a plain array. 

//first solution -- with the flat method
const flatten = (arr) => {
    return arr.flat(Infinity)
}

//Second solution -- reduce
function flatten1(arr) {
    return arr.reduce((acc, cv) => acc.concat(Array.isArray(cv) ? flatten1(cv) : cv), [])
}


//third solution-
function flatten3(arr) {
    const newArry = [];
    for (ele of arr) {
        if (Array.isArray(ele)) {
            newArry.push(...flatten3(ele))
        } else {
            newArry.push(ele)
        }
    }
    return newArry
}

//using generator function
function* flatten4(arr) {
    for(ele of arr){
        Array.isArray(ele) ? yield* flatten(ele) : yield ele;
    }
}


const data = [1, 2, [3, 4, [5]]];
// console.log(flatten(data)); // [1, 2, 3, 4, 5]
// console.log(flatten1(data)); // [1, 2, 3, 4, 5]
// console.log(flatten3(data)); // [1, 2, 3, 4, 5]
// console.log([...flatten4(data)]); // [1, 2, 3, 4, 5]
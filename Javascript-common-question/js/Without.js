console.log("without")
// 5. Without. The method should return an array without listed values. Let’s try to find a solution when input data only primitive data types.

// First solution
const without = (array, ...remaing) => {
    let newArray = [];
    for (ele of array) {
        if (!remaing.includes(ele)) newArray.push(ele)
    }
    return newArray;
}

const without1 = (array, ...remaing) => {
    console.log("with filter")
    return array.filter((ele) => !remaing.includes(ele))
}

const without2 = (array, ...remaining) => array.reduce((acc, cv) => {
     if(!remaining.includes(cv)){
        acc.push(cv)
     }
    return acc
}, [])


const data = [1, 2, 3, 4, 1, 2];
// console.log(without(data, 1, 2)); // [3,4]
// console.log(without1(data, 1, 2)); // [3,4]
// console.log(without2(data, 1, 2)); // [3,4]
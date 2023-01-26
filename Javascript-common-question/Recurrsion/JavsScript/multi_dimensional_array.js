// Given a multi-dimensional integer array, return the total number of integers stored inside this array

const multiArray = (array) => {
    if (array.length === 0) return 0;
    let total = 0;
    let newArray = [];
    for (ele of array) {
        if (Array.isArray(ele)) {
            total += multiArray(ele)
            // multiArray(ele)
        }
        else if (Number.isInteger(ele)) {
            total += 1;
            // newArray.push(ele);
        }
    }
    return total;
}

console.log(multiArray([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7
// 

// function totalIntegers(array){
// 	if(array.length === 0) return 0;

// 	let total = 0;
// 	let first = array.shift();

// 	if (Array.isArray(first)){
// 		total += totalIntegers(first); 
// 	} else if (Number.isInteger(first)) {
// 		total += 1;
// 	}

// 	return total + totalIntegers(array);
// }

// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7
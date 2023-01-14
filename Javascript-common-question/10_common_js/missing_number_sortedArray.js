console.log("find the missing number from the sorted array")

//first method
const missingnumber = (arr) => {
    let missing = []
    for (let i = 0; i < (arr.length - 1); i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            missing.push(arr[i] + 1);
        }
    }
    return missing;
}

//second method
function missingnumber1(arr) {
    let missing = [];
    let min = Math.min.apply(Math, arr);
    let max = Math.max.apply(Math, arr);
    for (let i = min; i < max; i++) {
        if (!arr.includes(i)) {
            missing.push(i)
        }
    }
    return missing;
}

//third method -- not right solution
function missingnumber2(arr) {
    let missing = []
    for (var i = 1; i <= arr.length; i++) {
        if (arr.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    return missing
}

let arr = [1,3, 4, 6, 7, 8, 10];
console.log(missingnumber(arr))
console.log(missingnumber1(arr))
console.log(missingnumber2(arr))
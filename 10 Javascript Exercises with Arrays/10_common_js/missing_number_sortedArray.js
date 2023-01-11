console.log("find the missing number from the sorted array")

const missingnumber = (arr) => {
    let missing = []
    for (let i = 0; i < (arr.length -1); i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            missing.push(arr[i] + 1);
        }
    }
    return missing;
}



let arr = [1, 3, 4, 6, 7, 8, 10];
console.log(missingnumber(arr))
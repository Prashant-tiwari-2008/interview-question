console.log("missing number from unsorted array");


// NEED TO UNDERSTAND
const missing = (a) => {
    let l = a.length;
    let sum = 1;
    for (let i = 2; i <= (l + 1); i++) {
        sum = sum + i
        sum = sum - a[i - 2];
    }
    return sum;
}


let ar = [2, 7, 8, 5, 1, 4, 3, 6];
console.log(missing(ar))
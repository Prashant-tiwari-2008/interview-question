console.log("Find the nth larget number in unsorted array")

const nthlarget = (arr, n) => {
    arr.sort((a, b) => a - b);
    return (arr[arr.length - n])
}


let arr = [12, 34, 21, 14, 67, 35, 64, 25]
console.log(nthlarget(arr, 2))
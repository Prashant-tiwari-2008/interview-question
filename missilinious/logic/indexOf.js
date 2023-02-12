//  how to get the index of array element without iteration
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
value = 4;

function getIndexOf(array, value) {
    let index = 0;
    let length = array.length + 1;
    while (length >= index) {
        debugger
        let mid = Math.trunc((index + length) / 2)
        if (array[mid] === value) {
            return mid
        } else if (array[mid] < value) {
            index = mid + 1
        } else {
            length = mid - 1
        }
    }
}

console.log(getIndexOf(arr, value))
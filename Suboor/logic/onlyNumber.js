// Contain only Number
    let randomArray = [1, 2, 3, 4, '1', '2', '2', 3, NaN, false]
    let randomArray1 = [1, 2, 3, 4]

function checkNumber(arr) {
    let isOnlyNumber = true;
    for (ele of arr) {
        if (Number.isNaN(parseInt(ele))) {
            return false
        } else {
            isOnlyNumber = true
        }
    }
    return isOnlyNumber;
}
console.log(checkNumber(randomArray))
console.log(checkNumber(randomArray1))
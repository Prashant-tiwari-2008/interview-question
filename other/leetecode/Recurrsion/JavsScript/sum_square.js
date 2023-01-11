// Write a function that sums squares of numbers in list that may contain more lists

const SumSquares = (array) => {
    if (array.length === 0) return 0;
    let total = 0;
    for (ele of array) {
        if (Array.isArray(ele)) {
            total += SumSquares(ele);
        }
        else {
            total += ele * ele
        }
    }
    return total;
}




var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]]
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]]
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
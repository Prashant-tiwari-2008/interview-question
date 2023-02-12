let target = "a";
let word = ["aaab", "aaxy", "aayaabaa", "berr"]

function getWord(arr, target) {
    let count = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let temp = 0;
        for (let char = 0; char < word.length; char++) {
            if (arr[i][char] === target) {
                temp++;
            }
        }
        if (temp > count) {
            count = temp;
            result = arr[i]
        }
    }
    return result;
}

console.log(getWord(word, target))
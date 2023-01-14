console.log("missing number from unsorted array");

//first method
function missing(a) {
    let sum = 1;
    for (let i = 2; i <= (a.length + 1); i++) {
        sum = sum + i
        sum = sum - a[i - 2];
    }
    return sum;
}

// second method
function missing1(arr) {
    let total = (arr.length + 1) * (arr.length + 2) / 2
    for (let i = 0; i < arr.length; i++) {
        total = total - arr[i]
    }
    return total
}

//third method -- not workingt
function missing2(arr) {
    let ans = 0;
    for (let i = 1; i < arr.length; i++) {
        ans ^= arr[i];
        ans ^= i + 1
    }
    return ans;
}

function missing3(nums) {
    nums = nums.sort()
    let len = nums.length + 1
    for (let j = 1; j < len; j++) {
        if (!nums.includes(j)) {
            return j
        }
    }
};


let ar = [5, 1, 4, 3, 6];
console.log(missing(ar))
console.log(missing1(ar))
console.log(missing2(ar))
console.log(missing3(ar))
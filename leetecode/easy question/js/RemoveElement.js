console.log("Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.")

function RemoveElement(arr, val) {
    for (let i = 0; i < arr.length;) {
        if (arr[i] == val) {
            arr.splice(i, 1)
        }else{
            i++
        }
    }
    return arr.length
}

//Best Runtime souliton
function removeElement(nums, val) {
    let i = 0
    let k = 0
    while (i < nums.length) {
        debugger
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k += 1
        }
        i += 1
    }
    return k
};

let x = [3, 2, 2, 3]
let y = [0, 1, 2, 2, 3, 0, 4, 2]
// console.log(RemoveElement(x, 3))
console.log(RemoveElement(y, 2)) //[0,1,4,0,3]

console.log(removeElement(x, 3))
console.log(removeElement(y, 2)) //[0,1,4,0,3]
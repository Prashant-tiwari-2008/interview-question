console.log("Merge Two Sorted List")


// Example 1:
Input: nums1 = [1, 2, 3,0,0,0], m = 3, nums2 = [2, 5, 6], n = 3
Output: [1, 2, 2, 3, 5, 6]

// Example 2:
Input: nums3 = [1], m = 1, nums4 = [], n = 0
Output: [1]

// Example 3:
Input: nums5 = [0], m = 0, nums6 = [1], n = 1
Output: [1]

// Not working in leetcode
function MergeArray(list1, list2) {
    let length = list1.length + list2.length;
    let index1 = 0;
    let index2 = 0;
    let newArray = [];
    for (let i = 0; i < length; i++) {
        if (list1[i] == 0 || list2[i] == 0) {
            length--;
        }else if (list1[index1] > list2[index2]) {
            newArray.push(list2[index2])
            index2++;
        } else if (list1[index1] < list2[index2]) {
            newArray.push(list1[index1])
            index1++;
        } else if (list1[index1] == list2[index2]) {
            newArray.push(list1[index1], list2[index2]);
            index1++;
            index2++;
        } else {
            newArray.push(list2[index2])
            index2++
        }
    }
    return newArray
}

//with reduce
function MergeArray1(list1, list2) {
    let x = [...list1, ...list2]
    return x.sort((a, b) => a - b)
}



console.log(MergeArray(nums1, nums2))
console.log(MergeArray(nums3, nums4))
console.log(MergeArray(nums5, nums6))

console.log(MergeArray1(nums1, nums2))




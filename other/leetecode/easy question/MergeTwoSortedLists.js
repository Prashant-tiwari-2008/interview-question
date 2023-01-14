console.log("Merge Two Sorted List")
const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

// Not working in leetcode
function MergeArray(list1, list2) {
    let length = list1.length + list2.length;
    let index1 = 0;
    let index2 = 0;
    let newArray = [];
    for (let i = 0; i < length; i++) {
        debugger
        if (list1[index1] === list2[index2]) {
            newArray.push(list1[index1], list2[index1]);
            index1++;
            index2++;
        } else if (list1[index1] > list2[index2]) {
            newArray.push(list2[index2])
            index2++;
        } else {
            newArray.push(list1[index1])
            index1++;
        }
    }
    return newArray
}

//with reduce
function MergeArray1(list1, list2) {
    let x = [...list1, ...list2]
    return x.sort((a, b) => a - b)
}



// console.log(MergeArray(list1, list2))
console.log(MergeArray1(list1, list2))

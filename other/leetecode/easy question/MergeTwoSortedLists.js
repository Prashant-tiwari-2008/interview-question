console.log("Merge Two Sorted List")
// Not working in leetcode
function MergeArray(list1, list2) {
    let length = list1.length + list2.length;
    let index1 = 0;
    let index2 = 0;
    let newArray = [];
    for (let i = 0; i < (length - 1); i++) {
        console.log(i,"i")
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
 


const list1 = [1, 2, 4]
const list2 = [1, 3, 4]
console.log(MergeArray(list1, list2))

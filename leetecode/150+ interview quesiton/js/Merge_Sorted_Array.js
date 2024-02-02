console.log("Merge Two sorted Array")
function mergeSortedArray(arr1, m, arr2, n) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if(arr1[i] < arr2[j]){
            result.push(arr1.shift())
            i++;
        }else if(arr1[i] == arr2[j]){
            result.push(arr1.shift());
            result.push(arr2.shift());
            i++;
            j++;
        }else{
            result.push(arr2.shift());
            j++;
        }
    }
    return [...result,...arr1,...arr2]
}


// case 1 :
let arr1 = [1, 2, 3, 0, 0, 0]
let m = 3;
let arr2 = [2, 5, 6,7]
let n = 3;
console.log(mergeSortedArray(arr1, m, arr2, n))
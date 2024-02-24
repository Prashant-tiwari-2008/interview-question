let x = [10,2,3,5,8,20 ]
let y = [2,3,4 ]

// merge array and sort the array
function sortArray(arr1,arr2){
    let arr = [...arr1,...arr2];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
        }
    }
    return arr;
}

console.log(sortArray(x,y))
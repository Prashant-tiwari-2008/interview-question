console.log("remove-duplicate-from-sorted-array")

function removeDuplicate(num1){
    for(let i=0;i<(num1.length-1);i++){
        if(num1[i] === num1[i+1]){
            num1.splice(i,1)
        }
    }
    return num1
}

const a = [1,1,2,2,2,3,4]
console.log(removeDuplicate(a))
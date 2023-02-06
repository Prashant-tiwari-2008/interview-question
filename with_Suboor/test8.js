let target = "a";
let word = ["aaab","aaxy","aayaabaa","berr"]

function getWord(char,arr){
    let count = 0
    let result;
    for(let i =0;i < arr.length;i++){
    let temp = 0
        const word = arr[i];
        for(let j=0;j < word.length;j++){
            if(arr[i][j] === char){
                temp++;
            }
        }
        if(temp > count){
            count = temp;
            result = arr[i];
        }
    }
    return result;
}

console.log(getWord(target,word))


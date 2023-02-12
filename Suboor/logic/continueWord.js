// highest continue occurance word
let string = "ccaaabbabbddddd"

function getContinueOccuranceWord(str) {
    let count = 0;
    let temp = 0;
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1] ){
            count++
            if(count > temp){
                temp = count;
                result = str[i]
                count = 0;
            }
        }
    }

    return result
}

console.log(getContinueOccuranceWord(string))
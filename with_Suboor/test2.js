let string = "ccaaabbabb"

function countWord(word){
    let count = 0
    let tempcount = 0;
    let char = ''
    const newArray = word.split('');
    for(let i=0; i <newArray.length ; i++){
        if(newArray[i] == newArray[i+1]){
            count++;
            if(count > tempcount){
                tempcount = count;
                char = newArray[i]
                count = 0;
            }
        }
    }
    return char;
}

console.log(countWord(string))
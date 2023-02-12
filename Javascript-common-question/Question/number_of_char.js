const string = "prashant tiwari";

function numberOfChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === char){
            count++
        }
    }
    return count;
}

console.log(numberOfChar(string, 'a'))
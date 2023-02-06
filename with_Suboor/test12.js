let sentence = "there is a boy"
// o/p => "boy a is there"

function reverseOrder(str){
    const arr = str.split(' ');
    let result = '';
    for(let i=arr.length - 1;i>=0;i--){
        result = result + " " + arr[i]  
    }
    return result
}

console.log(reverseOrder(sentence))
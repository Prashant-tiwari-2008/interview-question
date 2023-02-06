let string = "123450"
let stringwithChar = "123156ram"
let stringwithChar1 = "ramshyam skww"

function stringValueChecker(string) {
    for(ele of string){
        let char = parseInt(ele)
        if(Number.isNaN(char)){
            return false
        }
    }
    return true
}

console.log(stringValueChecker(string))
console.log(stringValueChecker(stringwithChar))
console.log(stringValueChecker(stringwithChar1))
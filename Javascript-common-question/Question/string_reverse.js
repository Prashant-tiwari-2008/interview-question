// Given a string, reverse each word in the sentence
// Welcome to this Javascript Guide! ===>> emocleW ot siht tpircsavaJ !ediuG

//Full string reverse
function reverseString(str) {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
}   



string = "Welcome to this Javascript Guide!"
console.log(reverseString(string))
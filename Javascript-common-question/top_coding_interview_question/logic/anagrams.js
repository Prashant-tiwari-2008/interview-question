let word1 = "care"
let word2 = "race"

let word3 = "part"
let word4 = "trap"

let word5 = "heart"
let word6 = "eartd"

//fist solution
function findAnagram(wordOne, wordTwo) {
    if (wordOne.length !== wordTwo.length) return false;
    const hash = {}
    for (ele of wordOne) {
        hash[ele] = (hash[ele] || 0) + 1;
    }
    for (let i = 0; i < wordTwo.length; i++) {
        if (wordTwo[i] in hash) {
            hash[wordTwo[i]]--;
        } else {
            return false;
        }
    }
    for (ele in hash) {
        if (hash[ele] !== 0) return false
    }
    return true
}

//second solution
function findAnagram(wordOne, wordTwo) {
    wordOne = wordOne.split("");
    for (let i = 0; i < wordTwo.length; i++){
        if(wordOne.includes(wordTwo[i])){
            wordOne.splice(wordOne.indexOf(wordTwo[i]),1)
        }

    }
    if(wordOne.length > 0){
        return false
    }
    return true
}

console.log(findAnagram(word1, word2))
console.log(findAnagram(word3, word4))
console.log(findAnagram(word5, word6))
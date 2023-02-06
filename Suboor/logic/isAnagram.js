const strOne = 'care';
const strTwo = 'race';

function isAnagram(firstWord, secondWord) {
    let hash = {}
    let isAnagram = true
    for (ele of firstWord) {
        hash[ele] = (hash[ele] || 0) + 1;
    }

    for (char of secondWord) {
        if (char in hash) {
            hash[char]--;
        } else {
            return false
        }
    }

    Object.values(hash).forEach(ele => {
        if (ele !== 0) {
            return isAnagram = false
        }
    })
    return isAnagram;
}

console.log(isAnagram(strOne, strTwo))
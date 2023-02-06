let word = "Prashant tiwari";

function findDuplicateCharacter(word) {
    // first solution'
    let hash = {};
    const duplicateCharacter = [];
    for (ele of word) {
        hash[ele] = (hash[ele] || 0) + 1;
    }
    
    for (ele in hash) {
        if(hash[ele] >1){
            duplicateCharacter.push(ele)
        }
    }
    return duplicateCharacter
}

console.log(findDuplicateCharacter(word))
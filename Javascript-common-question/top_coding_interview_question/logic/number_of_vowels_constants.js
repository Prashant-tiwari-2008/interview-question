let str = "Prashant tiwari"

function findVowelsAndConstant(string) {
    let vowels = ['a', 'i', 'e', 'o', 'u']
    let hash = {
        vawels: [],
        constant: []
    }
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])){
            hash.vawels = [...hash.vawels,string[i]]
        }else{
            hash.constant = [...hash.constant,string[i]]
        }
    }
    return hash
}

console.log(findVowelsAndConstant(str))
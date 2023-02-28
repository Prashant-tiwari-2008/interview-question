let str = "Prashant tiwari"

//=======>> worst for time complexcity
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

//===========> my best solution
function findVowelsAndConstant(string) {
    let vowels = {
        a:'a',e:'e',i:'i',o:'o',u:'u'
    }
    const vaw = []
    const constant = []
    for (let i = 0; i < string.length; i++) {
        if (vowels[string[i]]){
            vaw.push(string[i])
        }else{
            constant.push(string[i])
        }
    }
    return {vaw,constant}
    // return {vav:[...new Set(vaw)],cons:[...new Set(constant)]} //for returning unique value
}
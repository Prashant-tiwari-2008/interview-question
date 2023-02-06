const string = "Prashant tiwari";

function findNoneRepetingCharacter() {
    let hash = {}

    for(ele of string){
        hash[ele] = (hash[ele] || 0 ) + 1;
    }

    for(key in hash){
        if(hash[key] === 1){
            return key;
        }
    }
}

console.log(findNoneRepetingCharacter())
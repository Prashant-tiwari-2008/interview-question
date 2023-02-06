const name = "hindustantimes";
const randomArray = ['danish','times','lava','dust','hindu','hprash']; //3

function createdWordCount(word,arr){
    let hash = {}
    let count = 0;
    
    for(let char of word){
        hash[char] = (hash[char] || 0) +1
    };
    
    for(let i=0; i < arr.length; i++){
        if(matchWord(hash,arr[i])){
            count++;
        }
    }
    return count;
}

function matchWord(hash,word){
    const newHash = {...hash}
    let isMatch = false;
    
    for(j=0; j < word.length; j++){
        const char = word[j];
        if(!newHash[char]){
            isMatch = false
        }else{
            newHash[char]--;
            isMatch = true;
        }
    }
    
    if(isMatch) return true;
    
    Object.values(newHash).forEach(ele =>{
        if(ele < 0){
            isMatch = false;
        }
    })
    return isMatch;
}

console.log(createdWordCount(name,randomArray))

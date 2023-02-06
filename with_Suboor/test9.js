let arr = ['1',1,'2',3,'a','b',2,'1']

function getUniqueValue(randomArray){
    let hash = {}
    let test = []
    for(ele of randomArray){
        if(ele in hash){
            hash[ele]++
        }else{
            hash[ele] = 1
        }
    }
    for(ele in hash){
        if(hash[ele] !== 1){
            test.push(ele)
        }
    }
    return test
}

console.log(getUniqueValue(arr))
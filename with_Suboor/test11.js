let randomArray = [1,2,3,4,'1','2','2',3,NaN,false]
let randomArray1 = [1,2,3,4]

function checkNumber(arr){
    let isNumber = true;
    for(let i=0; i < arr.length; i++){
        if((Number.isNaN(parseInt(arr[i])))){ 
            return false
        }
        else{
            isNumber = true;
        }
        
    }
    return isNumber;
}

console.log(checkNumber(randomArray))
console.log(checkNumber(randomArray1))
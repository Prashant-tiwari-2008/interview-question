console.log("frequency");
// 1. Find the frequency of elements in array
let arr = ['hello', 'world', 'java', 'hello', 'java']

// Method 1: Using Reduce method of array
const countword = (arr) => {
    let result = arr.reduce((allnames, name) => {
        if (name in allnames) {
            allnames[name]++
        } else {
            allnames[name] = 1
        }
        return allnames;
    }, {})
    return result;
}

//method 2: Using object 
const countwordwithObj = (arr) => {
    var count = {}
    for (ele of arr) {
        if (count[ele]) {
            count[ele]++
        } else {
            count[ele] = 1
        }
    }
    return count;
}

// method 3 ==> best solution
const countwordwithObj2 = (arr) => {
    var hash = {}
    for(ele of arr){
        hash[ele] = (hash[ele] || 0 ) + 1
        
    }
}

console.log(countword(arr));
console.log(countwordwithObj(arr));
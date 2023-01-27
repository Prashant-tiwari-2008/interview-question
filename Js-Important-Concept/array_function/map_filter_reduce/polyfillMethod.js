console.log("custome map,filter and reduce")

let nums = [1, 2, 3, 5, 6]
// ======================== MAP ==================
// Array.map((cv, i, arr) => { }).

// polyfil for map
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

let multiplyThree = nums.myMap((num) => {
    return num * 3;
})
console.log(multiplyThree)

// ======================== Filter ==================
// Array.filter((cv,i,arr) =>{})

//polyfil for filter
Array.prototype.myfilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp;
}

let greaterThanThree = nums.myfilter((num) => {
    return num > 3;
})
console.log(greaterThanThree)

// ======================== REDUCE ==================
//Array.reduce((acc,curr,i,arr) =>{},initialValue)

//polyfil for reduce
Array.prototype.myReduce = function (cb, initialValue) {
    var acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i]
    }
    return acc;
}

let multiple = nums.myReduce((acc,cv,i,arr) =>{
    return acc * cv
},5)
console.log(multiple)
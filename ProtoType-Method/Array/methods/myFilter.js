console.log("this is my filter")

const x = [1, 2, 3, 4, 15, 26];
const y = [1, 2, 3, 4, 15, 26];

console.log(x.filter((ele) => ele < 3))
console.log(x.filter((ele) => { if (ele > 4) return ele }))

Array.prototype.myFilter = function (cb) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)){
            tempArr.push(this[i])
        }
    }
    return tempArr
}

console.log(x.myFilter((ele) => ele < 3))
console.log(x.myFilter((ele) => { if (ele > 4) return ele }))

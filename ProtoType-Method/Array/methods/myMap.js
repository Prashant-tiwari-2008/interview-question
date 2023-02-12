console.log("this is my map")

const x = [1, 2, 3, 4, 5, 6];

console.log(x.map((ele) => ele * 3))
console.log(x.map((ele) => { if (ele > 4) return ele * 3 }))

Array.prototype.myMap = function (cb) {
    const tempArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            tempArr.push(cb(this[i], i, this))
        } else {
            tempArr.push('')
        }
    }
    return tempArr
}

console.log(x.myMap((ele) => ele * 3))
console.log(x.myMap((ele) => { if (ele > 4) return ele * 3 }))

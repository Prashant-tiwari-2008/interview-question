// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

const searchjsObject = (obj, value) => {
    for (key in obj) {
        if (typeof obj[key] == 'object') {
            return searchjsObject(obj[key], value)
        }
        if (obj[key] === value) {
            return true
        }
        return false
    }
}


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = searchjsObject(nestedObject, 44); // true
let doesntHaveIt = searchjsObject(nestedObject, "foo"); // false
console.log(hasIt)
console.log(doesntHaveIt)
console.log("Remove duplicates from an array and return unique values in O(n) complexity.")

let arr = [1, 2, 3, 4, 3, 6, 5, 4];

//first way
function unique1(arr) {
    let item = []
    for (let i = 0; i < arr.length; i++) {
        if (!item.includes(arr[i])) {
            item.push(arr[i])
        }
    }
    return item
}

// second way 
function unique2(arr) {
    let unique = arr.reduce((acc, cv) => {
        if (!acc.includes(cv)) {
            acc.push(cv)
        }
        return acc;
    }, [])
    return unique
}

//third way
function unique3(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

//fourth way
function unique4(arr) {
    var unique = [];
    arr.forEach(element => {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    });
    return unique;
}

//fourth way
function unique5(arr) {
    return [...new Set(arr)]
}

// Note: these are the core method we can do it with multiple type using forloop,while loop,do while loop, map ,filter and reduce and many more.
console.log(unique1(arr))
console.log(unique2(arr))
console.log(unique3(arr))
console.log(unique4(arr))
console.log(unique5(arr))

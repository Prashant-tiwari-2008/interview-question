console.log("unique");
//6. Unique. Write a method that returns a duplicate-free array

// first solution -- set method
const unique = (arr) => new Set(arr)

// Second solution -- for loop 
const unique1 = (arr) => {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i])
        }
    }
    return newarr;
}

// Third solution -- With filter
const unique2 = (arr) => arr.filter
const data = [1, 2, 1, 2, 3, 4, 5];
// console.log(unique(data)); // [1, 2, 3]
console.log(unique1(data)); // [1, 2, 3]
// console.log(unique2(data)); // [1, 2, 3]
// console.log(unique3(data)); // [1, 2, 3]
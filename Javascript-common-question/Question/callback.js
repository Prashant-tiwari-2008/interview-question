// Explain what a callback function is and provide a simple example

const modifyArray = (arr, callback) => {
    arr.push(100)
    callback();
}

var arr = [1, 2, 3, 4, 5, 6]

modifyArray(arr, () =>{
    console.log("array has been modify",arr)
})
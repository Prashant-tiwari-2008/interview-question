console.log("Chunk")
//  Write a method that splits an array into parts of determined size

function chunk(arr, size) {
    let index = 0;
    const chunkArr = [];
    while (index < arr.length) {
        chunkArr.push(arr.slice(index, size + index))
        index += size
    }
    return chunkArr
}

function chunk1(array, chunkSize) {
    const chunk = []
    for (let i = 0; i < array.length; i += chunkSize) {
        chunk.push(array.slice(i, i + chunkSize));
    }
    return chunk;
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk1(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
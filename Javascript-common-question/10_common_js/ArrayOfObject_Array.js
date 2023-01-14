console.log(" Collect books from array of objects and return collection of books as an array")

let friends = [
    {
        name: "anna",
        books: ["bible", "harry potter"],
        age: 21,
    },
    {
        name: "Bob",
        books: ["War and peace", "Romeo and Juliet"],
        age: 26,
    },
    {
        name: "alice",
        books: ["The Lord of the Rings", "the Shining"],
        age: 18,
    },

]

function books(arr) {
    let result = arr.reduce((acc, cv) => {
        acc.push(...cv.books)
        return acc
        // return[...acc,...cv.books]
    }, [])
    return result;
}

console.log(books(friends));
["Bible", "harry potter", '.......', 'the Shining']
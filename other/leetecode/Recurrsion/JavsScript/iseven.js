console.log("7. is Even is not")

const isEven = (number) => {
    if (number === 0 || number % 2 === 0) {
        return "is even"
    } else {
        return "is Odd"
    }
}
console.log(isEven(12));
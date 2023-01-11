console.log("6.Exponent")

const Exponent = (a, n) => {
    if (n === 1) {
        return a;
    }
    return a * Exponent(a, n - 1)
}

console.log(Exponent(8, 3));
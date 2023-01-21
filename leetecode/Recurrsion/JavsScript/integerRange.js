console.log("integer Range Problem")

const integerRange = (a, b) => {
    if (b - a === 2) {
        return [a + 1]
    } else {
        var list = integerRange(a + 1, b)
        list.push(a + 1);
        return list;
    }
}

console.log(integerRange(2, 9))
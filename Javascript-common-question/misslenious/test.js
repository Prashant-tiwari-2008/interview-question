const number = undefined + 11;
debugger
if (number === NaN) {
    document.write("NaN");
} else if (number === 11) {
    document.write("11");
} else {
    console.log(typeof number)
    console.log(typeof NaN)
    document.write("other");
}
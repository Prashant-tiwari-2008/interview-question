const number = undefined + 11;

console.log(number)
if (number == NaN) {
   console.log("NaN");
} else if (number == 11) {
   console.log("11");
} else {
    console.log(typeof number,"line 8")
    console.log(typeof NaN,"line 9")
    document.write("other","line 10");
}
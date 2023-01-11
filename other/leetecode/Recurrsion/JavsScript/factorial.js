console.log("Factorial js")

const factorial = (numb) => {
    if (numb === 0) {
        return 1;
    }
    else {
        return numb * factorial(numb - 1)
    }
}


console.log(factorial(5))
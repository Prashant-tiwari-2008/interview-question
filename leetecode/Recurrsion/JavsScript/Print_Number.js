console.log("Print number upto 1")

const countDown = (number) => {
    console.log(number)
    const newNumber = number - 1;
    if (number > 0) {
        countDown(newNumber)
    } 
}

countDown(5)

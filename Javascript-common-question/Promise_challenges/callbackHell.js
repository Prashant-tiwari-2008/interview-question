console.log("callback hell");

console.log("start")

function firstMethod(message, cb) {
    setTimeout(() => {
        cb(`this is ${message} callback`)
    }, 1000)
}

function secondMethod(message, cb) {
    setTimeout(() => {
        cb(`this is ${message} callback`)
    }, 2000)
}

function thirdMethod(message, cb) {
    setTimeout(() => {
        cb(`this is ${message} callback`)
    }, 3000)
}

function fourthMethod(message, cb) {
    setTimeout(() => {
        cb(`this is ${message} callback`)
    }, 4000)
}

function fivthMethod(message, cb) {
    setTimeout(() => {
        cb(`this is ${message} callback`)
    }, 5000)
}

firstMethod('first', (message) => {
    console.log(message),
        secondMethod('second', (message) => {
            console.log(message),
                thirdMethod('third', (message) => {
                    console.log(message),
                        fourthMethod('fourth', (message) => {
                            console.log(message),
                                fivthMethod('fiveth', (message) => {
                                    console.log(message)
                                })
                        })
                })
        })
})


console.log("end")
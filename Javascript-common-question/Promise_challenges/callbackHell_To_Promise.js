console.log("callback hell");

// ======================>>> CALLBACK AND CALLBACK HELL <<<<================
// console.log("callback start")

function firstMethod(message,) {
    setTimeout(() => {
        (`this is ${message} callback`)
    }, 1000)
}

function secondMethod(message,) {
    setTimeout(() => {
        (`this is ${message} callback`)
    }, 2000)
}

function thirdMethod(message,) {
    setTimeout(() => {
        (`this is ${message} callback`)
    }, 3000)
}

function fourthMethod(message,) {
    setTimeout(() => {
        (`this is ${message} callback`)
    }, 4000)
}

function fivthMethod(message,) {
    setTimeout(() => {
        (`this is ${message} callback`)
    }, 5000)
}

// firstMethod('first', (message) => {
//     console.log(message),
//         secondMethod('second', (message) => {
//             console.log(message),
//                 thirdMethod('third', (message) => {
//                     console.log(message),
//                         fourthMethod('fourth', (message) => {
//                             console.log(message),
//                                 fivthMethod('fiveth', (message) => {
//                                     console.log(message)
//                                 })
//                         })
//                 })
//         })
// })

// console.log("end")

// ======================>>> PROMISE <<<<================

console.log("start")

function firstMethod(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is ${message} Promise`)
        }, 1000)
    })
}

function secondMethod(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is ${message} Promise`)
        }, 1000)
    })
}

function thirdMethod(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is ${message} Promise`)
        }, 1000)
    })
}

function fourthMethod(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is ${message} Promise`)
        }, 1000)
    })
}

function fivthMethod(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is ${message} Promise`)
        }, 1000)
    })
}

// Promuise calling - ONE WAY - THIS IS ALSO A PYRAMID OF DOOM -PROMISE HELL
// TO OVERCOME THIS WE HAVE PROMISE CHAINING
firstMethod("first").then((res) => {
    console.log(res)
    secondMethod("second").then((res) => {
        console.log(res)
        thirdMethod("third").then((res) => {
            console.log(res)
            fourthMethod("fourth").then((res) => {
                console.log(res)
                fivthMethod("fivth").then((res) => {
                    console.log(res)
                    secondMethod
                })
            })
        })
    })
}).catch((err) => {
    console.log(err)
})
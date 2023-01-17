console.log("Promise chaining")

// ======================>>> PROMISE CHAINING <<<<================

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

//THIS IS ONE WAY TO SOLVE PROMISE HELL => PROMISE CHAINING
firstMethod("first").then((res) => {
    console.log(res)
    return secondMethod("second")
}).then((res) => {
    console.log(res)
    return thirdMethod("third")
}).then((res) => {
    console.log(res)
    return fourthMethod("fourth")
}).then((res) => {
    console.log(res)
    return fivthMethod("fiveth")
}).catch((err) => {
    console.log(err)
})
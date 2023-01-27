console.log("Asynce Await");

// ======================>>> PROMISE COMBINATOR <<<<================

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
            reject(`this is ${message} Promise`)
        }, 100)
    })
}

const result = async () => {
    try {

        const message1 = await firstMethod('first')
        const message2 = await secondMethod('second')
        const message3 = await thirdMethod('third')
        const message4 = await fourthMethod('fourth')
        const message5 = await fivthMethod('fivth')

        console.log({
            message1,
            message2,
            message3,
            message4,
            message5,
        })
    } catch (error) {
        console.log(`Promiser failed ${error}`)
    }
    console.log("it will print before async")
}


result();
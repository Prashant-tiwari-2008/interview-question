console.log("Promise Combinator");

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
            reject(`this is ${message} Promise`)
        }, 1000)
    })
}

function fivthMethod(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is ${message} Promise`)
        }, 100)
    })
}

//PROMISE CHAINING is also a lengthy way so we you PROMISE COMBINATOR
// PROMISE COMBINATOR - it helps us to resolve more than one promise at a time, and return result accordingly 
// there are 4(four) type of PROMISE COMBINATOR. - 
// 1.Promise.all 2.Promise.race() 3.Promise.allSettled() 4.Promise,any()

//==========>>>      1.PROMISE ALL - resopone all promise but if any promise reject it goes to catch
// Promise.all([
//     firstMethod('first'),
//     secondMethod('second'),
//     thirdMethod('third'),
//     fourthMethod('fourth'),
//     fivthMethod('fiveth')
// ]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log('if one of the promise failed all the promise failed', err)
// })

//==========>>>      2.PROMISE RACE - response the first resolve promsise but if any promise reject if goes to cathc
// Promise.race([
//     firstMethod('first'),
//     secondMethod('second'),
//     thirdMethod('third'),
//     fourthMethod('fourth'),
//     fivthMethod('fiveth')
// ]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log('if one of the promise failed all the promise failed', err)
// })

//==========>>>      3.PROMISE ALLSETTLED - response all the promise with status of fullfiled and reject
// Promise.allSettled([
//     firstMethod('first'),
//     secondMethod('second'),
//     thirdMethod('third'),
//     fourthMethod('fourth'),
//     fivthMethod('fiveth')
// ]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log('if one of the promise failed all the promise failed', err)
// })

//==========>>>      3.PROMISE ANY -  response the first resolve promsise but if any pomise reject still it response if all the promise reject then only it goes to catch
Promise.any([
    firstMethod('first'),
    secondMethod('second'),
    thirdMethod('third'),
    fourthMethod('fourth'),
    fivthMethod('fiveth')
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log('if one of the promise failed all the promise failed', err)
})
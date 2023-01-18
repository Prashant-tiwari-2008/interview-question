//=============>>> Question NO 5

// function job(state) {
//     return new Promise(function (res, rej) {
//         if (state) {
//             resolve("sucees")
//         } else {
//             rej("error")
//         }
//     })
// }

// let promise = job(true)

// promise.then(function (data) {
//     console.log(data);
//     return job(false)
// }).catch(function (error) {
//     console.log(error)
//     return "Error caught"
// }).then(function () {
//     console.log(data)
//     return job(true)
// }).catch(function () {
//     console.log("Error")
// })

//OUTPUT====>>> success - error - error caught 

//=============>>> Question NO 6

function job(state) {
    return new Promise(function (res, rej) {
        if (state) {
            res("sucees")
        } else {
            rej("error")
        }
    })
}

let promise1 = job(true)

promise1.then(function (data) {
    console.log(data);
    return job(true)
}).then(function (data) {
    if (data !== 'victory') {
        throw "Defeat"
    }
    return job(true)
}).then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error)
    return job(false)
}).then(function (data) {
    console.log(data)
    return job(true)
}).catch(function (error) {
    console.log(error);
    return "Error caught"
}).then(function (data) {
    console.log(data);
    return new Error("test")
}).then(function (data) {
    console.log("Success : ", data.message)
}).catch(function (data) {
    console.log("Error : ", data.message)
})
//=================>>> OUTPUT -- success -Defeat - error - error Caught - Success  trst

// =============>>> QUESTION 7

const firstPromise = new Promise((res, rej) => {
    res("!First")
});

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise)
})

secondPromise.then((res) => {
    return res;
}).then((res) => console.log(res))
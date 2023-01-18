// Question no 8 =====>>> Rewrite with async/await

function loadJson(url) {
    return fetch(url).then((res) => {
        if (res.status == 200) {
            return res.json()
        } else {
            throw new Error(res.status)
        }
    })
}

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err)
// })

//================= with async and awiat
async function loadJson1(url) {
    let res = await fetch(url)
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
    throw new Error(res.status)
}

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err)
// })

//Quesrion 9 =========>>> solve Promise Recursively

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

function promRecurse(funcPromises) {
    if (funcPromises.length == 0) return;

    const currentPromise = funcPromises.shift();
    currentPromise.then((res) =>console.log(res)).catch((err) => console.log(err))

    promRecurse(funcPromises)
}

promRecurse([
    firstMethod("first"),
    secondMethod("second"),
    thirdMethod("third"),
    fourthMethod("fourth"),
    fivthMethod("fivth")
])
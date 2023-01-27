console.log("Promise learning")

//Simple callback
console.log("start")

function simpleMethod(username) {
    setTimeout(() => {
        return `Subscribe to ${username}`
    }, 1000);
}

// With out callback 
const message = simpleMethod("Prashant tiwari")
console.log(message) //-- undefined

//with callback 
function withCallback(username, cb) {
    setTimeout(() => {
        cb(`Subscribe to ${username}`)
    }, 1000);
}

withCallback('withcallback',(msg) =>{
    console.log(msg)
})
console.log("end")
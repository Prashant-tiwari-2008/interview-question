console.log("Promise")

console.log("start")

//simple Promise - ONE WAY
const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;
        if (result) resolve("hi promise is resolved")
        else reject(new Error("Promise is rejected"))
    }, 2000);
})

//calling Promise => worng wat
// console.log(sub)

//calling Promise
sub.then((res) => {
    console.log(res)
}).catch(err => console.log(err))

console.log("end")


Promise.resolve('this is the other way to write promsie').then((res) =>console.log(res))

//or
let x=Promise.resolve('this is the one more way to write promsie')
console.log(x)
x.then((res) =>{
    console.log(x)
})
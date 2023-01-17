console.log("first slot");

//que1. 
// console.log(start);
const promise1 = new Promise((res, rej) => {
    console.log(1);
    res(2)
    console.log(3)
});

promise1.then((res) => {
    console.log(res)
})
console.log("end")

//Que2- 
console.log("start-2");
const fn = () => new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
});

console.log("middle")

fn().then((res) => {
    console.log(res)
})
console.log("end -2")
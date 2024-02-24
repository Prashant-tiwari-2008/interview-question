const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve('working')
    }, 2000)
})

p.then((res) => console.log(res));



class ZahidPromise {
    constructor(callback) {
        
    }
}
console.log("it is working")

let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}


const memoize = (fun) => {
    let cache = {};
    return function (...args) {
        let n = args[0];
        if (n in cache) {
            console.log('cache');
            return cache[n];
        } else {
            console.log("from funcation")
            let result = fun(n);
            cache[n] = result;
            return result
        }
    }
}



console.time();
let x = memoize(calc);
console.log(x(155));
console.timeLog();

console.log(x(5));
console.timeLog();

console.log(x(5));
console.timeLog();

console.log(x(5));
console.timeLog();

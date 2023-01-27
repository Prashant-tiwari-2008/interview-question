console.log("closure example")

//Que 1- write a function that would allow you to do this
var addsix = createBase(6);
// console.log(addsix(10)) //16
// console.log(addsix(21)) //27

//soultion 1
function createBase(num1) {
    return function (num2) {
        return num1 + num2
    }
}

//Que2 - Time Optimization

//TAKING TO MUCH TIME
function find(index) {
    let a = [];
    for (let i = 0; i < 10000000; i++) {
        a[i] = i * i;

    }
    console.log(a[index])
}

// console.time("6");
// find(50);
// console.timeEnd("6");
// console.time("12");
// find(500)
// console.timeEnd("12")

//OPTIMIZE CODE
function find1() {
    let a = [];
    for (let i = 0; i < 10000000; i++) {
        a[i] = i * i;

    }

    return function (index) {
        console.log(a[index])
    }
}

const closure = find1();
console.log(closure)
console.time("6");
closure(50);
console.timeEnd("6");
console.time("12");
closure(500)
console.timeEnd("12")
console.log("testing")

//EXAMPLE - 01
let counter = 0;
function getDate() {
    return console.log(` Api hit ${++counter}`)
}


const debouncing = function (fn, dealy) {
    let timer = 0;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this)
        }, dealy)
    }
}

const betterfuncation = debouncing(getDate, 1000);


//Example - 02
var button = document.getElementById('debouncing');

const debouncingFuncation = (fun, dealy) => {
    debugger
    let debounceTimer;
    return function () {
        console.log("inside retun function")
        clearTimeout(debounceTimer)
        button.disabled = true
        debounceTimer = setTimeout(() => {
            fun.apply(this, arguments)
            button.disabled = false
        }, dealy);
    }
}

function buttonClick() {
    alert("Hello\nNo matter how many times you" +
        "click the debounce button, I get " +
        "executed once every 3 seconds!!")
}

const callbackfuncation = debouncingFuncation(buttonClick, 1000);
button.addEventListener('click', callbackfuncation)
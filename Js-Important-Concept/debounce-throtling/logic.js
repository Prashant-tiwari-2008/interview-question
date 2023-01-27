console.log("debouncing and throttling")

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0;
var pressedCount = 0;

const mydebounce = (cb, delay) => {
    let timer;
    return function () {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() =>{
            cb()
        },delay)
    }
}

const debouncedCount = mydebounce(() => {
    triggerCount += 1;
    count.innerHTML = triggerCount;
}, 800)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
})
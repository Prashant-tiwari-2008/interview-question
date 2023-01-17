// Ques 7 - Make this run only once
function likeTheVideo() {
    let called = 0;
    return function () {
        if (called > 0) {
            console.log("can not run already run");
        } else {
            console.log("this is first time run onces")
            called++;
        }
    }
}

let callingfuntion = likeTheVideo();
// callingfuntion()
// callingfuntion()
// callingfuntion()


// TODO : NEED TO Study more
//Ques 8- More generic call one's function
function once(func, context) {
    debugger
    let ran;
    return function () {
        if (func) {
            ran = func.apply(context || this, arguments)
            func = null;
        }
        return ran;
    }
}

const hello = once(() => console.log("hello"))

hello()
hello()
hello()
hello()
hello()
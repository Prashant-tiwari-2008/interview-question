console.log("this function will work on reverseing data")

//===> With the for loop
const Reverse = (data) => {
    console.log("with For Loop")
    const reverseArray = [];
    for (let i = (data.length - 1); i > -1; i--) {
        reverseArray.push(data[i])
    }
    return reverseArray;
}


//===>> with map
const Reverse1 = (data) => {
    console.log("with map")
    return data.map((ele, index) => data[(data.length - 1) - index])
}

//==>>> with predefine method
const Reverse2 = (data) => {
    console.log("with reverse method")
    return data.reverse();
}

//==>> with help of filter method
const Reverse3 = (data) => {
    console.log("with filter method");
    return data.split("").reverse("").join("");
}

// to reverse a string
const Reverse4=(str)=>{
    let reversestr = '';
    for(let i=(str.length-1);i>=0;i--){
        debugger
        reversestr += str[i]
    }
    return reversestr
}

const data = [1, 2, 3];
const str = "Prashant"
// console.log(Reverse(data));
// console.log(Reverse1(data))
// console.log(Reverse2(data))

//for string
// console.log(Reverse3(str))
console.log(Reverse4(str))


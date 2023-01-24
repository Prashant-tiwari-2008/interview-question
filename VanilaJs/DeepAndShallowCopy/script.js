console.log("deep and shallow copy")

// ==================>>> NORMAL COPY
// let userOne = {
//     name: "Prashant",
//     age: 28
// }

// let userTwo = userOne;
// console.log(userTwo)
// userTwo.age = 32;
// console.log(userOne)
//! Note :- In object we copy the refrence of obj memory location


// ==================>>> Shallow COPY
// let userOne = {
//     name: "Prashant",
//     age: 28
// }

// //first way of shallow copy
// let userTwo = Object.assign({},userOne);
// //second way of shallow copy
// let userThree = {...userOne}
// userTwo.age = 32;
// userThree.name="tiwari"
// console.log(userTwo)
// console.log(userOne)
// console.log(userThree)
//! Note:- In the shallwo copy we copy the object data but we don't copy nested objec so if we try to copy the nexted objec it will now work

// ==================>>> Deep COPY

let userOne = {
    name: "Prashant",
    age: 28,
    adddress: {
        city: "noida",
        state: "up",
        country: "INDIA",
        phone: {
            first: "0123",
            second: "4567",
        }
    },
    getFullAddress: () => {

    }
}

//first way of shallow copy
let userTwo = Object.assign({}, userOne);
//second way of shallow copy
let userThree = { ...userOne }
userTwo.adddress.city = "indrapuram";
userThree.adddress.phone.second = "852"
console.log(userTwo)
console.log(userOne)
console.log(userThree)
//! error :- here city and phone both changes for userOne
//Deep copy
let userFourth = JSON.parse(JSON.stringify(userOne))
userFourth.adddress.country = "USA";
userFourth.adddress.phone.first = "XXXX";
console.log(userOne,"Deep copy")
console.log(userFourth,"Deep Copy")
//! In the deep copy function and data will not copy for this is one of the limitation. we can overcome withw this we loaDash

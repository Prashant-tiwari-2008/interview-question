//1.one way to do
// const user = {
//     firstName: "Prashant",
//     lastName: "tiwari",
//     fullName: function () {
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

const user = {
    firstName: "Prashant",
    lastName: "tiwari",
}

const otherUser = {
    firstName: "Pradeep",
    lastName: "Tiwari",
}

let fullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " form " + city + " from " + state)
}

//1.One way to do
// user.fullName();
// user.fullName.call(otherUser);


//2. Other way to do
fullName.call(user,"Noida","Uttar pradesh");
fullName.call(otherUser,"Mughalsarai","uttar pradesh");

//Apply
fullName.apply(user,["noida","uttarpradesh"])

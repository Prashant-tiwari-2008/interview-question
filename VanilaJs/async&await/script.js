console.log("this is example of async and await");

async function fun(){
    console.log("inside function");
    const response= await fetch("https://api.github.com/users");
    console.log("before response");
    const users=await response.json();
    console.log("user resolved");
    return users;
}
console.log("Before callin Harry")
let a=fun();
console.log("after calling Harry")
console.log(a);
a.then((data)=>console.log(data));
console.log("this is the end of programme")
5
54
543
5432
54321

Q2 - 
var user ={name:"xyz",
address:{ "doorNo":40, "AreaName":"MG Road", "Contact": { "mobile":786552788, "home": 46277827}}, 
salary:"50000", 
age:"34" }

function getNumberOfElement(userObject){
   let count = 0;
    for(ele in userObject){
        if(typeof ele === 'object'){
             getNumberOfElement(ele)
        }else{
             count++;
        }
        
    }
    return count;
}

console.log(getNumberOfElement(user))

let arr = ['34','22','44', '12','78', '12', '9', '36', '22']

function removeDuplicate(randomArray){
    let temp = randomArray.sort((a,b) => b-a);
    let result = [... new Set(temp)]
    return result
}
console.log(removeDuplicate(arr))


//
let myPromise =  new Promise((resolve,reject) =>{
    if(true){
      resolve("hi i am resolve")  
    }else{
        reject("hi promise is reject")
    }
})

{/* <button style = {{props.value > 100 ? " " : " "}}></button> */}

myPromise.then((res) =>console.log(res) ).catch((err) => console.log(err))

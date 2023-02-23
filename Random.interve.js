// myFunction(['Alf', 'Alice', 'Ben',"Cat"])
// result:  { a: ['Alf', 'Alice'], b: ['Ben'],c:["CAT"]}

const randomList = ['Alf', 'Alice', 'Ben',"Cat"]

function myFunction(arr){
    let hash ={}
    for(ele of arr){
        let first = ele[0];
        if(hash[first]){
            hash[first].push(ele)
        }else{
            hash[first] = [ele]
        }
    }
    return hash;
}

console.log(myFunction(randomList))


// let UserName = [
//     {name:"Prashant",age:"20"},
//     {name:"Pradeep",age:"30"},
//     {name:"Pramod",age:"20"},
// ]

// let result  = UserName.reduce((acc,cv) => {
//     acc.push(cv.age)
//     return acc
// },[])

// // console.log(result)

// let data1 = {name:"aeshu",class:"xyz",sameValue:"test1"};
// let data2 = {interest:"coding",subject:"abc",sameValue2:"test2"};
// let data3 = {hobby:"coding2",subject:"abcd",sameValue:"test23"};
// console.log({...data1,...data2,...data3});

// OUTPUT =>  {name :"aeshu",class:"XYZ",sameValue:"test23",interest:"coding",subject:"abcd",sameValue2:"test2",hobby:"coding2"}

// let data = ['a','q','b','c','d','e','f','g','h','i'];
// let [q] = data;
// console.log(q) // 'a'


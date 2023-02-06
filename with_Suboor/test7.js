let user = [
    {name:"suboor" , age :30},
    {name:"Prashant" , age :20},
    {name:"danish" , age :10},
    {name:"Mahima" , age :30},
    {name:"luv" , age :20},
    {name:"zahind" , age :05},
]

function getUserByAge(students){
    const student = students.reduce((acc,cv) =>{
        if(cv.age in acc){
            acc[cv.age].push(cv)
        }else{
            acc[cv.age] = [cv];
        }
        return acc
    },{})   
    return student
}

console.log(getUserByAge(user))


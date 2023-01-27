console.log("question")
let student = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Pradeep", rollNumber: 32, marks: 60 },
    { name: "Prashant", rollNumber: 33, marks: 28 },
    { name: "sweta", rollNumber: 34, marks: 40 },
    { name: "saroj", rollNumber: 35, marks: 50 },
]

//Que 1- Return only name of studentss in Capital
console.log(student.map((stu) => stu.name.toUpperCase()))

//Que 2- Return only details of those who scored more than 45
console.log(student.filter((stu) => stu.marks > 45))

//Que 3- Return only details of those who scored more than 45 and rollNumber greather than 31
console.log(student.filter((stu) => stu.marks > 45 && stu.rollNumber > 31))

//Que 4- Sum of marks of all Student
console.log(student.reduce((acc, cv) => {
    acc += cv.marks
    return acc;
}, 0))

//Que 5- Return only names of students who scored more than 45
console.log(student.filter((stu) => stu.marks > 45).map((stu) => stu.name))

//Que 6- Return total marks for students with mark greater than 60 after     20 marks have beed added to those who scored less than 60
console.log(student.filter((stu) => stu.marks < 60).map((stu) => stu.marks + 20).reduce((acc, cv) => acc += cv ))
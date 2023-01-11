console.log("group_item");
// 2. Group items on the basis of age of given array of object
let people = [
    { name: "alice", age: 32 },
    { name: "max", age: 25 },
    { name: "jane", age: 25 }
]

const groupBy = (people) => {
    let newobj = {};
    people.forEach(element => {
        if (!newobj[element.age]) {
            newobj[element.age] = [element]
        } else {
            newobj[element.age].push(element)
        }
    });
    return newobj;
}

console.log(groupBy(people))
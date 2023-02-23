const developers = [
    { name: "Harry", skill: ["JavaScript", "Python"], experiance: "4" },
    { name: "Mark", skill: ["JavaScript", "NodeJS"], experiance: "8" },
    { name: "David", skill: ["Python", "NodeJS"], experiance: "2.5" },
    { name: "lary", skill: ["JavaScript", "NodeJS"], experiance: "3" }
];

function getDevelopers(dev) {
    let result = [];
    for (let i = 0; i < dev.length; i++) {
        if (dev[i].skill.includes("JavaScript") && dev[i].experiance < 5) {
            result.push(dev[i].name)
        }
    }
    return result;
}

console.log(getDevelopers(developers))



const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1));
 // Expected output: Array ["somestring", 42, false]
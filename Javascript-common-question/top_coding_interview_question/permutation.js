console.log("all permutations of a string")
const map ={};
const string = "Hello World";
const array = string.split("");
array.forEach(i => map[i] ? map[i] = map[i] + 1 : map[i] = 1);
console.log(map)
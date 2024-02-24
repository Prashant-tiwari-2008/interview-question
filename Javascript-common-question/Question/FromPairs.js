console.log("Form pais");
// Write a method that returns an object composed of key-value pairs.
//first solution
const formPairs = (array) => {
  const newObje = {};
  for (let i = 0; i < array.length; i++) {
    newObje[array[i][0]] = array[i][1]
  }
  return newObje;
}

//Other solution

const formPairs2 = (array) => {
  const newObje = {};
  for (ele of array) {
    newObje[ele[0]] = ele[1]
  }
  return newObje;
}


// with reduce method
const formPairs1 = (array) => array.reduce((arr, value) => {
  if (Array.isArray(value)) {
    arr[value[0]] = value[1]
  }
  return arr
}, {})

const data = [['a', 1], ['b', 2], ['c', 3]];
console.log(formPairs(data)) // { 'a': 1, 'b': 2 }
console.log(formPairs1(data)) // { 'a': 1, 'b': 2 }
console.log(formPairs2(data)) // { 'a': 1, 'b': 2 }
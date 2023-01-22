let arr1 = ["a", "b", "c", "b"]
let arr2 = ["d", "e", "f"]
let arr3 = ["g", "h", "i"]
let arr4 = [5, 6, 7, 8, 1]
let arr5 = [1,2,3,4,5];
let arr6 = [];

console.log("Concat(arr1,arr2) =>", arr1.concat(arr2, arr3)) // return new Array
console.log("Join(seperator) =>", arr1.join(' and ')) // return new string with seperator with each element
console.log("Slice(start,end) =>", arr1.slice(1, 4)) // return a new array
console.log("Splice Method without refile delete(start,deletecount,item) =>", arr2.splice(1, 2)) //print arr2 and check // chane existing array
console.log("Splice Method with refile delete (start,deletecount,item)=>", arr3.splice(1, 2, 'g')) //print arr3 and check //change existing array
console.log("indexOf Method =>", arr1.indexOf('b'))
console.log("findIndex Method =>", arr5.findIndex((ele) => ele > 3)) //returns the index of the first element in an array that satisfies the condition
console.log("lastIndexOf Method =>", arr1.lastIndexOf('b'))
arr1.forEach((ele) => console.log(ele + 'with each method'))
console.log("every Method =>", arr4.every((ele) => ele > 1))
console.log("Some Method =>", arr4.some((ele) => ele > 7))
console.log("filter Method =>", arr4.filter((ele) => ele > 3))
console.log("map Method =>", arr4.map((ele) => ele * 3))
console.log("reduce Method =>", arr4.reduce((acc, cv) => { return (acc += cv) }, 5))
console.log("pop Method =>", arr4.pop(), arr5.pop()) //return the 
console.log("Push Method =>", arr3.push('aa','cc','xx'), arr3.push('bb')) // return the length of array after push and we can push as many ele as we want
console.log("reverse method =>",arr3.reverse()) // reverse the existing array and return
console.log("unshift method =>",arr1.unshift('x','y','z')) // add the ele in the starting of the array and return the length
console.log("Shift method =>",arr1.shift()) // remove the ele in the starting of the array and return the removed ele
console.log("toString method =>",arr1.toString()) // return the string representing array a1 and its element
console.log("toLocalString method =>",arr1.toLocaleString()) // return the string representing array a1 and its element
console.log("Array.isArray(var) =>", Array.isArray(arr1)) // return true and false
console.log("copyWithIn(target,start,end) =>", arr1.copyWithin(arr1,1,4)) // copies array ele to another position in the arrya. it overwrite the existing value, it does not add
console.log("fill(value,start,end) =>", arr5.fill('test',0,3), arr6.fill('test',0,2)) // fill the array with given value but the length of array alredy greater than end point -> print arr6
console.log("Array.form(value,start,end) =>", Array.from('abcde')) // return array witht the given value
console.log("includes(ele,start) =>", arr1.includes('a',2), arr1.includes('a')) // return boolean value

// Adavance topic
console.log("keys(ele,start) =>", arr1.keys()) // create an arrya iteratir obj
console.log("keys(ele,start) =>", Object.keys(arr1)) // return boolean value
console.log("keys(ele,start) =>", Object.values(arr1)) // return boolean value



// 'hElLo' -> 'HeLlO'

function ConvertCase(string) {
  let temp = '';
  for (let i = 0; i < string.length; i++) {
    let uppercase = string[i].toUpperCase();
    if (string[i] === uppercase) {
      temp += string[i].toLowerCase();
    } else {
      temp += string[i].toUpperCase();
    }
  }
  return temp;
}

console.log(ConvertCase('hElLo'));

//== 2 twoSUm

function twoSum(int, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === int) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(9, [2, 4, 5, 4, 5, 6]));

// best solution
// suboor khan1:10 AM
// const twoSum = (array, target) => {
//      const hastable = {};
//      for ( let i = 0; i < array.length; i++) {
//         let complement = target - array[i];
       
//         if ( hashtable.hasOwnProperty(complement)){
//           return [hashtable[complement], i]
//         }
 
//         hashtable[array[i]] = i;   
//      };
     
//      return null;
// };

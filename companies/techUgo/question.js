
// TWO SUM WITH SINGLE LOOP
const randomArr = [5,1,2,3,6,5,4]
const targetSum = 5
// //res = [[2,3],[1,4]]

function sumNumber(array, target){
  let leftIndex = 0
  let rightIndex = array.length - 1
  let resultArray = [];
  
  while(leftIndex < rightIndex){
  	if((array[leftIndex] + array[rightIndex]) == target){
        // resultArray.push([array[leftIndex],array[rightIndex]])
        resultArray  = [...resultArray,[array[leftIndex],array[rightIndex]]]
    }
    rightIndex--;
  }
  return resultArray;
}

console.log(sumNumber(randomArr,targetSum))

//average of number
let average  = randomArr.reduce((acc,cv,index,randomArr) =>{
    acc +=cv
    if(index == randomArr.length-1){
        return (acc/randomArr.length-1)
    }
},0) 

console.log(average);
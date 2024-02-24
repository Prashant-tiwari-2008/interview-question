Question1- 
/* interface ILinkList{
  data:string | number,
  memmoryLocation : string | number
}

interface mylinklist{
  
}
 */

let arr = [1,2, [3, [4, [5, [7]]]]]
function getSumOfArray(randomArray : string | number | boolean){
	if(Array.isArray(randomArray)){
    return isArray(randomArray);
  }else{
  	console.log('invalid')
  }
}

function isArray(randomArray){
let total = 0;
 for(ele of randomArray){
    	if(Array.isArray(ele)){
      	total += getSumOfArray(ele) 
      }else{
      total += ele;
      }
    }
    return total
}

console.log(getSumOfArray(arr))
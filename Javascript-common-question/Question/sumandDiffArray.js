// arrayOne = [1,2,3,4,5,6] and arraytwo = [1,2,4,8,3,7,8,9]
// output  commoneNumber = [1,2,3,4] and differenceNumber=[5,6,7,8,9]

const unionAndIntersection = (arrOne, ArrayTwo) => {
   const unionArray = [];
   const intersectionArray = [];
   const thirdArray = [...arrOne, ...ArrayTwo];
   console.log(thirdArray.length);
   for (let i = 0; i < thirdArray.length; i++) {
       if (ArrayTwo.includes(arrayOne[i])) {
           unionArray.push(arrOne[i])
       } else {
           if (!thirdArray.includes(arrayOne[i]))
               intersectionArray.push(thirdArray[i])
       }
   }
   return {
       un: unionArray,
       in: intersectionArray
   }
}

const arrayOne = [1, 2, 3, 4, 5, 6]
const arraytwo = [1, 2, 4, 8, 3, 7, 8, 9]

console.log(unionAndIntersection(arrayOne, arraytwo))

//====>>> with lestime complexcity
const unionAndIntersection1 = (arrOne, arrayTwo) => {
    const unionArray = [];
    const intersectionArray = [];
    let hashOne = {}
    const thirdArray = (arrOne.length - 1) + (arrayTwo.length - 1)
    
    for(ele of arrOne){
        hashOne[ele] = (hashOne[ele] || 0 ) + 1;
    }
    
    for(ele of arrayTwo){
        if(hashOne[ele]){
            intersectionArray.push(ele)
            unionArray.push(ele)
        }else{
            unionArray.push(ele)
        }
    }
    return {intersectionArray,unionArray}
 }
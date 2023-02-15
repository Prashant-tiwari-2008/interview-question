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
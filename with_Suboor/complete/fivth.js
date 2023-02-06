// function curringTest(a) {
//   console.log(a);
//   return function (b) {
//     return curringTest(b);
//   };
// }

const curr = (a) => {
    console.log(a);
    if(a) return curr
}
  
  
curr(1)(2)(3)
  
  // curringTest(1)(2)(3)(4)(5)(6);
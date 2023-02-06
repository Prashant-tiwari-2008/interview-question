const name = 'Prashant tiwari';

function reverse(string) {
  let reverseString = '';
  string = string.split('');
  reverseString = string.reduce((acc,cv,index,arr) =>{
    // acc += arr[string.length-index]
    acc = cv + acc
    return acc;
  },'')
  return reverseString
}

console.log(reverse(name));
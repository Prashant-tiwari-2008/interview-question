const name = 'Prashant tiwari';

function reverseString(str){
    let string = str.split('');
    let result = string.reduce((acc,cv) => { 
        acc = cv + acc;
        return acc;
    },'')
    return result;
}

console.log(reverseString(name))
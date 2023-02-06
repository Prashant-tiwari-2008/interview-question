let string = 'suboor khan';

function changelatter(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i == 0){
        result += str[i].toUpperCase();
    }
    else{
    result += str[i];
    }
  }
  return result;
}

console.log(changelatter(string));
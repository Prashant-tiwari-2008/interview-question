let name = "Pr";

function reverseString(string) {
    let stringArray = string.split('');
    return getlastCharacter(stringArray)
}

function getlastCharacter(stringArray) {
    if (stringArray.length == 0) return '';
    return stringArray.pop() + getlastCharacter(stringArray)
}

console.log(reverseString(name))
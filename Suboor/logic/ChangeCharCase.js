const name = "HelLo" //hELlo;

function changeLaterCase(word) {
    let temp = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i].toUpperCase();
        if (word[i] === char) {
            temp += word[i].toLowerCase();
        }
        else { temp += word[i].toUpperCase(); }
    }
    return temp
}

console.log(changeLaterCase(name))
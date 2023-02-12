let sentence = "hi i am Prashant tiwari"

function reverseWord() {
    let sentenceArray = sentence.split(' ')
    for (let i = 0; i < sentenceArray.length; i++) {
        let str = ''
        for (let j = sentenceArray[i].length - 1; j >= 0; j--) {
            str += sentenceArray[i][j]
        }
        sentenceArray.splice(i,1,str)
    }
    return sentenceArray.join(' ')
}

console.log(reverseWord())
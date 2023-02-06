// care --- race
const strOne = 'care';
const strTwo = 'race';

function annagram(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;
  const hash = {};
  for (let char of strOne) {
    hash[char] = (hash[char] || 0) + 1;
  }
  for (let i = 0; i < strTwo.length; i++) {
    const alphabet = strTwo[i];
    if (alphabet in hash) {
      hash[alphabet]--;
    } else {
      return false;
    }
  }
  for (let char in hash) {
    if (hash[char] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(annagram(strOne, strTwo));
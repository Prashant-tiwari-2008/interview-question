// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
Input: s = "leetcode"
Output: 0

// Example 2:
Input: s1 = "loveleetcode"
Output: 2

// Example 3:
Input: s2 = "aabb"
Output: -1

// not right solution
var firstUniqChar = function (s) {
    let str = s.split('');
    for (let i = 0; i < s.length; i++) {
        str.splice(str.indexOf(s[i]),1)
        if(str.includes(s[i])){

        }else{
            return i;
        }
    }
};

console.log(firstUniqChar(s))
console.log(firstUniqChar(s1))
console.log(firstUniqChar(s2))
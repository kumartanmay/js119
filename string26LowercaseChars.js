/*

You'll be given a string of random characters (numbers, letters, and symbols).

To decode this string into the key we're searching for:

(1) count the number of occurences of each ascii lowercase letter, and

(2) return an ordered string, 26 places long, corresponding to the number of

occurences for each corresponding letter in the alphabet.

  

The string returned should always be 26 characters long, and only count lowercase letters.

You can assume that each lowercase letter will appear a maximum of 9 times in the input str.

*/

  

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');

console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');

console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');

console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');

console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');

console.log(decrypt('1203904942@$2') === '00000000000000000000000000');

console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');

console.log(decrypt('') === '00000000000000000000000000');

/*
Problem
1. From the given string, find the frequency of lowercase alphabets
2. return the frequency of each alphabet as a concatenated string

DS:
Input: string
Output: string


Algo:
1. Initiate an object with lowercase alphabets (in order) as keys and value ZERO assigned to each of them
2. Create an array containing keys of the object
3. Iterate over each character in the given string
    3.1 if the array in step 2 includes the character, increment the value of the corresponding key in the object
4. At the end of iteration, create an array of values from the object
5. Join the elements in the array and return the value
*/


function decrypt(str) {
    let lowerCaseFrequency = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    };
    let alphabets = Object.keys(lowerCaseFrequency);
    for(let i = 0; i < str.length; i++) {
        if (alphabets.includes(str[i])) lowerCaseFrequency[str[i]]++
    }
    
    return Object.values(lowerCaseFrequency).join('');
}
// Study Session 20240724
// Write a function, snakecase, that transforms each word in a sentence to alternate 
// between lower (even index value) and upper (odd index value) cases when the word before or after it  begins with "s". -- Kumar

/*
Problem:
--------
If the word before or after starts with  s,
then Transform the chars in a word to alternate between lower and upper case.

Algo
====
Input: string
Output: transformed string
0. Initiate an empty array to store the transformed string
1. Split the words into an array of words 
2. Iterate through the array of words
    2.1. If the next word starts with an, transform the cases of the word using the helper function
    2.2. If it is last word of the array, check the previous word
        2.2.1 if the prev starts with an s, use the helper function
        2.2.2 Break
    2.3. Concatenate the word to a string and goto step 2
3. Return the transformed string

Helper function to convert the word into a snake case
0. Initiate an empty string to store the transformed string
1. Iterate through each char of the string
    1.1. transform the char at even indices of the string into lowercase
    1.2. transform the char at  odd indices of the string into uppercase
    1.3. Concatenate the char to the string initiated in step 0.
5. Return the transformed word
*/

function snakecase(string) {
    let wordsInString = string.split(' ');
    let transformed = wordsInString.map((word,index) => {
        if (index > 0 && index < (wordsInString.length -1) && 
        (wordsInString[index+1][0] === 's' || wordsInString[index-1][0] === 's')) {
            word = alterCase(word);
        }
        if (index === 0 && wordsInString[index+1] === 's') word = alterCase(word);
        if (index === wordsInString.length - 1 && wordsInString[index-1] === 's') word = alterCase(word);
        return word;
    })
    return transformed.join(' ');
}

function alterCase(word) {
    let charsInWord = word.split('');
    let result = [];
    for (let j = 0 ; j< charsInWord.length; j++) {
        if(j % 2) result.push(charsInWord[j].toUpperCase());
        else result.push(charsInWord[j].toLowerCase());
    }
    return result.join('');
}
// Test cases
console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
console.log(snakecase("apples are sweet")); // "apples aRe sweet"
console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
console.log(snakecase("A quick brown fox")); // "A quick brown fox"
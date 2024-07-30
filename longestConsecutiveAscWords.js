// Write a function called longestConsecutiveAscendingWords that takes a sentence 
// as input and finds all consecutive word  where the succeeding word is longer than the previous -- Kumar

// Test cases

/*
Problem
========
1. Input: String of words separated by whitespace
2. Output: Array of words

Algo
====
1. To iterate over each word, split the string into constituent words
2. Initiate an empty array to store consecutive words, provided
    2.1 the current word is longer than the previous word 
        2.1.1 if length of the array is smaller than that formed by consecutive words, then replace the elements of the array with the current
3. Return the array
    
*/

function longestConsecutiveAscendingWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(/\s+/);
  
  let currentSequence = [];
  let longestSequence = [];

  for (let i = 0; i < words.length; i++) {
    if (i === 0 || words[i].length > words[i-1].length) {
      currentSequence.push(words[i]);
      if (currentSequence.length > longestSequence.length) {
        longestSequence = [...currentSequence];
      }
    } else {
      currentSequence = [words[i]];
    }
  }

  return longestSequence;
}

console.log(longestConsecutiveAscendingWords("The quick brown fox jumps over the lazy dog")); // [ 'The', 'quick' ]
console.log(longestConsecutiveAscendingWords("A journey of a thousand miles begins with a single step")); // [ 'A', 'journey' ]
console.log(longestConsecutiveAscendingWords("Easy come easy go")); // [ 'Easy' ]
console.log(longestConsecutiveAscendingWords("Tiny bird flew over the peaceful countryside")); // [ 'the', 'peaceful', 'countryside' ]


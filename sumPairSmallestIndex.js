// JavaScript File
// 1
// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

//Example:

  

// console.log(sumPairs([4, 3, 2, 3, 4], 6));

// ^-----^ 4 + 2 = 6, indices: 0, 2

// ^-----^ 3 + 3 = 6, indices: 1, 3

// ^-----^ 2 + 4 = 6, indices: 2, 4

// == [4, 2]

  

// Negative numbers and duplicate numbers can and will appear.

  

//Test cases

console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]

console.log(sumPairs([0, 0, -2, 3], 2)); // undefined

console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]

console.log(sumPairs([0, 2, 0], 0)); // [0, 0]

console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]

/*

1. input: an array, a number
2. output: an array

algo:
0. Initiate an empty object
1. Run over each element of the array, one at a time
2. Run another iteration from the next element
3. Compare the sum of the two elements with the single sum value
    3.1 if it is equal assign the values as a array to the index of the second element 
    3.2 Go to step 2
    3.3. If it is end of array, go to step step 1
4. create an array of elements from keys 
    4.1 find the smallest value and return the array assigned to the key
5. If it is an empty object, return undefined

*/

function sumPairs(arr, sum) {
    let resultObj = {};
    let lengthOfArr = arr.length;
    for(let i = 0; i < lengthOfArr; i++) {
        for (let j = i + 1; j < lengthOfArr; j++) {
            if(arr[i] + arr[j] === sum) resultObj[j] = [arr[i], arr[j]]
        }
    }
    
    let resultObjKeys = Object.keys(resultObj);
    let smallestIndex = Math.min(...resultObjKeys);
    if(resultObj.hasOwnProperty(smallestIndex)) return resultObj[smallestIndex];
    return undefined;
}
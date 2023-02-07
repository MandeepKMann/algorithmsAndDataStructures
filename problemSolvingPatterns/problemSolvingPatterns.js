/**
 * WHAT EVEN IS AN ALGORITHM?
 * just a process or set of steps to accomplish a certain task (:
 */

/**
 * How do you improve?
 * 1) DEVISE a plan for solving problems
 * 2) MASTER common problem solving patterns
 */

/**
 * THE PLANS:
 * 1) Understand the problem
 * 2) Explore concrete exmaples
 * 3) Break it down
 * 4) Solve/Simplify
 * 5) Look back and refactor
 */

/**
 * UNDERSTAND THE PROBLEM
 * 1) Can i restate the problem in my own words?
 * 2) what are the inputs that go into the problem?
 * 3) what are the outputs that shuold come from the solution to the problem?
 * 4) Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's ok; it's still worth considering the question at this early stage)
 * 5) How should I label the important pieces of data that are a part of the problem?
 */

/**
 * CONCRETE EXAMPLES
 * 1) Start with simple examples
 * 2) progress to more complex examples
 * 3) explore examples with empty inputs
 * 4) explore examples with invalid inputs
 */

/**
 * BREAK IT DOWN
 * Explicitly write out the steps you need to take
 * This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings befre you dive in and have to worry about details 
 */


/**
 * SOLVE OR SIMPLIFY
 * Solved the problem, and if you can't, solve a simpler problem
 * Instead of making zero progress at all, solve smaller parts of the problem
 * You may gain insight into the more dofficult parts of the problem
 */

/**
 * LOOK BACK AND REFACTOR
 * Talk about what you like and don't like about it
 * how easy is it to understand?
 * ask these types of questions out loud "I think maybe there's a better way of doing this, but I'm not confident I would Google if there was a faster way of doing this, that sort of thing."
 * Refactoring Questions to ask yourself:
 * 1) Can you check the results?
 * 2) Can you derive the results differently? There's rarely one solution to a problem. Is there another way that seems viable?
 * 3) Can you understand it at a glance? How intuitive is your solution? Does it make sense?
 * 4) Can you use the result or method for some other problem?
 * 5) Can you improve the performance of your solution?
 * 6) Can you think of other ways to refactor?
 * 7) How have other people solved this problem?
 */

////////////////////HOW TO MASTER COMMON PROBLEM SOLVING PATTERNS ////////////////////

/**
 * COMMON PROBLEM SOLVING PATTERNS
 * - Frequency Counter
 * - Multiple Pointers
 * - Sliding Window
 * - Divide and Conquer
 * - Dynamic Programming
 * - Greedy Algorithms
 * - Backtracking
 */


/**
 * Frequency Counters
 * - This pattern uses objects or sets to collect values/frequencies of values
 * - This can often avoid the need for nested loops or 0(N^2) operations with arrays/strings
 * - Often used when you're comparing two pieces of data
 */

// Frequency Counter Pattern
// Write a function called same, which accepts two arrays. The function should return true is every value in the array has it's corresponding value squared in the second array. The frequency of the values must be the same.

// O(N^2)
const same = (arr1, arr2) => {
    // check if both arrays are same length, if not it returns FALSE
    if(arr1.length !== arr2.length) {
        return false;
    }
    // iterates through the both arrays. Tries to match a number in the first array to one in the second array but ** 2 (the square of each value). If indexOf cannot find the index it will return -1, meaning it doesn't exist in the second array which makes it return FALSE
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        // removes the number being compared from the array and moves on to the next one
        arr2.splice(correctIndex, 1)
    }
    return true
}

console.log("same", same([1, 2, 3], [4, 1, 9])) //true
console.log("same", same([1, 2, 3], [1, 9])) //false
console.log("same", same([1, 2, 1], [4, 4, 1])) //false (must be same frequency)

// O(N)
const sameRefactored = (arr1, arr2) => {
    // check if both arrays are same length, if not it returns FALSE
    if(arr1.length !== arr2.length) {
        return false;
    }
    // each object will count the frequency of individual values in the arrays as a key:pair value
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // loop over values in the array
    // val is a placeholder, for each val in an array, we're going to add 1 to the requency counter if it's already in there, or initialize it to 1
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1) {
        // Checks if the squared of the value in the first array exists in the second array
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // checks if the values correspond (two 2s and two 4s)
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}
console.log("sameRefactored", sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 25])) // True
console.log("sameRefactored", sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])) //False
console.log("sameRefactored", sameRefactored([1, 2, 3], [4, 1, 9])) //true
console.log("sameRefactored", sameRefactored([1, 2, 3], [1, 9])) //false
console.log("sameRefactored", sameRefactored([1, 2, 1], [4, 4, 1])) //false (must be same frequency)

//Frequency Counter Anagram

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first
 */

const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }    
    for (let key in frequencyCounter1) {
        // checks for same letters
        if(!(key in frequencyCounter2)) {
            return false;
        }
        // checks for the frequency of that letter
        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log("validAnagram", validAnagram(' ', ' ')) //true
console.log("validAnagram", validAnagram('aaz', 'zza')) //false
console.log("validAnagram", validAnagram('cinema', 'iceman')) //true
console.log("validAnagram", validAnagram('rat', 'car')) //false
console.log("validAnagram", validAnagram('awesome', 'awesom')) //false
console.log("validAnagram", validAnagram('qwerty', 'qeywrt')) //true
console.log("validAnagram", validAnagram('texttwisttime', 'timetwisttext')) //true


const validAnagramRefactored = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log("validAnagramRefactored", validAnagramRefactored(' ', ' ')) //true
console.log("validAnagramRefactored", validAnagramRefactored('aaz', 'zza')) //false
console.log("validAnagramRefactored", validAnagramRefactored('cinema', 'iceman')) //true
console.log("validAnagramRefactored", validAnagramRefactored('rat', 'car')) //false
console.log("validAnagramRefactored", validAnagramRefactored('awesome', 'awesom')) //false
console.log("validAnagramRefactored", validAnagramRefactored('qwerty', 'qeywrt')) //true
console.log("validAnagramRefactored", validAnagramRefactored('texttwisttime', 'timetwisttext')) //true

/**
 * Multiple Pointers
 * - Creating POINTERS to values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
 * - VERY efficient for solving problems with minimal space complexity as well
 */

//Write a function called sumZero which accepts a SORTED array of intergers. This function should find the FIRST pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// did this on my own
const sumZero = (arr) => {
    if (arr.length <= 1) {
        return false;
    }
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j <= arr.length; j--) {

            if (arr[i] + arr[j] === 0) {
                newArr.push(arr[i], arr[j])
                return newArr
            } else {
                return undefined;
            }
        }
    }
}

console.log("sumZero", sumZero([-3, -2, -1, 0, 1, 2, 3])) //[-3, 3]
console.log("sumZero", sumZero([-2, 0, 1, 3])) // undefined
console.log("sumZero", sumZero([1, 2, 3])) //undefined

//naive solution
// time cplexity of O(N^2) and space complexity of O(1)
const sumZeroNaive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log("sumZeroNaive", sumZeroNaive([-3, -2, -1, 0, 1, 2, 3])) //[-3, 3]
console.log("sumZeroNaive", sumZeroNaive([-2, 0, 1, 3])) // undefined
console.log("sumZeroNaive", sumZeroNaive([1, 2, 3])) //undefined

// time complexity O(N) and space complecity O(1)
const sumZeroRefactored = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log("sumZeroRefactored", sumZeroRefactored([-4, -3, -2, -1, 0, 1, 2, 3, 10])) //[-3, 3]


// Multiple Pointers: Count Unique Values
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    // first pointer starting at index of 0
    let i = 0;
    // second pointer starting at index of 1
    for(let j = 1; j < arr.length; j++) {
        
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log("countUniqueValues", countUniqueValues([1, 1, 1, 1, 1, 2])) //2
console.log("countUniqueValues", countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) //7
console.log("countUniqueValues", countUniqueValues([])) //0
console.log("countUniqueValues", countUniqueValues([-2, -1, -1, 0, 1])) //4

/**
 * SLIDING WINDOW
 * - This pattern involved creating a window which can either be an array or number from one position to another
 * - depending on a certain condition, the window either increase or closes (and a new window is created)
 * - very usefut for keeping track of a subset of data in an array/string
 */

// Write a function called maxSubarrarySum which accepts an array or integers, and a number called n. The function should calculate the maximum sum of in consecutive elements in the array.

// O(N^2)
const naiveMaxSubarraySum = (array, n) => {
    if (n > array.length) {
        return null;
    }
    // account for arrays with only negative numbers
    let max = -Infinity;
    // less than array length because we always want to sum only n amount of data in the array, no less
    for (let i = 0; i < array.length - n + 1; i++) {
        // stored our sum each time through and compares it to max
        let temp = 0
        for (let j = 0; j < n; j++) {
            // sums up numbers from i to j
            temp += array[i + j];
        }
        //if the temp number is bigger than our max, our temp replaces the max and the loop continues
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log('naiveMaxSubarraySum', naiveMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log('naiveMaxSubarraySum', naiveMaxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log('naiveMaxSubarraySum', naiveMaxSubarraySum ([4,2,1,6],1)) // 6 
console.log('naiveMaxSubarraySum', naiveMaxSubarraySum ([4,2,1,6,2],4)) // 13 
console.log('naiveMaxSubarraySum', naiveMaxSubarraySum([],4)) // null

// Sliding Window Approach O(N)
const maxSubarraySum = (array, n) => {
    let maxSum = 0;
    let tempSum = 0;
    // adds together n amount of data in the array starting from 0
    if (array.length < n) return null;
    for (let i = 0; i < n; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for (let i = n; i < array.length; i++) {
        tempSum = tempSum - array[i - n] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log('maxSubarraySum', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log('maxSubarraySum', maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log('maxSubarraySum', maxSubarraySum ([4,2,1,6], 1)) // 6 
console.log('maxSubarraySum', maxSubarraySum ([4,2,1,6,2], 4)) // 13 
console.log('maxSubarraySum', maxSubarraySum([], 4)) // null
/**
 * TIME COMPLEXITY
 * Big O Shorthands
 * 1) Arithmetic operations are constant
 * 2) Variable assignment is constant
 * 3) Accessing elements in an array (by index) or orbject (by key) is constant
 * 4) In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
 */


// O(n) - Linear
const addUpTo = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// console.log(addUpTo(3))
// console.log(addUpTo(100))

// O(1) - Constant
const addItUpTo = (n) => {
    return n * (n + 1) / 2;
}
// console.log(addItUpTo(3))
// console.log(addItUpTo(100))


// BOTH algorithms above to the same thing, the second one being faster

// Checking time performance of algorithm

// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// var t1 = performance.now();
// addItUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// speed measurements with time MAY NOT be precise enough (Can differ due to machines, sometimes the same machine has different times etc. and SOOOO we use BIG O!!!!)

// O(n)
const countUpandDown = (n) => {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}
// countUpandDown(10)

// O(n^2)- Quadratic
const printAllPairs = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log (i, j);
        }
    }
}
// printAllPairs(5)

//  O(n)
const logAtLeastFive = (n) => {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// logAtLeastFive(1)
// logAtLeastFive(30)

//  O(1)
const logAtMostFive = (n) => {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// logAtMostFive(2)
// logAtMostFive(10)

/**
 * O(log n)
 * 
 */




/*********************************************************************************************************************************************************************************
 * SPACE COMPLEXITY
 * 
 * Rules of Thumb:
 * 1) Most primites (booleans, numbers, undefines, null) are constant space
 * 2) String require 0(n) space (where n is the string length)
 * 3) Reference types are generallt O(n), where n is the lenght (for arrays) or the number of keys (for objects)
 * 
 */

const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// The above example only has two variables (total and i), it does not matter what the array is, meaning that they take up a constant space, O(1) space because that always remains the same no matter the size of the input

const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.lenght; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
// The above example, the newArr and I takes up 1 constant space each, but THEN the creation of the new array is dependent on the size of the size of the arr variables THEREFORE O(n) space!


// Big O of Objects
/**
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Access - O(1)
 */

// Big O of Object Methods
/**
 * Object.keys - O(N)
 * Object.values - O(N)
 * Object.entries - O(N)
 * hasOwnProperty - O(1)
 */

// Big O of Arrays
/**
 * Insertion - it depends
 *  - Insertion at the END of an array is O(1) because it just adds on the item at the end and gives it the next index number (push)
 *  - Insertion at the BEGINNING of an array is O(N) because it has to reindex every element of the array (shift)
 * Removal - it depends
 *  - Removal at the END of an array is O(1) because it just adds on the item at the end and gives it the next index number (pop)
 *  - Removal at the BEGINNING of an array is O(N) because it has to reindex every element of the array (unshift)
 * Seaching - O(N)
 * Access - O(1)
 */

// Big O of Array Operations
/**
 * push - O(1) - adding data to the end of an array
 * pop - O(1) - removing data from the end of an array
 * shift - O(N) - Inserting data to the begining of an array
 * unshift - O(N) - Removing data from the begining of an array
 * concat - O(N) - Merges multiple arrays, returning a new array without changing the existing arrays
 * slice - O(N) - returns a copy of a portion of an array into a new array selected from beginning of the array to the end without including the end. The original array is not modified.
 * splice - O(N) - changes the content of an array by removing existing elements and/or adding new elements
 * sort - O(N * log N) - the time it takes to sort an array is larger than just o of n. We have to make comparisons. We have to move things around.
 * forEach/map/filter/reduce/etc. - O(N) - looping over each element so as the size of the array grows so does the time it takes to iterate over it
 */
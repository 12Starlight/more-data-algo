/*
Sorted Squared Array

Explanation:

Write a function that takes in a non-emmpty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.


*/

/*
11/05/2021
Time Complexity: O(nlog(n)) time : O(n) space


Concept:

Iterate through the array once and square each iterated number. Then push that
squared value into a new array and return that array sorted.


Sudo:

Initalize an empty array.
Iterate through the input array.
  Square each iterated value.
  Insert the squared value into the intialized array.

Return the initialized array sorted.


Edge Case:

If no numbers are in the array, the empty array itself is returned.

*/

// Sorted Squared Array
// Inputs : array
// Edge : return []

const sortedSqArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sortedSquaredArrayLog = (array) => {
  const sorted = [];

  for (const num of array) {
    const squared = Math.pow(num, 2);
    sorted.push(squared);
  }

  console.log("\n\nSorted Squared ArrayLog : O(nlog(n)) time complexity: O(n) space complexity\n")
  return sorted;
}

console.log(sortedSquaredArrayLog(sortedSqArr));


/*
11/06/2021
Solution: My version
Time Complexity: O(n) time : O(n) space


Concept:

Iterate through the input array and compare values at the beginning of the
array and at the end of the array using pointers. Then take the bigger value of
the two and square it. Then insert it into a separate array. Repeat this process 
inserting the next squared value before the previous one in the sorted array.
Once all the values have been inserted, return the sorted squared array.


Sudo:
Create an array using a constructor, specifying the length and filling it with
0's.
Create start pointer and set it to 0.
Create end pointer and set it to the array length - 1 to account for the
indexing difference.
Create a pointer for the sorted array created above and set it to the sorted 
length - 1 to account for the indexing difference.

Create while loop with the condition that the sortedPointer is not equal to -1
  Create a condition that checks the absolute value of the first value in the
  input array to see if, it is bigger than the absolute value of the last value
  in the input array.
    If true, square the first value and set the sorted array at the sorted 
    pointer index equal to the squared value.
    Increment the start pointer by one.
  Create an if else condition that checks the absolute value of the first value
  in the input array to see if, it is smaller than the absolute value of the
  last value in the input array.
    If true, square the last value and set the sorted array at the sorted 
    pointer index equal to the squared value.
    Decrement the end value by one.
  Create an else condition that says whether the absolute value of the first
  value in the input array is equal to the absolute value of the last value in
  the input array.
    If true, square the first value and set the sorted array at the sorted
    pionter index equal to the squared value.
    Increment the start value by one.

  Decrement the sorted pointer by one.

Return the sorted array.


Edge Case:

The input array could contain 0 or negative values and the input array must be
sorted previously.

*/

// Sorted Squared Array
// Inputs : array
// Edge : May include 0's or negative values

// const arrSortedSquaredArray = [-1, -2, -3, -4, 0, 1, 2, 3, 4];
const arrSortedSquaredArray = [-4, -3, -2, 1, 0, 1, 2, 3, 4];

const sortedSquaredArray = (array) => {
  let sorted = new Array(array.length).fill(0);
  let start = 0;
  let end = array.length - 1;
  let sortedPointer = sorted.length - 1;

  while (sortedPointer !== -1) {
    if (Math.abs(array[start]) > Math.abs(array[end])) {
      sorted[sortedPointer] = Math.pow(array[start], 2);
      start++;
    } else if (Math.abs(array[start]) < Math.abs(array[end])) {
      sorted[sortedPointer] = Math.pow(array[end], 2);
      end--;
    } else {
      sorted[sortedPointer] = Math.pow(array[start], 2);
      start++;
    }

    sortedPointer--;
  }

  console.log("\n\nSorted Squared Array : O(n) time complexity: O(n) space complexity\n")
  return sorted;
}

// Test
console.log(sortedSquaredArray(arrSortedSquaredArray));
